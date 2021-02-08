import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite';
import * as global from '../../common/agentconstans'
declare const Buffer;

/*
  Generated class for the DbmanagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbmanagerProvider {

  myDatabase: SQLiteObject;
  createTableList: Array<SqliteDBDto> = [];

  private dbConfig: SQLiteDatabaseConfig = {
    name: 'gary.db',
    location: 'default'
  };

  constructor(public sqlite: SQLite) {}

  public connectDB() {
    return new Promise((resolve, reject) => {
      if(!this.myDatabase) {
        this.sqlite.create(this.dbConfig).then((db: SQLiteObject) => {
          this.myDatabase = db;
          console.info("save database update");
          this.createTable(db);
          resolve(db);
        }, (error) => {
          console.log("ERROR: ", error);
          reject();
        });
      }else {
        resolve(this.myDatabase);
      }
    });
  }

  createTable(db:SQLiteObject) {

    // create CreditCardInfo table
    let creditCardInfo: string = "CREATE TABLE IF NOT EXISTS CreditCardInfo (";
    creditCardInfo = creditCardInfo + "Id INTEGER NOT NULL,";
    creditCardInfo = creditCardInfo + "BankName  varchar(255) NOT NULL,";
    creditCardInfo = creditCardInfo + "CardName  varchar(255) NOT NULL,";
    creditCardInfo = creditCardInfo + "CardNumber  varchar(20) NOT NULL,";
    creditCardInfo = creditCardInfo + "BillDate  varchar(255) ,";
    creditCardInfo = creditCardInfo + "PayDate  varchar(255) ,";
    creditCardInfo = creditCardInfo + "AnnualFeeDueDate  varchar(255) ,";
    creditCardInfo = creditCardInfo + "AnnualFeeStatus  int(10) NOT NULL,";
    creditCardInfo = creditCardInfo + "AnnualFeeCondition  varchar(255) NOT NULL,";
    creditCardInfo = creditCardInfo + "AnnualFeeComment  varchar(255) NULL,";
    creditCardInfo = creditCardInfo + "CustomerServiceTel  varchar(50) NULL,";
    creditCardInfo = creditCardInfo + "PRIMARY KEY (Id ASC))"; 
    this.createTableList.push({sql: creditCardInfo,params: []});

    //UserInfo table
    let userInfoSQL: string = "CREATE TABLE IF NOT EXISTS UserInfo (Id INTEGER NOT NULL, UserAccount TEXT, Password TEXT, UserName TEXT, PRIMARY KEY (Id ASC))"; 
    this.createTableList.push({sql: userInfoSQL,params: []});

    //MortgageHistory table
    let mortgageHistorySQL: string = "CREATE TABLE IF NOT EXISTS MortgageHistory (Id INTEGER NOT NULL, UserId INTEGER NOT NULL, District TEXT, Neighbourhood TEXT, Area TEXT, PRIMARY KEY (Id ASC))"; 
    this.createTableList.push({sql: mortgageHistorySQL,params: []});

    this.createTableList.forEach((table: SqliteDBDto) => {
      this.executeSQLByParam(table, db);
    });
  }


  public executeSQLByParam(table: SqliteDBDto, db: SQLiteObject) {
    if(table.params.length > 0) {
      db.executeSql(table.sql, table.params);
    }else {
      db.executeSql(table.sql);
    }
  }


  public exportDB() {
    let binaryArray = global.SQLObj.db.export();
    let buffer = new Buffer(binaryArray);
    let blob = new Blob([buffer]);
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "data.db";
    a.onclick = function () {
      setTimeout(function () {
        window.URL.revokeObjectURL(a.href);
      }, 1500);
    };
    a.click();
  }


  public insertCreditCardInfo(params): Promise<any> {
    let SQL = "INSERT OR REPLACE INTO CreditCardInfo (";
    SQL = SQL + "BankName,";
    SQL = SQL + "CardName,";
    SQL = SQL + "CardNumber,";
    SQL = SQL + "BillDate,";
    SQL = SQL + "PayDate,";
    SQL = SQL + "AnnualFeeDueDate,";
    SQL = SQL + "AnnualFeeStatus,";
    SQL = SQL + "AnnualFeeCondition,";
    SQL = SQL + "AnnualFeeComment,";
    SQL = SQL + "CustomerServiceTel";
    SQL = SQL + ") VALUES (?,?,?,?,?,?,?,?,?,?)"; 

    let promise = new Promise((resolve) => {
      let paramArray = [
        params.bankName, 
        params.cardName, 
        params.cardNumber, 
        params.billDate, 
        params.payDate, 
        params.annualFeeDueDate, 
        params.annualFeeStatus, 
        params.annualFeeCondition, 
        params.annualFeeComment, 
        params.customerServiceTel, 
      ]
      this.myDatabase.executeSql(SQL, paramArray).then((data) => {
        resolve(data);
      }).catch(e => {
        console.log(e);
      });
    });
    return promise;
  }


  public queryAllTableInfo(tableName: String, condition: any): Promise<any> {
    let paramsArray = [];
    let SQL = "SELECT * FROM " + tableName;

    if(condition != null) {
      let conditionString = '';
      for(let key in condition) {
        conditionString += " " + key + " = ? AND";
        paramsArray.push(condition[key]);
      }
      conditionString = conditionString.substring(0,conditionString.lastIndexOf("AND")); // 取两个字符位置之间的string
      SQL += " WHERE " + conditionString;
    }

    return new Promise((resolve) => {
      this.myDatabase.executeSql(SQL, paramsArray).then((data) => {
        resolve(data)
      }).catch(e => {
        console.log(e);
      });
    });
  }


  public insertTableInfo(tableName: String, params: any) {
    let keyString = '';
    let valueString = '';
    let paramArray = [];

    for(var key in params) {
      keyString += key + ",";
      valueString += "?, ";
      paramArray.push(params[key]);
    }

    keyString = keyString.substring(0,keyString.lastIndexOf(",")); // 取两个字符位置之间的string
    valueString = valueString.substring(0,valueString.lastIndexOf(","));
    let SQL = "INSERT OR REPLACE INTO " + tableName + " (" + keyString + ") VALUES (" + valueString + ")";

    let promise = new Promise((resolve) => {
      this.myDatabase.executeSql(SQL, paramArray).then((data) => {
        resolve(data);
      }).catch(e => {
        console.log(e);
      });
    });

    return promise;
  }

  public updateTableInfo(tableName: String, params: any, condition: any) {
    let valueString = '';
    let conditionString = '';
    let paramArray = [];

    for(var keyP in params) {
      valueString += keyP + " = ?,";
      paramArray.push(params[keyP]);
    }
    
    for(var keyC in condition) {
      conditionString += " " + keyC + " = ? AND";
      paramArray.push(condition[keyC]);
    }

    valueString = valueString.substring(0,valueString.lastIndexOf(",")); // 取两个字符位置之间的string
    conditionString = conditionString.substring(0,conditionString.lastIndexOf("AND"));
    let SQL = "UPDATE " + tableName + " SET " + valueString + " WHERE " + conditionString;

    let promise = new Promise((resolve) => {
      this.myDatabase.executeSql(SQL, paramArray).then((data) => {
        resolve(data);
      }).catch(e => {
        console.log(e);
      });
    });

    return promise;
  }


  public deleteById(tableName: String, rowId: Number): Promise<any> {
    let SQL = "DELETE FROM " + tableName + " WHERE Id = ?";
    let promise = new Promise((resolve) => {
      this.myDatabase.executeSql(SQL, [rowId]).then((data) => {
        resolve(data);
      }).catch(e => {
        console.log(e);
      });
    });
    return promise;
  }

}
