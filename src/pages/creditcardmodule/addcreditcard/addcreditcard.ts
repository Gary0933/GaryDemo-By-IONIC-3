import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DbmanagerProvider } from '../../../providers/dbmanager/dbmanager';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AddcreditcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcreditcard',
  templateUrl: 'addcreditcard.html',
})
export class AddcreditcardPage {

  bankListTitle = {
    title: 'Please select',
  };
  bankList = [
    {name:"Gong Shang Bank"},
    {name:"Jiao Tong Bank"},
    {name:"Zhao Shang Bank"},
    {name:"Min Sheng Bank"}
  ];
  selectedBankName = '';
  editCardName = '';
  editCardNum = '';
  editAFCondition = '';
  AFDone = false;

  submitFlag = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public dbManager: DbmanagerProvider, 
    public events: Events, 
    public toastCtrl: ToastController
  ) {
    this.submitFlag = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcreditcardPage');
  }

  submitCreditCardInfo() {
    let thisArea = this;
    if(this.selectedBankName == '' || this.editCardName == '' || this.editCardNum == '' || this.editAFCondition == '') {
      alert("Please fill all item");
    }else {
      let params = {
        'BankName': this.selectedBankName,
        'CardName': this.editCardName,
        'CardNumber': this.editCardNum,
        'AnnualFeeStatus': this.AFDone ? 1 : 0,
        'AnnualFeeCondition': this.editAFCondition,
      }

      this.dbManager.insertTableInfo("CreditCardInfo", params).then(function(data: any) {
        thisArea.submitFlag = true;
        // 提交完数据，通过event来发布数据有更新的事件，这时候在展示数据的页面如果接收到这个事件，会更新数据
        thisArea.events.publish("reloadCreditCardInfo"); 
        //显示提交成功的提示
        thisArea.toastCtrl.create({
          message: "SubmitSubmit Successfully",
          duration: 2000,
          position: "middle",
          cssClass: 'myToastStyle', //app.scss里的自定义类
        }).present();
      });
    }
  }

}
