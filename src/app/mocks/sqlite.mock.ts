import { SQLite, SQLiteDatabaseConfig } from '@ionic-native/sqlite';
import * as global from '../../common/agentconstans'; //自定义的一个常量，便于以后调用
import * as initSqlJs from "sql.js";
import { SqlJs } from "sql.js/module";
import { ENV } from "@env/environment";

// 此文件运行在app.component.ts之前
export function sqliteFactory(){
  if (false) {
    return new SQLite();
  }else {
    return new SQLiteMock();
  }
}

class SQLiteMock {

  public create(_config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    var config = {
      locateFile:_filename => 'assets/sql-wasm.wasm'
    }

    return initSqlJs(config).then(function(SQL) {

      // save db data to local storage when running on brower
      var storedDb = localStorage.getItem('database');
      if (storedDb) {
        var db;
        var arr; 
        arr = storedDb.split(',');
        db = new SQL.Database(arr);
      } else {
        db = new SQL.Database();
      }
      global.SQLObj.db = db;
      return(new SQLiteObject(db));
    });
  }
}

class SQLiteObject {

  _objectInstance: SqlJs.Database;
  
  constructor(_objectInstance: SqlJs.Database) {
    this._objectInstance = _objectInstance;
  };
  
  executeSql(statement: string, params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if(params && params.length){
          for(var i=0;i<params.length;i++){
            if(params[i] === undefined){
              params[i] = "";
            }
          }
        }
        var stmt: SqlJs.Statement = this._objectInstance.prepare(statement, params);
        var rows: Array<any> = [];

        while (stmt.step()) {
          var row = stmt.getAsObject();
          rows.push(row)
        }

        var payload = {
          rows: {
            item: function (i) {
              return rows[i];
            },
            length: rows.length
          },
          rowsAffected: this._objectInstance.getRowsModified() || 0,
          raw: rows
        };

        // prevent db data missing on brower when freshing the page
        var arr: ArrayBuffer = this._objectInstance.export();
        localStorage.setItem('database', String(arr));

        resolve(payload);
      } catch (e) {
        reject(e);
      }
    });
  }; 
}