import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbmanagerProvider } from '../../providers/dbmanager/dbmanager';
import { GlobalizationProvider } from '../../providers/globalization/globalization';
import { DatePicker, DatePickerOptions } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tDate;
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(
    public navCtrl: NavController, 
    public dbManager: DbmanagerProvider, 
    public test: GlobalizationProvider,
    private datePicker: DatePicker
  ) {}

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

  getDate() {
    let options : DatePickerOptions = {
      date: new Date(),
      mode: 'datetime',
      titleText:'请选择日期',
      okText:'选择',
      cancelText: '取消',
      todayText:'今天',
      nowText: '现在',
      is24Hour:true,
      allowOldDates:true,
      doneButtonLabel:'确定',
      minuteInterval:10,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK 
    }
    this.datePicker.show(options).then(
      date => {
        let time = new Date(date.getTime() + 8 * 60 * 60 * 1000).toISOString();
        this.tDate = String(time.substring(0, time.length - 5)).replace('T', ' ')
        //格式时间显示样式
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
