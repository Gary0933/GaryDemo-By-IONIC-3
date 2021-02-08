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

    let defaultLanguage = 'en';
    return this.getDeviceLanguage() .then((res) => { // language code like 'zh-CN', 'ko-KR'
      let languageSplitArray = res.value.toLowerCase().split('-');
      let mainLanguageCode = languageSplitArray[0];
      let subLanguageCode = languageSplitArray[languageSplitArray.length - 1];

      let setLanguageCode = mainLanguageCode;

      // 如果一个国家需要多种语言，需要使用主码和次码组合
      if (mainLanguageCode = 'zh') {
        if (subLanguageCode == 'tw') {
          setLanguageCode = 'zh-tw';
        } 
      }

      this.translate.setDefaultLang(setLanguageCode);
      return Promise.resolve();
    }).catch((e) => {
      console.log(e);
      this.translate.setDefaultLang(defaultLanguage);
    });
  }

  private getDeviceLanguage(): Promise<{ value: string }> {
    if (this.commonService.isCordova()) { // 真机运行的情况
      return this.globalization.getPreferredLanguage();
    } else { // 浏览器运行的情况
      return Promise.resolve({
        value: navigator.language,
      });
    }
  }

}
