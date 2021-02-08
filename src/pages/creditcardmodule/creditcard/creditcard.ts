import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddcreditcardPage } from '../addcreditcard/addcreditcard';
import { DbmanagerProvider } from '../../../providers/dbmanager/dbmanager';
import { Events } from 'ionic-angular';
import { EditcreditcardPage } from '../editcreditcard/editcreditcard';

/**
 * Generated class for the CreditcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditcard',
  templateUrl: 'creditcard.html',
})
export class CreditcardPage {

  creditCardInfoList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbManager: DbmanagerProvider, public events: Events) {
  }

  ionViewDidLoad() { //每次加载页面都会执行
    console.log('ionViewDidLoad CreditcardPage');
    this.getCreditCardInfo();
    //如果接收到有数据更新的events事件，会重新查询数据库并更新数据
    this.events.subscribe("reloadCreditCardInfo", () => {
      console.log('test haha');
      this.getCreditCardInfo();
    });

  }

  addCreditCardInfo() {
    this.navCtrl.push(AddcreditcardPage);
  }

  getCreditCardInfo() {
    let thisArea = this;
    let tempArray = [];
    this.dbManager.queryAllTableInfo("CreditCardInfo", null).then(function(data: any) {
      let dataLength = data.rows.length;
      if (dataLength > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          let singleData = {
            'isShow': false,
            'id': data.rows.item(i).Id,
            'bankName': data.rows.item(i).BankName,
            'cardName': data.rows.item(i).CardName,
            'cardNumber': data.rows.item(i).CardNumber,
            'billDate': data.rows.item(i).BillDate,
            'payDate': data.rows.item(i).PayDate,
            'annualFeeDueDate': data.rows.item(i).AnnualFeeDueDate,
            'annualFeeStatus': data.rows.item(i).AnnualFeeStatus == 1 ? 'Done' : 'Pending',
            'annualFeeCondition': data.rows.item(i).AnnualFeeCondition,
            'annualFeeComment': data.rows.item(i).AnnualFeeComment,
            'customerServiceTel': data.rows.item(i).CustomerServiceTel
          };
          tempArray.push(singleData);
        }
        thisArea.creditCardInfoList = tempArray;
      }
      
    });
  }

  isShow(index) {
    this.creditCardInfoList[index].isShow = !this.creditCardInfoList[index].isShow;
  }


  editRow(rowId: Number) {
    this.navCtrl.push(EditcreditcardPage, {name: rowId});
  }


  deleteRow(rowId: Number) {
    let thisArea = this;
    this.dbManager.deleteById("CreditCardInfo", rowId).then(function(data: any) { //删除数据库里对应的row
      // 将list里删除的row去掉
      let templeList = [];
      for(var i = 0; i < thisArea.creditCardInfoList.length; i++) {
        if(thisArea.creditCardInfoList[i].id != rowId) {
          templeList.push(thisArea.creditCardInfoList[i]);
        }
      }
      thisArea.creditCardInfoList = templeList;
    });
  }

}
