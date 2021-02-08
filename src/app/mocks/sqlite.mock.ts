import { SQLite, SQLiteDatabaseConfig } from '@ionic-native/sqlite';
import * as global from '../../common/agentconstans'; //自定义的一个常量，便于以后调用
import { Platform } from 'ionic-angular';
declare var SQL;

// 此文件运行在app.component.ts之前
export function sqliteFactory(){
  // 判断SQLite是否是在真机上运行，如果是在真机上就使用默认插件，如果是浏览器就使用自定义的mock
  if (new Platform().is('cordova')) {
    return new SQLite();
  }else {
    return new SQLiteMock();
  }
}

class SQLiteMock {

  public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    var db;
    console.log(config);

    //如果缓存里有保存的db数据，根据已存在的数据创建db
    var storedDb = localStorage.getItem("database");
    if (storedDb) {
      var arr = storedDb.split(',');
      db = new SQL.Database(arr);
    }else {
      db = new SQL.Database();
    }

    global.SQLObj.db = db;

    return new Promise((resolve) => {
      resolve(new SQLiteObject(db));
    });
  }
}

class SQLiteObject {

  _objectInstance: any;
  
  constructor(_objectInstance: any) {
    this._objectInstance = _objectInstance;
  };
  
  executeSql(statement: string, params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        var st = this._objectInstance.prepare(statement, params);
        var rows: Array<any> = [];

        while (st.step()) {
          var row = st.getAsObject();
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
          insertId: this._objectInstance.insertId || void 0
        };

        //如果是浏览器测试的话，每次db操作后都将db数据保存在缓存里，防止每次重启app，db数据都丢失
        var arr : ArrayBuffer = this._objectInstance.export();
        localStorage.setItem("database", String(arr));
        resolve(payload);
      } catch (e) {
        reject(e);
      }
    });
  }; 
}