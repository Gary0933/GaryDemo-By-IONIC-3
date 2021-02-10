import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from '../providers/common/common';

// SQLite DB requirment
import { SQLite } from '@ionic-native/sqlite';
import { DbmanagerProvider } from '../providers/dbmanager/dbmanager';
import { sqliteFactory } from '../app/mocks/sqlite.mock';

// 国际化 requirment
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from "@angular/common/http";

// 获取设备语言 requirment
import { Globalization } from '@ionic-native/globalization'; // 指定版本4.XX.X
import { GlobalizationProvider } from '../providers/globalization/globalization'; // 自定应调用的service

// 时间日期控件
import { DatePicker } from '@ionic-native/date-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { CreditcardPage } from '../pages/creditcardmodule/creditcard/creditcard';
import { AddcreditcardPage } from '../pages/creditcardmodule/addcreditcard/addcreditcard';
import { EditcreditcardPage } from '../pages/creditcardmodule/editcreditcard/editcreditcard';



// use for translateloader
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    CreditcardPage,
    AddcreditcardPage,
    EditcreditcardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    CreditcardPage,
    AddcreditcardPage,
    EditcreditcardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: SQLite, useFactory: sqliteFactory},
    DbmanagerProvider,
    Globalization,
    GlobalizationProvider,
    CommonProvider,
    DatePicker
  ]
})



export class AppModule {}
