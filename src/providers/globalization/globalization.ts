import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { CommonProvider } from '../common/common';

/*
  Generated class for the GlobalizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalizationProvider {

  constructor(
    public http: HttpClient,
    public translate: TranslateService, 
    public globalization: Globalization,
    public commonService: CommonProvider
  ) {
    console.log('Hello GlobalizationProvider Provider');
  }

  public setTranslationEnvironment() {
    let defaultLauguage = 'en';
    if (this.commonService.isCordova()) {
      this.globalization.getPreferredLanguage().then((res) => {
        defaultLauguage = res.value;
      });
    } else {
      defaultLauguage = navigator.language;
    }
    //let defaultLauguageArray = defaultLauguage.toLowerCase().split('-');
    //return defaultLauguageArray[0];
    return defaultLauguage;
  }

}
