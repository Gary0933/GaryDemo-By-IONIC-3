import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbmanagerProvider } from '../../providers/dbmanager/dbmanager';
import { GlobalizationProvider } from '../../providers/globalization/globalization'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public dbManager: DbmanagerProvider, public test: GlobalizationProvider) {}

  downloadDB() {
    this.dbManager.exportDB();
  }

  insertTest() {

    let params = {
        'bankName': 'Min Sheng Bank',
        'cardName': 'gold card',
        'cardNumber': '1234',
        'billDate': '11',
        'payDate': '16',
        'annualFeeDueDate': '12-27',
        'annualFeeStatus': 0,
        'annualFeeCondition': 'test',
        'annualFeeComment': 'aaa',
        'customerServiceTel': '888'
    }

    this.dbManager.insertCreditCardInfo(params);
  }

  clearDbLocalStorage() {
    localStorage.removeItem("database");
  }

  getLocalLanguage() {
    alert(this.test.setTranslationEnvironment());
  }

}
