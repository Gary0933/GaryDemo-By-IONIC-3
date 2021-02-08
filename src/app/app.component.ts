import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from '../providers/common/common';
import * as global from '../common/agentconstans';

import { DbmanagerProvider } from '../providers/dbmanager/dbmanager' //数据库操作服务
import { TranslateService } from '@ngx-translate/core';

import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { CreditcardPage } from '../pages/creditcardmodule/creditcard/creditcard';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage; // APP初始显示的页面

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public dbManager: DbmanagerProvider,
    public translate: TranslateService,
    public commonService: CommonProvider
  ) {
    this.initializeApp();

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    // menu页面显示的list
    this.pages = [
      { title: 'Home', icon: 'home', component: TabsPage },
      { title: 'Credit Card', icon: 'card', component: CreditcardPage },
      { title: 'List', icon: 'heart', component: ListPage }
    ];

  }

  initializeApp() {
    
    global.AppStatus.isCordovaFlag = this.commonService.isCordova(); // 判断是不是真机运行，不能放在platform.ready()之后运行，因为要在页面加载之前运行

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.dbManager.connectDB();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}