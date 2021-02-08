webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SQLObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStatus; });
var SQLObj = new Object;
var AppStatus = {
    isCordovaFlag: true,
};
//# sourceMappingURL=agentconstans.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalizationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the GlobalizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalizationProvider = /** @class */ (function () {
    function GlobalizationProvider(http, translate, globalization, commonService) {
        this.http = http;
        this.translate = translate;
        this.globalization = globalization;
        this.commonService = commonService;
        console.log('Hello GlobalizationProvider Provider');
    }
    GlobalizationProvider.prototype.setTranslationEnvironment = function () {
        var _this = this;
        var defaultLanguage = 'en';
        return this.getDeviceLanguage().then(function (res) {
            var languageSplitArray = res.value.toLowerCase().split('-');
            var mainLanguageCode = languageSplitArray[0];
            var subLanguageCode = languageSplitArray[languageSplitArray.length - 1];
            var setLanguageCode = mainLanguageCode;
            // 如果一个国家需要多种语言，需要使用主码和次码组合
            if (mainLanguageCode = 'zh') {
                if (subLanguageCode == 'tw') {
                    setLanguageCode = 'zh-tw';
                }
            }
            _this.translate.setDefaultLang(setLanguageCode);
            return Promise.resolve();
        }).catch(function (e) {
            console.log(e);
            _this.translate.setDefaultLang(defaultLanguage);
        });
    };
    GlobalizationProvider.prototype.getDeviceLanguage = function () {
        if (this.commonService.isCordova()) {
            return this.globalization.getPreferredLanguage();
        }
        else {
            return Promise.resolve({
                value: navigator.language,
            });
        }
    };
    GlobalizationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_4__common_common__["a" /* CommonProvider */]])
    ], GlobalizationProvider);
    return GlobalizationProvider;
}());

//# sourceMappingURL=globalization.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonProvider = /** @class */ (function () {
    function CommonProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        console.log('Hello CommonProvider Provider');
    }
    // 判断是否是真机运行
    CommonProvider.prototype.isCordova = function () {
        var checkResult = false;
        if (this.platform.is('cordova')) {
            checkResult = true;
        }
        return checkResult;
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcreditcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbmanager_dbmanager__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddcreditcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddcreditcardPage = /** @class */ (function () {
    function AddcreditcardPage(navCtrl, navParams, dbManager, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbManager = dbManager;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.bankListTitle = {
            title: 'Please select',
        };
        this.bankList = [
            { name: "Gong Shang Bank" },
            { name: "Jiao Tong Bank" },
            { name: "Zhao Shang Bank" },
            { name: "Min Sheng Bank" }
        ];
        this.selectedBankName = '';
        this.editCardName = '';
        this.editCardNum = '';
        this.editAFCondition = '';
        this.AFDone = false;
        this.submitFlag = false;
        this.submitFlag = false;
    }
    AddcreditcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcreditcardPage');
    };
    AddcreditcardPage.prototype.submitCreditCardInfo = function () {
        var thisArea = this;
        if (this.selectedBankName == '' || this.editCardName == '' || this.editCardNum == '' || this.editAFCondition == '') {
            alert("Please fill all item");
        }
        else {
            var params = {
                'BankName': this.selectedBankName,
                'CardName': this.editCardName,
                'CardNumber': this.editCardNum,
                'AnnualFeeStatus': this.AFDone ? 1 : 0,
                'AnnualFeeCondition': this.editAFCondition,
            };
            this.dbManager.insertTableInfo("CreditCardInfo", params).then(function (data) {
                thisArea.submitFlag = true;
                // 提交完数据，通过event来发布数据有更新的事件，这时候在展示数据的页面如果接收到这个事件，会更新数据
                thisArea.events.publish("reloadCreditCardInfo");
                //显示提交成功的提示
                thisArea.toastCtrl.create({
                    message: "SubmitSubmit Successfully",
                    duration: 2000,
                    position: "middle",
                    cssClass: 'myToastStyle',
                }).present();
            });
        }
    };
    AddcreditcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcreditcard',template:/*ion-inline-start:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\creditcardmodule\addcreditcard\addcreditcard.html"*/'<!--\n  Generated template for the AddcreditcardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>addcreditcard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background:rgba(194, 207, 207, 0.719);">\n  <ion-card>\n    <ion-card-header>\n      <h2>Please fill in your credicard info</h2>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Bank Name : </ion-label>\n          <ion-select [selectOptions]="bankListTitle" [(ngModel)]="selectedBankName">\n            <ion-option value="{{i.name}}" *ngFor="let i of bankList">{{i.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>Card Name : </ion-label>\n          <ion-input type="text" [(ngModel)]="editCardName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Card Number : </ion-label>\n          <ion-input type="text" [(ngModel)]="editCardNum"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Annual Fee Condition : </ion-label>\n          <ion-input type="text" [(ngModel)]="editAFCondition"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Annual Fee Status : </ion-label>\n          <ion-toggle checked="false" [(ngModel)]="AFDone" ></ion-toggle>\n        </ion-item>\n      </ion-list>\n      <button ion-button full [disabled]="submitFlag" (click)="submitCreditCardInfo()">submit</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\creditcardmodule\addcreditcard\addcreditcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dbmanager_dbmanager__["a" /* DbmanagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AddcreditcardPage);
    return AddcreditcardPage;
}());

//# sourceMappingURL=addcreditcard.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcreditcard_addcreditcard__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbmanager_dbmanager__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editcreditcard_editcreditcard__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CreditcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditcardPage = /** @class */ (function () {
    function CreditcardPage(navCtrl, navParams, dbManager, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbManager = dbManager;
        this.events = events;
        this.creditCardInfoList = [];
    }
    CreditcardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CreditcardPage');
        this.getCreditCardInfo();
        //如果接收到有数据更新的events事件，会重新查询数据库并更新数据
        this.events.subscribe("reloadCreditCardInfo", function () {
            console.log('test haha');
            _this.getCreditCardInfo();
        });
    };
    CreditcardPage.prototype.addCreditCardInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addcreditcard_addcreditcard__["a" /* AddcreditcardPage */]);
    };
    CreditcardPage.prototype.getCreditCardInfo = function () {
        var thisArea = this;
        var tempArray = [];
        this.dbManager.queryAllTableInfo("CreditCardInfo", null).then(function (data) {
            var dataLength = data.rows.length;
            if (dataLength > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    var singleData = {
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
    };
    CreditcardPage.prototype.isShow = function (index) {
        this.creditCardInfoList[index].isShow = !this.creditCardInfoList[index].isShow;
    };
    CreditcardPage.prototype.editRow = function (rowId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editcreditcard_editcreditcard__["a" /* EditcreditcardPage */], { name: rowId });
    };
    CreditcardPage.prototype.deleteRow = function (rowId) {
        var thisArea = this;
        this.dbManager.deleteById("CreditCardInfo", rowId).then(function (data) {
            // 将list里删除的row去掉
            var templeList = [];
            for (var i = 0; i < thisArea.creditCardInfoList.length; i++) {
                if (thisArea.creditCardInfoList[i].id != rowId) {
                    templeList.push(thisArea.creditCardInfoList[i]);
                }
            }
            thisArea.creditCardInfoList = templeList;
        });
    };
    CreditcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creditcard',template:/*ion-inline-start:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\creditcardmodule\creditcard\creditcard.html"*/'<!--\n  Generated template for the CreditcardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Credit Card</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addCreditCardInfo()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding style="background:rgba(194, 207, 207, 0.719);">\n  <ion-card *ngFor="let row of creditCardInfoList; let i = index">\n    <ion-list>\n      <ion-item-sliding>\n        <ion-item>\n          <ion-item (click)="isShow(i)">\n            {{row.bankName}} {{row.cardName}}\n            <ion-icon *ngIf="row.isShow" name="ios-arrow-down" item-right></ion-icon>\n            <ion-icon *ngIf="!row.isShow" name="ios-arrow-forward" item-right></ion-icon>\n          </ion-item>\n    \n          <ion-card *ngIf="row.isShow" style="background:rgba(115, 190, 190, 0.185);">\n            <ion-card-content>\n              <ion-item style="background:rgba(148, 169, 177, 0.719);">\n                Card Number : {{row.cardNumber}}\n              </ion-item>\n              <ion-item style="background:rgba(230, 236, 238, 0.719);">\n                Annual Fee Condition : {{row.annualFeeCondition}}\n              </ion-item>\n              <ion-item style="background:rgba(148, 169, 177, 0.719);">\n                Annual Fee Status : {{row.annualFeeStatus}}\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="editRow(row.id)">\n            <ion-icon name="create"></ion-icon>\n            Edit\n          </button>\n          <button ion-button color="danger" (click)="deleteRow(row.id)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\creditcardmodule\creditcard\creditcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbmanager_dbmanager__["a" /* DbmanagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], CreditcardPage);
    return CreditcardPage;
}());

//# sourceMappingURL=creditcard.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcreditcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbmanager_dbmanager__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditcreditcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditcreditcardPage = /** @class */ (function () {
    function EditcreditcardPage(navCtrl, navParams, dbManager, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbManager = dbManager;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.bankListTitle = {
            title: 'Please select',
        };
        this.bankList = [
            { name: "Gong Shang Bank" },
            { name: "Jiao Tong Bank" },
            { name: "Zhao Shang Bank" },
            { name: "Min Sheng Bank" }
        ];
        this.selectedBankName = '';
        this.editCardName = '';
        this.editCardNum = '';
        this.editAFCondition = '';
        this.AFDone = false;
        this.updateFlag = false;
        this.updateFlag = false;
    }
    EditcreditcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditcreditcardPage');
        this.getSingleCreditCardInfo();
    };
    EditcreditcardPage.prototype.getSingleCreditCardInfo = function () {
        var thisArea = this;
        var condition = {
            Id: thisArea.navParams.get('name') // 上个页面跳转是带的参数，通过navParams来获取
        };
        this.dbManager.queryAllTableInfo("CreditCardInfo", condition).then(function (data) {
            var dataLength = data.rows.length;
            if (dataLength > 0) {
                thisArea.selectedBankName = data.rows.item(0).BankName;
                thisArea.editCardName = data.rows.item(0).CardName;
                thisArea.editCardNum = data.rows.item(0).CardNumber;
                thisArea.editAFCondition = data.rows.item(0).AnnualFeeCondition;
                thisArea.AFDone = data.rows.item(0).AnnualFeeStatus == 1 ? true : false;
            }
        });
    };
    EditcreditcardPage.prototype.updateCreditCardInfo = function () {
        if (this.selectedBankName == '' || this.editCardName == '' || this.editCardNum == '' || this.editAFCondition == '') {
            alert("Please fill all item");
        }
        else {
            var thisArea_1 = this;
            var params = {
                'BankName': this.selectedBankName,
                'CardName': this.editCardName,
                'CardNumber': this.editCardNum,
                'AnnualFeeStatus': this.AFDone ? 1 : 0,
                'AnnualFeeCondition': this.editAFCondition,
            };
            var condition = {
                'Id': this.navParams.get('name')
            };
            this.dbManager.updateTableInfo("CreditCardInfo", params, condition).then(function (data) {
                // 提交后设置按钮不可用，防止重复提交
                thisArea_1.updateFlag = true;
                // 提交完数据，通过event来发布数据有更新的事件，这时候在展示数据的页面如果接收到这个事件，会更新数据
                thisArea_1.events.publish("reloadCreditCardInfo");
                thisArea_1.toastCtrl.create({
                    message: "Update Successfully",
                    duration: 2000,
                    position: "middle",
                    cssClass: 'myToastStyle',
                }).present();
            });
        }
    };
    EditcreditcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editcreditcard',template:/*ion-inline-start:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\creditcardmodule\editcreditcard\editcreditcard.html"*/'<!--\n  Generated template for the EditcreditcardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>editcreditcard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <h2>Please edit in your credicard info</h2>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Bank Name : </ion-label>\n          <ion-select [selectOptions]="bankListTitle" [(ngModel)]="selectedBankName">\n            <ion-option value="{{i.name}}" *ngFor="let i of bankList">{{i.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>Card Name : </ion-label>\n          <ion-input type="text" [(ngModel)]="editCardName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Card Number : </ion-label>\n          <ion-input type="text" [(ngModel)]="editCardNum"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Annual Fee Condition : </ion-label>\n          <ion-input type="text" [(ngModel)]="editAFCondition"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Annual Fee Status : </ion-label>\n          <ion-toggle checked="false" [(ngModel)]="AFDone" ></ion-toggle>\n        </ion-item>\n      </ion-list>\n      <button ion-button full [disabled]="updateFlag" (click)="updateCreditCardInfo()">Update</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\creditcardmodule\editcreditcard\editcreditcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dbmanager_dbmanager__["a" /* DbmanagerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], EditcreditcardPage);
    return EditcreditcardPage;
}());

//# sourceMappingURL=editcreditcard.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\tabs\tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Apply" tabIcon="shuffle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tool" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Me" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/creditcardmodule/addcreditcard/addcreditcard.module": [
		416,
		3
	],
	"../pages/creditcardmodule/creditcard/creditcard.module": [
		417,
		2
	],
	"../pages/creditcardmodule/editcreditcard/editcreditcard.module": [
		418,
		1
	],
	"../pages/tabs/tabs.module": [
		419,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbmanager_dbmanager__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalization_globalization__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dbManager, test) {
        this.navCtrl = navCtrl;
        this.dbManager = dbManager;
        this.test = test;
    }
    HomePage.prototype.downloadDB = function () {
        this.dbManager.exportDB();
    };
    HomePage.prototype.insertTest = function () {
        var params = {
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
        };
        this.dbManager.insertCreditCardInfo(params);
    };
    HomePage.prototype.clearDbLocalStorage = function () {
        localStorage.removeItem("database");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background:rgba(194, 207, 207, 0.719);">\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n  <p>{{ \'test_key\' | translate }}</p>\n\n  <button ion-button danger (click)="downloadDB()" >export DB</button>\n  <button ion-button danger (click)="clearDbLocalStorage()" >Clear DB LocalStorage</button>\n</ion-content>\n'/*ion-inline-end:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dbmanager_dbmanager__["a" /* DbmanagerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_globalization_globalization__["a" /* GlobalizationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(261);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dbmanager_dbmanager__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_mocks_sqlite_mock__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_globalization__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_globalization_globalization__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_list_list__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_creditcardmodule_creditcard_creditcard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_creditcardmodule_addcreditcard_addcreditcard__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_creditcardmodule_editcreditcard_editcreditcard__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// SQLite DB requirment



// 国际化 requirment



// 获取设备语言 requirment
 // 指定版本4.XX.X
 // 自定应调用的service







// use for translateloader
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_creditcardmodule_creditcard_creditcard__["a" /* CreditcardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_creditcardmodule_addcreditcard_addcreditcard__["a" /* AddcreditcardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_creditcardmodule_editcreditcard_editcreditcard__["a" /* EditcreditcardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/creditcardmodule/addcreditcard/addcreditcard.module#AddcreditcardPageModule', name: 'AddcreditcardPage', segment: 'addcreditcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/creditcardmodule/creditcard/creditcard.module#CreditcardPageModule', name: 'CreditcardPage', segment: 'creditcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/creditcardmodule/editcreditcard/editcreditcard.module#EditcreditcardPageModule', name: 'EditcreditcardPage', segment: 'editcreditcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_creditcardmodule_creditcard_creditcard__["a" /* CreditcardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_creditcardmodule_addcreditcard_addcreditcard__["a" /* AddcreditcardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_creditcardmodule_editcreditcard_editcreditcard__["a" /* EditcreditcardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */], useFactory: __WEBPACK_IMPORTED_MODULE_8__app_mocks_sqlite_mock__["a" /* sqliteFactory */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_dbmanager_dbmanager__["a" /* DbmanagerProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_13__providers_globalization_globalization__["a" /* GlobalizationProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sqliteFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_agentconstans__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);

 //自定义的一个常量，便于以后调用

// 此文件运行在app.component.ts之前
function sqliteFactory() {
    // 判断SQLite是否是在真机上运行，如果是在真机上就使用默认插件，如果是浏览器就使用自定义的mock
    if (new __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]().is('cordova')) {
        return new __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */]();
    }
    else {
        return new SQLiteMock();
    }
}
var SQLiteMock = /** @class */ (function () {
    function SQLiteMock() {
    }
    SQLiteMock.prototype.create = function (config) {
        var db;
        console.log(config);
        //如果缓存里有保存的db数据，根据已存在的数据创建db
        var storedDb = localStorage.getItem("database");
        if (storedDb) {
            var arr = storedDb.split(',');
            db = new SQL.Database(arr);
        }
        else {
            db = new SQL.Database();
        }
        __WEBPACK_IMPORTED_MODULE_1__common_agentconstans__["b" /* SQLObj */].db = db;
        return new Promise(function (resolve) {
            resolve(new SQLiteObject(db));
        });
    };
    return SQLiteMock;
}());
var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    ;
    SQLiteObject.prototype.executeSql = function (statement, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var st = _this._objectInstance.prepare(statement, params);
                var rows = [];
                while (st.step()) {
                    var row = st.getAsObject();
                    rows.push(row);
                }
                var payload = {
                    rows: {
                        item: function (i) {
                            return rows[i];
                        },
                        length: rows.length
                    },
                    rowsAffected: _this._objectInstance.getRowsModified() || 0,
                    insertId: _this._objectInstance.insertId || void 0
                };
                //如果是浏览器测试的话，每次db操作后都将db数据保存在缓存里，防止每次重启app，db数据都丢失
                var arr = _this._objectInstance.export();
                localStorage.setItem("database", String(arr));
                resolve(payload);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    ;
    return SQLiteObject;
}());
//# sourceMappingURL=sqlite.mock.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_common__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_agentconstans__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dbmanager_dbmanager__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globalization_globalization__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_creditcardmodule_creditcard_creditcard__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //数据库操作服务




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbManager, setTranslateLanguage, commonService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.dbManager = dbManager;
        this.setTranslateLanguage = setTranslateLanguage;
        this.commonService = commonService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]; // APP初始显示的页面
        this.initializeApp();
        // menu页面显示的list
        this.pages = [
            { title: 'Home', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Credit Card', icon: 'card', component: __WEBPACK_IMPORTED_MODULE_10__pages_creditcardmodule_creditcard_creditcard__["a" /* CreditcardPage */] },
            { title: 'List', icon: 'heart', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.setTranslateLanguage.setTranslationEnvironment().then(function () {
            __WEBPACK_IMPORTED_MODULE_5__common_agentconstans__["a" /* AppStatus */].isCordovaFlag = _this.commonService.isCordova(); // 判断是不是真机运行，不能放在platform.ready()之后运行，因为要在页面加载之前运行
            _this.platform.ready().then(function () {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
                _this.dbManager.connectDB();
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="selected" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-start></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\WorkSpace\Ionic\GaryTool_Git\GaryDemo-By-IONIC-3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_dbmanager_dbmanager__["a" /* DbmanagerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_globalization_globalization__["a" /* GlobalizationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_common__["a" /* CommonProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbmanagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_agentconstans__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DbmanagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbmanagerProvider = /** @class */ (function () {
    function DbmanagerProvider(sqlite) {
        this.sqlite = sqlite;
        this.createTableList = [];
        this.dbConfig = {
            name: 'gary.db',
            location: 'default'
        };
    }
    DbmanagerProvider.prototype.connectDB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.myDatabase) {
                _this.sqlite.create(_this.dbConfig).then(function (db) {
                    _this.myDatabase = db;
                    console.info("save database update");
                    _this.createTable(db);
                    resolve(db);
                }, function (error) {
                    console.log("ERROR: ", error);
                    reject();
                });
            }
            else {
                resolve(_this.myDatabase);
            }
        });
    };
    DbmanagerProvider.prototype.createTable = function (db) {
        var _this = this;
        // create CreditCardInfo table
        var creditCardInfo = "CREATE TABLE IF NOT EXISTS CreditCardInfo (";
        creditCardInfo = creditCardInfo + "Id INTEGER NOT NULL,";
        creditCardInfo = creditCardInfo + "BankName  varchar(255) NOT NULL,";
        creditCardInfo = creditCardInfo + "CardName  varchar(255) NOT NULL,";
        creditCardInfo = creditCardInfo + "CardNumber  varchar(20) NOT NULL,";
        creditCardInfo = creditCardInfo + "BillDate  varchar(255) ,";
        creditCardInfo = creditCardInfo + "PayDate  varchar(255) ,";
        creditCardInfo = creditCardInfo + "AnnualFeeDueDate  varchar(255) ,";
        creditCardInfo = creditCardInfo + "AnnualFeeStatus  int(10) NOT NULL,";
        creditCardInfo = creditCardInfo + "AnnualFeeCondition  varchar(255) NOT NULL,";
        creditCardInfo = creditCardInfo + "AnnualFeeComment  varchar(255) NULL,";
        creditCardInfo = creditCardInfo + "CustomerServiceTel  varchar(50) NULL,";
        creditCardInfo = creditCardInfo + "PRIMARY KEY (Id ASC))";
        this.createTableList.push({ sql: creditCardInfo, params: [] });
        //UserInfo table
        var userInfoSQL = "CREATE TABLE IF NOT EXISTS UserInfo (Id INTEGER NOT NULL, UserAccount TEXT, Password TEXT, UserName TEXT, PRIMARY KEY (Id ASC))";
        this.createTableList.push({ sql: userInfoSQL, params: [] });
        //MortgageHistory table
        var mortgageHistorySQL = "CREATE TABLE IF NOT EXISTS MortgageHistory (Id INTEGER NOT NULL, UserId INTEGER NOT NULL, District TEXT, Neighbourhood TEXT, Area TEXT, PRIMARY KEY (Id ASC))";
        this.createTableList.push({ sql: mortgageHistorySQL, params: [] });
        this.createTableList.forEach(function (table) {
            _this.executeSQLByParam(table, db);
        });
    };
    DbmanagerProvider.prototype.executeSQLByParam = function (table, db) {
        if (table.params.length > 0) {
            db.executeSql(table.sql, table.params);
        }
        else {
            db.executeSql(table.sql);
        }
    };
    DbmanagerProvider.prototype.exportDB = function () {
        var binaryArray = __WEBPACK_IMPORTED_MODULE_2__common_agentconstans__["b" /* SQLObj */].db.export();
        var buffer = new Buffer(binaryArray);
        var blob = new Blob([buffer]);
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "data.db";
        a.onclick = function () {
            setTimeout(function () {
                window.URL.revokeObjectURL(a.href);
            }, 1500);
        };
        a.click();
    };
    DbmanagerProvider.prototype.insertCreditCardInfo = function (params) {
        var _this = this;
        var SQL = "INSERT OR REPLACE INTO CreditCardInfo (";
        SQL = SQL + "BankName,";
        SQL = SQL + "CardName,";
        SQL = SQL + "CardNumber,";
        SQL = SQL + "BillDate,";
        SQL = SQL + "PayDate,";
        SQL = SQL + "AnnualFeeDueDate,";
        SQL = SQL + "AnnualFeeStatus,";
        SQL = SQL + "AnnualFeeCondition,";
        SQL = SQL + "AnnualFeeComment,";
        SQL = SQL + "CustomerServiceTel";
        SQL = SQL + ") VALUES (?,?,?,?,?,?,?,?,?,?)";
        var promise = new Promise(function (resolve) {
            var paramArray = [
                params.bankName,
                params.cardName,
                params.cardNumber,
                params.billDate,
                params.payDate,
                params.annualFeeDueDate,
                params.annualFeeStatus,
                params.annualFeeCondition,
                params.annualFeeComment,
                params.customerServiceTel,
            ];
            _this.myDatabase.executeSql(SQL, paramArray).then(function (data) {
                resolve(data);
            }).catch(function (e) {
                console.log(e);
            });
        });
        return promise;
    };
    DbmanagerProvider.prototype.queryAllTableInfo = function (tableName, condition) {
        var _this = this;
        var paramsArray = [];
        var SQL = "SELECT * FROM " + tableName;
        if (condition != null) {
            var conditionString = '';
            for (var key in condition) {
                conditionString += " " + key + " = ? AND";
                paramsArray.push(condition[key]);
            }
            conditionString = conditionString.substring(0, conditionString.lastIndexOf("AND")); // 取两个字符位置之间的string
            SQL += " WHERE " + conditionString;
        }
        return new Promise(function (resolve) {
            _this.myDatabase.executeSql(SQL, paramsArray).then(function (data) {
                resolve(data);
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    DbmanagerProvider.prototype.insertTableInfo = function (tableName, params) {
        var _this = this;
        var keyString = '';
        var valueString = '';
        var paramArray = [];
        for (var key in params) {
            keyString += key + ",";
            valueString += "?, ";
            paramArray.push(params[key]);
        }
        keyString = keyString.substring(0, keyString.lastIndexOf(",")); // 取两个字符位置之间的string
        valueString = valueString.substring(0, valueString.lastIndexOf(","));
        var SQL = "INSERT OR REPLACE INTO " + tableName + " (" + keyString + ") VALUES (" + valueString + ")";
        var promise = new Promise(function (resolve) {
            _this.myDatabase.executeSql(SQL, paramArray).then(function (data) {
                resolve(data);
            }).catch(function (e) {
                console.log(e);
            });
        });
        return promise;
    };
    DbmanagerProvider.prototype.updateTableInfo = function (tableName, params, condition) {
        var _this = this;
        var valueString = '';
        var conditionString = '';
        var paramArray = [];
        for (var keyP in params) {
            valueString += keyP + " = ?,";
            paramArray.push(params[keyP]);
        }
        for (var keyC in condition) {
            conditionString += " " + keyC + " = ? AND";
            paramArray.push(condition[keyC]);
        }
        valueString = valueString.substring(0, valueString.lastIndexOf(",")); // 取两个字符位置之间的string
        conditionString = conditionString.substring(0, conditionString.lastIndexOf("AND"));
        var SQL = "UPDATE " + tableName + " SET " + valueString + " WHERE " + conditionString;
        var promise = new Promise(function (resolve) {
            _this.myDatabase.executeSql(SQL, paramArray).then(function (data) {
                resolve(data);
            }).catch(function (e) {
                console.log(e);
            });
        });
        return promise;
    };
    DbmanagerProvider.prototype.deleteById = function (tableName, rowId) {
        var _this = this;
        var SQL = "DELETE FROM " + tableName + " WHERE Id = ?";
        var promise = new Promise(function (resolve) {
            _this.myDatabase.executeSql(SQL, [rowId]).then(function (data) {
                resolve(data);
            }).catch(function (e) {
                console.log(e);
            });
        });
        return promise;
    };
    DbmanagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DbmanagerProvider);
    return DbmanagerProvider;
}());

//# sourceMappingURL=dbmanager.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(283).Buffer))

/***/ })

},[253]);
//# sourceMappingURL=main.js.map