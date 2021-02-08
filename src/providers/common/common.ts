import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(
    public http: HttpClient,
    public platform: Platform
  ) {
    console.log('Hello CommonProvider Provider');
  }

  // 判断是否是真机运行
  public isCordova() {
    let checkResult = false;
    if (this.platform.is('cordova')) {
      checkResult = true;
    }
    return checkResult;
  }

}
