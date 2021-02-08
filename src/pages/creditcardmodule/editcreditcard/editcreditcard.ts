import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DbmanagerProvider } from '../../../providers/dbmanager/dbmanager';
import { Events } from 'ionic-angular';
/**
 * Generated class for the EditcreditcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editcreditcard',
  templateUrl: 'editcreditcard.html',
})
export class EditcreditcardPage {

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

  updateFlag = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public dbManager: DbmanagerProvider, 
    public events: Events, 
    public toastCtrl: ToastController
  ) {
    this.updateFlag = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcreditcardPage');
    this.getSingleCreditCardInfo()
  }

  getSingleCreditCardInfo() {
    let thisArea = this;
    let condition = {
      Id: thisArea.navParams.get('name') // 上个页面跳转是带的参数，通过navParams来获取
    }

    this.dbManager.queryAllTableInfo("CreditCardInfo", condition).then(function(data: any) {
      let dataLength = data.rows.length;
      if (dataLength > 0) {
        thisArea.selectedBankName = data.rows.item(0).BankName;
        thisArea.editCardName = data.rows.item(0).CardName;
        thisArea.editCardNum = data.rows.item(0).CardNumber;
        thisArea.editAFCondition = data.rows.item(0).AnnualFeeCondition;
        thisArea.AFDone = data.rows.item(0).AnnualFeeStatus == 1 ? true : false;
      }
    });
  }

  updateCreditCardInfo() {
    if(this.selectedBankName == '' || this.editCardName == '' || this.editCardNum == '' || this.editAFCondition == '') {
      alert("Please fill all item");
    }else {
      let thisArea = this;
      let params = {
        'BankName': this.selectedBankName,
        'CardName': this.editCardName,
        'CardNumber': this.editCardNum,
        'AnnualFeeStatus': this.AFDone ? 1 : 0,
        'AnnualFeeCondition': this.editAFCondition,
      }
      let condition = {
        'Id': this.navParams.get('name')
      }

      this.dbManager.updateTableInfo("CreditCardInfo", params, condition).then(function(data: any){
        // 提交后设置按钮不可用，防止重复提交
        thisArea.updateFlag = true; 
        // 提交完数据，通过event来发布数据有更新的事件，这时候在展示数据的页面如果接收到这个事件，会更新数据
        thisArea.events.publish("reloadCreditCardInfo"); 
        thisArea.toastCtrl.create({
          message: "Update Successfully",
          duration: 2000,
          position: "middle",
          cssClass: 'myToastStyle', //app.scss里的自定义类
        }).present();
      });
    }  
  }

}
