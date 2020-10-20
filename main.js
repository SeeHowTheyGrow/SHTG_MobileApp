webpackJsonp([1],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications__ = __webpack_require__(24);
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
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, globalProvider, platform, navParams, apiProvider, ga, loadingController, menuCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.globalProvider = globalProvider;
        this.platform = platform;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.ga = ga;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.message1 = '';
        this.message2 = '';
        //public Q1Hide = false;
        this.networkConnected = true;
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    FeedbackPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad FeedbackPage');
        this.ga.trackView("Feedback Screen");
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            /////// track page //////
            this.apiProvider.trackPage("Feedback Screen")
                .then(function (res) {
            }, function (err) {
            });
            this.apiProvider.getNotifications()
                .then(function (res) {
                if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                    _this.globalProvider.newNotificitations = true;
                }
                else {
                    _this.globalProvider.newNotificitations = false;
                }
            }, function (err) {
                //this.loading.dismiss();
                _this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }
        //////////////////////////////////////////////////////////////////////////
    };
    FeedbackPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    FeedbackPage.prototype.disableOtherButtonsQ2 = function (value) {
        document.getElementById('q2Answer1').disabled = false;
        document.getElementById('q2Answer2').disabled = false;
        document.getElementById('q2Answer3').disabled = false;
        document.getElementById('q2Answer4').disabled = false;
        document.getElementById('q2Answer5').disabled = false;
        if (value == 'strongly-disagree') {
            document.getElementById('q2Answer1').disabled = true;
        }
        else if (value == 'disagree') {
            document.getElementById('q2Answer2').disabled = true;
        }
        else if (value == 'neutral') {
            document.getElementById('q2Answer3').disabled = true;
        }
        else if (value == 'agree') {
            document.getElementById('q2Answer4').disabled = true;
        }
        else if (value == 'strongly-agree') {
            document.getElementById('q2Answer5').disabled = true;
        }
    };
    FeedbackPage.prototype.disableOtherButtonsQ4 = function (value) {
        document.getElementById('q4Answer1').disabled = false;
        document.getElementById('q4Answer2').disabled = false;
        document.getElementById('q4Answer3').disabled = false;
        document.getElementById('q4Answer4').disabled = false;
        document.getElementById('q4Answer5').disabled = false;
        if (value == 'strongly-disagree') {
            document.getElementById('q4Answer1').disabled = true;
        }
        else if (value == 'disagree') {
            document.getElementById('q4Answer2').disabled = true;
        }
        else if (value == 'neutral') {
            document.getElementById('q4Answer3').disabled = true;
        }
        else if (value == 'agree') {
            document.getElementById('q4Answer4').disabled = true;
        }
        else if (value == 'strongly-agree') {
            document.getElementById('q4Answer5').disabled = true;
        }
    };
    FeedbackPage.prototype.disableOtherButtonsQ1 = function (value) {
        document.getElementById('q1Answer1').disabled = false;
        document.getElementById('q1Answer2').disabled = false;
        document.getElementById('q1Answer3').disabled = false;
        document.getElementById('q1Answer4').disabled = false;
        document.getElementById('q1Answer5').disabled = false;
        if (value == 'strongly-disagree') {
            document.getElementById('q1Answer1').disabled = true;
        }
        else if (value == 'disagree') {
            document.getElementById('q1Answer2').disabled = true;
        }
        else if (value == 'neutral') {
            document.getElementById('q1Answer3').disabled = true;
        }
        else if (value == 'agree') {
            document.getElementById('q1Answer4').disabled = true;
        }
        else if (value == 'strongly-agree') {
            document.getElementById('q1Answer5').disabled = true;
        }
    };
    FeedbackPage.prototype.disableOtherButtonsQ3 = function (value) {
        document.getElementById('q3Answer1').disabled = false;
        document.getElementById('q3Answer2').disabled = false;
        document.getElementById('q3Answer3').disabled = false;
        document.getElementById('q3Answer4').disabled = false;
        document.getElementById('q3Answer5').disabled = false;
        if (value == 'strongly-disagree') {
            document.getElementById('q3Answer1').disabled = true;
        }
        else if (value == 'disagree') {
            document.getElementById('q3Answer2').disabled = true;
        }
        else if (value == 'neutral') {
            document.getElementById('q3Answer3').disabled = true;
        }
        else if (value == 'agree') {
            document.getElementById('q3Answer4').disabled = true;
        }
        else if (value == 'strongly-agree') {
            document.getElementById('q3Answer5').disabled = true;
        }
    };
    FeedbackPage.prototype.q1 = function (value) {
        this.q1Answer = value;
        //this.Q1Hide = true;
        //alert("dddddd"+this.q1Answer);
        this.disableOtherButtonsQ1(value);
    };
    FeedbackPage.prototype.q2 = function (value) {
        this.q2Answer = value;
        // alert("eeeeeee"+this.q2Answer);
        this.disableOtherButtonsQ2(value);
    };
    FeedbackPage.prototype.q3 = function (value) {
        this.q3Answer = value;
        //alert("ffffff"+this.q3Answer);
        this.disableOtherButtonsQ3(value);
    };
    FeedbackPage.prototype.q4 = function (value) {
        this.q4Answer = value;
        //alert("ggggggg"+this.q4Answer);
        this.disableOtherButtonsQ4(value);
    };
    FeedbackPage.prototype.featureChange = function (value) {
        this.featureAnswer = value;
        // alert("hhhhhh"+ this.featureAnswer);
        // this.features = this.featureAnswer.split(',');
    };
    FeedbackPage.prototype.anyFeatureChange = function (value) {
        this.anyFeatureChanges = value;
        //alert("kkkkkkk"+this.anyFeatureChanges);
    };
    FeedbackPage.prototype.anythingElseChange = function (value) {
        this.anythingElseChanges = value;
    };
    FeedbackPage.prototype.feedbackSubmit = function () {
        var _this = this;
        if (this.networkConnected === false) {
            this.showAlert("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            ///// contact us submit /////////
            setTimeout(function () {
                _this.apiProvider.addFeedback(_this.q1Answer, _this.q2Answer, _this.q3Answer, _this.q4Answer, _this.featureAnswer, _this.anyFeatureChanges, _this.anythingElseChanges)
                    .then(function (res) {
                    _this.loading.dismiss();
                    _this.showAlert("Thanks for your feedback!");
                    _this.message1 = '';
                    _this.message2 = '';
                    //this.navCtrl.push(InviteUsersPage);
                }, function (err) {
                    _this.loading.dismiss();
                    _this.showError(err);
                    //this.navCtrl.push(ChildRegistrationPage);
                });
            }, 1000);
        }
    };
    FeedbackPage.prototype.presentLoading = function () {
        this.loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FeedbackPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'SHTG',
            message: msg,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    FeedbackPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    FeedbackPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    FeedbackPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resources_resources__["a" /* ResourcesPage */]);
    };
    FeedbackPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    FeedbackPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    FeedbackPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__notifications_notifications__["a" /* NotificationsPage */]);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/feedback/feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="true">\n        <ion-buttons left>\n            <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;">\n                <img src="assets/imgs/side-menu.png"/>\n            </button>\n        </ion-buttons>\n        <ion-title align="center">Feedback</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n    <form class="form"  (submit)="feedbackSubmit()">\n\n\n    <ion-list>\n        <ion-card id="InformationSheet" class="ion-card" transparent="true">\n            <ion-card-content>\n                <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;">We would appreciate your feedback on how you have found the app.\n                    You can choose to respond to one or all of these questions at anytime during the study. </p>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card style="">\n            <ion-card-header style="background-color: #3B8175; color:white ">\n                Your overall satisfaction of the app?\n            </ion-card-header>\n            <ion-card-content>\n\n                <table width="100%" cellspacing="4px" >\n                    <tr>\n\n                        <td width=65px><button id = "q1Answer1" ><img src="assets/imgs/strongly-disagree.svg" width="50px" height="50px" (click)="q1(\'strongly-disagree\')"></button></td>\n                        <td width=65px><button id = "q1Answer2" ><img src="assets/imgs/disagree.svg" width="50px" height="50px" (click)="q1(\'disagree\')"></button></td>\n                        <td width=65px><button id = "q1Answer3" ><img src="assets/imgs/neutral.svg" width="50px" height="50px" (click)="q1(\'neutral\')"></button></td>\n                        <td width=65px> <button id = "q1Answer4" ><img src="assets/imgs/agree.svg" width="50px" height="50px" (click)="q1(\'agree\')"></button></td>\n                        <td  width=65px><button id = "q1Answer5" ><img src="assets/imgs/strongly-agree.svg" width="50px" height="50px" (click)="q1(\'strongly-agree\')"></button></td>\n                    </tr>\n\n                    <tr>\n                        <td>Strongly Disagree</td>\n                        <td>Disagree </td>\n                        <td>Neutral    </td>\n                        <td>Agree     </td>\n                        <td>Strongly Agree</td>\n                    </tr>\n                </table>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header style="background-color: #3B8175; color:white; white-space: normal ">\n                I have found the app is useful in helping me learn about my child’s growth?\n            </ion-card-header>\n            <ion-card-content>\n                <table width="100%" cellspacing="4px" >\n                    <tr>\n                        <td width=65px><button id = "q2Answer1" ><img src="assets/imgs/strongly-disagree.svg" width="50px" height="50px" (click)="q2(\'strongly-disagree\')"></button></td>\n                        <td width=65px><button id = "q2Answer2" ><img src="assets/imgs/disagree.svg" width="50px" height="50px" (click)="q2(\'disagree\')"></button></td>\n                        <td width=65px><button id = "q2Answer3" ><img src="assets/imgs/neutral.svg" width="50px" height="50px" (click)="q2(\'neutral\')"></button></td>\n                        <td width=65px> <button id = "q2Answer4" ><img src="assets/imgs/agree.svg" width="50px" height="50px" (click)="q2(\'agree\')"></button></td>\n                        <td  width=65px><button id = "q2Answer5" ><img src="assets/imgs/strongly-agree.svg" width="50px" height="50px" (click)="q2(\'strongly-agree\')"></button></td>\n                    </tr>\n\n                    <tr>\n                        <td>Strongly Disagree</td>\n                        <td>Disagree </td>\n                        <td>Neutral    </td>\n                        <td>Agree     </td>\n                        <td>Strongly Agree</td>\n                    </tr>\n                </table>\n\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="background-color: #3B8175; color:white; white-space: normal ">\n                The app is easy to navigate and find the information I needed?\n            </ion-card-header>\n            <ion-card-content>\n                <table width="100%" cellspacing="4px" >\n                    <tr>\n                        <td width=65px><button id = "q3Answer1" ><img src="assets/imgs/strongly-disagree.svg" width="50px" height="50px" (click)="q3(\'strongly-disagree\')"></button></td>\n                        <td width=65px><button id = "q3Answer2" ><img src="assets/imgs/disagree.svg" width="50px" height="50px" (click)="q3(\'disagree\')"></button></td>\n                        <td width=65px><button id = "q3Answer3" ><img src="assets/imgs/neutral.svg" width="50px" height="50px" (click)="q3(\'neutral\')"></button></td>\n                        <td width=65px><button id = "q3Answer4" > <img src="assets/imgs/agree.svg" width="50px" height="50px" (click)="q3(\'agree\')"></button></td>\n                        <td  width=65px><button id = "q3Answer5" ><img src="assets/imgs/strongly-agree.svg" width="50px" height="50px" (click)="q3(\'strongly-agree\')"></button></td>\n                    </tr>\n\n                    <tr>\n                        <td>Strongly Disagree</td>\n                        <td>Disagree </td>\n                        <td>Neutral    </td>\n                        <td>Agree     </td>\n                        <td>Strongly Agree</td>\n                    </tr>\n                </table>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="background-color: #3B8175; color:white; white-space: normal ">\n                I like the look and feel of the app.\n            </ion-card-header>\n            <ion-card-content>\n                <table width="100%" cellspacing="4px" >\n                    <tr>\n                        <td width=65px><button id = "q4Answer1" ><img src="assets/imgs/strongly-disagree.svg" width="50px" height="50px" (click)="q4(\'strongly-disagree\')"></button></td>\n                        <td width=65px><button id = "q4Answer2" ><img src="assets/imgs/disagree.svg" width="50px" height="50px" (click)="q4(\'disagree\')"></button></td>\n                        <td width=65px><button id = "q4Answer3" ><img src="assets/imgs/neutral.svg" width="50px" height="50px" (click)="q4(\'neutral\')"></button></td>\n                        <td width=65px> <button id = "q4Answer4" ><img src="assets/imgs/agree.svg" width="50px" height="50px" (click)="q4(\'agree\')"></button></td>\n                        <td  width=65px><button id = "q4Answer5" ><img src="assets/imgs/strongly-agree.svg" width="50px" height="50px" (click)="q4(\'strongly-agree\')"></button></td>\n                    </tr>\n\n                    <tr>\n                        <td>Strongly Disagree</td>\n                        <td>Disagree </td>\n                        <td>Neutral    </td>\n                        <td>Agree     </td>\n                        <td>Strongly Agree</td>\n                    </tr>\n                </table>\n\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="background-color: #3B8175; color:white; white-space: normal ">\n                What features have you liked most?\n            </ion-card-header>\n            <ion-card-content>\n                <ion-item>\n                    <ion-label style="font-size: small">Select all that apply</ion-label>\n                    <ion-select class="dropQuestions" multiple="true" style="width:100%" #A (ionChange)="featureChange(A.value)">\n                        <ion-option value="The graphs of my child">The graphs of my child</ion-option>\n                        <ion-option value="Sharing with my whānau">Sharing with my whānau</ion-option>\n                        <ion-option value="Regular messages">Regular messages</ion-option>\n                        <ion-option value="Uploading photos">Uploading photos</ion-option>\n                        <ion-option value="Immunisation reminders">Immunisation reminders</ion-option>\n                        <ion-option value="The Tip">The Tip</ion-option>\n                        <ion-option value="The Resources">The Resources</ion-option>\n                        <ion-option value="Activity with location maps">Activity with location maps</ion-option>\n                        <ion-option value="9">Memories</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="background-color: #3B8175; color:white; white-space: normal ">\n                Do you have any suggestions on how to improve the app?\n            </ion-card-header>\n            <ion-card-content>\n                <ion-row>\n                    <ion-textarea name="feedback" type="text" [(ngModel)]="message1" class="dropQuestions" style="height:auto; width:100%" #B (ionChange)="anyFeatureChange(B.value)"></ion-textarea>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header style="background-color: #3B8175; color:white; white-space: normal ">\n                Any further comments?\n            </ion-card-header>\n            <ion-card-content>\n                <ion-row>\n                    <ion-textarea name="feedback" type="text" [(ngModel)]="message2" class="dropQuestions" style="height:auto; width:100%" #C (ionChange)="anythingElseChange(C.value)"></ion-textarea>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n\n    </ion-list>\n\n    <div class="btnBottom">\n        <ion-row align="center">\n            <ion-col>\n                <button ion-button block class="btnAccept" type="submit">Send</button>\n            </ion-col>\n        </ion-row>\n    </div>\n    </form>\n\n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar color="toolbar-background" style="height: 30px">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n                        <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__growth_chart_growth_chart__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







__WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale('en-NZ');
/**
 * Generated class for the PopupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopupModalPage = /** @class */ (function () {
    function PopupModalPage(navCtrl, navParams, alertCtrl, formBuilder, platform, viewCtrl, globalProvider, loadingCtrl, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.globalProvider = globalProvider;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.networkConnected = true;
        this.parentClick = 0;
        this.healthClick = 0;
        this.addMeasurementForm = this.formBuilder.group({
            childName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''),
            date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            weight: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[1-9]\\d*(\\.\\d+)?$')),
            length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[1-9]\\d*(\\.\\d+)?$')),
            head: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[1-9]\\d*(\\.\\d+)?$')),
            healthPro: [false],
            parent: [false]
        });
        var date1 = new Date(); //offset in milliseconds
        var date2 = new Date();
        date1.setFullYear(date1.getFullYear());
        date2.setFullYear(date2.getFullYear() - 2);
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        this.maxDate = (new Date(Date.now() - tzoffset)).toISOString().split('T')[0];
        //this.maxDate = (date1.toISOString().split('T')[0]);
        this.minDate = (date2.toISOString().slice(0, 10));
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
        this.childrenList = JSON.parse(window.localStorage.getItem("childrenList"));
        //console.log("children list======== awa--------"+ this.childrenList.);
    }
    PopupModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopupModalPage');
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            /////// track page //////
            this.apiProvider.trackPage("Add Measurements Screen")
                .then(function (res) {
            }, function (err) {
            });
        }
    };
    PopupModalPage.prototype.slectedChild = function (val) {
        alert(val);
    };
    PopupModalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    PopupModalPage.prototype.checked1 = function (val) {
        if (this.parentClick === 0) {
            this.disableParent = true;
            this.parentClick++;
        }
        else {
            this.disableParent = false;
        }
    };
    PopupModalPage.prototype.checked2 = function (val) {
        if (this.healthClick === 0) {
            this.disableHealth = true;
            this.healthClick++;
        }
        else {
            this.disableHealth = false;
        }
    };
    ///////////////////////////////////////// save measurements  ///////////////////////////////////////
    PopupModalPage.prototype.saveMeasurements = function () {
        console.log("child name=====" + this.addMeasurementForm.value.childName);
        console.log("date  =====" + this.addMeasurementForm.value.date);
        console.log("weight =====" + this.addMeasurementForm.value.weight);
        console.log("length =====" + this.addMeasurementForm.value.length);
        console.log("head =====" + this.addMeasurementForm.value.head);
        console.log("health pro=====" + this.addMeasurementForm.value.healthPro);
        console.log("parnt =====" + this.addMeasurementForm.value.parent);
        if (this.addMeasurementForm.value.childName == '') {
            this.showError("Please select child's name.");
        }
        else if (this.addMeasurementForm.value.weight == null && this.addMeasurementForm.value.length == null && this.addMeasurementForm.value.head == null) {
            this.showError("Please add at least one measurement.");
        }
        else if (this.addMeasurementForm.value.healthPro == false && this.addMeasurementForm.value.parent == false) {
            this.showError("Are you parent or health professional.");
        }
        else {
            this.childId = this.addMeasurementForm.value.childName;
            for (var z = 0; z < this.childrenList.length; z++) {
                if (this.childId == this.childrenList[z].nid) {
                    this.childDateOfBirth = this.childrenList[z].dateOfBirth;
                    this.childSex = this.childrenList[z].sex;
                }
            }
            console.log("birth-======================" + this.childDateOfBirth);
            //if (window.localStorage.getItem("childDateOffBirth") != null) {
            this.ageInMonths = this.ageCalculate(this.childDateOfBirth, this.addMeasurementForm.value.date);
            //}
            //let childSex = window.localStorage.getItem("childSex");
            if (this.addMeasurementForm.value.weight != null) {
                this.percentileWeight = this.calculatePercentile(this.addMeasurementForm.value.weight, this.ageInDays, this.childSex, 'Weight');
            }
            else {
                this.percentileWeight = null;
            }
            if (this.addMeasurementForm.value.length != null) {
                this.percentileLength = this.calculatePercentile(this.addMeasurementForm.value.length, this.ageInDays, this.childSex, 'Length');
            }
            else {
                this.percentileLength = null;
            }
            if (this.addMeasurementForm.value.head != null) {
                this.percentileHead = this.calculatePercentile(this.addMeasurementForm.value.head, this.ageInDays, this.childSex, 'Head');
            }
            else {
                this.percentileHead = null;
            }
            if (((this.addMeasurementForm.value.weight != null && this.percentileWeight == 0) || this.percentileWeight == 100) || ((this.addMeasurementForm.value.length != null && this.percentileLength == 0) || this.percentileLength == 100) || ((this.addMeasurementForm.value.head != null && this.percentileHead == 0) || this.percentileHead == 100)) {
                this.showNotification("Please make sure you have entered the correct measurements.");
            }
            else {
                this.saveMeasurementsToDatabase();
            }
            console.log("weight percentile===", this.percentileWeight + "length percentile===" + this.percentileLength + "head percentile===" + this.percentileHead);
        }
    };
    ///////////////////////////////////////// save measurements to databse ///////////////////////////////////////
    PopupModalPage.prototype.saveMeasurementsToDatabase = function () {
        var _this = this;
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            console.log("childs id=============" + this.childId);
            ///// add measurements /////////
            setTimeout(function () {
                _this.apiProvider.addMeasurements(_this.childId, _this.addMeasurementForm.value.date, _this.addMeasurementForm.value.weight, _this.addMeasurementForm.value.length, _this.addMeasurementForm.value.head, _this.addMeasurementForm.value.healthPro, _this.percentileWeight, _this.percentileLength, _this.percentileHead, _this.ageInMonths)
                    .then(function (res) {
                    _this.loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
                    _this.navCtrl.pop();
                    setTimeout(function () {
                        _this.viewCtrl.dismiss();
                    }, 2500);
                }, function (err) {
                    //alert(JSON.parse(JSON.stringify(err)).message);
                    _this.loading.dismiss();
                    //this.navCtrl.pop();
                    _this.showAlert(JSON.parse(JSON.stringify(err)));
                });
            }, 500);
        }
    };
    ///////////////////  age calculate //////////////////////////////////////////
    PopupModalPage.prototype.ageCalculate = function (d1, d2) {
        console.log(" =========" + d1 + "00000" + d2);
        var diffDays, oneDay;
        oneDay = 24 * 60 * 60 * 1000;
        diffDays = ((Date.parse(d2) - Date.parse(d1)) / oneDay);
        var age = (diffDays / 30);
        this.ageInDays = Math.round((diffDays) * 10) / 10;
        this.ageInMonths = Math.round((diffDays / 30) * 10) / 10;
        this.ageInWeeks = Math.round(Math.round((diffDays / 7) * 10) / 10);
        console.log("age----week-----" + this.ageInWeeks);
        console.log("age----month-----" + this.ageInMonths);
        console.log("age----days-----" + this.ageInDays);
        //this.calculatePercentile();
        return this.ageInMonths;
    };
    //////////////////////////////////////////////////// percentile calculate ///////////////////////////
    PopupModalPage.prototype.calculatePercentile = function (measurement, age, sex, type) {
        // weight for age(days) - Boys
        this.wfa_boys_p = [
            [0.3487, 3.3464, 0.14602], [0.3127, 3.3174, 0.14693], [0.3029, 3.337, 0.14676], [0.2959, 3.3627, 0.14647], [0.2903, 3.3915, 0.14611], [0.2855, 3.4223, 0.14571], [0.2813, 3.4545, 0.14528], [0.2776, 3.4879, 0.14483], [0.2742, 3.5222, 0.14436], [0.2711, 3.5576, 0.14388], [0.2681, 3.5941, 0.14339], [0.2654, 3.6319, 0.1429], [0.2628, 3.671, 0.14241], [0.2604, 3.7113, 0.14192], [0.2581, 3.7529, 0.14142], [0.2558, 3.7956, 0.14093], [0.2537, 3.8389, 0.14044], [0.2517, 3.8828, 0.13996], [0.2497, 3.927, 0.13948], [0.2478, 3.9714, 0.139], [0.246, 4.0158, 0.13853], [0.2442, 4.0603, 0.13807], [0.2425, 4.1046, 0.13761], [0.2408, 4.1489, 0.13715], [0.2392, 4.193, 0.1367], [0.2376, 4.2369, 0.13626], [0.2361, 4.2806, 0.13582], [0.2346, 4.324, 0.13539], [0.2331, 4.3671, 0.13497], [0.2317, 4.41, 0.13455], [0.2303, 4.4525, 0.13413], [0.229, 4.4946, 0.13372], [0.2276, 4.5363, 0.13332], [0.2263, 4.5776, 0.13292], [0.225, 4.6185, 0.13253], [0.2237, 4.659, 0.13215], [0.2225, 4.699, 0.13177], [0.2213, 4.7386, 0.13139], [0.2201, 4.7778, 0.13102], [0.2189, 4.8166, 0.13066], [0.2178, 4.8549, 0.1303], [0.2166, 4.8928, 0.12994], [0.2155, 4.9303, 0.1296], [0.2144, 4.9674, 0.12925], [0.2133, 5.0041, 0.12891], [0.2122, 5.0404, 0.12858], [0.2112, 5.0763, 0.12825], [0.2101, 5.1118, 0.12792], [0.2091, 5.1469, 0.1276], [0.2081, 5.1817, 0.12729], [0.2071, 5.2161, 0.12698], [0.2061, 5.2501, 0.12667], [0.2052, 5.2837, 0.12637], [0.2042, 5.3171, 0.12607], [0.2032, 5.35, 0.12577], [0.2023, 5.3826, 0.12548], [0.2014, 5.4149, 0.1252], [0.2005, 5.4468, 0.12491], [0.1996, 5.4784, 0.12463], [0.1987, 5.5097, 0.12436], [0.1978, 5.5407, 0.12409], [0.1969, 5.5714, 0.12382], [0.196, 5.6018, 0.12356], [0.1952, 5.6319, 0.1233], [0.1943, 5.6617, 0.12304], [0.1935, 5.6912, 0.12279], [0.1926, 5.7205, 0.12254], [0.1918, 5.7494, 0.12229], [0.191, 5.7781, 0.12205], [0.1902, 5.8065, 0.12181], [0.1894, 5.8346, 0.12157], [0.1886, 5.8625, 0.12134], [0.1878, 5.8901, 0.12111], [0.187, 5.9174, 0.12088], [0.1863, 5.9445, 0.12066], [0.1855, 5.9713, 0.12044], [0.1847, 5.9979, 0.12022], [0.184, 6.0242, 0.12001], [0.1832, 6.0503, 0.1198], [0.1825, 6.0762, 0.11959], [0.1818, 6.1018, 0.11939], [0.181, 6.1272, 0.11918], [0.1803, 6.1523, 0.11899], [0.1796, 6.1772, 0.11879], [0.1789, 6.2019, 0.1186], [0.1782, 6.2264, 0.11841], [0.1775, 6.2507, 0.11822], [0.1768, 6.2748, 0.11803], [0.1761, 6.2986, 0.11785], [0.1754, 6.3223, 0.11767], [0.1747, 6.3457, 0.1175], [0.174, 6.369, 0.11732], [0.1734, 6.3921, 0.11715], [0.1727, 6.4149, 0.11698], [0.172, 6.4376, 0.11682], [0.1714, 6.4601, 0.11666], [0.1707, 6.4824, 0.11649], [0.1701, 6.5046, 0.11634], [0.1694, 6.5265, 0.11618], [0.1688, 6.5483, 0.11603], [0.1682, 6.5699, 0.11588], [0.1675, 6.5914, 0.11573], [0.1669, 6.6126, 0.11558], [0.1663, 6.6338, 0.11544], [0.1657, 6.6547, 0.1153], [0.1651, 6.6755, 0.11516], [0.1644, 6.6962, 0.11502], [0.1638, 6.7166, 0.11489], [0.1632, 6.737, 0.11476], [0.1626, 6.7572, 0.11463], [0.162, 6.7772, 0.1145], [0.1614, 6.7971, 0.11438], [0.1609, 6.8168, 0.11425], [0.1603, 6.8365, 0.11413], [0.1597, 6.8559, 0.11401], [0.1591, 6.8753, 0.1139], [0.1585, 6.8945, 0.11378], [0.158, 6.9135, 0.11367], [0.1574, 6.9325, 0.11356], [0.1568, 6.9513, 0.11345], [0.1563, 6.9699, 0.11334], [0.1557, 6.9885, 0.11324], [0.1551, 7.0069, 0.11313], [0.1546, 7.0252, 0.11303], [0.154, 7.0434, 0.11293], [0.1535, 7.0615, 0.11283], [0.1529, 7.0794, 0.11274], [0.1524, 7.0972, 0.11265], [0.1519, 7.1149, 0.11255], [0.1513, 7.1325, 0.11246], [0.1508, 7.15, 0.11237], [0.1502, 7.1674, 0.11229], [0.1497, 7.1846, 0.1122], [0.1492, 7.2018, 0.11212], [0.1487, 7.2188, 0.11204], [0.1481, 7.2357, 0.11196], [0.1476, 7.2525, 0.11188], [0.1471, 7.2692, 0.1118], [0.1466, 7.2858, 0.11172], [0.1461, 7.3023, 0.11165], [0.1456, 7.3187, 0.11158], [0.1451, 7.335, 0.1115], [0.1446, 7.3512, 0.11143], [0.1441, 7.3673, 0.11137], [0.1436, 7.3833, 0.1113], [0.1431, 7.3992, 0.11123], [0.1426, 7.415, 0.11117], [0.1421, 7.4307, 0.11111], [0.1416, 7.4463, 0.11104], [0.1411, 7.4618, 0.11098], [0.1406, 7.4772, 0.11092], [0.1401, 7.4925, 0.11087], [0.1396, 7.5077, 0.11081], [0.1391, 7.5228, 0.11075], [0.1387, 7.5379, 0.1107], [0.1382, 7.5528, 0.11065], [0.1377, 7.5677, 0.11059], [0.1372, 7.5824, 0.11054], [0.1368, 7.5971, 0.11049], [0.1363, 7.6117, 0.11044], [0.1358, 7.6262, 0.1104],
            [0.1354, 7.6406, 0.11035], [0.1349, 7.655, 0.11031], [0.1344, 7.6692, 0.11026], [0.134, 7.6834, 0.11022], [0.1335, 7.6975, 0.11018], [0.1331, 7.7115, 0.11013], [0.1326, 7.7255, 0.11009], [0.1322, 7.7394, 0.11005], [0.1317, 7.7532, 0.11002], [0.1313, 7.7669, 0.10998], [0.1308, 7.7805, 0.10994], [0.1304, 7.7941, 0.10991], [0.1299, 7.8076, 0.10987], [0.1295, 7.821, 0.10984], [0.129, 7.8344, 0.1098], [0.1286, 7.8477, 0.10977], [0.1282, 7.8609, 0.10974], [0.1277, 7.8741, 0.10971], [0.1273, 7.8871, 0.10968], [0.1269, 7.9002, 0.10965], [0.1264, 7.9131, 0.10962], [0.126, 7.926, 0.10959], [0.1256, 7.9389, 0.10957], [0.1251, 7.9516, 0.10954], [0.1247, 7.9643, 0.10951], [0.1243, 7.977, 0.10949], [0.1239, 7.9895, 0.10946], [0.1235, 8.0021, 0.10944], [0.123, 8.0145, 0.10942], [0.1226, 8.0269, 0.1094], [0.1222, 8.0392, 0.10937], [0.1218, 8.0515, 0.10935], [0.1214, 8.0637, 0.10933], [0.121, 8.0759, 0.10931], [0.1206, 8.0879, 0.10929], [0.1201, 8.1, 0.10927], [0.1197, 8.112, 0.10925], [0.1193, 8.1239, 0.10924], [0.1189, 8.1357, 0.10922], [0.1185, 8.1475, 0.1092], [0.1181, 8.1593, 0.10919], [0.1177, 8.171, 0.10917], [0.1173, 8.1826, 0.10915], [0.1169, 8.1942, 0.10914], [0.1165, 8.2058, 0.10913], [0.1161, 8.2173, 0.10911], [0.1157, 8.2287, 0.1091], [0.1153, 8.2401, 0.10908], [0.1149, 8.2514, 0.10907], [0.1145, 8.2627, 0.10906], [0.1142, 8.2739, 0.10905], [0.1138, 8.2851, 0.10903], [0.1134, 8.2963, 0.10902], [0.113, 8.3074, 0.10901], [0.1126, 8.3184, 0.109], [0.1122, 8.3294, 0.10899], [0.1118, 8.3404, 0.10898], [0.1115, 8.3513, 0.10897], [0.1111, 8.3621, 0.10896], [0.1107, 8.3729, 0.10895], [0.1103, 8.3837, 0.10894], [0.1099, 8.3944, 0.10894], [0.1096, 8.4051, 0.10893], [0.1092, 8.4157, 0.10892], [0.1088, 8.4263, 0.10891], [0.1084, 8.4369, 0.10891], [0.1081, 8.4474, 0.1089], [0.1077, 8.4578, 0.10889], [0.1073, 8.4683, 0.10889], [0.107, 8.4787, 0.10888], [0.1066, 8.489, 0.10887], [0.1062, 8.4993, 0.10887], [0.1059, 8.5096, 0.10886], [0.1055, 8.5198, 0.10886], [0.1051, 8.53, 0.10885], [0.1048, 8.5401, 0.10885], [0.1044, 8.5502, 0.10884], [0.104, 8.5603, 0.10884], [0.1037, 8.5704, 0.10884], [0.1033, 8.5804, 0.10883], [0.103, 8.5903, 0.10883], [0.1026, 8.6003, 0.10882], [0.1023, 8.6102, 0.10882], [0.1019, 8.62, 0.10882], [0.1015, 8.6299, 0.10882], [0.1012, 8.6397, 0.10881], [0.1008, 8.6494, 0.10881], [0.1005, 8.6592, 0.10881], [0.1001, 8.6689, 0.10881], [0.0998, 8.6785, 0.10881], [0.0994, 8.6882, 0.1088], [0.0991, 8.6978, 0.1088], [0.0987, 8.7073, 0.1088], [0.0984, 8.7169, 0.1088], [0.0981, 8.7264, 0.1088], [0.0977, 8.7359, 0.1088], [0.0974, 8.7453, 0.1088], [0.097, 8.7548, 0.1088], [0.0967, 8.7642, 0.1088], [0.0963, 8.7735, 0.1088], [0.096, 8.7829, 0.1088], [0.0957, 8.7922, 0.1088], [0.0953, 8.8015, 0.1088], [0.095, 8.8107, 0.1088], [0.0947, 8.82, 0.1088], [0.0943, 8.8292, 0.1088], [0.094, 8.8384, 0.1088], [0.0937, 8.8475, 0.1088], [0.0933, 8.8567, 0.1088], [0.093, 8.8658, 0.1088], [0.0927, 8.8748, 0.1088], [0.0923, 8.8839, 0.10881], [0.092, 8.8929, 0.10881], [0.0917, 8.9019, 0.10881], [0.0913, 8.9109, 0.10881], [0.091, 8.9199, 0.10881], [0.0907, 8.9288, 0.10882], [0.0904, 8.9377, 0.10882], [0.09, 8.9466, 0.10882], [0.0897, 8.9555, 0.10882], [0.0894, 8.9643, 0.10882], [0.0891, 8.9731, 0.10883], [0.0887, 8.9819, 0.10883], [0.0884, 8.9907, 0.10883], [0.0881, 8.9995, 0.10884], [0.0878, 9.0082, 0.10884], [0.0875, 9.0169, 0.10884], [0.0871, 9.0256, 0.10884], [0.0868, 9.0342, 0.10885], [0.0865, 9.0429, 0.10885], [0.0862, 9.0515, 0.10885], [0.0859, 9.0601, 0.10886], [0.0856, 9.0687, 0.10886], [0.0852, 9.0772, 0.10887], [0.0849, 9.0858, 0.10887], [0.0846, 9.0943, 0.10887], [0.0843, 9.1028, 0.10888], [0.084, 9.1113, 0.10888], [0.0837, 9.1198, 0.10888], [0.0834, 9.1282, 0.10889], [0.0831, 9.1366, 0.10889], [0.0827, 9.145, 0.1089], [0.0824, 9.1534, 0.1089], [0.0821, 9.1618, 0.1089], [0.0818, 9.1701, 0.10891], [0.0815, 9.1785, 0.10891], [0.0812, 9.1868, 0.10892], [0.0809, 9.1951, 0.10892], [0.0806, 9.2034, 0.10893], [0.0803, 9.2117, 0.10893], [0.08, 9.2199, 0.10894], [0.0797, 9.2282, 0.10894], [0.0794, 9.2364, 0.10894], [0.0791, 9.2446, 0.10895], [0.0788, 9.2528, 0.10895], [0.0785, 9.261, 0.10896], [0.0782, 9.2691, 0.10896], [0.0779, 9.2773, 0.10897], [0.0776, 9.2854, 0.10897], [0.0773, 9.2935, 0.10898], [0.077, 9.3016, 0.10898], [0.0767, 9.3097, 0.10899], [0.0764, 9.3178, 0.10899], [0.0761, 9.3258, 0.109],
            [0.0758, 9.3339, 0.10901], [0.0755, 9.3419, 0.10901], [0.0752, 9.3499, 0.10902], [0.0749, 9.3579, 0.10902], [0.0746, 9.3659, 0.10903], [0.0744, 9.3739, 0.10903], [0.0741, 9.3819, 0.10904], [0.0738, 9.3898, 0.10904], [0.0735, 9.3978, 0.10905], [0.0732, 9.4057, 0.10905], [0.0729, 9.4136, 0.10906], [0.0726, 9.4215, 0.10907], [0.0723, 9.4294, 0.10907], [0.072, 9.4373, 0.10908], [0.0718, 9.4452, 0.10908], [0.0715, 9.453, 0.10909], [0.0712, 9.4609, 0.1091], [0.0709, 9.4687, 0.1091], [0.0706, 9.4765, 0.10911], [0.0703, 9.4844, 0.10911], [0.0701, 9.4922, 0.10912], [0.0698, 9.4999, 0.10913], [0.0695, 9.5077, 0.10913], [0.0692, 9.5155, 0.10914], [0.0689, 9.5232, 0.10915], [0.0686, 9.531, 0.10915], [0.0684, 9.5387, 0.10916], [0.0681, 9.5464, 0.10916], [0.0678, 9.5542, 0.10917], [0.0675, 9.5619, 0.10918], [0.0672, 9.5696, 0.10918], [0.067, 9.5772, 0.10919], [0.0667, 9.5849, 0.1092], [0.0664, 9.5926, 0.1092], [0.0661, 9.6002, 0.10921], [0.0659, 9.6079, 0.10922], [0.0656, 9.6155, 0.10922], [0.0653, 9.6231, 0.10923], [0.065, 9.6308, 0.10924], [0.0648, 9.6384, 0.10925], [0.0645, 9.646, 0.10925], [0.0642, 9.6535, 0.10926], [0.064, 9.6611, 0.10927], [0.0637, 9.6687, 0.10927], [0.0634, 9.6763, 0.10928], [0.0631, 9.6838, 0.10929], [0.0629, 9.6914, 0.1093], [0.0626, 9.6989, 0.1093], [0.0623, 9.7064, 0.10931], [0.0621, 9.7139, 0.10932], [0.0618, 9.7214, 0.10933], [0.0615, 9.7289, 0.10933], [0.0613, 9.7364, 0.10934], [0.061, 9.7439, 0.10935], [0.0607, 9.7514, 0.10936], [0.0605, 9.7588, 0.10936], [0.0602, 9.7663, 0.10937], [0.0599, 9.7738, 0.10938], [0.0597, 9.7812, 0.10939], [0.0594, 9.7886, 0.10939], [0.0591, 9.796, 0.1094], [0.0589, 9.8035, 0.10941], [0.0586, 9.8109, 0.10942], [0.0583, 9.8183, 0.10943], [0.0581, 9.8257, 0.10943], [0.0578, 9.833, 0.10944], [0.0576, 9.8404, 0.10945], [0.0573, 9.8478, 0.10946], [0.057, 9.8551, 0.10947], [0.0568, 9.8625, 0.10948], [0.0565, 9.8699, 0.10948], [0.0563, 9.8772, 0.10949], [0.056, 9.8845, 0.1095], [0.0557, 9.8918, 0.10951], [0.0555, 9.8992, 0.10952], [0.0552, 9.9065, 0.10953], [0.055, 9.9138, 0.10954], [0.0547, 9.9211, 0.10954], [0.0545, 9.9284, 0.10955], [0.0542, 9.9357, 0.10956], [0.054, 9.9429, 0.10957], [0.0537, 9.9502, 0.10958], [0.0534, 9.9575, 0.10959], [0.0532, 9.9647, 0.1096], [0.0529, 9.972, 0.10961], [0.0527, 9.9792, 0.10961], [0.0524, 9.9865, 0.10962], [0.0522, 9.9937, 0.10963], [0.0519, 10.0009, 0.10964], [0.0517, 10.0082, 0.10965], [0.0514, 10.0154, 0.10966], [0.0512, 10.0226, 0.10967], [0.0509, 10.0298, 0.10968], [0.0507, 10.037, 0.10969], [0.0504, 10.0442, 0.1097], [0.0502, 10.0514, 0.10971], [0.0499, 10.0586, 0.10971], [0.0497, 10.0657, 0.10972], [0.0494, 10.0729, 0.10973], [0.0492, 10.0801, 0.10974], [0.0489, 10.0872, 0.10975], [0.0487, 10.0944, 0.10976], [0.0484, 10.1015, 0.10977], [0.0482, 10.1087, 0.10978], [0.0479, 10.1158, 0.10979], [0.0477, 10.123, 0.1098], [0.0475, 10.1301, 0.10981], [0.0472, 10.1372, 0.10982], [0.047, 10.1443, 0.10983], [0.0467, 10.1515, 0.10984], [0.0465, 10.1586, 0.10985], [0.0462, 10.1657, 0.10986], [0.046, 10.1728, 0.10987], [0.0458, 10.1799, 0.10988], [0.0455, 10.187, 0.10989], [0.0453, 10.1941, 0.1099], [0.045, 10.2011, 0.10991], [0.0448, 10.2082, 0.10992], [0.0445, 10.2153, 0.10993], [0.0443, 10.2224, 0.10994], [0.0441, 10.2294, 0.10995], [0.0438, 10.2365, 0.10996], [0.0436, 10.2435, 0.10997], [0.0433, 10.2506, 0.10998], [0.0431, 10.2576, 0.10999], [0.0429, 10.2647, 0.11], [0.0426, 10.2717, 0.11001], [0.0424, 10.2788, 0.11002], [0.0422, 10.2858, 0.11003], [0.0419, 10.2928, 0.11005], [0.0417, 10.2998, 0.11006], [0.0414, 10.3069, 0.11007], [0.0412, 10.3139, 0.11008], [0.041, 10.3209, 0.11009], [0.0407, 10.3279, 0.1101], [0.0405, 10.3349, 0.11011], [0.0403, 10.3419, 0.11012], [0.04, 10.3489, 0.11013], [0.0398, 10.3559, 0.11014], [0.0396, 10.3629, 0.11015], [0.0393, 10.3699, 0.11016], [0.0391, 10.3769, 0.11017], [0.0389, 10.3839, 0.11019], [0.0386, 10.3908, 0.1102], [0.0384, 10.3978, 0.11021], [0.0382, 10.4048, 0.11022], [0.0379, 10.4118, 0.11023], [0.0377, 10.4187, 0.11024], [0.0375, 10.4257, 0.11025], [0.0373, 10.4326, 0.11026], [0.037, 10.4396, 0.11027], [0.0368, 10.4465, 0.11029], [0.0366, 10.4535, 0.1103], [0.0363, 10.4604, 0.11031], [0.0361, 10.4674, 0.11032], [0.0359, 10.4743, 0.11033], [0.0357, 10.4813, 0.11034], [0.0354, 10.4882, 0.11035], [0.0352, 10.4951, 0.11037], [0.035, 10.502, 0.11038],
            [0.0347, 10.509, 0.11039], [0.0345, 10.5159, 0.1104], [0.0343, 10.5228, 0.11041], [0.0341, 10.5297, 0.11042], [0.0338, 10.5366, 0.11044], [0.0336, 10.5435, 0.11045], [0.0334, 10.5505, 0.11046], [0.0332, 10.5574, 0.11047], [0.0329, 10.5643, 0.11048], [0.0327, 10.5712, 0.1105], [0.0325, 10.578, 0.11051], [0.0323, 10.5849, 0.11052], [0.032, 10.5918, 0.11053], [0.0318, 10.5987, 0.11054], [0.0316, 10.6056, 0.11056], [0.0314, 10.6125, 0.11057], [0.0312, 10.6193, 0.11058], [0.0309, 10.6262, 0.11059], [0.0307, 10.6331, 0.1106], [0.0305, 10.6399, 0.11062], [0.0303, 10.6468, 0.11063], [0.03, 10.6537, 0.11064], [0.0298, 10.6605, 0.11065], [0.0296, 10.6674, 0.11067], [0.0294, 10.6742, 0.11068], [0.0292, 10.6811, 0.11069], [0.0289, 10.6879, 0.1107], [0.0287, 10.6948, 0.11072], [0.0285, 10.7016, 0.11073], [0.0283, 10.7084, 0.11074], [0.0281, 10.7153, 0.11075], [0.0279, 10.7221, 0.11077], [0.0276, 10.7289, 0.11078], [0.0274, 10.7357, 0.11079], [0.0272, 10.7426, 0.11081], [0.027, 10.7494, 0.11082], [0.0268, 10.7562, 0.11083], [0.0266, 10.763, 0.11084], [0.0263, 10.7698, 0.11086], [0.0261, 10.7766, 0.11087], [0.0259, 10.7835, 0.11088], [0.0257, 10.7903, 0.1109], [0.0255, 10.7971, 0.11091], [0.0253, 10.8039, 0.11092], [0.025, 10.8107, 0.11094], [0.0248, 10.8174, 0.11095], [0.0246, 10.8242, 0.11096], [0.0244, 10.831, 0.11098], [0.0242, 10.8378, 0.11099], [0.024, 10.8446, 0.111], [0.0238, 10.8514, 0.11102], [0.0236, 10.8582, 0.11103], [0.0233, 10.8649, 0.11104], [0.0231, 10.8717, 0.11106], [0.0229, 10.8785, 0.11107], [0.0227, 10.8852, 0.11108], [0.0225, 10.892, 0.1111], [0.0223, 10.8988, 0.11111], [0.0221, 10.9055, 0.11113], [0.0219, 10.9123, 0.11114], [0.0217, 10.9191, 0.11115], [0.0214, 10.9258, 0.11117], [0.0212, 10.9326, 0.11118], [0.021, 10.9393, 0.1112], [0.0208, 10.9461, 0.11121], [0.0206, 10.9528, 0.11122], [0.0204, 10.9596, 0.11124], [0.0202, 10.9663, 0.11125], [0.02, 10.973, 0.11127], [0.0198, 10.9798, 0.11128], [0.0196, 10.9865, 0.11129], [0.0194, 10.9932, 0.11131], [0.0192, 11, 0.11132], [0.0189, 11.0067, 0.11134], [0.0187, 11.0134, 0.11135], [0.0185, 11.0202, 0.11137], [0.0183, 11.0269, 0.11138], [0.0181, 11.0336, 0.11139], [0.0179, 11.0403, 0.11141], [0.0177, 11.047, 0.11142], [0.0175, 11.0537, 0.11144], [0.0173, 11.0605, 0.11145], [0.0171, 11.0672, 0.11147], [0.0169, 11.0739, 0.11148], [0.0167, 11.0806, 0.1115], [0.0165, 11.0873, 0.11151], [0.0163, 11.094, 0.11153], [0.0161, 11.1007, 0.11154], [0.0159, 11.1074, 0.11156], [0.0157, 11.1141, 0.11157], [0.0155, 11.1208, 0.11159], [0.0153, 11.1275, 0.1116], [0.0151, 11.1342, 0.11162], [0.0149, 11.1409, 0.11163], [0.0147, 11.1476, 0.11165], [0.0144, 11.1543, 0.11166], [0.0142, 11.161, 0.11168], [0.014, 11.1676, 0.11169], [0.0138, 11.1743, 0.11171], [0.0136, 11.181, 0.11172], [0.0134, 11.1877, 0.11174], [0.0132, 11.1944, 0.11175], [0.013, 11.2011, 0.11177], [0.0128, 11.2077, 0.11178], [0.0126, 11.2144, 0.1118], [0.0124, 11.2211, 0.11182], [0.0122, 11.2278, 0.11183], [0.012, 11.2345, 0.11185], [0.0118, 11.2411, 0.11186], [0.0116, 11.2478, 0.11188], [0.0114, 11.2545, 0.11189], [0.0112, 11.2612, 0.11191], [0.0111, 11.2678, 0.11192], [0.0109, 11.2745, 0.11194], [0.0107, 11.2812, 0.11196], [0.0105, 11.2878, 0.11197], [0.0103, 11.2945, 0.11199], [0.0101, 11.3012, 0.112], [0.0099, 11.3078, 0.11202], [0.0097, 11.3145, 0.11204], [0.0095, 11.3212, 0.11205], [0.0093, 11.3278, 0.11207], [0.0091, 11.3345, 0.11208], [0.0089, 11.3412, 0.1121], [0.0087, 11.3478, 0.11212], [0.0085, 11.3545, 0.11213], [0.0083, 11.3612, 0.11215], [0.0081, 11.3678, 0.11216], [0.0079, 11.3745, 0.11218], [0.0077, 11.3811, 0.1122], [0.0075, 11.3878, 0.11221], [0.0073, 11.3945, 0.11223], [0.0071, 11.4011, 0.11224], [0.0069, 11.4078, 0.11226], [0.0067, 11.4144, 0.11228], [0.0066, 11.4211, 0.11229], [0.0064, 11.4277, 0.11231], [0.0062, 11.4344, 0.11233], [0.006, 11.441, 0.11234], [0.0058, 11.4477, 0.11236], [0.0056, 11.4543, 0.11238], [0.0054, 11.461, 0.11239], [0.0052, 11.4676, 0.11241], [0.005, 11.4743, 0.11243], [0.0048, 11.4809, 0.11244], [0.0046, 11.4876, 0.11246], [0.0044, 11.4942, 0.11248], [0.0043, 11.5009, 0.11249], [0.0041, 11.5075, 0.11251], [0.0039, 11.5142, 0.11253], [0.0037, 11.5208, 0.11254], [0.0035, 11.5274, 0.11256], [0.0033, 11.5341, 0.11258], [0.0031, 11.5407, 0.11259], [0.0029, 11.5474, 0.11261], [0.0027, 11.554, 0.11263], [0.0025, 11.5606, 0.11265],
            [0.0024, 11.5673, 0.11266], [0.0022, 11.5739, 0.11268], [0.002, 11.5806, 0.1127], [0.0018, 11.5872, 0.11271], [0.0016, 11.5938, 0.11273], [0.0014, 11.6005, 0.11275], [0.0012, 11.6071, 0.11276], [0.001, 11.6137, 0.11278], [0.0008, 11.6204, 0.1128], [0.0007, 11.627, 0.11282], [0.0005, 11.6336, 0.11283], [0.0003, 11.6403, 0.11285], [0.0001, 11.6469, 0.11287], [-0.0001, 11.6535, 0.11289], [-0.0003, 11.6601, 0.1129], [-0.0005, 11.6668, 0.11292], [-0.0006, 11.6734, 0.11294], [-0.0008, 11.68, 0.11296], [-0.001, 11.6866, 0.11297], [-0.0012, 11.6933, 0.11299], [-0.0014, 11.6999, 0.11301], [-0.0016, 11.7065, 0.11303], [-0.0018, 11.7131, 0.11304], [-0.0019, 11.7198, 0.11306], [-0.0021, 11.7264, 0.11308], [-0.0023, 11.733, 0.1131], [-0.0025, 11.7396, 0.11311], [-0.0027, 11.7462, 0.11313], [-0.0029, 11.7528, 0.11315], [-0.003, 11.7595, 0.11317], [-0.0032, 11.7661, 0.11318], [-0.0034, 11.7727, 0.1132], [-0.0036, 11.7793, 0.11322], [-0.0038, 11.7859, 0.11324], [-0.004, 11.7925, 0.11326], [-0.0041, 11.7991, 0.11327], [-0.0043, 11.8057, 0.11329], [-0.0045, 11.8124, 0.11331], [-0.0047, 11.819, 0.11333], [-0.0049, 11.8256, 0.11335], [-0.0051, 11.8322, 0.11336], [-0.0052, 11.8388, 0.11338], [-0.0054, 11.8454, 0.1134], [-0.0056, 11.852, 0.11342], [-0.0058, 11.8586, 0.11344], [-0.006, 11.8652, 0.11345], [-0.0061, 11.8718, 0.11347], [-0.0063, 11.8784, 0.11349], [-0.0065, 11.885, 0.11351], [-0.0067, 11.8916, 0.11353], [-0.0069, 11.8982, 0.11354], [-0.007, 11.9048, 0.11356], [-0.0072, 11.9114, 0.11358], [-0.0074, 11.918, 0.1136], [-0.0076, 11.9246, 0.11362], [-0.0078, 11.9312, 0.11364], [-0.0079, 11.9378, 0.11365], [-0.0081, 11.9444, 0.11367], [-0.0083, 11.951, 0.11369], [-0.0085, 11.9576, 0.11371], [-0.0087, 11.9642, 0.11373], [-0.0088, 11.9707, 0.11375], [-0.009, 11.9773, 0.11376], [-0.0092, 11.9839, 0.11378], [-0.0094, 11.9905, 0.1138], [-0.0095, 11.9971, 0.11382], [-0.0097, 12.0037, 0.11384], [-0.0099, 12.0103, 0.11386], [-0.0101, 12.0168, 0.11388], [-0.0102, 12.0234, 0.11389], [-0.0104, 12.03, 0.11391], [-0.0106, 12.0366, 0.11393], [-0.0108, 12.0431, 0.11395], [-0.011, 12.0497, 0.11397], [-0.0111, 12.0563, 0.11399], [-0.0113, 12.0629, 0.11401], [-0.0115, 12.0694, 0.11403], [-0.0117, 12.076, 0.11404], [-0.0118, 12.0826, 0.11406],
            [-0.012, 12.0891, 0.11408], [-0.0122, 12.0957, 0.1141], [-0.0124, 12.1023, 0.11412], [-0.0125, 12.1088, 0.11414], [-0.0127, 12.1154, 0.11416], [-0.0129, 12.122, 0.11418], [-0.0131, 12.1285, 0.1142], [-0.0132, 12.1351, 0.11421], [-0.0134, 12.1416, 0.11423], [-0.0136, 12.1482, 0.11425], [-0.0137, 12.1548, 0.11427]
        ];
        // length/height for age(days) - Boys
        this.lhfa_boys_p = [
            [1, 49.8842, 0.03795], [1, 50.0601, 0.03785], [1, 50.2359, 0.03775], [1, 50.4118, 0.03764], [1, 50.5876, 0.03754], [1, 50.7635, 0.03744], [1, 50.9393, 0.03734], [1, 51.1152, 0.03723], [1, 51.291, 0.03713], [1, 51.4669, 0.03703], [1, 51.6427, 0.03693], [1, 51.8186, 0.03682], [1, 51.9944, 0.03672], [1, 52.1702, 0.03662], [1, 52.3461, 0.03652], [1, 52.4978, 0.03645], [1, 52.6488, 0.03639], [1, 52.799, 0.03633], [1, 52.9483, 0.03627], [1, 53.0967, 0.03621], [1, 53.2441, 0.03615], [1, 53.3905, 0.03609], [1, 53.536, 0.03603], [1, 53.6805, 0.03597], [1, 53.8239, 0.03592], [1, 53.9664, 0.03586], [1, 54.1079, 0.03581], [1, 54.2485, 0.03575], [1, 54.3881, 0.0357], [1, 54.5268, 0.03565], [1, 54.6645, 0.03559], [1, 54.8012, 0.03554], [1, 54.9368, 0.03549], [1, 55.0714, 0.03544], [1, 55.2049, 0.03539], [1, 55.3374, 0.03534], [1, 55.4688, 0.03529], [1, 55.5992, 0.03524], [1, 55.7285, 0.0352], [1, 55.8568, 0.03515], [1, 55.9841, 0.0351], [1, 56.1104, 0.03506], [1, 56.2357, 0.03501], [1, 56.3599, 0.03496], [1, 56.4833, 0.03492], [1, 56.6056, 0.03488], [1, 56.7269, 0.03483], [1, 56.8472, 0.03479], [1, 56.9666, 0.03475], [1, 57.0851, 0.0347], [1, 57.2026, 0.03466], [1, 57.3192, 0.03462], [1, 57.4349, 0.03458], [1, 57.5497, 0.03454], [1, 57.6637, 0.0345], [1, 57.7767, 0.03446], [1, 57.8889, 0.03442], [1, 58.0003, 0.03438], [1, 58.1109, 0.03434], [1, 58.2207, 0.03431], [1, 58.3299, 0.03427], [1, 58.4384, 0.03423], [1, 58.5463, 0.0342], [1, 58.6536, 0.03416], [1, 58.7603, 0.03412], [1, 58.8664, 0.03409], [1, 58.9718, 0.03405], [1, 59.0766, 0.03402], [1, 59.1808, 0.03398], [1, 59.2843, 0.03395], [1, 59.3872, 0.03392], [1, 59.4894, 0.03388], [1, 59.591, 0.03385], [1, 59.692, 0.03382], [1, 59.7923, 0.03379], [1, 59.892, 0.03375], [1, 59.991, 0.03372], [1, 60.0894, 0.03369], [1, 60.1872, 0.03366], [1, 60.2843, 0.03363], [1, 60.3808, 0.0336], [1, 60.4767, 0.03357], [1, 60.5719, 0.03354], [1, 60.6665, 0.03351], [1, 60.7605, 0.03348], [1, 60.8539, 0.03345], [1, 60.9466, 0.03342], [1, 61.0388, 0.0334], [1, 61.1303, 0.03337], [1, 61.2212, 0.03334], [1, 61.3115, 0.03331], [1, 61.4013, 0.03329], [1, 61.4904, 0.03326], [1, 61.579, 0.03323], [1, 61.667, 0.03321], [1, 61.7543, 0.03318], [1, 61.8411, 0.03316], [1, 61.9274, 0.03313], [1, 62.013, 0.03311], [1, 62.0981, 0.03308], [1, 62.1826, 0.03306], [1, 62.2665, 0.03303], [1, 62.3499, 0.03301], [1, 62.4327, 0.03298], [1, 62.5149, 0.03296], [1, 62.5966, 0.03294], [1, 62.6778, 0.03291], [1, 62.7584, 0.03289], [1, 62.8384, 0.03287], [1, 62.918, 0.03284], [1, 62.9969, 0.03282], [1, 63.0754, 0.0328], [1, 63.1533, 0.03278], [1, 63.2307, 0.03276], [1, 63.3076, 0.03273], [1, 63.3839, 0.03271], [1, 63.4598, 0.03269], [1, 63.5351, 0.03267], [1, 63.6099, 0.03265], [1, 63.6842, 0.03263], [1, 63.758, 0.03261], [1, 63.8313, 0.03259], [1, 63.9041, 0.03257], [1, 63.9765, 0.03255], [1, 64.0483, 0.03253], [1, 64.1197, 0.03251], [1, 64.1906, 0.03249], [1, 64.261, 0.03247], [1, 64.331, 0.03245], [1, 64.4006, 0.03243], [1, 64.4697, 0.03241], [1, 64.5383, 0.03239], [1, 64.6066, 0.03238], [1, 64.6744, 0.03236], [1, 64.7418, 0.03234], [1, 64.8088, 0.03232], [1, 64.8755, 0.0323], [1, 64.9417, 0.03229], [1, 65.0075, 0.03227], [1, 65.073, 0.03225], [1, 65.138, 0.03223], [1, 65.2027, 0.03222], [1, 65.2671, 0.0322], [1, 65.331, 0.03218],
            [1, 65.3946, 0.03217], [1, 65.4579, 0.03215], [1, 65.5208, 0.03214], [1, 65.5834, 0.03212], [1, 65.6456, 0.0321], [1, 65.7075, 0.03209], [1, 65.769, 0.03207], [1, 65.8303, 0.03206], [1, 65.8912, 0.03204], [1, 65.9518, 0.03203], [1, 66.0121, 0.03201], [1, 66.0721, 0.032], [1, 66.1317, 0.03198], [1, 66.1911, 0.03197], [1, 66.2502, 0.03196], [1, 66.3089, 0.03194], [1, 66.3674, 0.03193], [1, 66.4256, 0.03191], [1, 66.4835, 0.0319], [1, 66.5412, 0.03189], [1, 66.5985, 0.03187], [1, 66.6556, 0.03186], [1, 66.7125, 0.03185], [1, 66.7691, 0.03183], [1, 66.8254, 0.03182], [1, 66.8815, 0.03181], [1, 66.9373, 0.0318], [1, 66.993, 0.03179], [1, 67.0483, 0.03177], [1, 67.1035, 0.03176], [1, 67.1584, 0.03175], [1, 67.2132, 0.03174], [1, 67.2677, 0.03173], [1, 67.3219, 0.03171], [1, 67.376, 0.0317], [1, 67.4299, 0.03169], [1, 67.4836, 0.03168], [1, 67.5371, 0.03167], [1, 67.5904, 0.03166], [1, 67.6435, 0.03165], [1, 67.6964, 0.03164], [1, 67.7491, 0.03163], [1, 67.8017, 0.03162], [1, 67.8541, 0.03161], [1, 67.9062, 0.0316], [1, 67.9583, 0.03159], [1, 68.0101, 0.03158], [1, 68.0618, 0.03157], [1, 68.1133, 0.03156], [1, 68.1647, 0.03155], [1, 68.2158, 0.03154], [1, 68.2669, 0.03153], [1, 68.3177, 0.03152], [1, 68.3685, 0.03152], [1, 68.419, 0.03151], [1, 68.4695, 0.0315], [1, 68.5198, 0.03149],
            [1, 68.5699, 0.03148], [1, 68.6199, 0.03147], [1, 68.6698, 0.03147], [1, 68.7195, 0.03146], [1, 68.7691, 0.03145], [1, 68.8186, 0.03144], [1, 68.8679, 0.03144], [1, 68.9171, 0.03143], [1, 68.9662, 0.03142], [1, 69.0152, 0.03141], [1, 69.0641, 0.03141], [1, 69.1128, 0.0314], [1, 69.1615, 0.03139], [1, 69.21, 0.03139], [1, 69.2584, 0.03138], [1, 69.3067, 0.03137], [1, 69.3549, 0.03137], [1, 69.4031, 0.03136], [1, 69.4511, 0.03136], [1, 69.499, 0.03135], [1, 69.5468, 0.03134], [1, 69.5945, 0.03134], [1, 69.6421, 0.03133], [1, 69.6896, 0.03133], [1, 69.737, 0.03132], [1, 69.7844, 0.03132], [1, 69.8316, 0.03131], [1, 69.8787, 0.03131], [1, 69.9258, 0.0313], [1, 69.9728, 0.0313], [1, 70.0197, 0.03129], [1, 70.0665, 0.03129], [1, 70.1132, 0.03128], [1, 70.1599, 0.03128], [1, 70.2064, 0.03127], [1, 70.2529, 0.03127], [1, 70.2994, 0.03126], [1, 70.3457, 0.03126], [1, 70.392, 0.03126], [1, 70.4382, 0.03125], [1, 70.4843, 0.03125], [1, 70.5304, 0.03125], [1, 70.5764, 0.03124], [1, 70.6224, 0.03124], [1, 70.6683, 0.03123], [1, 70.7141, 0.03123], [1, 70.7598, 0.03123], [1, 70.8055, 0.03122], [1, 70.8511, 0.03122], [1, 70.8967, 0.03122], [1, 70.9422, 0.03122], [1, 70.9876, 0.03121], [1, 71.033, 0.03121], [1, 71.0783, 0.03121], [1, 71.1235, 0.03121], [1, 71.1687, 0.0312], [1, 71.2138, 0.0312], [1, 71.2589, 0.0312], [1, 71.3039, 0.0312], [1, 71.3488, 0.03119], [1, 71.3937, 0.03119], [1, 71.4385, 0.03119], [1, 71.4832, 0.03119], [1, 71.5279, 0.03119], [1, 71.5725, 0.03118], [1, 71.6171, 0.03118], [1, 71.6616, 0.03118], [1, 71.706, 0.03118], [1, 71.7504, 0.03118], [1, 71.7947, 0.03118], [1, 71.839, 0.03118], [1, 71.8832, 0.03118], [1, 71.9273, 0.03117], [1, 71.9714, 0.03117], [1, 72.0154, 0.03117], [1, 72.0594, 0.03117], [1, 72.1033, 0.03117], [1, 72.1472, 0.03117], [1, 72.1909, 0.03117], [1, 72.2347, 0.03117], [1, 72.2783, 0.03117], [1, 72.3219, 0.03117], [1, 72.3655, 0.03117], [1, 72.4089, 0.03117], [1, 72.4523, 0.03117], [1, 72.4957, 0.03117], [1, 72.539, 0.03117], [1, 72.5822, 0.03117], [1, 72.6253, 0.03117], [1, 72.6684, 0.03117], [1, 72.7115, 0.03117], [1, 72.7544, 0.03117], [1, 72.7974, 0.03117], [1, 72.8402, 0.03117], [1, 72.883, 0.03117], [1, 72.9257, 0.03117], [1, 72.9684, 0.03117], [1, 73.011, 0.03117], [1, 73.0535, 0.03118], [1, 73.096, 0.03118], [1, 73.1384, 0.03118], [1, 73.1808, 0.03118], [1, 73.2231, 0.03118], [1, 73.2653, 0.03118], [1, 73.3075, 0.03118], [1, 73.3497, 0.03118], [1, 73.3917, 0.03119], [1, 73.4337, 0.03119], [1, 73.4757, 0.03119], [1, 73.5176, 0.03119], [1, 73.5594, 0.03119], [1, 73.6012, 0.03119], [1, 73.6429, 0.0312], [1, 73.6845, 0.0312], [1, 73.7261, 0.0312], [1, 73.7677, 0.0312], [1, 73.8091, 0.0312], [1, 73.8506, 0.03121], [1, 73.8919, 0.03121], [1, 73.9333, 0.03121], [1, 73.9745, 0.03121], [1, 74.0157, 0.03122], [1, 74.0569, 0.03122], [1, 74.0979, 0.03122], [1, 74.139, 0.03122], [1, 74.18, 0.03123], [1, 74.2209, 0.03123], [1, 74.2618, 0.03123], [1, 74.3026, 0.03124], [1, 74.3433, 0.03124], [1, 74.3841, 0.03124], [1, 74.4247, 0.03124], [1, 74.4653, 0.03125], [1, 74.5059, 0.03125], [1, 74.5464, 0.03125], [1, 74.5868, 0.03126], [1, 74.6272, 0.03126], [1, 74.6676, 0.03126], [1, 74.7079, 0.03127], [1, 74.7481, 0.03127], [1, 74.7883, 0.03127], [1, 74.8285, 0.03128], [1, 74.8686, 0.03128], [1, 74.9086, 0.03128],
            [1, 74.9486, 0.03129], [1, 74.9886, 0.03129], [1, 75.0285, 0.0313], [1, 75.0683, 0.0313], [1, 75.1081, 0.0313], [1, 75.1479, 0.03131], [1, 75.1876, 0.03131], [1, 75.2273, 0.03132], [1, 75.2669, 0.03132], [1, 75.3065, 0.03132], [1, 75.346, 0.03133], [1, 75.3855, 0.03133], [1, 75.425, 0.03134], [1, 75.4644, 0.03134], [1, 75.5037, 0.03135], [1, 75.5431, 0.03135], [1, 75.5824, 0.03136], [1, 75.6216, 0.03136], [1, 75.6608, 0.03136], [1, 75.6999, 0.03137], [1, 75.7391, 0.03137], [1, 75.7781, 0.03138], [1, 75.8172, 0.03138], [1, 75.8562, 0.03139], [1, 75.8951, 0.03139], [1, 75.934, 0.0314], [1, 75.9729, 0.0314], [1, 76.0117, 0.03141], [1, 76.0505, 0.03141], [1, 76.0892, 0.03142], [1, 76.1279, 0.03142], [1, 76.1665, 0.03143], [1, 76.2051, 0.03143], [1, 76.2437, 0.03144], [1, 76.2822, 0.03144], [1, 76.3207, 0.03145], [1, 76.3591, 0.03146], [1, 76.3975, 0.03146], [1, 76.4358, 0.03147], [1, 76.4741, 0.03147], [1, 76.5124, 0.03148], [1, 76.5506, 0.03148], [1, 76.5888, 0.03149], [1, 76.6269, 0.03149], [1, 76.665, 0.0315], [1, 76.703, 0.03151], [1, 76.741, 0.03151], [1, 76.779, 0.03152], [1, 76.8169, 0.03152], [1, 76.8548, 0.03153], [1, 76.8926, 0.03154], [1, 76.9304, 0.03154], [1, 76.9682, 0.03155], [1, 77.0059, 0.03155], [1, 77.0435, 0.03156], [1, 77.0812, 0.03157], [1, 77.1187, 0.03157], [1, 77.1563, 0.03158], [1, 77.1938, 0.03159], [1, 77.2313, 0.03159], [1, 77.2687, 0.0316], [1, 77.306, 0.0316], [1, 77.3434, 0.03161], [1, 77.3807, 0.03162], [1, 77.4179, 0.03162], [1, 77.4551, 0.03163], [1, 77.4923, 0.03164], [1, 77.5295, 0.03164], [1, 77.5665, 0.03165], [1, 77.6036, 0.03166], [1, 77.6406, 0.03166], [1, 77.6776, 0.03167], [1, 77.7145, 0.03168], [1, 77.7514, 0.03168], [1, 77.7883, 0.03169], [1, 77.8251, 0.0317], [1, 77.8618, 0.0317], [1, 77.8986, 0.03171], [1, 77.9353, 0.03172], [1, 77.9719, 0.03172], [1, 78.0085, 0.03173], [1, 78.0451, 0.03174], [1, 78.0817, 0.03175], [1, 78.1182, 0.03175], [1, 78.1546, 0.03176], [1, 78.1911, 0.03177], [1, 78.2275, 0.03177], [1, 78.2638, 0.03178], [1, 78.3001, 0.03179], [1, 78.3364, 0.0318], [1, 78.3727, 0.0318], [1, 78.4089, 0.03181], [1, 78.4451, 0.03182], [1, 78.4812, 0.03183], [1, 78.5173, 0.03183], [1, 78.5534, 0.03184], [1, 78.5894, 0.03185], [1, 78.6254, 0.03186], [1, 78.6614, 0.03186], [1, 78.6973, 0.03187], [1, 78.7332, 0.03188], [1, 78.7691, 0.03189], [1, 78.8049, 0.03189], [1, 78.8407, 0.0319], [1, 78.8764, 0.03191], [1, 78.9122, 0.03192], [1, 78.9479, 0.03192], [1, 78.9835, 0.03193], [1, 79.0191, 0.03194], [1, 79.0547, 0.03195], [1, 79.0903, 0.03196], [1, 79.1258, 0.03196], [1, 79.1613, 0.03197], [1, 79.1968, 0.03198], [1, 79.2322, 0.03199], [1, 79.2676, 0.032], [1, 79.303, 0.032], [1, 79.3383, 0.03201], [1, 79.3736, 0.03202], [1, 79.4089, 0.03203], [1, 79.4441, 0.03204], [1, 79.4793, 0.03204], [1, 79.5145, 0.03205], [1, 79.5496, 0.03206], [1, 79.5847, 0.03207], [1, 79.6198, 0.03208], [1, 79.6548, 0.03209], [1, 79.6898, 0.03209], [1, 79.7248, 0.0321], [1, 79.7598, 0.03211], [1, 79.7947, 0.03212], [1, 79.8296, 0.03213], [1, 79.8644, 0.03214], [1, 79.8993, 0.03214], [1, 79.9341, 0.03215], [1, 79.9688, 0.03216], [1, 80.0036, 0.03217], [1, 80.0383, 0.03218], [1, 80.0729, 0.03219], [1, 80.1076, 0.0322], [1, 80.1422, 0.0322], [1, 80.1768, 0.03221], [1, 80.2113, 0.03222], [1, 80.2459, 0.03223],
            [1, 80.2804, 0.03224], [1, 80.3148, 0.03225], [1, 80.3493, 0.03226], [1, 80.3837, 0.03226], [1, 80.4181, 0.03227], [1, 80.4524, 0.03228], [1, 80.4867, 0.03229], [1, 80.521, 0.0323], [1, 80.5553, 0.03231], [1, 80.5895, 0.03232], [1, 80.6237, 0.03233], [1, 80.6578, 0.03234], [1, 80.692, 0.03234], [1, 80.7261, 0.03235], [1, 80.7602, 0.03236], [1, 80.7942, 0.03237], [1, 80.8282, 0.03238], [1, 80.8622, 0.03239], [1, 80.8961, 0.0324], [1, 80.9301, 0.03241], [1, 80.964, 0.03242], [1, 80.9978, 0.03243], [1, 81.0317, 0.03244], [1, 81.0655, 0.03245], [1, 81.0992, 0.03245], [1, 81.133, 0.03246], [1, 81.1667, 0.03247], [1, 81.2004, 0.03248], [1, 81.234, 0.03249], [1, 81.2677, 0.0325], [1, 81.3013, 0.03251], [1, 81.3348, 0.03252], [1, 81.3684, 0.03253], [1, 81.4019, 0.03254], [1, 81.4353, 0.03255], [1, 81.4688, 0.03256], [1, 81.5022, 0.03257], [1, 81.5356, 0.03258], [1, 81.569, 0.03259], [1, 81.6023, 0.0326], [1, 81.6356, 0.03261], [1, 81.6689, 0.03261], [1, 81.7021, 0.03262], [1, 81.7353, 0.03263], [1, 81.7685, 0.03264], [1, 81.8017, 0.03265], [1, 81.8348, 0.03266], [1, 81.8679, 0.03267], [1, 81.9009, 0.03268], [1, 81.934, 0.03269], [1, 81.967, 0.0327], [1, 82, 0.03271], [1, 82.0329, 0.03272], [1, 82.0659, 0.03273], [1, 82.0987, 0.03274], [1, 82.1316, 0.03275], [1, 82.1644, 0.03276], [1, 82.1973, 0.03277], [1, 82.23, 0.03278], [1, 82.2628, 0.03279], [1, 82.2955, 0.0328], [1, 82.3282, 0.03281], [1, 82.3609, 0.03282], [1, 82.3935, 0.03283], [1, 82.4261, 0.03284], [1, 82.4587, 0.03285], [1, 82.4912, 0.03286], [1, 82.5237, 0.03287], [1, 82.5562, 0.03288], [1, 82.5887, 0.03289], [1, 82.6211, 0.0329], [1, 82.6535, 0.03291], [1, 82.6859, 0.03292], [1, 82.7182, 0.03293], [1, 82.7505, 0.03294], [1, 82.7828, 0.03295], [1, 82.8151, 0.03296], [1, 82.8473, 0.03297], [1, 82.8795, 0.03298], [1, 82.9117, 0.03299], [1, 82.9438, 0.033], [1, 82.9759, 0.03301], [1, 83.008, 0.03302], [1, 83.04, 0.03303], [1, 83.0721, 0.03304], [1, 83.1041, 0.03305], [1, 83.136, 0.03306], [1, 83.168, 0.03308], [1, 83.1999, 0.03309], [1, 83.2318, 0.0331], [1, 83.2637, 0.03311], [1, 83.2955, 0.03312], [1, 83.3273, 0.03313], [1, 83.3591, 0.03314], [1, 83.3908, 0.03315], [1, 83.4226, 0.03316], [1, 83.4543, 0.03317], [1, 83.4859, 0.03318], [1, 83.5176, 0.03319], [1, 83.5492, 0.0332], [1, 83.5808, 0.03321], [1, 83.6124, 0.03322], [1, 83.6439, 0.03323], [1, 83.6754, 0.03324], [1, 83.7069, 0.03325], [1, 83.7384, 0.03326], [1, 83.7698, 0.03327], [1, 83.8012, 0.03329], [1, 83.8326, 0.0333], [1, 83.864, 0.03331], [1, 83.8953, 0.03332], [1, 83.9267, 0.03333], [1, 83.9579, 0.03334], [1, 83.9892, 0.03335], [1, 84.0205, 0.03336], [1, 84.0517, 0.03337], [1, 84.0829, 0.03338], [1, 84.114, 0.03339], [1, 84.1452, 0.0334], [1, 84.1763, 0.03341], [1, 84.2074, 0.03342], [1, 84.2385, 0.03344], [1, 84.2695, 0.03345], [1, 84.3006, 0.03346], [1, 84.3316, 0.03347], [1, 84.3626, 0.03348], [1, 84.3935, 0.03349], [1, 84.4245, 0.0335], [1, 84.4554, 0.03351], [1, 84.4862, 0.03352], [1, 84.5171, 0.03353], [1, 84.5479, 0.03354], [1, 84.5787, 0.03356], [1, 84.6095, 0.03357], [1, 84.6403, 0.03358], [1, 84.671, 0.03359], [1, 84.7017, 0.0336], [1, 84.7324, 0.03361], [1, 84.7631, 0.03362], [1, 84.7937, 0.03363], [1, 84.8243, 0.03364], [1, 84.8549, 0.03365], [1, 84.8855, 0.03367], [1, 84.916, 0.03368], [1, 84.9465, 0.03369], [1, 84.977, 0.0337], [1, 85.0075, 0.03371], [1, 85.0379, 0.03372], [1, 85.0683, 0.03373], [1, 85.0987, 0.03374], [1, 85.1291, 0.03375], [1, 85.1594, 0.03377], [1, 85.1897, 0.03378], [1, 85.22, 0.03379], [1, 85.2503, 0.0338], [1, 85.2805, 0.03381], [1, 85.3108, 0.03382], [1, 85.341, 0.03383], [1, 85.3711, 0.03384], [1, 85.4013, 0.03385], [1, 85.4314, 0.03387], [1, 85.4615, 0.03388], [1, 85.4916, 0.03389], [1, 85.5217, 0.0339], [1, 85.5517, 0.03391], [1, 85.5817, 0.03392], [1, 85.6117, 0.03393], [1, 85.6417, 0.03394], [1, 85.6716, 0.03396], [1, 85.7015, 0.03397], [1, 85.7314, 0.03398], [1, 85.7613, 0.03399], [1, 85.7912, 0.034], [1, 85.821, 0.03401], [1, 85.8508, 0.03402], [1, 85.8806, 0.03404], [1, 85.9104, 0.03405], [1, 85.9401, 0.03406], [1, 85.9698, 0.03407], [1, 85.9995, 0.03408], [1, 86.0292, 0.03409], [1, 86.0589, 0.0341], [1, 86.0885, 0.03411], [1, 86.1181, 0.03413], [1, 86.1477, 0.03414], [1, 86.1773, 0.03415], [1, 86.2068, 0.03416], [1, 86.2363, 0.03417], [1, 86.2659, 0.03418], [1, 86.2954, 0.03419], [1, 86.3248, 0.03421], [1, 86.3543, 0.03422], [1, 86.3837, 0.03423], [1, 86.4131, 0.03424], [1, 86.4425, 0.03425], [1, 86.4719, 0.03426], [1, 86.5012, 0.03427], [1, 86.5306, 0.03429], [1, 86.5599, 0.0343], [1, 86.5892, 0.03431], [1, 86.6184, 0.03432], [1, 86.6477, 0.03433],
            [1, 86.6769, 0.03434], [1, 86.7061, 0.03435], [1, 86.7353, 0.03437], [1, 86.7645, 0.03438], [1, 86.7937, 0.03439], [1, 86.8228, 0.0344], [1, 86.8519, 0.03441], [1, 86.881, 0.03442], [1, 86.9101, 0.03443], [1, 86.9392, 0.03445], [1, 86.9682, 0.03446], [1, 86.9972, 0.03447], [1, 87.0262, 0.03448], [1, 87.0552, 0.03449], [1, 87.0842, 0.0345], [1, 87.1131, 0.03451], [1, 87.142, 0.03453], [1, 87.1709, 0.03454], [1, 87.1998, 0.03455], [1, 87.2287, 0.03456], [1, 87.2575, 0.03457], [1, 87.2863, 0.03458], [1, 87.3151, 0.03459], [1, 87.3439, 0.03461], [1, 87.3727, 0.03462], [1, 87.4014, 0.03463], [1, 87.4302, 0.03464], [1, 87.4589, 0.03465], [1, 87.4876, 0.03466], [1, 87.5162, 0.03467], [1, 87.5449, 0.03469], [1, 87.5735, 0.0347], [1, 87.6021, 0.03471], [1, 87.6307, 0.03472], [1, 87.6593, 0.03473], [1, 87.6878, 0.03474], [1, 87.7164, 0.03475], [1, 87.7449, 0.03477], [1, 87.7734, 0.03478], [1, 87.8018, 0.03479], [1, 87.1303, 0.03508]
        ];
        // Head for age(days) - Boys
        this.hcfa_boys_p = [
            [1, 34.4618, 0.03686], [1, 34.562, 0.03656], [1, 34.6622, 0.03625], [1, 34.7625, 0.03595], [1, 34.8627, 0.03564], [1, 34.9629, 0.03533], [1, 35.0631, 0.03503], [1, 35.1634, 0.03472], [1, 35.2636, 0.03441], [1, 35.3638, 0.03411], [1, 35.464, 0.0338], [1, 35.5643, 0.0335], [1, 35.6645, 0.03319], [1, 35.7647, 0.03288], [1, 35.8649, 0.03258], [1, 35.9652, 0.03248], [1, 36.0632, 0.03239], [1, 36.159, 0.0323], [1, 36.2526, 0.03221], [1, 36.3441, 0.03213], [1, 36.4338, 0.03205], [1, 36.5216, 0.03197], [1, 36.6078, 0.03189], [1, 36.6922, 0.03182], [1, 36.7751, 0.03175], [1, 36.8566, 0.03168], [1, 36.9366, 0.03161], [1, 37.0152, 0.03154], [1, 37.0926, 0.03148], [1, 37.1687, 0.03141], [1, 37.2435, 0.03135], [1, 37.3172, 0.03129], [1, 37.3898, 0.03123], [1, 37.4612, 0.03118], [1, 37.5316, 0.03112], [1, 37.601, 0.03107], [1, 37.6694, 0.03101], [1, 37.7368, 0.03096], [1, 37.8034, 0.03091], [1, 37.869, 0.03086], [1, 37.9338, 0.03081], [1, 37.9978, 0.03076], [1, 38.0609, 0.03072], [1, 38.1233, 0.03067], [1, 38.185, 0.03062], [1, 38.2459, 0.03058], [1, 38.3061, 0.03054], [1, 38.3655, 0.03049], [1, 38.4243, 0.03045], [1, 38.4824, 0.03041], [1, 38.5399, 0.03037], [1, 38.5968, 0.03033], [1, 38.653, 0.03029], [1, 38.7087, 0.03025], [1, 38.7638, 0.03021], [1, 38.8183, 0.03018], [1, 38.8724, 0.03014], [1, 38.9258, 0.0301], [1, 38.9788, 0.03007], [1, 39.0313, 0.03003], [1, 39.0834, 0.03], [1, 39.1349, 0.02997], [1, 39.1861, 0.02993], [1, 39.2368, 0.0299], [1, 39.2871, 0.02987], [1, 39.3369, 0.02984], [1, 39.3863, 0.02981], [1, 39.4353, 0.02978], [1, 39.4838, 0.02975], [1, 39.532, 0.02972], [1, 39.5797, 0.02969], [1, 39.6271, 0.02966], [1, 39.674, 0.02963], [1, 39.7206, 0.02961], [1, 39.7668, 0.02958], [1, 39.8127, 0.02955], [1, 39.8581, 0.02953], [1, 39.9033, 0.0295], [1, 39.948, 0.02948], [1, 39.9924, 0.02945], [1, 40.0365, 0.02943], [1, 40.0803, 0.0294], [1, 40.1237, 0.02938], [1, 40.1668, 0.02936], [1, 40.2096, 0.02933], [1, 40.2521, 0.02931], [1, 40.2943, 0.02929], [1, 40.3362, 0.02927], [1, 40.3778, 0.02925], [1, 40.4191, 0.02922], [1, 40.4601, 0.0292], [1, 40.5008, 0.02918], [1, 40.5413, 0.02916], [1, 40.5815, 0.02914], [1, 40.6214, 0.02912], [1, 40.6611, 0.0291], [1, 40.7005, 0.02908], [1, 40.7396, 0.02907], [1, 40.7785, 0.02905], [1, 40.8172, 0.02903], [1, 40.8555, 0.02901], [1, 40.8936, 0.02899], [1, 40.9315, 0.02898], [1, 40.9691, 0.02896], [1, 41.0065, 0.02894], [1, 41.0436, 0.02893], [1, 41.0805, 0.02891], [1, 41.1172, 0.02889], [1, 41.1536, 0.02888], [1, 41.1898, 0.02886], [1, 41.2257, 0.02885], [1, 41.2615, 0.02883], [1, 41.297, 0.02882], [1, 41.3323, 0.0288], [1, 41.3673, 0.02879], [1, 41.4022, 0.02877], [1, 41.4368, 0.02876], [1, 41.4712, 0.02875], [1, 41.5054, 0.02873], [1, 41.5394, 0.02872], [1, 41.5731, 0.02871], [1, 41.6067, 0.02869], [1, 41.6401, 0.02868], [1, 41.6732, 0.02867], [1, 41.7062, 0.02865], [1, 41.7389, 0.02864], [1, 41.7715, 0.02863], [1, 41.8038, 0.02862], [1, 41.836, 0.02861], [1, 41.868, 0.02859], [1, 41.8997, 0.02858], [1, 41.9313, 0.02857], [1, 41.9627, 0.02856], [1, 41.9939, 0.02855], [1, 42.0249, 0.02854], [1, 42.0557, 0.02853], [1, 42.0864, 0.02852], [1, 42.1168, 0.02851], [1, 42.1471, 0.0285], [1, 42.1772, 0.02849], [1, 42.2071, 0.02848], [1, 42.2368, 0.02847], [1, 42.2664, 0.02846], [1, 42.2957, 0.02845], [1, 42.3249, 0.02844],
            [1, 42.354, 0.02843], [1, 42.3828, 0.02842], [1, 42.4115, 0.02841], [1, 42.44, 0.0284], [1, 42.4684, 0.02839], [1, 42.4965, 0.02839], [1, 42.5246, 0.02838], [1, 42.5524, 0.02837], [1, 42.5801, 0.02836], [1, 42.6076, 0.02835], [1, 42.6349, 0.02835], [1, 42.6621, 0.02834], [1, 42.6892, 0.02833], [1, 42.716, 0.02832], [1, 42.7427, 0.02832], [1, 42.7693, 0.02831], [1, 42.7957, 0.0283], [1, 42.8219, 0.02829], [1, 42.848, 0.02829], [1, 42.874, 0.02828], [1, 42.8997, 0.02827], [1, 42.9254, 0.02827], [1, 42.9509, 0.02826], [1, 42.9762, 0.02825], [1, 43.0014, 0.02825], [1, 43.0264, 0.02824], [1, 43.0513, 0.02823], [1, 43.0761, 0.02823], [1, 43.1007, 0.02822], [1, 43.1252, 0.02822], [1, 43.1495, 0.02821], [1, 43.1737, 0.0282], [1, 43.1978, 0.0282], [1, 43.2217, 0.02819], [1, 43.2455, 0.02819], [1, 43.2691, 0.02818], [1, 43.2927, 0.02818], [1, 43.316, 0.02817], [1, 43.3393, 0.02817], [1, 43.3624, 0.02816], [1, 43.3854, 0.02816], [1, 43.4083, 0.02815], [1, 43.431, 0.02815], [1, 43.4536, 0.02814], [1, 43.4761, 0.02814], [1, 43.4984, 0.02813], [1, 43.5206, 0.02813], [1, 43.5427, 0.02812], [1, 43.5647, 0.02812], [1, 43.5865, 0.02811], [1, 43.6082, 0.02811], [1, 43.6298, 0.0281], [1, 43.6513, 0.0281], [1, 43.6727, 0.0281], [1, 43.6939, 0.02809], [1, 43.715, 0.02809], [1, 43.736, 0.02808], [1, 43.7569, 0.02808], [1, 43.7777, 0.02808], [1, 43.7983, 0.02807], [1, 43.8188, 0.02807], [1, 43.8393, 0.02807], [1, 43.8596, 0.02806], [1, 43.8798, 0.02806], [1, 43.8998, 0.02806], [1, 43.9198, 0.02805], [1, 43.9397, 0.02805], [1, 43.9594, 0.02805], [1, 43.9791, 0.02804], [1, 43.9986, 0.02804], [1, 44.0181, 0.02804], [1, 44.0374, 0.02803], [1, 44.0566, 0.02803], [1, 44.0757, 0.02803], [1, 44.0947, 0.02802], [1, 44.1136, 0.02802], [1, 44.1325, 0.02802], [1, 44.1512, 0.02801], [1, 44.1698, 0.02801], [1, 44.1883, 0.02801], [1, 44.2067, 0.02801], [1, 44.225, 0.028], [1, 44.2432, 0.028], [1, 44.2613, 0.028], [1, 44.2793, 0.028], [1, 44.2972, 0.02799], [1, 44.315, 0.02799], [1, 44.3328, 0.02799], [1, 44.3504, 0.02799], [1, 44.3679, 0.02798], [1, 44.3854, 0.02798], [1, 44.4027, 0.02798], [1, 44.42, 0.02798], [1, 44.4372, 0.02798], [1, 44.4543, 0.02797], [1, 44.4713, 0.02797], [1, 44.4882, 0.02797], [1, 44.505, 0.02797], [1, 44.5217, 0.02797], [1, 44.5384, 0.02796], [1, 44.5549, 0.02796], [1, 44.5714, 0.02796], [1, 44.5878, 0.02796], [1, 44.6041, 0.02796], [1, 44.6203, 0.02795], [1, 44.6365, 0.02795], [1, 44.6525, 0.02795], [1, 44.6685, 0.02795], [1, 44.6844, 0.02795], [1, 44.7002, 0.02795], [1, 44.716, 0.02794], [1, 44.7316, 0.02794], [1, 44.7472, 0.02794], [1, 44.7627, 0.02794], [1, 44.7781, 0.02794], [1, 44.7935, 0.02794], [1, 44.8088, 0.02794], [1, 44.824, 0.02793], [1, 44.8391, 0.02793], [1, 44.8542, 0.02793], [1, 44.8691, 0.02793], [1, 44.884, 0.02793], [1, 44.8989, 0.02793], [1, 44.9136, 0.02793], [1, 44.9283, 0.02793], [1, 44.9429, 0.02792], [1, 44.9575, 0.02792], [1, 44.972, 0.02792], [1, 44.9864, 0.02792], [1, 45.0007, 0.02792], [1, 45.015, 0.02792], [1, 45.0292, 0.02792], [1, 45.0433, 0.02792], [1, 45.0573, 0.02792], [1, 45.0713, 0.02791], [1, 45.0853, 0.02791], [1, 45.0991, 0.02791], [1, 45.1129, 0.02791], [1, 45.1267, 0.02791], [1, 45.1403, 0.02791], [1, 45.1539, 0.02791], [1, 45.1674, 0.02791], [1, 45.1809, 0.02791], [1, 45.1943, 0.02791], [1, 45.2077, 0.02791], [1, 45.2209, 0.02791],
            [1, 45.2341, 0.0279], [1, 45.2473, 0.0279], [1, 45.2604, 0.0279], [1, 45.2734, 0.0279], [1, 45.2864, 0.0279], [1, 45.2993, 0.0279], [1, 45.3121, 0.0279], [1, 45.3249, 0.0279], [1, 45.3377, 0.0279], [1, 45.3503, 0.0279], [1, 45.3629, 0.0279], [1, 45.3755, 0.0279], [1, 45.388, 0.0279], [1, 45.4004, 0.0279], [1, 45.4128, 0.0279], [1, 45.4251, 0.0279], [1, 45.4374, 0.02789], [1, 45.4496, 0.02789], [1, 45.4618, 0.02789], [1, 45.4739, 0.02789], [1, 45.4859, 0.02789], [1, 45.4979, 0.02789], [1, 45.5098, 0.02789], [1, 45.5217, 0.02789], [1, 45.5336, 0.02789], [1, 45.5453, 0.02789], [1, 45.5571, 0.02789], [1, 45.5687, 0.02789], [1, 45.5803, 0.02789], [1, 45.5919, 0.02789], [1, 45.6034, 0.02789], [1, 45.6149, 0.02789], [1, 45.6263, 0.02789], [1, 45.6376, 0.02789], [1, 45.6489, 0.02789], [1, 45.6602, 0.02789], [1, 45.6714, 0.02789], [1, 45.6826, 0.02789], [1, 45.6937, 0.02789], [1, 45.7047, 0.02789], [1, 45.7158, 0.02789], [1, 45.7267, 0.02789], [1, 45.7376, 0.02789], [1, 45.7485, 0.02789], [1, 45.7593, 0.02789], [1, 45.7701, 0.02789], [1, 45.7808, 0.02789], [1, 45.7915, 0.02789], [1, 45.8022, 0.02789], [1, 45.8128, 0.02789], [1, 45.8233, 0.02788], [1, 45.8338, 0.02788], [1, 45.8443, 0.02788], [1, 45.8547, 0.02788], [1, 45.8651, 0.02788], [1, 45.8754, 0.02788], [1, 45.8857, 0.02788], [1, 45.8959, 0.02788], [1, 45.9061, 0.02788], [1, 45.9163, 0.02788], [1, 45.9264, 0.02788], [1, 45.9364, 0.02788], [1, 45.9465, 0.02788], [1, 45.9565, 0.02788], [1, 45.9664, 0.02788], [1, 45.9763, 0.02788], [1, 45.9862, 0.02788], [1, 45.996, 0.02788], [1, 46.0058, 0.02788], [1, 46.0155, 0.02788], [1, 46.0252, 0.02788], [1, 46.0349, 0.02789], [1, 46.0445, 0.02789], [1, 46.0541, 0.02789], [1, 46.0637, 0.02789], [1, 46.0732, 0.02789], [1, 46.0827, 0.02789], [1, 46.0921, 0.02789], [1, 46.1015, 0.02789], [1, 46.1109, 0.02789], [1, 46.1202, 0.02789], [1, 46.1295, 0.02789],
            [1, 46.1387, 0.02789], [1, 46.148, 0.02789], [1, 46.1572, 0.02789], [1, 46.1663, 0.02789], [1, 46.1754, 0.02789], [1, 46.1845, 0.02789], [1, 46.1935, 0.02789], [1, 46.2025, 0.02789], [1, 46.2115, 0.02789], [1, 46.2204, 0.02789], [1, 46.2294, 0.02789], [1, 46.2382, 0.02789], [1, 46.2471, 0.02789], [1, 46.2559, 0.02789], [1, 46.2646, 0.02789], [1, 46.2734, 0.02789], [1, 46.2821, 0.02789], [1, 46.2908, 0.02789], [1, 46.2994, 0.02789], [1, 46.308, 0.02789], [1, 46.3166, 0.02789], [1, 46.3251, 0.02789], [1, 46.3337, 0.02789], [1, 46.3421, 0.02789], [1, 46.3506, 0.02789], [1, 46.359, 0.02789], [1, 46.3674, 0.02789], [1, 46.3758, 0.02789], [1, 46.3841, 0.02789], [1, 46.3924, 0.0279], [1, 46.4007, 0.0279], [1, 46.409, 0.0279], [1, 46.4172, 0.0279], [1, 46.4254, 0.0279], [1, 46.4335, 0.0279], [1, 46.4417, 0.0279], [1, 46.4498, 0.0279], [1, 46.4578, 0.0279], [1, 46.4659, 0.0279], [1, 46.4739, 0.0279], [1, 46.4819, 0.0279], [1, 46.4899, 0.0279], [1, 46.4978, 0.0279], [1, 46.5057, 0.0279], [1, 46.5136, 0.0279], [1, 46.5215, 0.0279], [1, 46.5293, 0.0279], [1, 46.5371, 0.0279], [1, 46.5449, 0.0279], [1, 46.5527, 0.0279], [1, 46.5604, 0.0279], [1, 46.5681, 0.0279], [1, 46.5758, 0.02791], [1, 46.5834, 0.02791], [1, 46.591, 0.02791], [1, 46.5987, 0.02791], [1, 46.6062, 0.02791], [1, 46.6138, 0.02791], [1, 46.6213, 0.02791], [1, 46.6288, 0.02791], [1, 46.6363, 0.02791], [1, 46.6438, 0.02791], [1, 46.6512, 0.02791], [1, 46.6586, 0.02791], [1, 46.666, 0.02791], [1, 46.6734, 0.02791], [1, 46.6807, 0.02791], [1, 46.688, 0.02791], [1, 46.6953, 0.02791], [1, 46.7026, 0.02791], [1, 46.7098, 0.02792], [1, 46.7171, 0.02792], [1, 46.7243, 0.02792], [1, 46.7314, 0.02792], [1, 46.7386, 0.02792], [1, 46.7457, 0.02792], [1, 46.7529, 0.02792], [1, 46.76, 0.02792], [1, 46.767, 0.02792], [1, 46.7741, 0.02792], [1, 46.7811, 0.02792], [1, 46.7881, 0.02792], [1, 46.7951, 0.02792],
            [1, 46.8021, 0.02792], [1, 46.809, 0.02792], [1, 46.816, 0.02792], [1, 46.8229, 0.02793], [1, 46.8298, 0.02793], [1, 46.8366, 0.02793], [1, 46.8435, 0.02793], [1, 46.8503, 0.02793], [1, 46.8571, 0.02793], [1, 46.8639, 0.02793], [1, 46.8707, 0.02793], [1, 46.8775, 0.02793], [1, 46.8842, 0.02793], [1, 46.8909, 0.02793], [1, 46.8976, 0.02793], [1, 46.9043, 0.02793], [1, 46.911, 0.02793], [1, 46.9176, 0.02794], [1, 46.9242, 0.02794], [1, 46.9308, 0.02794], [1, 46.9374, 0.02794], [1, 46.944, 0.02794], [1, 46.9505, 0.02794], [1, 46.9571, 0.02794], [1, 46.9636, 0.02794], [1, 46.9701, 0.02794], [1, 46.9766, 0.02794], [1, 46.9831, 0.02794], [1, 46.9895, 0.02794], [1, 46.996, 0.02794], [1, 47.0024, 0.02795], [1, 47.0088, 0.02795], [1, 47.0152, 0.02795], [1, 47.0215, 0.02795], [1, 47.0279, 0.02795], [1, 47.0342, 0.02795], [1, 47.0405, 0.02795], [1, 47.0468, 0.02795], [1, 47.0531, 0.02795], [1, 47.0594, 0.02795], [1, 47.0657, 0.02795], [1, 47.0719, 0.02795], [1, 47.0781, 0.02795], [1, 47.0843, 0.02796], [1, 47.0905, 0.02796], [1, 47.0967, 0.02796], [1, 47.1029, 0.02796], [1, 47.109, 0.02796], [1, 47.1152, 0.02796], [1, 47.1213, 0.02796], [1, 47.1274, 0.02796], [1, 47.1335, 0.02796], [1, 47.1396, 0.02796], [1, 47.1456, 0.02796], [1, 47.1517, 0.02796], [1, 47.1577, 0.02797], [1, 47.1637, 0.02797], [1, 47.1697, 0.02797], [1, 47.1757, 0.02797], [1, 47.1817, 0.02797], [1, 47.1877, 0.02797], [1, 47.1936, 0.02797], [1, 47.1995, 0.02797], [1, 47.2055, 0.02797], [1, 47.2114, 0.02797], [1, 47.2173, 0.02797], [1, 47.2232, 0.02797], [1, 47.229, 0.02798], [1, 47.2349, 0.02798], [1, 47.2407, 0.02798], [1, 47.2466, 0.02798], [1, 47.2524, 0.02798], [1, 47.2582, 0.02798], [1, 47.264, 0.02798], [1, 47.2698, 0.02798], [1, 47.2755, 0.02798], [1, 47.2813, 0.02798], [1, 47.287, 0.02798], [1, 47.2928, 0.02799], [1, 47.2985, 0.02799], [1, 47.3042, 0.02799], [1, 47.3099, 0.02799],
            [1, 47.3156, 0.02799], [1, 47.3213, 0.02799], [1, 47.3269, 0.02799], [1, 47.3326, 0.02799], [1, 47.3382, 0.02799], [1, 47.3438, 0.02799], [1, 47.3494, 0.028], [1, 47.3551, 0.028], [1, 47.3606, 0.028], [1, 47.3662, 0.028], [1, 47.3718, 0.028], [1, 47.3774, 0.028], [1, 47.3829, 0.028], [1, 47.3884, 0.028], [1, 47.394, 0.028], [1, 47.3995, 0.028], [1, 47.405, 0.028], [1, 47.4105, 0.02801], [1, 47.416, 0.02801], [1, 47.4215, 0.02801], [1, 47.4269, 0.02801], [1, 47.4324, 0.02801], [1, 47.4378, 0.02801], [1, 47.4432, 0.02801], [1, 47.4487, 0.02801], [1, 47.4541, 0.02801], [1, 47.4595, 0.02801], [1, 47.4649, 0.02802], [1, 47.4703, 0.02802], [1, 47.4756, 0.02802], [1, 47.481, 0.02802], [1, 47.4863, 0.02802], [1, 47.4917, 0.02802], [1, 47.497, 0.02802], [1, 47.5023, 0.02802], [1, 47.5077, 0.02802], [1, 47.513, 0.02802], [1, 47.5183, 0.02803], [1, 47.5236, 0.02803], [1, 47.5288, 0.02803], [1, 47.5341, 0.02803], [1, 47.5394, 0.02803], [1, 47.5446, 0.02803], [1, 47.5498, 0.02803], [1, 47.5551, 0.02803], [1, 47.5603, 0.02803], [1, 47.5655, 0.02804], [1, 47.5707, 0.02804], [1, 47.5759, 0.02804], [1, 47.5811, 0.02804], [1, 47.5863, 0.02804], [1, 47.5915, 0.02804], [1, 47.5966, 0.02804], [1, 47.6018, 0.02804], [1, 47.6069, 0.02804], [1, 47.612, 0.02805], [1, 47.6172, 0.02805], [1, 47.6223, 0.02805], [1, 47.6274, 0.02805], [1, 47.6325, 0.02805], [1, 47.6376, 0.02805], [1, 47.6427, 0.02805], [1, 47.6478, 0.02805], [1, 47.6528, 0.02805], [1, 47.6579, 0.02805], [1, 47.663, 0.02806], [1, 47.668, 0.02806], [1, 47.673, 0.02806], [1, 47.6781, 0.02806], [1, 47.6831, 0.02806], [1, 47.6881, 0.02806], [1, 47.6931, 0.02806], [1, 47.6981, 0.02806], [1, 47.7031, 0.02806], [1, 47.7081, 0.02807], [1, 47.7131, 0.02807], [1, 47.718, 0.02807], [1, 47.723, 0.02807], [1, 47.728, 0.02807], [1, 47.7329, 0.02807], [1, 47.7378, 0.02807], [1, 47.7428, 0.02807], [1, 47.7477, 0.02808], [1, 47.7526, 0.02808],
            [1, 47.7575, 0.02808], [1, 47.7624, 0.02808], [1, 47.7673, 0.02808], [1, 47.7722, 0.02808], [1, 47.7771, 0.02808], [1, 47.782, 0.02808], [1, 47.7868, 0.02808], [1, 47.7917, 0.02809], [1, 47.7965, 0.02809], [1, 47.8014, 0.02809], [1, 47.8062, 0.02809], [1, 47.811, 0.02809], [1, 47.8159, 0.02809], [1, 47.8207, 0.02809], [1, 47.8255, 0.02809], [1, 47.8303, 0.0281], [1, 47.8351, 0.0281], [1, 47.8399, 0.0281], [1, 47.8446, 0.0281], [1, 47.8494, 0.0281], [1, 47.8542, 0.0281], [1, 47.859, 0.0281], [1, 47.8637, 0.0281], [1, 47.8685, 0.0281], [1, 47.8732, 0.02811], [1, 47.8779, 0.02811], [1, 47.8827, 0.02811], [1, 47.8874, 0.02811], [1, 47.8921, 0.02811], [1, 47.8968, 0.02811], [1, 47.9015, 0.02811], [1, 47.9062, 0.02811], [1, 47.9109, 0.02812], [1, 47.9156, 0.02812], [1, 47.9202, 0.02812], [1, 47.9249, 0.02812], [1, 47.9296, 0.02812], [1, 47.9342, 0.02812], [1, 47.9389, 0.02812], [1, 47.9435, 0.02812], [1, 47.9482, 0.02813], [1, 47.9528, 0.02813], [1, 47.9574, 0.02813], [1, 47.962, 0.02813], [1, 47.9666, 0.02813], [1, 47.9713, 0.02813], [1, 47.9759, 0.02813], [1, 47.9804, 0.02813], [1, 47.985, 0.02814], [1, 47.9896, 0.02814], [1, 47.9942, 0.02814], [1, 47.9988, 0.02814], [1, 48.0033, 0.02814], [1, 48.0079, 0.02814], [1, 48.0124, 0.02814], [1, 48.017, 0.02814], [1, 48.0215, 0.02815], [1, 48.026, 0.02815], [1, 48.0306, 0.02815], [1, 48.0351, 0.02815], [1, 48.0396, 0.02815], [1, 48.0441, 0.02815], [1, 48.0486, 0.02815], [1, 48.0531, 0.02815], [1, 48.0576, 0.02816], [1, 48.0621, 0.02816], [1, 48.0666, 0.02816], [1, 48.071, 0.02816], [1, 48.0755, 0.02816], [1, 48.08, 0.02816], [1, 48.0844, 0.02816], [1, 48.0889, 0.02816], [1, 48.0933, 0.02817], [1, 48.0977, 0.02817], [1, 48.1022, 0.02817], [1, 48.1066, 0.02817], [1, 48.111, 0.02817], [1, 48.1154, 0.02817], [1, 48.1198, 0.02817], [1, 48.1242, 0.02817], [1, 48.1286, 0.02818], [1, 48.133, 0.02818], [1, 48.1374, 0.02818], [1, 48.1418, 0.02818], [1, 48.1462, 0.02818], [1, 48.1505, 0.02818], [1, 48.1549, 0.02818], [1, 48.1592, 0.02819], [1, 48.1636, 0.02819], [1, 48.1679, 0.02819], [1, 48.1723, 0.02819], [1, 48.1766, 0.02819], [1, 48.1809, 0.02819], [1, 48.1853, 0.02819], [1, 48.1896, 0.02819], [1, 48.1939, 0.0282], [1, 48.1982, 0.0282], [1, 48.2025, 0.0282], [1, 48.2068, 0.0282],
            [1, 48.2111, 0.0282], [1, 48.2153, 0.0282], [1, 48.2196, 0.0282], [1, 48.2239, 0.0282], [1, 48.2282, 0.02821], [1, 48.2324, 0.02821], [1, 48.2367, 0.02821], [1, 48.2409, 0.02821], [1, 48.2452, 0.02821], [1, 48.2494, 0.02821], [1, 48.2536, 0.02821]
        ];
        // weight for age(days) - Girls
        this.wfa_girls_p = [
            [0.3809, 3.2322, 0.14171], [0.3259, 3.1957, 0.14578], [0.3101, 3.2104, 0.14637], [0.2986, 3.2315, 0.14657], [0.2891, 3.2558, 0.14658], [0.281, 3.2821, 0.14646], [0.2737, 3.3099, 0.14626], [0.2671, 3.3388, 0.146], [0.2609, 3.3687, 0.14569], [0.2551, 3.3995, 0.14534], [0.2497, 3.4314, 0.14498], [0.2446, 3.4643, 0.14459], [0.2397, 3.4983, 0.1442], [0.2349, 3.5333, 0.1438], [0.2304, 3.5693, 0.14339], [0.226, 3.6063, 0.14299], [0.2218, 3.6438, 0.14258], [0.2177, 3.6818, 0.14218], [0.2137, 3.7201, 0.14177], [0.2099, 3.7584, 0.14138], [0.2061, 3.7968, 0.14098], [0.2024, 3.8352, 0.1406], [0.1989, 3.8735, 0.14021], [0.1954, 3.9116, 0.13984], [0.1919, 3.9495, 0.13947], [0.1886, 3.9872, 0.1391], [0.1853, 4.0247, 0.13875], [0.1821, 4.0618, 0.1384], [0.1789, 4.0987, 0.13805], [0.1758, 4.1353, 0.13771], [0.1727, 4.1716, 0.13738], [0.1697, 4.2075, 0.13706], [0.1668, 4.2431, 0.13674], [0.1638, 4.2783, 0.13643], [0.161, 4.3131, 0.13613], [0.1582, 4.3476, 0.13583], [0.1554, 4.3818, 0.13554], [0.1526, 4.4155, 0.13526], [0.1499, 4.449, 0.13498], [0.1473, 4.482, 0.1347], [0.1446, 4.5148, 0.13444], [0.142, 4.5472, 0.13418], [0.1395, 4.5793, 0.13392], [0.1369, 4.611, 0.13367], [0.1344, 4.6425, 0.13342], [0.132, 4.6736, 0.13318], [0.1295, 4.7044, 0.13295], [0.1271, 4.7349, 0.13272], [0.1247, 4.7651, 0.1325], [0.1224, 4.795, 0.13228], [0.12, 4.8245, 0.13206], [0.1177, 4.8538, 0.13185], [0.1154, 4.8828, 0.13165], [0.1132, 4.9115, 0.13145], [0.1109, 4.9399, 0.13125], [0.1087, 4.968, 0.13106], [0.1065, 4.9959, 0.13087], [0.1044, 5.0235, 0.13068], [0.1022, 5.0509, 0.1305], [0.1001, 5.078, 0.13033], [0.098, 5.1049, 0.13015], [0.0959, 5.1315, 0.12998], [0.0938, 5.158, 0.12982], [0.0918, 5.1842, 0.12966], [0.0897, 5.2102, 0.1295], [0.0877, 5.236, 0.12934], [0.0857, 5.2616, 0.12919], [0.0838, 5.287, 0.12904], [0.0818, 5.3121, 0.12889], [0.0798, 5.337, 0.12875], [0.0779, 5.3618, 0.12861], [0.076, 5.3863, 0.12847], [0.0741, 5.4107, 0.12834], [0.0722, 5.4348, 0.12821], [0.0704, 5.4587, 0.12808], [0.0685, 5.4825, 0.12795], [0.0667, 5.5061, 0.12783], [0.0648, 5.5295, 0.1277], [0.063, 5.5527, 0.12758], [0.0612, 5.5757, 0.12747], [0.0595, 5.5986, 0.12735], [0.0577, 5.6213, 0.12724], [0.0559, 5.6438, 0.12713], [0.0542, 5.6662, 0.12702], [0.0525, 5.6883, 0.12691], [0.0508, 5.7104, 0.12681], [0.049, 5.7322, 0.12671], [0.0474, 5.7539, 0.1266], [0.0457, 5.7755, 0.12651], [0.044, 5.7969, 0.12641], [0.0424, 5.8181, 0.12631], [0.0407, 5.8393, 0.12622], [0.0391, 5.8602, 0.12613], [0.0375, 5.881, 0.12604], [0.0358, 5.9017, 0.12595], [0.0342, 5.9223, 0.12586], [0.0327, 5.9427, 0.12577], [0.0311, 5.9629, 0.12569], [0.0295, 5.9831, 0.12561], [0.0279, 6.0031, 0.12553], [0.0264, 6.0229, 0.12545], [0.0249, 6.0426, 0.12537], [0.0233, 6.0622, 0.12529], [0.0218, 6.0817, 0.12522], [0.0203, 6.101, 0.12514], [0.0188, 6.1202, 0.12507], [0.0173, 6.1393, 0.125], [0.0158, 6.1582, 0.12493], [0.0144, 6.1771, 0.12486], [0.0129, 6.1958, 0.12479], [0.0114, 6.2143, 0.12472], [0.01, 6.2328, 0.12466], [0.0086, 6.2511, 0.12459], [0.0071, 6.2693, 0.12453], [0.0057, 6.2874, 0.12447], [0.0043, 6.3054, 0.12441], [0.0029, 6.3232, 0.12435], [0.0015, 6.341, 0.12429], [0.0001, 6.3586, 0.12423], [-0.0013, 6.3761, 0.12417], [-0.0026, 6.3935, 0.12412], [-0.004, 6.4108, 0.12406], [-0.0053, 6.428, 0.12401], [-0.0067, 6.445, 0.12395], [-0.008, 6.462, 0.1239], [-0.0094, 6.4788, 0.12385], [-0.0107, 6.4956, 0.1238], [-0.012, 6.5122, 0.12375], [-0.0133, 6.5288, 0.1237], [-0.0146, 6.5452, 0.12365], [-0.0159, 6.5615, 0.1236], [-0.0172, 6.5777, 0.12355], [-0.0185, 6.5939, 0.12351], [-0.0198, 6.6099, 0.12346], [-0.021, 6.6258, 0.12342], [-0.0223, 6.6416, 0.12337], [-0.0235, 6.6573, 0.12333], [-0.0248, 6.6729, 0.12329], [-0.026, 6.6884, 0.12325], [-0.0273, 6.7039, 0.12321], [-0.0285, 6.7192, 0.12317], [-0.0297, 6.7344, 0.12313], [-0.0309, 6.7495, 0.12309], [-0.0321, 6.7646, 0.12305], [-0.0333, 6.7795, 0.12301], [-0.0345, 6.7944, 0.12298], [-0.0357, 6.8091, 0.12294], [-0.0369, 6.8238, 0.12291], [-0.0381, 6.8384, 0.12287], [-0.0393, 6.8529, 0.12284], [-0.0404, 6.8673, 0.12281], [-0.0416, 6.8816, 0.12277], [-0.0428, 6.8959, 0.12274], [-0.0439, 6.91, 0.12271], [-0.045, 6.9241, 0.12268], [-0.0462, 6.9381, 0.12265], [-0.0473, 6.952, 0.12262], [-0.0484, 6.9659, 0.12259], [-0.0496, 6.9797, 0.12256], [-0.0507, 6.9934, 0.12254], [-0.0518, 7.007, 0.12251], [-0.0529, 7.0205, 0.12248], [-0.054, 7.034, 0.12246], [-0.0551, 7.0474, 0.12243], [-0.0562, 7.0607, 0.12241], [-0.0573, 7.074, 0.12238], [-0.0583, 7.0872, 0.12236], [-0.0594, 7.1003, 0.12234],
            [-0.0605, 7.1133, 0.12231], [-0.0615, 7.1263, 0.12229], [-0.0626, 7.1393, 0.12227], [-0.0637, 7.1521, 0.12225], [-0.0647, 7.1649, 0.12223], [-0.0658, 7.1776, 0.12221], [-0.0668, 7.1903, 0.12219], [-0.0678, 7.2029, 0.12217], [-0.0689, 7.2154, 0.12215], [-0.0699, 7.2279, 0.12214], [-0.0709, 7.2403, 0.12212], [-0.0719, 7.2527, 0.1221], [-0.0729, 7.265, 0.12208], [-0.0739, 7.2772, 0.12207], [-0.0749, 7.2894, 0.12205], [-0.0759, 7.3016, 0.12204], [-0.0769, 7.3136, 0.12202], [-0.0779, 7.3256, 0.12201], [-0.0789, 7.3376, 0.122], [-0.0799, 7.3495, 0.12198], [-0.0808, 7.3614, 0.12197], [-0.0818, 7.3732, 0.12196], [-0.0828, 7.3849, 0.12195], [-0.0837, 7.3966, 0.12194], [-0.0847, 7.4082, 0.12192], [-0.0857, 7.4198, 0.12191], [-0.0866, 7.4314, 0.1219], [-0.0875, 7.4429, 0.12189], [-0.0885, 7.4543, 0.12188], [-0.0894, 7.4657, 0.12188], [-0.0904, 7.477, 0.12187], [-0.0913, 7.4883, 0.12186], [-0.0922, 7.4995, 0.12185], [-0.0931, 7.5107, 0.12184], [-0.094, 7.5219, 0.12184], [-0.095, 7.533, 0.12183], [-0.0959, 7.544, 0.12182], [-0.0968, 7.5551, 0.12182], [-0.0977, 7.566, 0.12181], [-0.0986, 7.5769, 0.12181], [-0.0995, 7.5878, 0.1218], [-0.1003, 7.5986, 0.1218], [-0.1012, 7.6094, 0.12179], [-0.1021, 7.6202, 0.12179], [-0.103, 7.6309, 0.12179], [-0.1039, 7.6416, 0.12178], [-0.1047, 7.6522, 0.12178], [-0.1056, 7.6628, 0.12178], [-0.1065, 7.6733, 0.12177], [-0.1073, 7.6838, 0.12177], [-0.1082, 7.6943, 0.12177], [-0.109, 7.7047, 0.12177], [-0.1099, 7.7151, 0.12177], [-0.1107, 7.7254, 0.12177], [-0.1116, 7.7357, 0.12177], [-0.1124, 7.746, 0.12176], [-0.1132, 7.7562, 0.12176], [-0.1141, 7.7664, 0.12176], [-0.1149, 7.7766, 0.12176], [-0.1157, 7.7867, 0.12177], [-0.1165, 7.7968, 0.12177], [-0.1173, 7.8068, 0.12177], [-0.1181, 7.8169, 0.12177], [-0.119, 7.8268, 0.12177], [-0.1198, 7.8368, 0.12177], [-0.1206, 7.8467, 0.12177], [-0.1214, 7.8566, 0.12178], [-0.1222, 7.8664, 0.12178], [-0.1229, 7.8762, 0.12178], [-0.1237, 7.886, 0.12178], [-0.1245, 7.8957, 0.12179], [-0.1253, 7.9054, 0.12179], [-0.1261, 7.9151, 0.12179], [-0.1269, 7.9247, 0.1218], [-0.1276, 7.9343, 0.1218], [-0.1284, 7.9439, 0.1218], [-0.1292, 7.9534, 0.12181], [-0.1299, 7.9629, 0.12181], [-0.1307, 7.9724, 0.12182], [-0.1314, 7.9819, 0.12182], [-0.1322, 7.9913, 0.12182], [-0.1329, 8.0007, 0.12183], [-0.1337, 8.01, 0.12183], [-0.1344, 8.0193, 0.12184], [-0.1352, 8.0286, 0.12185], [-0.1359, 8.0379, 0.12185], [-0.1367, 8.0471, 0.12186], [-0.1374, 8.0563, 0.12186], [-0.1381, 8.0655, 0.12187], [-0.1388, 8.0746, 0.12187], [-0.1396, 8.0837, 0.12188], [-0.1403, 8.0928, 0.12189], [-0.141, 8.1019, 0.12189], [-0.1417, 8.1109, 0.1219], [-0.1424, 8.1199, 0.1219], [-0.1431, 8.1289, 0.12191], [-0.1438, 8.1378, 0.12192], [-0.1445, 8.1468, 0.12192], [-0.1452, 8.1557, 0.12193], [-0.1459, 8.1645, 0.12194], [-0.1466, 8.1734, 0.12194], [-0.1473, 8.1822, 0.12195], [-0.148, 8.191, 0.12196], [-0.1487, 8.1998, 0.12197], [-0.1494, 8.2085, 0.12197], [-0.1501, 8.2172, 0.12198], [-0.1507, 8.2259, 0.12199], [-0.1514, 8.2346, 0.12199], [-0.1521, 8.2432, 0.122], [-0.1528, 8.2519, 0.12201], [-0.1534, 8.2605, 0.12202], [-0.1541, 8.269, 0.12202], [-0.1547, 8.2776, 0.12203], [-0.1554, 8.2861, 0.12204], [-0.1561, 8.2946, 0.12205], [-0.1567, 8.3031, 0.12206], [-0.1574, 8.3116, 0.12206], [-0.158, 8.3201, 0.12207], [-0.1587, 8.3285, 0.12208], [-0.1593, 8.3369, 0.12209], [-0.1599, 8.3453, 0.12209], [-0.1606, 8.3536, 0.1221], [-0.1612, 8.362, 0.12211], [-0.1618, 8.3703, 0.12212], [-0.1625, 8.3786, 0.12213], [-0.1631, 8.3869, 0.12213], [-0.1637, 8.3952, 0.12214], [-0.1643, 8.4035, 0.12215], [-0.165, 8.4117, 0.12216], [-0.1656, 8.4199, 0.12217], [-0.1662, 8.4281, 0.12218], [-0.1668, 8.4363, 0.12218], [-0.1674, 8.4445, 0.12219], [-0.168, 8.4526, 0.1222], [-0.1686, 8.4607, 0.12221], [-0.1692, 8.4688, 0.12222], [-0.1698, 8.4769, 0.12222], [-0.1704, 8.485, 0.12223], [-0.171, 8.4931, 0.12224], [-0.1716, 8.5011, 0.12225], [-0.1722, 8.5092, 0.12226], [-0.1728, 8.5172, 0.12227], [-0.1734, 8.5252, 0.12227], [-0.174, 8.5332, 0.12228], [-0.1745, 8.5411, 0.12229], [-0.1751, 8.5491, 0.1223], [-0.1757, 8.557, 0.12231], [-0.1763, 8.565, 0.12231], [-0.1768, 8.5729, 0.12232], [-0.1774, 8.5808, 0.12233], [-0.178, 8.5887, 0.12234], [-0.1785, 8.5965, 0.12235],
            [-0.1791, 8.6044, 0.12235], [-0.1797, 8.6122, 0.12236], [-0.1802, 8.6201, 0.12237], [-0.1808, 8.6279, 0.12238], [-0.1813, 8.6357, 0.12239], [-0.1819, 8.6435, 0.12239], [-0.1824, 8.6512, 0.1224], [-0.183, 8.659, 0.12241], [-0.1835, 8.6667, 0.12242], [-0.1841, 8.6745, 0.12243], [-0.1846, 8.6822, 0.12243], [-0.1851, 8.6899, 0.12244], [-0.1857, 8.6976, 0.12245], [-0.1862, 8.7053, 0.12246], [-0.1867, 8.713, 0.12246], [-0.1873, 8.7207, 0.12247], [-0.1878, 8.7283, 0.12248], [-0.1883, 8.736, 0.12249], [-0.1889, 8.7436, 0.12249], [-0.1894, 8.7512, 0.1225], [-0.1899, 8.7588, 0.12251], [-0.1904, 8.7664, 0.12252], [-0.1909, 8.774, 0.12252], [-0.1914, 8.7816, 0.12253], [-0.192, 8.7892, 0.12254], [-0.1925, 8.7968, 0.12254], [-0.193, 8.8043, 0.12255], [-0.1935, 8.8119, 0.12256], [-0.194, 8.8194, 0.12256], [-0.1945, 8.8269, 0.12257], [-0.195, 8.8344, 0.12258], [-0.1955, 8.842, 0.12259], [-0.196, 8.8495, 0.12259], [-0.1965, 8.8569, 0.1226], [-0.197, 8.8644, 0.12261], [-0.1974, 8.8719, 0.12261], [-0.1979, 8.8794, 0.12262], [-0.1984, 8.8868, 0.12262], [-0.1989, 8.8943, 0.12263], [-0.1994, 8.9017, 0.12264], [-0.1999, 8.9092, 0.12264], [-0.2003, 8.9166, 0.12265], [-0.2008, 8.924, 0.12266], [-0.2013, 8.9314, 0.12266], [-0.2018, 8.9388, 0.12267], [-0.2022, 8.9462, 0.12267], [-0.2027, 8.9536, 0.12268], [-0.2032, 8.961, 0.12269], [-0.2036, 8.9684, 0.12269], [-0.2041, 8.9757, 0.1227], [-0.2046, 8.9831, 0.1227], [-0.205, 8.9904, 0.12271], [-0.2055, 8.9978, 0.12272], [-0.2059, 9.0051, 0.12272], [-0.2064, 9.0125, 0.12273], [-0.2068, 9.0198, 0.12273], [-0.2073, 9.0271, 0.12274], [-0.2077, 9.0344, 0.12274], [-0.2082, 9.0417, 0.12275], [-0.2086, 9.049, 0.12275], [-0.2091, 9.0563, 0.12276], [-0.2095, 9.0636, 0.12276], [-0.21, 9.0709, 0.12277], [-0.2104, 9.0782, 0.12277], [-0.2108, 9.0854, 0.12278], [-0.2113, 9.0927, 0.12278], [-0.2117, 9.0999, 0.12279], [-0.2121, 9.1072, 0.12279], [-0.2126, 9.1144, 0.1228], [-0.213, 9.1217, 0.1228], [-0.2134, 9.1289, 0.12281], [-0.2139, 9.1361, 0.12281], [-0.2143, 9.1434, 0.12282], [-0.2147, 9.1506, 0.12282], [-0.2151, 9.1578, 0.12282], [-0.2155, 9.165, 0.12283], [-0.216, 9.1722, 0.12283], [-0.2164, 9.1794, 0.12284], [-0.2168, 9.1866, 0.12284], [-0.2172, 9.1938, 0.12285], [-0.2176, 9.2009, 0.12285], [-0.218, 9.2081, 0.12285], [-0.2184, 9.2153, 0.12286], [-0.2188, 9.2225, 0.12286], [-0.2192, 9.2296, 0.12287], [-0.2196, 9.2368, 0.12287], [-0.22, 9.2439, 0.12287], [-0.2204, 9.2511, 0.12288], [-0.2208, 9.2582, 0.12288], [-0.2212, 9.2654, 0.12288], [-0.2216, 9.2725, 0.12289], [-0.222, 9.2796, 0.12289], [-0.2224, 9.2867, 0.12289], [-0.2228, 9.2939, 0.1229], [-0.2232, 9.301, 0.1229], [-0.2236, 9.3081, 0.1229], [-0.224, 9.3152, 0.12291], [-0.2243, 9.3223, 0.12291], [-0.2247, 9.3294, 0.12291], [-0.2251, 9.3365, 0.12292], [-0.2255, 9.3436, 0.12292], [-0.2259, 9.3507, 0.12292], [-0.2262, 9.3578, 0.12292], [-0.2266, 9.3649, 0.12293], [-0.227, 9.372, 0.12293], [-0.2274, 9.379, 0.12293], [-0.2277, 9.3861, 0.12294], [-0.2281, 9.3932, 0.12294], [-0.2285, 9.4002, 0.12294], [-0.2288, 9.4073, 0.12294], [-0.2292, 9.4144, 0.12295], [-0.2296, 9.4214, 0.12295], [-0.2299, 9.4285, 0.12295], [-0.2303, 9.4355, 0.12295], [-0.2307, 9.4426, 0.12295], [-0.231, 9.4496, 0.12296], [-0.2314, 9.4567, 0.12296], [-0.2317, 9.4637, 0.12296], [-0.2321, 9.4707, 0.12296], [-0.2324, 9.4778, 0.12296], [-0.2328, 9.4848, 0.12297], [-0.2331, 9.4918, 0.12297], [-0.2335, 9.4988, 0.12297], [-0.2338, 9.5058, 0.12297], [-0.2342, 9.5129, 0.12297], [-0.2345, 9.5199, 0.12298], [-0.2349, 9.5269, 0.12298], [-0.2352, 9.5339, 0.12298], [-0.2355, 9.5409, 0.12298], [-0.2359, 9.5479, 0.12298], [-0.2362, 9.5549, 0.12298], [-0.2366, 9.5619, 0.12299], [-0.2369, 9.5689, 0.12299], [-0.2372, 9.5759, 0.12299], [-0.2376, 9.5829, 0.12299], [-0.2379, 9.5898, 0.12299], [-0.2382, 9.5968, 0.12299], [-0.2385, 9.6038, 0.12299], [-0.2389, 9.6108, 0.123], [-0.2392, 9.6178, 0.123], [-0.2395, 9.6247, 0.123], [-0.2398, 9.6317, 0.123], [-0.2402, 9.6387, 0.123], [-0.2405, 9.6457, 0.123], [-0.2408, 9.6526, 0.123], [-0.2411, 9.6596, 0.123], [-0.2414, 9.6665, 0.12301], [-0.2418, 9.6735, 0.12301], [-0.2421, 9.6805, 0.12301], [-0.2424, 9.6874, 0.12301], [-0.2427, 9.6944, 0.12301], [-0.243, 9.7013, 0.12301], [-0.2433, 9.7083, 0.12301],
            [-0.2436, 9.7152, 0.12301], [-0.2439, 9.7222, 0.12301], [-0.2442, 9.7291, 0.12302], [-0.2446, 9.7361, 0.12302], [-0.2449, 9.743, 0.12302], [-0.2452, 9.75, 0.12302], [-0.2455, 9.7569, 0.12302], [-0.2458, 9.7638, 0.12302], [-0.2461, 9.7708, 0.12302], [-0.2464, 9.7777, 0.12302], [-0.2467, 9.7846, 0.12302], [-0.247, 9.7916, 0.12302], [-0.2472, 9.7985, 0.12303], [-0.2475, 9.8054, 0.12303], [-0.2478, 9.8124, 0.12303], [-0.2481, 9.8193, 0.12303], [-0.2484, 9.8262, 0.12303], [-0.2487, 9.8331, 0.12303], [-0.249, 9.8401, 0.12303], [-0.2493, 9.847, 0.12303], [-0.2496, 9.8539, 0.12303], [-0.2499, 9.8608, 0.12303], [-0.2501, 9.8677, 0.12303], [-0.2504, 9.8746, 0.12304], [-0.2507, 9.8816, 0.12304], [-0.251, 9.8885, 0.12304], [-0.2513, 9.8954, 0.12304], [-0.2515, 9.9023, 0.12304], [-0.2518, 9.9092, 0.12304], [-0.2521, 9.9161, 0.12304], [-0.2524, 9.923, 0.12304], [-0.2526, 9.9299, 0.12304], [-0.2529, 9.9368, 0.12304], [-0.2532, 9.9437, 0.12304], [-0.2535, 9.9506, 0.12305], [-0.2537, 9.9575, 0.12305], [-0.254, 9.9644, 0.12305], [-0.2543, 9.9713, 0.12305], [-0.2545, 9.9782, 0.12305], [-0.2548, 9.9851, 0.12305], [-0.2551, 9.992, 0.12305], [-0.2553, 9.9989, 0.12305], [-0.2556, 10.0058, 0.12305], [-0.2558, 10.0127, 0.12305], [-0.2561, 10.0196, 0.12305], [-0.2564, 10.0265, 0.12306], [-0.2566, 10.0334, 0.12306], [-0.2569, 10.0402, 0.12306], [-0.2571, 10.0471, 0.12306], [-0.2574, 10.054, 0.12306], [-0.2577, 10.0609, 0.12306], [-0.2579, 10.0678, 0.12306], [-0.2582, 10.0746, 0.12306], [-0.2584, 10.0815, 0.12306], [-0.2587, 10.0884, 0.12307], [-0.2589, 10.0953, 0.12307], [-0.2592, 10.1021, 0.12307], [-0.2594, 10.109, 0.12307], [-0.2597, 10.1159, 0.12307], [-0.2599, 10.1227, 0.12307], [-0.2601, 10.1296, 0.12307], [-0.2604, 10.1365, 0.12307], [-0.2606, 10.1433, 0.12308], [-0.2609, 10.1502, 0.12308], [-0.2611, 10.157, 0.12308], [-0.2614, 10.1639, 0.12308], [-0.2616, 10.1707, 0.12308], [-0.2618, 10.1776, 0.12308], [-0.2621, 10.1845, 0.12308], [-0.2623, 10.1913, 0.12309], [-0.2625, 10.1982, 0.12309], [-0.2628, 10.205, 0.12309], [-0.263, 10.2119, 0.12309], [-0.2632, 10.2187, 0.12309], [-0.2635, 10.2255, 0.12309], [-0.2637, 10.2324, 0.12309], [-0.2639, 10.2392, 0.1231], [-0.2642, 10.2461, 0.1231], [-0.2644, 10.2529, 0.1231], [-0.2646, 10.2597, 0.1231], [-0.2649, 10.2666, 0.1231], [-0.2651, 10.2734, 0.1231], [-0.2653, 10.2803, 0.12311], [-0.2655, 10.2871, 0.12311], [-0.2658, 10.2939, 0.12311], [-0.266, 10.3008, 0.12311], [-0.2662, 10.3076, 0.12311], [-0.2664, 10.3144, 0.12311], [-0.2666, 10.3213, 0.12312], [-0.2669, 10.3281, 0.12312], [-0.2671, 10.3349, 0.12312], [-0.2673, 10.3417, 0.12312], [-0.2675, 10.3486, 0.12312], [-0.2677, 10.3554, 0.12313], [-0.2679, 10.3622, 0.12313], [-0.2682, 10.369, 0.12313], [-0.2684, 10.3759, 0.12313], [-0.2686, 10.3827, 0.12313], [-0.2688, 10.3895, 0.12314], [-0.269, 10.3963, 0.12314], [-0.2692, 10.4031, 0.12314], [-0.2694, 10.41, 0.12314], [-0.2696, 10.4168, 0.12314], [-0.2698, 10.4236, 0.12315], [-0.27, 10.4304, 0.12315], [-0.2702, 10.4372, 0.12315], [-0.2705, 10.444, 0.12315], [-0.2707, 10.4508, 0.12316], [-0.2709, 10.4577, 0.12316], [-0.2711, 10.4645, 0.12316], [-0.2713, 10.4713, 0.12316], [-0.2715, 10.4781, 0.12316], [-0.2717, 10.4849, 0.12317], [-0.2719, 10.4917, 0.12317], [-0.2721, 10.4985, 0.12317], [-0.2723, 10.5053, 0.12317], [-0.2725, 10.5121, 0.12318], [-0.2727, 10.5189, 0.12318], [-0.2729, 10.5257, 0.12318], [-0.273, 10.5325, 0.12319], [-0.2732, 10.5393, 0.12319], [-0.2734, 10.5461, 0.12319], [-0.2736, 10.5529, 0.12319], [-0.2738, 10.5597, 0.1232], [-0.274, 10.5665, 0.1232], [-0.2742, 10.5733, 0.1232], [-0.2744, 10.5801, 0.1232], [-0.2746, 10.5869, 0.12321], [-0.2748, 10.5937, 0.12321], [-0.275, 10.6005, 0.12321], [-0.2751, 10.6073, 0.12322], [-0.2753, 10.6141, 0.12322], [-0.2755, 10.6209, 0.12322], [-0.2757, 10.6277, 0.12323], [-0.2759, 10.6345, 0.12323], [-0.2761, 10.6413, 0.12323], [-0.2763, 10.6481, 0.12324], [-0.2764, 10.6549, 0.12324], [-0.2766, 10.6617, 0.12324], [-0.2768, 10.6685, 0.12325], [-0.277, 10.6753, 0.12325], [-0.2772, 10.6821, 0.12325], [-0.2773, 10.6889, 0.12326], [-0.2775, 10.6957, 0.12326], [-0.2777, 10.7025, 0.12326], [-0.2779, 10.7093, 0.12327], [-0.278, 10.7161, 0.12327], [-0.2782, 10.7229, 0.12327], [-0.2784, 10.7297, 0.12328],
            [-0.2786, 10.7365, 0.12328], [-0.2787, 10.7433, 0.12328], [-0.2789, 10.7501, 0.12329], [-0.2791, 10.7569, 0.12329], [-0.2793, 10.7637, 0.1233], [-0.2794, 10.7705, 0.1233], [-0.2796, 10.7773, 0.1233], [-0.2798, 10.7841, 0.12331], [-0.2799, 10.7909, 0.12331], [-0.2801, 10.7977, 0.12332], [-0.2803, 10.8045, 0.12332], [-0.2804, 10.8113, 0.12332], [-0.2806, 10.8181, 0.12333], [-0.2808, 10.8249, 0.12333], [-0.2809, 10.8317, 0.12334], [-0.2811, 10.8385, 0.12334], [-0.2813, 10.8453, 0.12335], [-0.2814, 10.8521, 0.12335], [-0.2816, 10.8589, 0.12336], [-0.2818, 10.8657, 0.12336], [-0.2819, 10.8725, 0.12336], [-0.2821, 10.8793, 0.12337], [-0.2822, 10.8861, 0.12337], [-0.2824, 10.8929, 0.12338], [-0.2826, 10.8997, 0.12338], [-0.2827, 10.9065, 0.12339], [-0.2829, 10.9133, 0.12339], [-0.283, 10.9202, 0.1234], [-0.2832, 10.927, 0.1234], [-0.2834, 10.9338, 0.12341], [-0.2835, 10.9406, 0.12341], [-0.2837, 10.9474, 0.12342], [-0.2838, 10.9542, 0.12342], [-0.284, 10.961, 0.12343], [-0.2841, 10.9679, 0.12343], [-0.2843, 10.9747, 0.12344], [-0.2844, 10.9815, 0.12344], [-0.2846, 10.9883, 0.12345], [-0.2847, 10.9951, 0.12345], [-0.2849, 11.0019, 0.12346], [-0.285, 11.0088, 0.12346], [-0.2852, 11.0156, 0.12347], [-0.2853, 11.0224, 0.12347], [-0.2855, 11.0292, 0.12348], [-0.2856, 11.036, 0.12348], [-0.2858, 11.0429, 0.12349], [-0.2859, 11.0497, 0.1235], [-0.2861, 11.0565, 0.1235], [-0.2862, 11.0633, 0.12351], [-0.2864, 11.0702, 0.12351], [-0.2865, 11.077, 0.12352], [-0.2866, 11.0838, 0.12352], [-0.2868, 11.0906, 0.12353], [-0.2869, 11.0975, 0.12353], [-0.2871, 11.1043, 0.12354], [-0.2872, 11.1111, 0.12355], [-0.2874, 11.118, 0.12355], [-0.2875, 11.1248, 0.12356], [-0.2876, 11.1316, 0.12356], [-0.2878, 11.1384, 0.12357], [-0.2879, 11.1453, 0.12358], [-0.2881, 11.1521, 0.12358], [-0.2882, 11.1589, 0.12359], [-0.2883, 11.1658, 0.12359], [-0.2885, 11.1726, 0.1236], [-0.2886, 11.1795, 0.12361], [-0.2887, 11.1863, 0.12361], [-0.2889, 11.1931, 0.12362], [-0.289, 11.2, 0.12362], [-0.2891, 11.2068, 0.12363], [-0.2893, 11.2137, 0.12364], [-0.2894, 11.2205, 0.12364], [-0.2895, 11.2273, 0.12365], [-0.2897, 11.2342, 0.12366], [-0.2898, 11.241, 0.12366], [-0.2899, 11.2479, 0.12367], [-0.2901, 11.2547, 0.12367], [-0.2902, 11.2616, 0.12368], [-0.2903, 11.2684, 0.12369], [-0.2905, 11.2753, 0.12369], [-0.2906, 11.2821, 0.1237], [-0.2907, 11.2889, 0.12371], [-0.2909, 11.2958, 0.12371], [-0.291, 11.3026, 0.12372], [-0.2911, 11.3095, 0.12373], [-0.2912, 11.3163, 0.12373], [-0.2914, 11.3232, 0.12374], [-0.2915, 11.33, 0.12375], [-0.2916, 11.3369, 0.12375], [-0.2917, 11.3438, 0.12376], [-0.2919, 11.3506, 0.12377], [-0.292, 11.3575, 0.12377], [-0.2921, 11.3643, 0.12378], [-0.2922, 11.3712, 0.12379], [-0.2924, 11.378, 0.12379], [-0.2925, 11.3849, 0.1238], [-0.2926, 11.3917, 0.12381], [-0.2927, 11.3986, 0.12382], [-0.2928, 11.4055, 0.12382],
            [-0.293, 11.4123, 0.12383], [-0.2931, 11.4192, 0.12384], [-0.2932, 11.426, 0.12384], [-0.2933, 11.4329, 0.12385], [-0.2934, 11.4397, 0.12386], [-0.2936, 11.4466, 0.12387], [-0.2937, 11.4535, 0.12387], [-0.2938, 11.4603, 0.12388], [-0.2939, 11.4672, 0.12389], [-0.294, 11.4741, 0.12389], [-0.2942, 11.4809, 0.1239]
        ];
        // length/height for age(days) - Girls
        this.lhfa_girls_p = [
            [1, 49.1477, 0.0379], [1, 49.3166, 0.03783], [1, 49.4854, 0.03776], [1, 49.6543, 0.0377], [1, 49.8232, 0.03763], [1, 49.9921, 0.03756], [1, 50.1609, 0.03749], [1, 50.3298, 0.03742], [1, 50.4987, 0.03735], [1, 50.6676, 0.03728], [1, 50.8365, 0.03722], [1, 51.0053, 0.03715], [1, 51.1742, 0.03708], [1, 51.3431, 0.03701], [1, 51.512, 0.03694], [1, 51.651, 0.0369], [1, 51.7895, 0.03687], [1, 51.9272, 0.03683], [1, 52.0641, 0.0368], [1, 52.2002, 0.03676], [1, 52.3353, 0.03673], [1, 52.4695, 0.03669], [1, 52.6027, 0.03666], [1, 52.7349, 0.03663], [1, 52.8661, 0.0366], [1, 52.9963, 0.03656], [1, 53.1255, 0.03653], [1, 53.2537, 0.0365], [1, 53.3809, 0.03647], [1, 53.5072, 0.03644], [1, 53.6326, 0.03641], [1, 53.7571, 0.03638], [1, 53.8806, 0.03636], [1, 54.0031, 0.03633], [1, 54.1247, 0.0363], [1, 54.2454, 0.03627], [1, 54.3651, 0.03625], [1, 54.4839, 0.03622], [1, 54.6018, 0.03619], [1, 54.7187, 0.03617], [1, 54.8348, 0.03614], [1, 54.9499, 0.03612], [1, 55.0642, 0.03609], [1, 55.1777, 0.03607], [1, 55.2903, 0.03604], [1, 55.4021, 0.03602], [1, 55.513, 0.036], [1, 55.623, 0.03597], [1, 55.7322, 0.03595], [1, 55.8406, 0.03593], [1, 55.9482, 0.03591], [1, 56.0549, 0.03588], [1, 56.1609, 0.03586], [1, 56.266, 0.03584], [1, 56.3704, 0.03582], [1, 56.4739, 0.0358], [1, 56.5767, 0.03578], [1, 56.6788, 0.03576], [1, 56.78, 0.03574], [1, 56.8806, 0.03572], [1, 56.9805, 0.0357], [1, 57.0796, 0.03568], [1, 57.1782, 0.03566], [1, 57.2761, 0.03564], [1, 57.3733, 0.03562], [1, 57.4699, 0.03561], [1, 57.5659, 0.03559], [1, 57.6613, 0.03557], [1, 57.756, 0.03555], [1, 57.8501, 0.03553], [1, 57.9436, 0.03552], [1, 58.0365, 0.0355], [1, 58.1288, 0.03548], [1, 58.2206, 0.03547], [1, 58.3117, 0.03545], [1, 58.4022, 0.03543], [1, 58.4922, 0.03542], [1, 58.5816, 0.0354], [1, 58.6705, 0.03539], [1, 58.7588, 0.03537], [1, 58.8465, 0.03536], [1, 58.9337, 0.03534], [1, 59.0204, 0.03533], [1, 59.1066, 0.03531], [1, 59.1922, 0.0353], [1, 59.2773, 0.03528], [1, 59.3619, 0.03527], [1, 59.4459, 0.03526], [1, 59.5295, 0.03524], [1, 59.6126, 0.03523], [1, 59.6952, 0.03521], [1, 59.7773, 0.0352], [1, 59.8589, 0.03519], [1, 59.9401, 0.03517], [1, 60.0209, 0.03516], [1, 60.1011, 0.03515], [1, 60.181, 0.03514], [1, 60.2603, 0.03512], [1, 60.3393, 0.03511], [1, 60.4178, 0.0351], [1, 60.4958, 0.03509], [1, 60.5734, 0.03508], [1, 60.6506, 0.03506], [1, 60.7273, 0.03505], [1, 60.8036, 0.03504], [1, 60.8795, 0.03503], [1, 60.955, 0.03502], [1, 61.0301, 0.03501], [1, 61.1047, 0.035], [1, 61.1789, 0.03499], [1, 61.2527, 0.03497], [1, 61.3261, 0.03496], [1, 61.3991, 0.03495], [1, 61.4717, 0.03494], [1, 61.5439, 0.03493], [1, 61.6156, 0.03492], [1, 61.687, 0.03491], [1, 61.758, 0.0349], [1, 61.8286, 0.03489], [1, 61.8988, 0.03488], [1, 61.9686, 0.03487], [1, 62.0381, 0.03487], [1, 62.1071, 0.03486], [1, 62.1758, 0.03485], [1, 62.2441, 0.03484], [1, 62.312, 0.03483], [1, 62.3795, 0.03482], [1, 62.4467, 0.03481], [1, 62.5135, 0.0348], [1, 62.58, 0.03479], [1, 62.6461, 0.03479], [1, 62.7118, 0.03478], [1, 62.7772, 0.03477], [1, 62.8423, 0.03476], [1, 62.907, 0.03475], [1, 62.9714, 0.03475], [1, 63.0354, 0.03474], [1, 63.0991, 0.03473], [1, 63.1626, 0.03472], [1, 63.2257, 0.03471], [1, 63.2884, 0.03471], [1, 63.3509, 0.0347], [1, 63.4131, 0.03469], [1, 63.475, 0.03469], [1, 63.5365, 0.03468],
            [1, 63.5978, 0.03467], [1, 63.6588, 0.03467], [1, 63.7196, 0.03466], [1, 63.78, 0.03465], [1, 63.8402, 0.03465], [1, 63.9, 0.03464], [1, 63.9597, 0.03463], [1, 64.019, 0.03463], [1, 64.0781, 0.03462], [1, 64.137, 0.03461], [1, 64.1956, 0.03461], [1, 64.2539, 0.0346], [1, 64.312, 0.0346], [1, 64.3699, 0.03459], [1, 64.4276, 0.03459], [1, 64.485, 0.03458], [1, 64.5422, 0.03457], [1, 64.5991, 0.03457], [1, 64.6559, 0.03456], [1, 64.7124, 0.03456], [1, 64.7688, 0.03455], [1, 64.8249, 0.03455], [1, 64.8808, 0.03454], [1, 64.9366, 0.03454], [1, 64.9921, 0.03453], [1, 65.0474, 0.03453], [1, 65.1026, 0.03453], [1, 65.1576, 0.03452], [1, 65.2123, 0.03452], [1, 65.267, 0.03451], [1, 65.3214, 0.03451], [1, 65.3757, 0.0345], [1, 65.4298, 0.0345], [1, 65.4837, 0.0345], [1, 65.5375, 0.03449], [1, 65.5911, 0.03449], [1, 65.6445, 0.03449], [1, 65.6978, 0.03448], [1, 65.751, 0.03448], [1, 65.804, 0.03447], [1, 65.8568, 0.03447], [1, 65.9095, 0.03447], [1, 65.9621, 0.03447], [1, 66.0145, 0.03446], [1, 66.0668, 0.03446], [1, 66.1189, 0.03446], [1, 66.1709, 0.03445], [1, 66.2228, 0.03445], [1, 66.2745, 0.03445],
            [1, 66.3261, 0.03444], [1, 66.3776, 0.03444], [1, 66.429, 0.03444], [1, 66.4802, 0.03444], [1, 66.5313, 0.03444], [1, 66.5823, 0.03443], [1, 66.6331, 0.03443], [1, 66.6839, 0.03443], [1, 66.7345, 0.03443], [1, 66.785, 0.03442], [1, 66.8354, 0.03442], [1, 66.8857, 0.03442], [1, 66.9359, 0.03442], [1, 66.9859, 0.03442], [1, 67.0359, 0.03442], [1, 67.0858, 0.03441], [1, 67.1355, 0.03441], [1, 67.1852, 0.03441], [1, 67.2347, 0.03441], [1, 67.2842, 0.03441], [1, 67.3335, 0.03441], [1, 67.3828, 0.03441], [1, 67.432, 0.03441], [1, 67.481, 0.0344], [1, 67.53, 0.0344], [1, 67.5789, 0.0344], [1, 67.6277, 0.0344], [1, 67.6764, 0.0344], [1, 67.725, 0.0344], [1, 67.7735, 0.0344], [1, 67.8219, 0.0344], [1, 67.8703, 0.0344], [1, 67.9185, 0.0344], [1, 67.9667, 0.0344], [1, 68.0148, 0.0344], [1, 68.0628, 0.0344], [1, 68.1107, 0.0344], [1, 68.1585, 0.0344], [1, 68.2063, 0.0344], [1, 68.254, 0.0344], [1, 68.3016, 0.0344], [1, 68.3491, 0.0344], [1, 68.3965, 0.0344], [1, 68.4439, 0.0344], [1, 68.4911, 0.0344], [1, 68.5383, 0.0344], [1, 68.5855, 0.0344], [1, 68.6325, 0.0344], [1, 68.6795, 0.0344], [1, 68.7264, 0.0344], [1, 68.7732, 0.0344], [1, 68.82, 0.0344], [1, 68.8666, 0.0344], [1, 68.9133, 0.0344], [1, 68.9598, 0.0344], [1, 69.0063, 0.0344], [1, 69.0527, 0.0344], [1, 69.099, 0.03441], [1, 69.1452, 0.03441], [1, 69.1914, 0.03441], [1, 69.2376, 0.03441], [1, 69.2836, 0.03441], [1, 69.3296, 0.03441], [1, 69.3755, 0.03441], [1, 69.4214, 0.03441], [1, 69.4672, 0.03441], [1, 69.5129, 0.03442], [1, 69.5585, 0.03442], [1, 69.6041, 0.03442], [1, 69.6496, 0.03442], [1, 69.6951, 0.03442], [1, 69.7405, 0.03442], [1, 69.7858, 0.03443], [1, 69.8311, 0.03443], [1, 69.8763, 0.03443], [1, 69.9215, 0.03443], [1, 69.9666, 0.03443], [1, 70.0116, 0.03444], [1, 70.0566, 0.03444], [1, 70.1015, 0.03444], [1, 70.1463, 0.03444], [1, 70.1911, 0.03444], [1, 70.2358, 0.03445], [1, 70.2805, 0.03445], [1, 70.3251, 0.03445], [1, 70.3697, 0.03445], [1, 70.4142, 0.03445], [1, 70.4586, 0.03446], [1, 70.503, 0.03446], [1, 70.5474, 0.03446], [1, 70.5917, 0.03446], [1, 70.6359, 0.03447], [1, 70.68, 0.03447], [1, 70.7241, 0.03447], [1, 70.7682, 0.03448], [1, 70.8122, 0.03448], [1, 70.8561, 0.03448], [1, 70.9, 0.03448], [1, 70.9439, 0.03449], [1, 70.9876, 0.03449], [1, 71.0314, 0.03449], [1, 71.075, 0.0345], [1, 71.1187, 0.0345], [1, 71.1622, 0.0345], [1, 71.2057, 0.0345], [1, 71.2492, 0.03451], [1, 71.2926, 0.03451], [1, 71.3359, 0.03451], [1, 71.3792, 0.03452], [1, 71.4224, 0.03452], [1, 71.4656, 0.03452], [1, 71.5088, 0.03453], [1, 71.5518, 0.03453], [1, 71.5949, 0.03453], [1, 71.6378, 0.03454], [1, 71.6808, 0.03454], [1, 71.7236, 0.03454], [1, 71.7664, 0.03455], [1, 71.8092, 0.03455], [1, 71.8519, 0.03456], [1, 71.8946, 0.03456], [1, 71.9372, 0.03456], [1, 71.9798, 0.03457], [1, 72.0223, 0.03457], [1, 72.0647, 0.03457], [1, 72.1071, 0.03458], [1, 72.1495, 0.03458], [1, 72.1918, 0.03459], [1, 72.234, 0.03459], [1, 72.2762, 0.03459], [1, 72.3184, 0.0346], [1, 72.3605, 0.0346], [1, 72.4025, 0.03461], [1, 72.4445, 0.03461], [1, 72.4865, 0.03461], [1, 72.5284, 0.03462], [1, 72.5702, 0.03462], [1, 72.612, 0.03463], [1, 72.6538, 0.03463], [1, 72.6955, 0.03464], [1, 72.7372, 0.03464], [1, 72.7788, 0.03464],
            [1, 72.8203, 0.03465], [1, 72.8618, 0.03465], [1, 72.9033, 0.03466], [1, 72.9447, 0.03466], [1, 72.9861, 0.03467], [1, 73.0274, 0.03467], [1, 73.0686, 0.03468], [1, 73.1099, 0.03468], [1, 73.151, 0.03469], [1, 73.1922, 0.03469], [1, 73.2332, 0.03469], [1, 73.2743, 0.0347], [1, 73.3152, 0.0347], [1, 73.3562, 0.03471], [1, 73.3971, 0.03471], [1, 73.4379, 0.03472], [1, 73.4787, 0.03472], [1, 73.5195, 0.03473], [1, 73.5602, 0.03473], [1, 73.6008, 0.03474], [1, 73.6414, 0.03474], [1, 73.682, 0.03475], [1, 73.7225, 0.03475], [1, 73.763, 0.03476], [1, 73.8034, 0.03476], [1, 73.8438, 0.03477], [1, 73.8842, 0.03477], [1, 73.9245, 0.03478], [1, 73.9647, 0.03478], [1, 74.0049, 0.03479], [1, 74.0451, 0.03479], [1, 74.0852, 0.0348], [1, 74.1253, 0.0348], [1, 74.1653, 0.03481], [1, 74.2053, 0.03482], [1, 74.2452, 0.03482], [1, 74.2851, 0.03483], [1, 74.325, 0.03483], [1, 74.3648, 0.03484], [1, 74.4045, 0.03484], [1, 74.4443, 0.03485], [1, 74.4839, 0.03485], [1, 74.5236, 0.03486], [1, 74.5632, 0.03486], [1, 74.6027, 0.03487], [1, 74.6422, 0.03488], [1, 74.6817, 0.03488], [1, 74.7211, 0.03489], [1, 74.7605, 0.03489], [1, 74.7998, 0.0349], [1, 74.8391, 0.0349], [1, 74.8784, 0.03491], [1, 74.9176, 0.03491], [1, 74.9567, 0.03492], [1, 74.9959, 0.03493], [1, 75.0349, 0.03493], [1, 75.074, 0.03494], [1, 75.113, 0.03494], [1, 75.1519, 0.03495], [1, 75.1908, 0.03495], [1, 75.2297, 0.03496], [1, 75.2686, 0.03497], [1, 75.3073, 0.03497], [1, 75.3461, 0.03498], [1, 75.3848, 0.03498], [1, 75.4235, 0.03499], [1, 75.4621, 0.035], [1, 75.5007, 0.035], [1, 75.5392, 0.03501], [1, 75.5777, 0.03501], [1, 75.6162, 0.03502], [1, 75.6546, 0.03503], [1, 75.693, 0.03503], [1, 75.7313, 0.03504], [1, 75.7696, 0.03504], [1, 75.8079, 0.03505], [1, 75.8461, 0.03506], [1, 75.8843, 0.03506], [1, 75.9224, 0.03507], [1, 75.9605, 0.03507], [1, 75.9986, 0.03508], [1, 76.0366, 0.03509], [1, 76.0746, 0.03509], [1, 76.1125, 0.0351], [1, 76.1504, 0.03511], [1, 76.1883, 0.03511], [1, 76.2261, 0.03512], [1, 76.2639, 0.03512], [1, 76.3016, 0.03513], [1, 76.3393, 0.03514], [1, 76.377, 0.03514], [1, 76.4146, 0.03515], [1, 76.4522, 0.03516], [1, 76.4897, 0.03516], [1, 76.5272, 0.03517], [1, 76.5647, 0.03518], [1, 76.6021, 0.03518], [1, 76.6395, 0.03519], [1, 76.6769, 0.03519], [1, 76.7142, 0.0352], [1, 76.7515, 0.03521], [1, 76.7887, 0.03521], [1, 76.8259, 0.03522], [1, 76.8631, 0.03523], [1, 76.9002, 0.03523], [1, 76.9373, 0.03524], [1, 76.9744, 0.03525], [1, 77.0114, 0.03525], [1, 77.0484, 0.03526], [1, 77.0853, 0.03527], [1, 77.1222, 0.03527], [1, 77.1591, 0.03528], [1, 77.1959, 0.03529], [1, 77.2327, 0.03529], [1, 77.2695, 0.0353], [1, 77.3062, 0.0353], [1, 77.3429, 0.03531], [1, 77.3796, 0.03532], [1, 77.4162, 0.03532], [1, 77.4528, 0.03533], [1, 77.4893, 0.03534], [1, 77.5258, 0.03534], [1, 77.5623, 0.03535], [1, 77.5988, 0.03536], [1, 77.6352, 0.03536], [1, 77.6716, 0.03537], [1, 77.7079, 0.03538], [1, 77.7442, 0.03538], [1, 77.7805, 0.03539], [1, 77.8167, 0.0354], [1, 77.8529, 0.0354], [1, 77.8891, 0.03541], [1, 77.9252, 0.03542], [1, 77.9613, 0.03543], [1, 77.9974, 0.03543], [1, 78.0334, 0.03544], [1, 78.0694, 0.03545], [1, 78.1054, 0.03545], [1, 78.1413, 0.03546], [1, 78.1772, 0.03547], [1, 78.2131, 0.03547],
            [1, 78.249, 0.03548], [1, 78.2848, 0.03549], [1, 78.3205, 0.03549], [1, 78.3563, 0.0355], [1, 78.392, 0.03551], [1, 78.4276, 0.03551], [1, 78.4633, 0.03552], [1, 78.4989, 0.03553], [1, 78.5345, 0.03553], [1, 78.57, 0.03554], [1, 78.6055, 0.03555], [1, 78.641, 0.03556], [1, 78.6764, 0.03556], [1, 78.7118, 0.03557], [1, 78.7472, 0.03558], [1, 78.7826, 0.03558], [1, 78.8179, 0.03559], [1, 78.8532, 0.0356], [1, 78.8884, 0.0356], [1, 78.9236, 0.03561], [1, 78.9588, 0.03562], [1, 78.994, 0.03562], [1, 79.0291, 0.03563], [1, 79.0642, 0.03564], [1, 79.0993, 0.03565], [1, 79.1343, 0.03565], [1, 79.1693, 0.03566], [1, 79.2042, 0.03567], [1, 79.2392, 0.03567], [1, 79.2741, 0.03568], [1, 79.3089, 0.03569], [1, 79.3438, 0.03569], [1, 79.3786, 0.0357], [1, 79.4134, 0.03571], [1, 79.4481, 0.03572], [1, 79.4828, 0.03572], [1, 79.5175, 0.03573], [1, 79.5521, 0.03574], [1, 79.5868, 0.03574], [1, 79.6213, 0.03575], [1, 79.6559, 0.03576], [1, 79.6904, 0.03577], [1, 79.7249, 0.03577], [1, 79.7594, 0.03578], [1, 79.7938, 0.03579], [1, 79.8282, 0.03579], [1, 79.8626, 0.0358], [1, 79.8969, 0.03581], [1, 79.9312, 0.03582], [1, 79.9655, 0.03582], [1, 79.9998, 0.03583], [1, 80.034, 0.03584], [1, 80.0682, 0.03584], [1, 80.1023, 0.03585], [1, 80.1365, 0.03586], [1, 80.1706, 0.03587], [1, 80.2046, 0.03587], [1, 80.2387, 0.03588], [1, 80.2727, 0.03589], [1, 80.3067, 0.03589], [1, 80.3406, 0.0359], [1, 80.3745, 0.03591], [1, 80.4084, 0.03592], [1, 80.4423, 0.03592], [1, 80.4761, 0.03593], [1, 80.5099, 0.03594], [1, 80.5437, 0.03594], [1, 80.5774, 0.03595], [1, 80.6112, 0.03596], [1, 80.6448, 0.03597], [1, 80.6785, 0.03597], [1, 80.7121, 0.03598], [1, 80.7457, 0.03599], [1, 80.7793, 0.036], [1, 80.8128, 0.036], [1, 80.8464, 0.03601], [1, 80.8798, 0.03602], [1, 80.9133, 0.03602], [1, 80.9467, 0.03603], [1, 80.9801, 0.03604], [1, 81.0135, 0.03605], [1, 81.0468, 0.03605], [1, 81.0802, 0.03606], [1, 81.1134, 0.03607], [1, 81.1467, 0.03608], [1, 81.1799, 0.03608], [1, 81.2131, 0.03609], [1, 81.2463, 0.0361], [1, 81.2795, 0.03611], [1, 81.3126, 0.03611], [1, 81.3457, 0.03612], [1, 81.3788, 0.03613], [1, 81.4118, 0.03613], [1, 81.4448, 0.03614], [1, 81.4778, 0.03615], [1, 81.5108, 0.03616], [1, 81.5437, 0.03616], [1, 81.5766, 0.03617], [1, 81.6095, 0.03618], [1, 81.6423, 0.03619], [1, 81.6752, 0.03619], [1, 81.708, 0.0362], [1, 81.7407, 0.03621], [1, 81.7735, 0.03622], [1, 81.8062, 0.03622], [1, 81.8389, 0.03623], [1, 81.8715, 0.03624], [1, 81.9042, 0.03624], [1, 81.9368, 0.03625], [1, 81.9694, 0.03626], [1, 82.0019, 0.03627], [1, 82.0345, 0.03627], [1, 82.067, 0.03628], [1, 82.0994, 0.03629], [1, 82.1319, 0.0363], [1, 82.1643, 0.0363], [1, 82.1967, 0.03631], [1, 82.2291, 0.03632], [1, 82.2614, 0.03633], [1, 82.2938, 0.03633], [1, 82.3261, 0.03634], [1, 82.3583, 0.03635], [1, 82.3906, 0.03636], [1, 82.4228, 0.03636], [1, 82.455, 0.03637], [1, 82.4872, 0.03638], [1, 82.5193, 0.03639], [1, 82.5514, 0.03639], [1, 82.5835, 0.0364], [1, 82.6156, 0.03641], [1, 82.6476, 0.03642], [1, 82.6796, 0.03642], [1, 82.7116, 0.03643], [1, 82.7436, 0.03644], [1, 82.7755, 0.03645], [1, 82.8074, 0.03645], [1, 82.8393, 0.03646], [1, 82.8712, 0.03647], [1, 82.903, 0.03648], [1, 82.9348, 0.03648], [1, 82.9666, 0.03649], [1, 82.9984, 0.0365],
            [1, 83.0301, 0.0365], [1, 83.0618, 0.03651], [1, 83.0935, 0.03652], [1, 83.1251, 0.03653], [1, 83.1568, 0.03653], [1, 83.1884, 0.03654], [1, 83.22, 0.03655], [1, 83.2515, 0.03656], [1, 83.2831, 0.03656], [1, 83.3146, 0.03657], [1, 83.3461, 0.03658], [1, 83.3775, 0.03659], [1, 83.4089, 0.03659], [1, 83.4403, 0.0366], [1, 83.4717, 0.03661], [1, 83.5031, 0.03662], [1, 83.5344, 0.03662], [1, 83.5657, 0.03663], [1, 83.597, 0.03664], [1, 83.6283, 0.03665], [1, 83.6595, 0.03665], [1, 83.6907, 0.03666], [1, 83.7219, 0.03667], [1, 83.753, 0.03668], [1, 83.7842, 0.03668], [1, 83.8153, 0.03669], [1, 83.8464, 0.0367], [1, 83.8774, 0.03671], [1, 83.9085, 0.03671], [1, 83.9395, 0.03672], [1, 83.9705, 0.03673], [1, 84.0014, 0.03674], [1, 84.0324, 0.03674], [1, 84.0633, 0.03675], [1, 84.0941, 0.03676], [1, 84.125, 0.03677], [1, 84.1558, 0.03677], [1, 84.1867, 0.03678], [1, 84.2174, 0.03679], [1, 84.2482, 0.0368], [1, 84.2789, 0.0368], [1, 84.3096, 0.03681], [1, 84.3403, 0.03682], [1, 84.371, 0.03683], [1, 84.4016, 0.03683], [1, 84.4323, 0.03684], [1, 84.4628, 0.03685], [1, 84.4934, 0.03686], [1, 84.5239, 0.03686], [1, 84.5545, 0.03687], [1, 84.585, 0.03688], [1, 84.6154, 0.03689], [1, 84.6459, 0.03689], [1, 84.6763, 0.0369], [1, 84.7067, 0.03691], [1, 84.737, 0.03692], [1, 84.7674, 0.03692], [1, 84.7977, 0.03693], [1, 84.828, 0.03694], [1, 84.8583, 0.03695], [1, 84.8885, 0.03695], [1, 84.9188, 0.03696], [1, 84.949, 0.03697], [1, 84.9791, 0.03698], [1, 85.0093, 0.03698], [1, 85.0394, 0.03699], [1, 85.0695, 0.037], [1, 85.0996, 0.03701], [1, 85.1297, 0.03701], [1, 85.1597, 0.03702], [1, 85.1897, 0.03703], [1, 85.2197, 0.03704], [1, 85.2497, 0.03704], [1, 85.2796, 0.03705], [1, 85.3096, 0.03706], [1, 85.3395, 0.03706], [1, 85.3693, 0.03707], [1, 85.3992, 0.03708], [1, 85.429, 0.03709], [1, 85.4588, 0.03709], [1, 85.4886, 0.0371], [1, 85.5184, 0.03711], [1, 85.5481, 0.03712], [1, 85.5778, 0.03712], [1, 85.6075, 0.03713], [1, 85.6372, 0.03714], [1, 85.6668, 0.03715], [1, 85.6964, 0.03715], [1, 85.726, 0.03716], [1, 85.7556, 0.03717], [1, 85.7852, 0.03718], [1, 85.8147, 0.03718], [1, 85.8442, 0.03719], [1, 85.8737, 0.0372], [1, 85.9032, 0.03721], [1, 85.9326, 0.03721], [1, 85.9621, 0.03722], [1, 85.9915, 0.03723], [1, 86.0208, 0.03724], [1, 86.0502, 0.03724], [1, 86.0795, 0.03725], [1, 86.1089, 0.03726],
            [1, 86.1381, 0.03727], [1, 86.1674, 0.03727], [1, 86.1967, 0.03728], [1, 86.2259, 0.03729], [1, 86.2551, 0.03729], [1, 86.2843, 0.0373], [1, 86.3134, 0.03731], [1, 86.3426, 0.03732], [1, 86.3717, 0.03732], [1, 86.4008, 0.03733], [1, 85.7299, 0.03764]
        ];
        // Head for age(days) - Girls
        this.hcfa_girls_p = [
            [1, 33.8787, 0.03496], [1, 33.975, 0.03479], [1, 34.0714, 0.03461], [1, 34.1677, 0.03444], [1, 34.264, 0.03426], [1, 34.3603, 0.03409], [1, 34.4566, 0.03391], [1, 34.5529, 0.03374], [1, 34.6493, 0.03356], [1, 34.7456, 0.03339], [1, 34.8419, 0.03321], [1, 34.9382, 0.03304], [1, 35.0345, 0.03286], [1, 35.1309, 0.03269], [1, 35.2272, 0.03251], [1, 35.3211, 0.03248], [1, 35.413, 0.03245], [1, 35.5028, 0.03242], [1, 35.5906, 0.03239], [1, 35.6766, 0.03236], [1, 35.7607, 0.03233], [1, 35.843, 0.03231], [1, 35.9237, 0.03228], [1, 36.0028, 0.03226], [1, 36.0803, 0.03223], [1, 36.1563, 0.03221], [1, 36.2309, 0.03219], [1, 36.3042, 0.03217], [1, 36.3761, 0.03215], [1, 36.4468, 0.03213], [1, 36.5163, 0.03211], [1, 36.5846, 0.03209], [1, 36.6519, 0.03207], [1, 36.718, 0.03206], [1, 36.7831, 0.03204], [1, 36.8472, 0.03202], [1, 36.9104, 0.032], [1, 36.9726, 0.03199], [1, 37.034, 0.03197], [1, 37.0945, 0.03196], [1, 37.1541, 0.03194], [1, 37.213, 0.03193], [1, 37.2711, 0.03191], [1, 37.3284, 0.0319], [1, 37.3851, 0.03188], [1, 37.4411, 0.03187], [1, 37.4964, 0.03186], [1, 37.551, 0.03184], [1, 37.605, 0.03183], [1, 37.6584, 0.03182], [1, 37.7112, 0.0318], [1, 37.7635, 0.03179], [1, 37.8152, 0.03178], [1, 37.8663, 0.03177], [1, 37.9169, 0.03176], [1, 37.9671, 0.03174], [1, 38.0167, 0.03173], [1, 38.0658, 0.03172], [1, 38.1145, 0.03171], [1, 38.1628, 0.0317], [1, 38.2106, 0.03169], [1, 38.258, 0.03168], [1, 38.305, 0.03167], [1, 38.3516, 0.03166], [1, 38.3978, 0.03164], [1, 38.4437, 0.03163], [1, 38.4891, 0.03162], [1, 38.5342, 0.03161], [1, 38.5789, 0.0316], [1, 38.6233, 0.03159], [1, 38.6673, 0.03158], [1, 38.711, 0.03158], [1, 38.7543, 0.03157], [1, 38.7973, 0.03156], [1, 38.84, 0.03155], [1, 38.8823, 0.03154], [1, 38.9244, 0.03153], [1, 38.9661, 0.03152], [1, 39.0075, 0.03151], [1, 39.0487, 0.0315], [1, 39.0895, 0.03149], [1, 39.1301, 0.03149], [1, 39.1704, 0.03148], [1, 39.2104, 0.03147], [1, 39.2501, 0.03146], [1, 39.2896, 0.03145], [1, 39.3288, 0.03144], [1, 39.3677, 0.03144], [1, 39.4064, 0.03143], [1, 39.4448, 0.03142], [1, 39.483, 0.03141], [1, 39.521, 0.0314], [1, 39.5587, 0.0314], [1, 39.5962, 0.03139], [1, 39.6335, 0.03138], [1, 39.6705, 0.03137], [1, 39.7073, 0.03137], [1, 39.7438, 0.03136], [1, 39.7802, 0.03135], [1, 39.8163, 0.03134], [1, 39.8522, 0.03134], [1, 39.8879, 0.03133], [1, 39.9233, 0.03132], [1, 39.9586, 0.03131], [1, 39.9936, 0.03131], [1, 40.0284, 0.0313], [1, 40.063, 0.03129], [1, 40.0974, 0.03129], [1, 40.1316, 0.03128], [1, 40.1656, 0.03127], [1, 40.1994, 0.03127], [1, 40.233, 0.03126], [1, 40.2664, 0.03125], [1, 40.2995, 0.03125], [1, 40.3325, 0.03124], [1, 40.3653, 0.03123], [1, 40.3979, 0.03123], [1, 40.4303, 0.03122], [1, 40.4625, 0.03121], [1, 40.4946, 0.03121],
            [1, 40.5264, 0.0312], [1, 40.5581, 0.0312], [1, 40.5895, 0.03119], [1, 40.6208, 0.03118], [1, 40.6519, 0.03118], [1, 40.6829, 0.03117], [1, 40.7136, 0.03117], [1, 40.7442, 0.03116], [1, 40.7746, 0.03115], [1, 40.8048, 0.03115], [1, 40.8348, 0.03114], [1, 40.8647, 0.03114], [1, 40.8944, 0.03113], [1, 40.9239, 0.03112], [1, 40.9533, 0.03112], [1, 40.9824, 0.03111], [1, 41.0115, 0.03111], [1, 41.0403, 0.0311], [1, 41.069, 0.0311], [1, 41.0975, 0.03109], [1, 41.1259, 0.03108], [1, 41.1541, 0.03108], [1, 41.1821, 0.03107], [1, 41.21, 0.03107], [1, 41.2378, 0.03106], [1, 41.2653, 0.03106], [1, 41.2927, 0.03105], [1, 41.32, 0.03105], [1, 41.3471, 0.03104], [1, 41.3741, 0.03104], [1, 41.4009, 0.03103], [1, 41.4275, 0.03103], [1, 41.454, 0.03102], [1, 41.4804, 0.03102], [1, 41.5066, 0.03101], [1, 41.5327, 0.03101], [1, 41.5586, 0.031], [1, 41.5844, 0.03099], [1, 41.61, 0.03099], [1, 41.6355, 0.03098], [1, 41.6609, 0.03098],
            [1, 41.6861, 0.03098], [1, 41.7112, 0.03097], [1, 41.7362, 0.03097], [1, 41.761, 0.03096], [1, 41.7857, 0.03096], [1, 41.8102, 0.03095], [1, 41.8346, 0.03095], [1, 41.8589, 0.03094], [1, 41.8831, 0.03094], [1, 41.9071, 0.03093], [1, 41.931, 0.03093], [1, 41.9548, 0.03092], [1, 41.9784, 0.03092], [1, 42.0019, 0.03091], [1, 42.0253, 0.03091], [1, 42.0485, 0.0309], [1, 42.0717, 0.0309], [1, 42.0947, 0.03089], [1, 42.1176, 0.03089], [1, 42.1403, 0.03089], [1, 42.163, 0.03088], [1, 42.1855, 0.03088], [1, 42.2079, 0.03087], [1, 42.2302, 0.03087], [1, 42.2523, 0.03086], [1, 42.2744, 0.03086], [1, 42.2963, 0.03085], [1, 42.3181, 0.03085], [1, 42.3398, 0.03085], [1, 42.3614, 0.03084], [1, 42.3829, 0.03084], [1, 42.4042, 0.03083], [1, 42.4255, 0.03083], [1, 42.4466, 0.03082], [1, 42.4676, 0.03082], [1, 42.4885, 0.03082], [1, 42.5093, 0.03081], [1, 42.53, 0.03081], [1, 42.5506, 0.0308], [1, 42.5711, 0.0308], [1, 42.5915, 0.03079], [1, 42.6117, 0.03079], [1, 42.6319, 0.03079], [1, 42.6519, 0.03078], [1, 42.6719, 0.03078], [1, 42.6917, 0.03077], [1, 42.7115, 0.03077], [1, 42.7311, 0.03077], [1, 42.7507, 0.03076], [1, 42.7701, 0.03076], [1, 42.7894, 0.03075], [1, 42.8087, 0.03075], [1, 42.8278, 0.03075], [1, 42.8469, 0.03074], [1, 42.8658, 0.03074], [1, 42.8846, 0.03073], [1, 42.9034, 0.03073], [1, 42.922, 0.03073], [1, 42.9406, 0.03072], [1, 42.9591, 0.03072], [1, 42.9774, 0.03072], [1, 42.9957, 0.03071], [1, 43.0139, 0.03071], [1, 43.032, 0.0307], [1, 43.05, 0.0307], [1, 43.0679, 0.0307], [1, 43.0857, 0.03069], [1, 43.1034, 0.03069], [1, 43.1211, 0.03069], [1, 43.1386, 0.03068], [1, 43.1561, 0.03068], [1, 43.1734, 0.03067], [1, 43.1907, 0.03067], [1, 43.2079, 0.03067], [1, 43.225, 0.03066], [1, 43.2421, 0.03066], [1, 43.259, 0.03066], [1, 43.2759, 0.03065], [1, 43.2926, 0.03065], [1, 43.3093, 0.03065], [1, 43.3259, 0.03064], [1, 43.3424, 0.03064], [1, 43.3589, 0.03063], [1, 43.3753, 0.03063], [1, 43.3915, 0.03063], [1, 43.4077, 0.03062], [1, 43.4239, 0.03062], [1, 43.4399, 0.03062], [1, 43.4559, 0.03061], [1, 43.4717, 0.03061], [1, 43.4876, 0.03061], [1, 43.5033, 0.0306], [1, 43.5189, 0.0306], [1, 43.5345, 0.0306], [1, 43.55, 0.03059], [1, 43.5654, 0.03059], [1, 43.5808, 0.03059], [1, 43.5961, 0.03058], [1, 43.6113, 0.03058], [1, 43.6264, 0.03058], [1, 43.6415, 0.03057], [1, 43.6564, 0.03057], [1, 43.6714, 0.03057], [1, 43.6862, 0.03056], [1, 43.701, 0.03056], [1, 43.7157, 0.03056], [1, 43.7303, 0.03055], [1, 43.7449, 0.03055], [1, 43.7594, 0.03055], [1, 43.7738, 0.03054], [1, 43.7882, 0.03054], [1, 43.8025, 0.03054], [1, 43.8167, 0.03053], [1, 43.8309, 0.03053], [1, 43.845, 0.03053], [1, 43.859, 0.03052], [1, 43.873, 0.03052], [1, 43.8869, 0.03052], [1, 43.9007, 0.03051], [1, 43.9145, 0.03051],
            [1, 43.9282, 0.03051], [1, 43.9419, 0.0305], [1, 43.9555, 0.0305], [1, 43.969, 0.0305], [1, 43.9824, 0.03049], [1, 43.9959, 0.03049], [1, 44.0092, 0.03049], [1, 44.0225, 0.03049], [1, 44.0357, 0.03048], [1, 44.0489, 0.03048], [1, 44.062, 0.03048], [1, 44.0751, 0.03047], [1, 44.088, 0.03047], [1, 44.101, 0.03047], [1, 44.1139, 0.03046], [1, 44.1267, 0.03046], [1, 44.1395, 0.03046], [1, 44.1522, 0.03045], [1, 44.1648, 0.03045], [1, 44.1774, 0.03045], [1, 44.19, 0.03045], [1, 44.2025, 0.03044], [1, 44.2149, 0.03044], [1, 44.2273, 0.03044], [1, 44.2396, 0.03043], [1, 44.2519, 0.03043], [1, 44.2641, 0.03043], [1, 44.2763, 0.03043], [1, 44.2884, 0.03042], [1, 44.3005, 0.03042], [1, 44.3125, 0.03042], [1, 44.3245, 0.03041], [1, 44.3364, 0.03041], [1, 44.3483, 0.03041], [1, 44.3601, 0.0304], [1, 44.3719, 0.0304], [1, 44.3836, 0.0304], [1, 44.3952, 0.0304], [1, 44.4069, 0.03039], [1, 44.4184, 0.03039], [1, 44.43, 0.03039], [1, 44.4414, 0.03038],
            [1, 44.4529, 0.03038], [1, 44.4643, 0.03038], [1, 44.4756, 0.03038], [1, 44.4869, 0.03037], [1, 44.4981, 0.03037], [1, 44.5093, 0.03037], [1, 44.5205, 0.03037], [1, 44.5316, 0.03036], [1, 44.5427, 0.03036],
            [1, 44.5537, 0.03036], [1, 44.5646, 0.03035], [1, 44.5756, 0.03035], [1, 44.5865, 0.03035], [1, 44.5973, 0.03035], [1, 44.6081, 0.03034], [1, 44.6189, 0.03034], [1, 44.6296, 0.03034], [1, 44.6402, 0.03034], [1, 44.6509, 0.03033], [1, 44.6615, 0.03033], [1, 44.672, 0.03033], [1, 44.6825, 0.03032], [1, 44.693, 0.03032], [1, 44.7034, 0.03032], [1, 44.7138, 0.03032], [1, 44.7241, 0.03031], [1, 44.7344, 0.03031], [1, 44.7447, 0.03031], [1, 44.7549, 0.03031], [1, 44.7651, 0.0303], [1, 44.7752, 0.0303], [1, 44.7853, 0.0303], [1, 44.7954, 0.0303], [1, 44.8054, 0.03029], [1, 44.8154, 0.03029], [1, 44.8254, 0.03029], [1, 44.8353, 0.03028], [1, 44.8452, 0.03028], [1, 44.855, 0.03028], [1, 44.8648, 0.03028], [1, 44.8746, 0.03027], [1, 44.8844, 0.03027], [1, 44.894, 0.03027], [1, 44.9037, 0.03027], [1, 44.9133, 0.03026], [1, 44.9229, 0.03026], [1, 44.9325, 0.03026], [1, 44.942, 0.03026], [1, 44.9515, 0.03025], [1, 44.9609, 0.03025], [1, 44.9704, 0.03025], [1, 44.9797, 0.03025], [1, 44.9891, 0.03024], [1, 44.9984, 0.03024], [1, 45.0077, 0.03024], [1, 45.0169, 0.03024], [1, 45.0262, 0.03023], [1, 45.0353, 0.03023], [1, 45.0445, 0.03023], [1, 45.0536, 0.03023], [1, 45.0627, 0.03022], [1, 45.0717, 0.03022], [1, 45.0808, 0.03022], [1, 45.0897, 0.03022], [1, 45.0987, 0.03021], [1, 45.1076, 0.03021], [1, 45.1165, 0.03021], [1, 45.1254, 0.03021], [1, 45.1342, 0.0302], [1, 45.143, 0.0302], [1, 45.1518, 0.0302], [1, 45.1605, 0.0302], [1, 45.1692, 0.03019], [1, 45.1779, 0.03019], [1, 45.1866, 0.03019], [1, 45.1952, 0.03019], [1, 45.2038, 0.03019], [1, 45.2124, 0.03018], [1, 45.2209, 0.03018], [1, 45.2294, 0.03018], [1, 45.2379, 0.03018], [1, 45.2463, 0.03017], [1, 45.2548, 0.03017], [1, 45.2632, 0.03017], [1, 45.2715, 0.03017], [1, 45.2799, 0.03016], [1, 45.2882, 0.03016], [1, 45.2965, 0.03016], [1, 45.3047, 0.03016], [1, 45.313, 0.03015], [1, 45.3212, 0.03015], [1, 45.3294, 0.03015], [1, 45.3375, 0.03015], [1, 45.3456, 0.03015], [1, 45.3537, 0.03014], [1, 45.3618, 0.03014], [1, 45.3699, 0.03014], [1, 45.3779, 0.03014], [1, 45.3859, 0.03013], [1, 45.3939, 0.03013], [1, 45.4018, 0.03013], [1, 45.4097, 0.03013], [1, 45.4176, 0.03013], [1, 45.4255, 0.03012], [1, 45.4334, 0.03012], [1, 45.4412, 0.03012], [1, 45.449, 0.03012], [1, 45.4568, 0.03011], [1, 45.4645, 0.03011], [1, 45.4722, 0.03011], [1, 45.48, 0.03011], [1, 45.4876, 0.0301], [1, 45.4953, 0.0301], [1, 45.5029, 0.0301], [1, 45.5105, 0.0301], [1, 45.5181, 0.0301], [1, 45.5257, 0.03009], [1, 45.5332, 0.03009], [1, 45.5408, 0.03009], [1, 45.5483, 0.03009], [1, 45.5558, 0.03008], [1, 45.5632, 0.03008], [1, 45.5706, 0.03008], [1, 45.5781, 0.03008], [1, 45.5854, 0.03008], [1, 45.5928, 0.03007], [1, 45.6002, 0.03007], [1, 45.6075, 0.03007], [1, 45.6148, 0.03007],
            [1, 45.6221, 0.03007], [1, 45.6293, 0.03006], [1, 45.6366, 0.03006], [1, 45.6438, 0.03006], [1, 45.651, 0.03006], [1, 45.6582, 0.03005], [1, 45.6654, 0.03005], [1, 45.6725, 0.03005], [1, 45.6796, 0.03005], [1, 45.6867, 0.03005], [1, 45.6938, 0.03004], [1, 45.7009, 0.03004], [1, 45.7079, 0.03004], [1, 45.715, 0.03004], [1, 45.722, 0.03004], [1, 45.729, 0.03003], [1, 45.7359, 0.03003], [1, 45.7429, 0.03003], [1, 45.7498, 0.03003], [1, 45.7567, 0.03003], [1, 45.7636, 0.03002], [1, 45.7705, 0.03002], [1, 45.7774, 0.03002], [1, 45.7842, 0.03002], [1, 45.791, 0.03001], [1, 45.7978, 0.03001], [1, 45.8046, 0.03001], [1, 45.8114, 0.03001], [1, 45.8182, 0.03001], [1, 45.8249, 0.03], [1, 45.8316, 0.03], [1, 45.8383, 0.03], [1, 45.845, 0.03], [1, 45.8517, 0.03], [1, 45.8583, 0.02999], [1, 45.865, 0.02999], [1, 45.8716, 0.02999], [1, 45.8782, 0.02999], [1, 45.8848, 0.02999], [1, 45.8914, 0.02998], [1, 45.8979, 0.02998], [1, 45.9045, 0.02998],
            [1, 45.911, 0.02998], [1, 45.9175, 0.02998], [1, 45.924, 0.02997], [1, 45.9305, 0.02997], [1, 45.937, 0.02997], [1, 45.9434, 0.02997], [1, 45.9499, 0.02997], [1, 45.9563, 0.02996], [1, 45.9627, 0.02996], [1, 45.9691, 0.02996], [1, 45.9755, 0.02996], [1, 45.9818, 0.02996], [1, 45.9882, 0.02995], [1, 45.9945, 0.02995], [1, 46.0008, 0.02995], [1, 46.0071, 0.02995], [1, 46.0134, 0.02995], [1, 46.0197, 0.02994], [1, 46.026, 0.02994], [1, 46.0322, 0.02994], [1, 46.0385, 0.02994], [1, 46.0447, 0.02994], [1, 46.0509, 0.02993], [1, 46.0571, 0.02993], [1, 46.0633, 0.02993], [1, 46.0694, 0.02993], [1, 46.0756, 0.02993], [1, 46.0818, 0.02992], [1, 46.0879, 0.02992], [1, 46.094, 0.02992], [1, 46.1001, 0.02992], [1, 46.1062, 0.02992], [1, 46.1123, 0.02992], [1, 46.1184, 0.02991], [1, 46.1244, 0.02991], [1, 46.1305, 0.02991], [1, 46.1365, 0.02991], [1, 46.1425, 0.02991], [1, 46.1485, 0.0299], [1, 46.1545, 0.0299], [1, 46.1605, 0.0299], [1, 46.1665, 0.0299], [1, 46.1725, 0.0299], [1, 46.1784, 0.02989], [1, 46.1843, 0.02989], [1, 46.1903, 0.02989], [1, 46.1962, 0.02989], [1, 46.2021, 0.02989], [1, 46.208, 0.02989], [1, 46.2139, 0.02988], [1, 46.2197, 0.02988], [1, 46.2256, 0.02988], [1, 46.2315, 0.02988], [1, 46.2373, 0.02988], [1, 46.2431, 0.02987], [1, 46.249, 0.02987], [1, 46.2548, 0.02987], [1, 46.2606, 0.02987], [1, 46.2663, 0.02987], [1, 46.2721, 0.02986], [1, 46.2779, 0.02986], [1, 46.2837, 0.02986], [1, 46.2894, 0.02986], [1, 46.2951, 0.02986], [1, 46.3009, 0.02986], [1, 46.3066, 0.02985], [1, 46.3123, 0.02985], [1, 46.318, 0.02985], [1, 46.3237, 0.02985], [1, 46.3294, 0.02985], [1, 46.335, 0.02984], [1, 46.3407, 0.02984], [1, 46.3463, 0.02984], [1, 46.352, 0.02984], [1, 46.3576, 0.02984], [1, 46.3632, 0.02984], [1, 46.3689, 0.02983], [1, 46.3745, 0.02983], [1, 46.3801, 0.02983], [1, 46.3857, 0.02983], [1, 46.3912, 0.02983], [1, 46.3968, 0.02983], [1, 46.4024, 0.02982], [1, 46.4079, 0.02982], [1, 46.4135, 0.02982], [1, 46.419, 0.02982], [1, 46.4245, 0.02982], [1, 46.4301, 0.02981], [1, 46.4356, 0.02981], [1, 46.4411, 0.02981], [1, 46.4466, 0.02981], [1, 46.4521, 0.02981], [1, 46.4575, 0.02981], [1, 46.463, 0.0298], [1, 46.4685, 0.0298], [1, 46.4739, 0.0298], [1, 46.4794, 0.0298], [1, 46.4848, 0.0298], [1, 46.4902, 0.0298], [1, 46.4957, 0.02979], [1, 46.5011, 0.02979], [1, 46.5065, 0.02979], [1, 46.5119, 0.02979], [1, 46.5173, 0.02979], [1, 46.5227, 0.02978], [1, 46.528, 0.02978], [1, 46.5334, 0.02978], [1, 46.5388, 0.02978], [1, 46.5441, 0.02978], [1, 46.5495, 0.02978], [1, 46.5548, 0.02977], [1, 46.5601, 0.02977], [1, 46.5655, 0.02977], [1, 46.5708, 0.02977], [1, 46.5761, 0.02977], [1, 46.5814, 0.02977], [1, 46.5867, 0.02976], [1, 46.592, 0.02976], [1, 46.5973, 0.02976], [1, 46.6026, 0.02976], [1, 46.6078, 0.02976], [1, 46.6131, 0.02976],
            [1, 46.6183, 0.02975], [1, 46.6236, 0.02975], [1, 46.6288, 0.02975], [1, 46.6341, 0.02975], [1, 46.6393, 0.02975], [1, 46.6445, 0.02975], [1, 46.6497, 0.02974], [1, 46.655, 0.02974], [1, 46.6602, 0.02974], [1, 46.6654, 0.02974], [1, 46.6706, 0.02974], [1, 46.6757, 0.02974], [1, 46.6809, 0.02973], [1, 46.6861, 0.02973], [1, 46.6913, 0.02973], [1, 46.6964, 0.02973], [1, 46.7016, 0.02973], [1, 46.7067, 0.02973], [1, 46.7119, 0.02972], [1, 46.717, 0.02972], [1, 46.7221, 0.02972], [1, 46.7273, 0.02972], [1, 46.7324, 0.02972], [1, 46.7375, 0.02972], [1, 46.7426, 0.02971], [1, 46.7477, 0.02971], [1, 46.7528, 0.02971], [1, 46.7579, 0.02971], [1, 46.763, 0.02971], [1, 46.768, 0.02971], [1, 46.7731, 0.0297], [1, 46.7782, 0.0297], [1, 46.7832, 0.0297], [1, 46.7883, 0.0297], [1, 46.7933, 0.0297], [1, 46.7984, 0.0297], [1, 46.8034, 0.0297], [1, 46.8084, 0.02969], [1, 46.8135, 0.02969], [1, 46.8185, 0.02969], [1, 46.8235, 0.02969], [1, 46.8285, 0.02969], [1, 46.8335, 0.02969], [1, 46.8385, 0.02968], [1, 46.8435, 0.02968], [1, 46.8485, 0.02968], [1, 46.8535, 0.02968], [1, 46.8584, 0.02968], [1, 46.8634, 0.02968], [1, 46.8684, 0.02967], [1, 46.8733, 0.02967], [1, 46.8783, 0.02967], [1, 46.8832, 0.02967], [1, 46.8882, 0.02967], [1, 46.8931, 0.02967], [1, 46.8981, 0.02966], [1, 46.903, 0.02966], [1, 46.9079, 0.02966], [1, 46.9128, 0.02966], [1, 46.9177, 0.02966], [1, 46.9227, 0.02966], [1, 46.9276, 0.02966], [1, 46.9325, 0.02965], [1, 46.9373, 0.02965], [1, 46.9422, 0.02965], [1, 46.9471, 0.02965], [1, 46.952, 0.02965], [1, 46.9569, 0.02965], [1, 46.9617, 0.02964], [1, 46.9666, 0.02964], [1, 46.9714, 0.02964], [1, 46.9763, 0.02964], [1, 46.9811, 0.02964], [1, 46.986, 0.02964], [1, 46.9908, 0.02964], [1, 46.9956, 0.02963], [1, 47.0004, 0.02963], [1, 47.0053, 0.02963], [1, 47.0101, 0.02963], [1, 47.0149, 0.02963], [1, 47.0197, 0.02963], [1, 47.0245, 0.02962], [1, 47.0293, 0.02962], [1, 47.0341, 0.02962], [1, 47.0388, 0.02962], [1, 47.0436, 0.02962], [1, 47.0484, 0.02962], [1, 47.0532, 0.02962], [1, 47.0579, 0.02961], [1, 47.0627, 0.02961], [1, 47.0674, 0.02961], [1, 47.0722, 0.02961], [1, 47.0769, 0.02961], [1, 47.0816, 0.02961], [1, 47.0864, 0.02961], [1, 47.0911, 0.0296], [1, 47.0958, 0.0296], [1, 47.1005, 0.0296], [1, 47.1052, 0.0296], [1, 47.1099, 0.0296], [1, 47.1146, 0.0296], [1, 47.1193, 0.02959], [1, 47.124, 0.02959], [1, 47.1287, 0.02959], [1, 47.1334, 0.02959], [1, 47.138, 0.02959], [1, 47.1427, 0.02959], [1, 47.1474, 0.02959], [1, 47.152, 0.02958], [1, 47.1567, 0.02958], [1, 47.1613, 0.02958], [1, 47.166, 0.02958], [1, 47.1706, 0.02958], [1, 47.1752, 0.02958], [1, 47.1799, 0.02958], [1, 47.1845, 0.02957]
        ];
        if (sex == "Male") {
            console.log("-------male--------");
            if (type == "Weight") {
                console.log("-------wight--------");
                console.log("this.ageInDays==" + this.ageInDays);
                console.log("this.wfa_boys_p[this.ageInDays][1]==" + this.wfa_boys_p[this.ageInDays][1]);
                console.log("this.wfa_boys_p[this.ageInDays][0]==" + this.wfa_boys_p[this.ageInDays][0]);
                console.log("this.wfa_boys_p[this.ageInDays][2]==" + this.wfa_boys_p[this.ageInDays][2]);
                // Calculates Z-Score
                var one = measurement / this.wfa_boys_p[this.ageInDays][1]; // WEIGHT/M
                console.log("one=====" + one);
                var two = Math.pow(one, this.wfa_boys_p[this.ageInDays][0]) - 1; //Math.pow(one, L) - 1
                console.log("two=====" + two);
                var z = two / (this.wfa_boys_p[this.ageInDays][0] * this.wfa_boys_p[this.ageInDays][2]); // two / (L * S)
                console.log("z=====" + z);
                console.log("zzzzzzzz-weight" + z);
                //Calculates Percentile
                var p = 100 * (1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - (1.5976 * z))));
                var percentile = Math.round(p);
                //let percentile = Math.round(p * 10) / 10; for two decimal values
                console.log("percentile=weight======" + percentile);
                // let last = percentile % 10;
                // let specialLast = percentile % 100;
                //
                // var re = /\.\d/;
                // var str = percentile.toString();
                // var m = re.exec(str);
                // alert(m);
                //alert("last===="+  (Math.round((last % 10) * 10) / 10) %10 + "specialLast-=="+specialLast+"percentile---"+percentile);
                return percentile;
                //window.localStorage.setItem("percentileWeight",percentile);
            }
            if (type == "Length") {
                console.log("-------length--------");
                // Calculates Z-Score
                var one = measurement / this.lhfa_boys_p[this.ageInDays][1]; // WEIGHT/M
                var two = Math.pow(one, this.lhfa_boys_p[this.ageInDays][0]) - 1; //Math.pow(one, L) - 1
                var z = two / (this.lhfa_boys_p[this.ageInDays][0] * this.lhfa_boys_p[this.ageInDays][2]); // two / (L * S)
                console.log("zzzzzzzz--length" + z);
                //Calculates Percentile
                var p = 100 * (1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - (1.5976 * z))));
                var percentile = Math.round(p);
                //let percentile = Math.round(p * 10) / 10;
                console.log("percentile===length====" + percentile);
                return percentile;
            }
            if (type == "Head") {
                console.log("-------head--------");
                // Calculates Z-Score
                var one = measurement / this.hcfa_boys_p[this.ageInDays][1]; // WEIGHT/M
                var two = Math.pow(one, this.hcfa_boys_p[this.ageInDays][0]) - 1; //Math.pow(one, L) - 1
                var z = two / (this.hcfa_boys_p[this.ageInDays][0] * this.hcfa_boys_p[this.ageInDays][2]); // two / (L * S)
                console.log("zzzzzzzz--head" + z);
                //Calculates Percentile
                var p = 100 * (1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - (1.5976 * z))));
                var percentile = Math.round(p);
                //let percentile = Math.round(p * 10) / 10;
                console.log("percentile===head====" + percentile);
                return percentile;
            }
        }
        else if (sex == "Female") {
            console.log("-------female--------");
            if (type == "Weight") {
                console.log("-------weight--------");
                // Calculates Z-Score
                var one = measurement / this.wfa_girls_p[this.ageInDays][1]; // WEIGHT/M
                var two = Math.pow(one, this.wfa_girls_p[this.ageInDays][0]) - 1; //Math.pow(one, L) - 1
                var z = two / (this.wfa_girls_p[this.ageInDays][0] * this.wfa_girls_p[this.ageInDays][2]); // two / (L * S)
                console.log("zzzzzzzz-weight" + z);
                //Calculates Percentile
                var p = 100 * (1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - (1.5976 * z))));
                var percentile = Math.round(p);
                //let percentile = Math.round(p * 10) / 10;
                console.log("percentile=weight======" + percentile);
                // let last = percentile % 10;
                // let specialLast = percentile % 100;
                //
                // var re = /\.\d/;
                // var str = percentile.toString();
                // var m = re.exec(str);
                // alert(m);
                //alert("last===="+  (Math.round((last % 10) * 10) / 10) %10 + "specialLast-=="+specialLast+"percentile---"+percentile);
                return percentile;
                //window.localStorage.setItem("percentileWeight",percentile);
            }
            if (type == "Length") {
                console.log("-------length--------");
                // Calculates Z-Score
                var one = measurement / this.lhfa_girls_p[this.ageInDays][1]; // WEIGHT/M
                var two = Math.pow(one, this.lhfa_girls_p[this.ageInDays][0]) - 1; //Math.pow(one, L) - 1
                var z = two / (this.lhfa_girls_p[this.ageInDays][0] * this.lhfa_girls_p[this.ageInDays][2]); // two / (L * S)
                console.log("zzzzzzzz--length" + z);
                //Calculates Percentile
                var p = 100 * (1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - (1.5976 * z))));
                var percentile = Math.round(p);
                //let percentile = Math.round(p * 10) / 10;
                console.log("percentile===length====" + percentile);
                return percentile;
            }
            if (type == "Head") {
                console.log("-------head--------");
                // Calculates Z-Score
                var one = measurement / this.hcfa_girls_p[this.ageInDays][1]; // WEIGHT/M
                var two = Math.pow(one, this.hcfa_girls_p[this.ageInDays][0]) - 1; //Math.pow(one, L) - 1
                var z = two / (this.hcfa_girls_p[this.ageInDays][0] * this.hcfa_girls_p[this.ageInDays][2]); // two / (L * S)
                console.log("zzzzzzzz--head" + z);
                //Calculates Percentile
                var p = 100 * (1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - (1.5976 * z))));
                var percentile = Math.round(p);
                //let percentile = Math.round(p * 10) / 10;
                console.log("percentile===head====" + percentile);
                return percentile;
            }
        }
        //
        // // Calculates Z-Score
        // let one = measurement / wfa_boys_p[age][1]; // WEIGHT/M
        // let two = Math.pow(one, wfa_boys_p[age][0]) - 1; //Math.pow(one, L) - 1
        // let z = two / (wfa_boys_p[age][0] * wfa_boys_p[age][2]);  // two / (L * S)
        // alert("zzzzzzzz" + z);
        //
        // //Calculates Percentile
        // var p = 100 * (1 / (1 + Math.exp(-0.07056 * Math.pow(z, 3) - (1.5976 * z))));
        //
        // let percentile = Math.round(p * 10) / 10;
        // alert("percentile=======" + percentile);
        //
        // return percentile;
    };
    PopupModalPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    PopupModalPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.message,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    PopupModalPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    PopupModalPage.prototype.showNotification = function (err) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'SHTG',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        _this.saveMeasurementsToDatabase();
                    }
                }
            ]
        });
        alert.present();
    };
    PopupModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popup-modal',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/popup-modal/popup-modal.html"*/'<!--\n  Generated template for the PopupModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <div align="center">\n    <h1 class="title" style="font-size: large">MEASUREMENTS</h1>\n  </div>\n\n  <form class="form" [formGroup]="addMeasurementForm" (submit)="saveMeasurements()">\n\n  <ion-card id="" class="ion-card" [hidden]="" transparent="true">\n    <ion-card-content>\n      <ion-label stacked style="font-size: 15px" >Child\'s Name</ion-label>\n\n      <ion-row>\n        <select class="dropQuestions" style="width:100%" formControlName="childName" class="form-controll" >\n          <option [value]="0" selected >Please Select</option>\n          <option *ngFor = "let childrens of childrenList; let i index" value="{{childrens.nid}}" >{{childrens.first_name}}</option>\n        </select>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-label stacked style="font-size: 15px">Date of Measurement</ion-label>\n      </ion-row>\n\n      <ion-row>\n        <ion-item>\n        <ion-datetime type="date"  style="font-size: 15px" placeholder="MM/DD/YYYY"  max="{{maxDate}}" min="{{minDate}}" class="dropQuestions" style="width:100%" class="form-controll" formControlName="date"></ion-datetime>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px" >Weight</ion-label>\n      </ion-row>\n\n        <ion-row align-items-center>\n          <ion-col>\n          <ion-input  type="number" style="font-size: 15px; width:100%"  placeholder=" e.g. 2.5" class="dropQuestions" formControlName="weight" ></ion-input>\n          </ion-col>\n          <ion-col>\n            <ion-label stacked style="font-size: 15px" >kg</ion-label>\n\n            <!--<select class="dropQuestions" style="width:100%" >\n              <option value="1" selected>(kg)</option>\n              <option value="2"> (g) </option>\n              <option value="2"> (pounds) </option>\n            </select> -->\n          </ion-col>\n        </ion-row>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px" >Length</ion-label>\n      </ion-row>\n\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-input  type="number" style="font-size: 15px; width:100%"  placeholder=" e.g. 50" class="dropQuestions" formControlName="length"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label stacked style="font-size: 15px" >cm</ion-label>\n\n          <!--\n          <select class="dropQuestions" style="width:100%" >\n            <option value="1" selected>(cm)</option>\n            <option value="2"> (m) </option>\n            <option value="2"> (inch) </option>\n          </select> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px" >Head Circumference</ion-label>\n      </ion-row>\n\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-input  type="number" style="font-size: 15px; width:100%"  placeholder=" e.g. 40" class="dropQuestions" formControlName="head"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label stacked style="font-size: 15px" >cm</ion-label>\n\n          <!--\n          <select class="dropQuestions" style="width:100%" >\n            <option value="1" selected>(cm)</option>\n            <option value="2"> (m) </option>\n            <option value="2"> (inch) </option>\n          </select> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px" >Who took the measurements?</ion-label>\n      </ion-row>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Parent / Whānau</ion-label>\n          <ion-checkbox checked="false"  [disabled]="disableParent" (ionChange)="checked2(parent)" formControlName="parent"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <ion-label style="white-space: normal">Health Professional</ion-label>\n          <ion-checkbox checked="false"  [disabled]="disableHealth" (ionChange)="checked1(health)" formControlName="healthPro"></ion-checkbox>\n          <button align="left" tooltip="Email required so we can send you the study survey." tooltip-trigger="mouseenter" >\n            <img src="assets/imgs/info.png" style="width: 20px;height: 20px" >\n          </button>\n        </ion-item>\n      </ion-list>\n\n      <div  class="btnBottom">\n        <ion-row align="center">\n          <ion-col>\n            <button ion-button block  type = "button" class="btnMoreInfo" (click)="closeModal()">CANCEL</button>\n          </ion-col>\n          <ion-col>\n            <button ion-button block  class="btnAccept" type="submit" [disabled]="!addMeasurementForm.valid" >SAVE</button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/popup-modal/popup-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], PopupModalPage);
    return PopupModalPage;
}());

//# sourceMappingURL=popup-modal.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_users_invite_users__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__ = __webpack_require__(6);
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
 * Generated class for the ChildRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChildRegistrationPage = /** @class */ (function () {
    function ChildRegistrationPage(navCtrl, navParams, alertCtrl, imagePicker, platform, formBuilder, apiProvider, globalProvider, loadingCtrl, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.apiProvider = apiProvider;
        this.globalProvider = globalProvider;
        this.loadingCtrl = loadingCtrl;
        this.ga = ga;
        this.addAnotherChildHide = true;
        this.photoSelected = false;
        this.imgPreview = 'assets/imgs/child.png';
        this.regData = { email: '', password: '', fullname: '', avatar: '' };
        this.networkConnected = true;
        this.childrenList = [];
        this.hideBackBtn = navParams.get("hideBackBtn");
        this.reader = new FileReader();
        this.childRegisterForm = this.formBuilder.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(25)]),
            dateOfBirth: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            weekAtBirth: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            sex: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            childLive: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        this.maxDate = (new Date(Date.now() - tzoffset)).toISOString().split('T')[0];
        this.minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 2)).toISOString();
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    ChildRegistrationPage.prototype.getMaxDate = function () {
        return new Date().toISOString().split('T')[0];
    };
    ChildRegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildRegistrationPage');
        this.ga.trackView("Child Registration Screen");
    };
    ChildRegistrationPage.prototype.addAnotherChild = function (element) {
        this.button = element;
        this.childValue = '';
    };
    ChildRegistrationPage.prototype.saveChild = function (element) {
        this.button = element;
        this.button.textContent = 'CONTINUE';
        if (this.button.textContent == 'CONTINUE') {
            this.addAnotherChildHide = false;
        }
    };
    ChildRegistrationPage.prototype.onChange = function (value) {
        if (value === "2") {
            var alert_1 = this.alertCtrl.create({
                title: 'NOTICE',
                message: 'Please note that this app does not take into consideration the characteristics of babies born prematurely.',
                cssClass: 'childNoticeAlert',
                buttons: [
                    {
                        text: 'Close',
                    }
                ]
            });
            alert_1.present();
        }
    };
    ChildRegistrationPage.prototype.getPhoto = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            quality: 80,
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.imgPreview = results[i];
                if (_this.platform.is('android')) {
                    window.resolveLocalFileSystemURL(results[i], function (fileEntry) {
                        fileEntry.file(function (resFile) {
                            var reader = new FileReader();
                            reader.onloadend = function (evt) {
                                _this.imageData = evt.target.result;
                                //alert(evt.target.result + "======binary value");
                                _this.photoSelected = true;
                                //alert("dfdfdfdfd");
                                window.localStorage.setItem("childPhoto", _this.imgPreview);
                            };
                            reader.readAsArrayBuffer(resFile);
                        });
                    });
                }
                else {
                    ////////////*****************//////////////
                    window.resolveLocalFileSystemURL('file://' + results, function (fileEntry) {
                        // alert('Type: ' + (typeof fileEntry));
                        fileEntry.file(function (file) {
                            // alert('File: ' + (typeof file) + ', ' + JSON.stringify(file));
                            var fileReader = new FileReader();
                            fileReader.onloadend = function (result) {
                                // alert('File Reader Result: ' + JSON.stringify(result));
                                _this.imageData = result.target.result;
                                _this.photoSelected = true;
                                window.localStorage.setItem("childPhoto", _this.imgPreview);
                                //alert(evt.target.result + "======binary value");
                            };
                            fileReader.onerror = function (error) {
                                //reject(error);
                            };
                            fileReader.readAsArrayBuffer(file);
                        }, function (error) {
                            // alert('File Entry Error: ' + JSON.stringify(error));
                        });
                    }, function (error) {
                        //   alert('Error resolving file: ' + JSON.stringify(error));
                    });
                    /////////////***************////////////////
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    ChildRegistrationPage.prototype.childRegisterComplete = function () {
        var _this = this;
        this.globalProvider.childFirstName = this.childRegisterForm.value.firstName;
        this.globalProvider.childDateBirth = this.childRegisterForm.value.dateOfBirth;
        if (this.childRegisterForm.value.sex === "1") {
            this.globalProvider.childSex = "Male";
            window.localStorage.setItem("childSex", "Male");
        }
        else if (this.childRegisterForm.value.sex === "2") {
            this.globalProvider.childSex = "Female";
            window.localStorage.setItem("childSex", "Female");
        }
        if (this.childRegisterForm.value.childLive === "1") {
            this.globalProvider.childHousehold = true;
        }
        else if (this.childRegisterForm.value.childLive === "2") {
            this.globalProvider.childHousehold = false;
        }
        if (this.childRegisterForm.value.weekAtBirth == 1) {
            this.globalProvider.childWeeksBirth = "Full-term(more than 37 weeks)";
        }
        else if (this.childRegisterForm.value.weekAtBirth == 2) {
            this.globalProvider.childWeeksBirth = "Pre-term(less than 37 weeks)";
        }
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            if (this.photoSelected) {
                //// parent profile picture upload ///////
                setTimeout(function () {
                    _this.apiProvider.uploadPhotoChild(_this.imageData)
                        .then(function (res) {
                        _this.loading.dismiss();
                        ///// child register with photo/////////
                        setTimeout(function () {
                            _this.apiProvider.addChild()
                                .then(function (res) {
                                console.log("child register response" + res);
                                _this.loading.dismiss();
                                //window.localStorage.setItem("registerDone", "done");
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invite_users_invite_users__["a" /* InviteUsersPage */]);
                            }, function (err) {
                                //alert(JSON.stringify(err));
                                _this.loading.dismiss();
                                _this.showAlert(JSON.stringify(err));
                                console.log("child register error========" + JSON.stringify(err));
                                //this.navCtrl.push(ChildRegistrationPage);
                            });
                        }, 1000);
                    }, function (err) {
                        //alert(JSON.stringify(err) + "image upload error");
                        _this.showAlert(JSON.stringify(err));
                    });
                }, 1000);
            }
            else {
                ///// child register without photo/////////
                setTimeout(function () {
                    _this.apiProvider.addChild()
                        .then(function (res) {
                        console.log("child register response" + res);
                        _this.loading.dismiss();
                        //window.localStorage.setItem("registerDone", "done");
                        /////// track page //////
                        _this.apiProvider.trackPage("Child Registration Screen")
                            .then(function (res) {
                        }, function (err) {
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invite_users_invite_users__["a" /* InviteUsersPage */]);
                    }, function (err) {
                        //alert(JSON.stringify(err));
                        _this.loading.dismiss();
                        _this.showAlert(JSON.stringify(err));
                        console.log("child register error========" + JSON.stringify(err));
                        //this.navCtrl.push(ChildRegistrationPage);
                    });
                }, 1000);
            }
        }
    };
    ChildRegistrationPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ChildRegistrationPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ChildRegistrationPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ChildRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-child-registration',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/child-registration/child-registration.html"*/'<!--\n  Generated template for the ChildRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton={{hideBackBtn}}>\n    <ion-title align="center">Child Registration</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n  <div align="center">\n    <img alt="logo" height="70" width="70" style="border-radius: 50%; -webkit-border-radius: 50%;" class="logo" (click)="getPhoto()" src="{{imgPreview}}"  >\n\n  </div>\n  <div align="center" (click)="getPhoto()">\n    <h1 class="title" style="font-size: small">Tap to Upload Photo</h1>\n  </div>\n\n  <form class="form" [formGroup]="childRegisterForm" (submit)="childRegisterComplete()">\n\n\n  <ion-card id="" class="ion-card" [hidden]="" transparent="true">\n    <ion-card-content>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px" >Child\'s First Name</ion-label>\n      </ion-row>\n\n      <ion-row>\n        <ion-input  type="text" style="font-size: 15px" placeholder="First Name" formControlName="firstName" class="form-controll" [value]="childValue" class="dropQuestions" style="width:50%"></ion-input>\n      </ion-row>\n      <br>\n\n      <ion-row>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of globalProvider.validation_messages.firstName">\n            <div class="error-message" *ngIf="childRegisterForm.get(\'firstName\').hasError(validation.type) && (childRegisterForm.get(\'firstName\').dirty || childRegisterForm.get(\'firstName\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px">Date of Birth</ion-label>\n      </ion-row>\n\n      <ion-row>\n        <ion-item>\n        <ion-datetime type="date"  style="font-size: 15px" placeholder="MM/DD/YYYY"  max="{{maxDate}}" min="{{minDate}}"  formControlName="dateOfBirth" class="form-controll" class="dropQuestions" style="width:100%"></ion-datetime>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px">Weeks at birth</ion-label>\n        <select class="dropQuestions" style="width:100%" formControlName="weekAtBirth" (change)="onChange($event.target.value)">\n          <option value="1" selected> Full-term(more than 37 weeks)</option>\n          <option value="2"> Pre-term(less than 37 weeks) </option>\n        </select>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px">Sex</ion-label>\n        <select class="dropQuestions" style="width:100%" formControlName="sex">\n          <option value="1">Male</option>\n          <option value="2">Female</option>\n        </select>\n      </ion-row>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px; white-space: normal ;text-align: justify; text-justify: inter-word;">Do you and your child live in the same household</ion-label>\n        <select class="dropQuestions" style="width:100%" formControlName="childLive">\n          <option value="1">Yes</option>\n          <option value="2">No</option>\n        </select>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <div  class="btnBottom">\n    <!--<ion-row align="center">-->\n      <!--<ion-col>-->\n        <!--<button ion-button block  [hidden]="addAnotherChildHide" class="btnMoreInfo" (click)="addAnotherChild($event.target)" >ADD ANOTHER CHILD</button>-->\n      <!--</ion-col>-->\n    <!--</ion-row>-->\n    <ion-row align="center">\n      <ion-col>\n        <button ion-button block  class="btnAccept"  type=\'submit\' [disabled]="!childRegisterForm.valid" (click)="addAnotherChildHide ? saveChild($event.target) : childRegisterComplete()" >SAVE</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/child-registration/child-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], ChildRegistrationPage);
    return ChildRegistrationPage;
}());

//# sourceMappingURL=child-registration.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_resources__ = __webpack_require__(23);
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
 * Generated class for the InviteUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InviteUsersPage = /** @class */ (function () {
    function InviteUsersPage(navCtrl, navParams, alertCtrl, formBuilder, platform, globalProvider, loadingCtrl, apiProvider, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.globalProvider = globalProvider;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.ga = ga;
        this.networkConnected = true;
        this.inviteUsersForm = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25)])
        });
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    InviteUsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InviteUsersPage');
        this.ga.trackView("Invite Users Screen");
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            /////// track page //////
            this.apiProvider.trackPage("Invite Users Screen")
                .then(function (res) {
            }, function (err) {
            });
        }
    };
    InviteUsersPage.prototype.skipInvite = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            //title: 'NOTICE',
            subTitle: 'You can invite more users later by going to settings.',
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        // this.navCtrl.setRoot('GrowthChartPage');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resources_resources__["a" /* ResourcesPage */]);
                        //this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    InviteUsersPage.prototype.inviteUsers = function () {
        var _this = this;
        this.globalProvider.inviteeEmail = this.inviteUsersForm.value.email;
        this.globalProvider.inviteeName = this.inviteUsersForm.value.name;
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            ///// invite users /////////
            setTimeout(function () {
                _this.apiProvider.inviteUsers()
                    .then(function (res) {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__resources_resources__["a" /* ResourcesPage */]);
                }, function (err) {
                    //alert(JSON.stringify(err));
                    _this.loading.dismiss();
                    _this.showAlert(err);
                });
            }, 1000);
        }
    };
    InviteUsersPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    InviteUsersPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    InviteUsersPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    InviteUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite-users',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/invite-users/invite-users.html"*/'<!--\n  Generated template for the InviteUsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">Invite Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n  <div align="center">\n    <ion-label  style="font-weight: bold; font-size: 18px"> It takes a village to raise a child.</ion-label>\n  </div>\n  <form class="form" [formGroup]="inviteUsersForm" (submit)="inviteUsers()">\n\n  <ion-card id="" class="ion-card"  transparent="true">\n    <ion-card-content>\n      <ion-card-title align="center" style="font-weight: bold"></ion-card-title>\n\n      <!--<p style="font-size: 15px; font-weight: bold; font-style: italic; color: black " align="center"> It takes a village to raise a child.</p> -->\n      <p style="font-size: 15px; color: black; text-align: justify; text-justify: inter-word;" > You can choose to share this app with your whānau so that they can view, comment and be part of your child\'s story. </p>\n      <br>\n      <ion-row>\n        <ion-input  type="text" style="font-size: 15px" placeholder="Name"  formControlName="name" class="form-controll" ></ion-input>\n      </ion-row>\n      <ion-row>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of globalProvider.validation_messages.name">\n            <div class="error-message" *ngIf="inviteUsersForm.get(\'name\').hasError(validation.type) && (inviteUsersForm.get(\'name\').dirty || inviteUsersForm.get(\'name\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-row>\n\n      <ion-row>\n        <ion-input  type="email" style="font-size: 15px" placeholder="Email" formControlName="email" class="form-controll"></ion-input>\n      </ion-row>\n      <ion-row>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of globalProvider.validation_messages.email">\n            <div class="error-message" *ngIf="inviteUsersForm.get(\'email\').hasError(validation.type) && (inviteUsersForm.get(\'email\').dirty || inviteUsersForm.get(\'email\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <div  class="btnBottom">\n    <ion-row align="center">\n      <ion-col>\n        <button ion-button block type="button" class="btnMoreInfo" (click)="skipInvite()">SKIP</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block  class="btnAccept" type=\'submit\' [disabled]="!inviteUsersForm.valid" >INVITE</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/invite-users/invite-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], InviteUsersPage);
    return InviteUsersPage;
}());

//# sourceMappingURL=invite-users.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http) {
        this.http = http;
        this.staging_url = "https://stage.api.seehowtheygrow.nihi.auckland.ac.nz";
        this.notifications = 0;
        this.childWeightPlotsByParent = [];
        this.childLengthPlotsByParent = [];
        this.childHeadPlotsByParent = [];
        this.childWeightPlotsByHealth = [];
        this.childLengthPlotsByHealth = [];
        this.childHeadPlotsByHealth = [];
        this.healthProWeightPlots = [];
        this.newNotificitations = false;
        this.validation_messages = {
            'firstName': [
                { type: 'required', message: 'First name is required.' },
                { type: 'minlength', message: 'First name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'First name cannot be more than 25 characters long.' },
            ],
            'name': [
                { type: 'required', message: 'Name is required.' },
                { type: 'minlength', message: 'Name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'Name cannot be more than 25 characters long.' },
            ],
            'lastName': [
                { type: 'required', message: 'Last name is required.' },
                { type: 'minlength', message: 'Last name must be at least 2 characters long.' },
                { type: 'maxlength', message: 'Last name cannot be more than 25 characters long.' },
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' },
            ],
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'pattern', message: 'Phone incorrect format' }
            ],
            'invitationCode': [
                { type: 'required', message: 'Invitation code is required.' },
                { type: 'pattern', message: 'Incorrect format ' }
            ],
            'postCode': [
                { type: 'required', message: 'Post code is required.' },
                { type: 'pattern', message: 'Incorrect format ' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions.' }
            ],
            'subject': [
                { type: 'required', message: 'Subject is required.' },
                { type: 'minlength', message: 'Subject must be at least 2 characters long.' },
            ],
            'message': [
                { type: 'required', message: 'Message is required..' },
                { type: 'minlength', message: 'Message must be at least 2 characters long.' },
            ]
        };
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/invite-users/invite-users.module": [
		591,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowthChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_modules_series_label__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_modules_series_label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_modules_series_label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_exporting__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_exporting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_exporting__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popup_modal_popup_modal__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api_api__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {MemoriesPageModule} from "../memories/memories.module";









var Dots = /** @class */ (function () {
    function Dots() {
        this.newDotList = [];
    }
    return Dots;
}());
;
__WEBPACK_IMPORTED_MODULE_3_highcharts_modules_series_label___default()(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_exporting___default()(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GrowthChartPage = /** @class */ (function () {
    function GrowthChartPage(navCtrl, appCtrl, _platform, modalCtrl, alertCtrl, menuCtrl, navParams, globalProvider, ga, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this._platform = _platform;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.globalProvider = globalProvider;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.buttonColor2 = 'tabColor';
        this.buttonColor3 = 'light';
        this.buttonColor4 = 'light';
        this.networkConnected = true;
        this.weightChartHide = false;
        this.lengthChartHide = true;
        this.headChartHide = true;
        this.babyAge = 2;
        this.babys = [];
        this.babyPhotos = [];
        this.childWeightMeasurementParent = [];
        this.childLengthMeasurementParent = [];
        this.childHeadMeasurementParent = [];
        this.childWeightMeasurementHealth = [];
        this.childLengthMeasurementHealth = [];
        this.childHeadMeasurementHealth = [];
        this.parentWeightPlot = [];
        this.parentLengthPlot = [];
        this.parentHeadPlot = [];
        this.healthWeightPlot = [];
        this.healthLengthPlot = [];
        this.healthHeadPlot = [];
        this.hideChidrenCollection = true;
        this.childrenList = [];
        this.parentMeasurementsList = [];
        this.healthProMeasurementsList = [];
        this.childChartType = navParams.get("childChartType");
        if (this.childChartType == "weight") {
            this.weightChartCliked();
        }
        else if (this.childChartType == "length") {
            this.lengthChartCliked();
        }
        else if (this.childChartType == "head") {
            this.headChartCliked();
        }
        this._platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
        this.childPhoto = "assets/imgs/child.png";
        /////get childeren list ////////
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            //this.presentLoading();
            /////// track page //////
            this.apiProvider.trackPage("Growth Chart Screen")
                .then(function (res) {
            }, function (err) {
            });
            setTimeout(function () {
                _this.apiProvider.getChildrenList()
                    .then(function (res) {
                    console.log("children list" + JSON.stringify(res));
                    for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                        _this.childrenList.push({
                            first_name: JSON.parse(JSON.stringify(res))[i].title,
                            dateOfBirth: JSON.parse(JSON.stringify(res))[i].field_date_of_birth,
                            term: JSON.parse(JSON.stringify(res))[i].field_term,
                            profilePhoto: JSON.parse(JSON.stringify(res))[i].field_upload_image,
                            household: JSON.parse(JSON.stringify(res))[i].household,
                            nid: JSON.parse(JSON.stringify(res))[i].nid,
                            sex: JSON.parse(JSON.stringify(res))[i].field_sex,
                            dots: new Dots(),
                        });
                    }
                    window.localStorage.setItem("childrenList", JSON.stringify(_this.childrenList));
                    _this.childSex = _this.childrenList[0].sex;
                    //alert("sex---------"+this.childSex);
                    if (_this.childrenList.length == 1) {
                        if (_this.childrenList[0].profilePhoto == "") {
                            _this.childPhoto = "assets/imgs/child.png";
                            _this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                        }
                        else {
                            _this.childPhoto = _this.childrenList[0].profilePhoto;
                        }
                    }
                    if (_this.childrenList.length == 2) {
                        if (_this.childrenList[1].profilePhoto == "") {
                            _this.childPhoto = "assets/imgs/child-1.png";
                            _this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                            _this.childrenList[1].profilePhoto = "assets/imgs/child-1.png";
                        }
                        else {
                            _this.childPhoto = _this.childrenList[1].profilePhoto;
                        }
                    }
                    if (_this.childrenList.length == 3) {
                        if (_this.childrenList[2].profilePhoto == "") {
                            _this.childPhoto = "assets/imgs/child-2.png";
                            _this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                            _this.childrenList[1].profilePhoto = "assets/imgs/child-1.png";
                            _this.childrenList[2].profilePhoto = "assets/imgs/child-2.png";
                        }
                        else {
                            _this.childPhoto = _this.childrenList[2].profilePhoto;
                        }
                    }
                    // if (this.childrenList[0].profilePhoto == "") {
                    //     this.childPhoto = "assets/imgs/child.png";
                    //     this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                    // }else {
                    //     this.childPhoto = this.childrenList[0].profilePhoto;
                    // }
                    if (_this.childrenList.length == 1) {
                        _this.childName = _this.childrenList[0].first_name;
                    }
                    else if (_this.childrenList.length == 2) {
                        _this.childName = _this.childrenList[1].first_name;
                    }
                    else if (_this.childrenList.length == 3) {
                        _this.childName = _this.childrenList[2].first_name;
                    }
                    _this.childId = _this.childrenList[0].nid;
                    if (_this.childrenList.length == 1) {
                        _this.hideChidrenCollection = true;
                    }
                    else {
                        _this.hideChidrenCollection = false;
                    }
                    for (var k = 0; k < _this.childrenList.length; k++) {
                        console.log("call getmeasurements=========");
                        _this.getMeasurements(_this.childrenList[k].nid, k);
                    }
                    ///////////////////////////////
                    //this.loading.dismiss();
                }, function (err) {
                    //this.loading.dismiss();
                    //this.showError(err);
                    //this.navCtrl.push(ChildRegistrationPage);
                });
            }, 1000);
        }
    }
    GrowthChartPage.prototype.fillDataArray = function (val) {
        //let i = val;
        this.healthWeightPlot = [];
        this.healthLengthPlot = [];
        this.healthHeadPlot = [];
        this.parentWeightPlot = [];
        this.parentLengthPlot = [];
        this.parentHeadPlot = [];
        for (var i = 0; i < this.childrenList[val].dots.newDotList.length; i++) {
            if (this.childrenList[val].dots.newDotList[i].isHealthPro) {
                this.healthWeightPlot.push({
                    x: parseFloat(this.childrenList[val].dots.newDotList[i].age),
                    y: parseFloat(this.childrenList[val].dots.newDotList[i].weight),
                    percentile: parseFloat(this.childrenList[val].dots.newDotList[i].weight_centile),
                    date: this.childrenList[val].dots.newDotList[i].date
                });
                console.log("this.healthWeightPlot===" + JSON.stringify(this.healthWeightPlot));
                this.healthLengthPlot.push({
                    x: parseFloat(this.childrenList[val].dots.newDotList[i].age),
                    y: parseFloat(this.childrenList[val].dots.newDotList[i].length),
                    percentile: parseFloat(this.childrenList[val].dots.newDotList[i].length_centile),
                    date: this.childrenList[val].dots.newDotList[i].date
                });
                console.log("this.healthLengthPlot===" + JSON.stringify(this.healthLengthPlot));
                this.healthHeadPlot.push({
                    x: parseFloat(this.childrenList[val].dots.newDotList[i].age),
                    y: parseFloat(this.childrenList[val].dots.newDotList[i].head),
                    percentile: parseFloat(this.childrenList[val].dots.newDotList[i].head_centile),
                    date: this.childrenList[val].dots.newDotList[i].date
                });
                console.log("this.healthHeadPlot===" + JSON.stringify(this.healthHeadPlot));
            }
            else {
                console.log("===parent===" + JSON.stringify(this.healthHeadPlot));
                this.parentWeightPlot.push({
                    x: parseFloat(this.childrenList[val].dots.newDotList[i].age),
                    y: parseFloat(this.childrenList[val].dots.newDotList[i].weight),
                    percentile: parseFloat(this.childrenList[val].dots.newDotList[i].weight_centile),
                    date: this.childrenList[val].dots.newDotList[i].date
                });
                this.parentLengthPlot.push({
                    x: parseFloat(this.childrenList[val].dots.newDotList[i].age),
                    y: parseFloat(this.childrenList[val].dots.newDotList[i].length),
                    percentile: parseFloat(this.childrenList[val].dots.newDotList[i].length_centile),
                    date: this.childrenList[val].dots.newDotList[i].date
                });
                this.parentHeadPlot.push({
                    x: parseFloat(this.childrenList[val].dots.newDotList[i].age),
                    y: parseFloat(this.childrenList[val].dots.newDotList[i].head),
                    percentile: parseFloat(this.childrenList[val].dots.newDotList[i].head_centile),
                    date: this.childrenList[val].dots.newDotList[i].date
                });
            }
        }
        this.showChart();
    };
    GrowthChartPage.prototype.getMeasurements = function (childId, ind) {
        /////////// get measurements list/////////////////////////////////
        var _this = this;
        setTimeout(function () {
            _this.apiProvider.getMeasurements(childId)
                .then(function (res) {
                console.log("measurements list ============" + JSON.stringify(res));
                //if (JSON.parse(JSON.stringify(res)).length == 0) {
                //    this.showChart();
                //} else {
                for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                    if (JSON.parse(JSON.stringify(res))[i].field_length == '') {
                        _this.field_length = '0';
                    }
                    else {
                        _this.field_length = JSON.parse(JSON.stringify(res))[i].field_length[0].value;
                    }
                    if (JSON.parse(JSON.stringify(res))[i].field_weight == '') {
                        _this.field_weight = 0;
                    }
                    else {
                        _this.field_weight = JSON.parse(JSON.stringify(res))[i].field_weight[0].value;
                    }
                    if (JSON.parse(JSON.stringify(res))[i].field_head_circumference == '') {
                        _this.field_head = '0';
                    }
                    else {
                        _this.field_head = JSON.parse(JSON.stringify(res))[i].field_head_circumference[0].value;
                    }
                    if (JSON.parse(JSON.stringify(res))[i].field_head_cir_centile == '') {
                        _this.field_head_centile = '0';
                    }
                    else {
                        _this.field_head_centile = JSON.parse(JSON.stringify(res))[i].field_head_cir_centile[0].value;
                    }
                    if (JSON.parse(JSON.stringify(res))[i].field_weight_centile == '') {
                        _this.field_weight_centile = '0';
                    }
                    else {
                        _this.field_weight_centile = JSON.parse(JSON.stringify(res))[i].field_weight_centile[0].value;
                    }
                    if (JSON.parse(JSON.stringify(res))[i].field_length_centile == '') {
                        _this.field_length_centile = '0';
                    }
                    else {
                        _this.field_length_centile = JSON.parse(JSON.stringify(res))[i].field_length_centile[0].value;
                    }
                    // console.log(JSON.parse(JSON.stringify(res))[i].field_is_professional[0].value + "8888888888");
                    for (var k = 0; k < _this.childrenList.length; k++) {
                        if (_this.childrenList[k].nid != childId) {
                            continue;
                        }
                        _this.childrenList[k].dots.newDotList.push({
                            isHealthPro: JSON.parse(JSON.stringify(res))[i].field_is_professional[0].value,
                            weight: _this.field_weight,
                            length: _this.field_length,
                            head: _this.field_head,
                            nid: JSON.parse(JSON.stringify(res))[i].nid[0].value,
                            weight_centile: _this.field_weight_centile,
                            length_centile: _this.field_length_centile,
                            head_centile: _this.field_head_centile,
                            age: JSON.parse(JSON.stringify(res))[i].field_age[0].value,
                            date: JSON.parse(JSON.stringify(res))[i].field_date[0].value,
                        });
                    }
                }
                // }
                //this.loading.dismiss();
            }, function (err) {
                //this.loading.dismiss();
                //this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            }).then(function (_) {
            }).then(function (_) {
                console.log("ind------" + ind);
                if (ind == 0 || ind == 1 || ind == 2) {
                    _this.fillDataArray(ind);
                }
                else if (ind == 0) {
                    //this.showChart();
                    //this.fillDataArray(ind);
                }
            });
        }, 500);
    };
    GrowthChartPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    GrowthChartPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    GrowthChartPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    GrowthChartPage.prototype.weightChartCliked = function () {
        this.weightChartHide = false;
        this.lengthChartHide = true;
        this.headChartHide = true;
        this.buttonColor2 = 'tabColor';
        this.buttonColor3 = 'light';
        this.buttonColor4 = 'light';
    };
    GrowthChartPage.prototype.lengthChartCliked = function () {
        this.weightChartHide = true;
        this.lengthChartHide = false;
        this.headChartHide = true;
        this.buttonColor2 = 'light';
        this.buttonColor3 = 'tabColor';
        this.buttonColor4 = 'light';
    };
    GrowthChartPage.prototype.headChartCliked = function () {
        this.weightChartHide = true;
        this.lengthChartHide = true;
        this.headChartHide = false;
        this.buttonColor2 = 'light';
        this.buttonColor3 = 'light';
        this.buttonColor4 = 'tabColor';
    };
    GrowthChartPage.prototype.selectChild = function (val, id) {
        this.childPhoto = val.profilePhoto;
        this.childName = val.first_name;
        this.childSex = val.sex;
        this.childId = val.nid;
        if (val.profilePhoto == '' && id == 0) {
            this.childPhoto = 'assets/imgs/child.png';
        }
        else if (val.profilePhoto == '' && id == 1) {
            this.childPhoto = 'assets/imgs/child-1.png';
        }
        else if (val.profilePhoto == '' && id == 2) {
            this.childPhoto = 'assets/imgs/child-2.png';
        }
        //this.getMeasurements(this.childId);
        this.fillDataArray(id);
    };
    GrowthChartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ga.trackView("Growth Chart Screen");
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        this.apiProvider.getNotifications()
            .then(function (res) {
            if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                _this.globalProvider.newNotificitations = true;
            }
            else {
                _this.globalProvider.newNotificitations = false;
            }
        }, function (err) {
            //this.loading.dismiss();
            _this.showError(err);
            //this.navCtrl.push(ChildRegistrationPage);
        });
        //////////////////////////////////////////////////////////////////////////
        /* child selection slider*/
        this.babyPhotos = ['assets/imgs/child.png', 'assets/imgs/child-1.png', 'assets/imgs/child-2.png', 'assets/imgs/child.png', 'assets/imgs/child-1.png', 'assets/imgs/child-1.png', 'assets/imgs/child-2.png'];
        //for (let i=0; 1<this.babyPhotos.length; i++){
        //this.babys.push(this.babyPhotos[i]);
        //}
        //this.chartEditPopup("");
        if (window.localStorage.getItem("parentPhoto") != null) {
            this.globalProvider.parentImage = window.localStorage.getItem("parentPhoto");
        }
        else {
            this.globalProvider.parentImage = "assets/imgs/parent.png";
        }
        if (window.localStorage.getItem("parentFirstName") != null && window.localStorage.getItem("parentLastName") != null) {
            this.globalProvider.parentFirstName = window.localStorage.getItem("parentFirstName");
            this.globalProvider.parentLastName = window.localStorage.getItem("parentLastName");
            //this.parentFullName = window.localStorage.getItem("parentFirstName") + " " + window.localStorage.getItem("parentLastName");
        }
        if (window.localStorage.getItem("skipPopup") == null) {
            this.skipGrowthChart();
        }
    };
    GrowthChartPage.prototype.showChart = function () {
        ///////////////////////////////////////////////////weight chart//////////////////////////////////////////////////////////
        if (this.childSex == "Male") {
            var myChart = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('weightChart', {
                chart: {
                    //type: 'line',
                    marginLeft: 27,
                    marginRight: 1,
                    marginTop: 15,
                },
                credits: {
                    enabled: false // to remove copyrights
                },
                title: {
                    text: ' '
                },
                xAxis: {
                    title: {
                        text: 'Age(months)'
                    },
                    tickInterval: 2,
                    max: 26,
                    min: 0,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                yAxis: {
                    title: {
                        text: 'Weight(Kg)',
                        align: 'high',
                        offset: 0,
                        rotation: 0,
                        y: -5,
                        x: 40
                    },
                    tickInterval: 1,
                    min: 2,
                    max: 20,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                legend: {
                    enabled: true,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'bottom',
                    x: 2,
                    y: -50,
                    floating: true,
                    borderWidth: 1
                },
                series: [{
                        type: 'line',
                        name: '1st',
                        animation: true,
                        data: [[0, 2.3], [1, 3.2], [2, 4.1], [3, 4.8], [4, 5.4], [5, 5.8], [6, 6.1], [7, 6.4], [8, 6.7], [9, 6.9], [10, 7.1], [11, 7.3], [12, 7.5], [13, 7.6], [14, 7.8], [15, 8.0], [16, 8.1], [17, 8.3], [18, 8.4], [19, 8.6], [20, 8.7], [21, 8.9], [22, 9.0], [23, 9.2], [24, 9.3]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    /*{
                      type:'line',
                      name: '3rd',
                      animation: true,  // animate the line draw
                      data: [[0,2.5],[1,3.4],[2,4.4],[3,5.1],[4,5.6],[5,6.1],[6,6.4],[7,6.7],[8,7.0],[9,7.2],[10,7.5],[11,7.7],[12,7.8],[13,8.0],[14,8.2],[15,8.4],[16,8.5],[17,8.7],[18,8.9],[19,9.0],[20,9.2],[21,9.3],[22,9.5],[23,9.7],[24,9.8]],
                      dashStyle: 'longdash',
                      marker: {
                        enabled: false,
                        states: {
                          hover: {
                            enabled: false
                          }
                        }
                      },
                      lineColor:'#ccd6eb',
                      lineWidth:1,
                      //enableMouseTracking: false,  //to disable series lines mouse actions
                    },*/
                    {
                        type: 'line',
                        name: '5th',
                        showInLegend: false,
                        animation: true,
                        data: [[0, 2.6], [1, 3.6], [2, 4.5], [3, 5.2], [4, 5.8], [5, 6.2], [6, 6.6], [7, 6.9], [8, 7.2], [9, 7.4], [10, 7.7], [11, 7.9], [12, 8.1], [13, 8.3], [14, 8.4], [15, 8.6], [16, 8.8], [17, 8.9], [18, 9.1], [19, 9.3], [20, 9.4], [21, 9.6], [22, 9.8], [23, 9.9], [24, 10.1]],
                        dashStyle: 'longdash',
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '15th',
                        animation: true,
                        data: [[0, 2.9], [1, 3.9], [2, 4.9], [3, 5.6], [4, 6.2], [5, 6.7], [6, 7.1], [7, 7.4], [8, 7.7], [9, 7.9], [10, 8.2], [11, 8.4], [12, 8.6], [13, 8.8], [14, 9.0], [15, 9.2], [16, 9.4], [17, 9.6], [18, 9.7], [19, 9.9], [20, 10.1], [21, 10.3], [22, 10.5], [23, 10.6], [24, 10.8]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '25th',
                        animation: true,
                        data: [[0, 3.0], [1, 4.1], [2, 5.1], [3, 5.9], [4, 6.5], [5, 7.0], [6, 7.4], [7, 7.7], [8, 8.0], [9, 8.3], [10, 8.6], [11, 8.8], [12, 9.0], [13, 9.2], [14, 9.4], [15, 9.6], [16, 9.8], [17, 10.0], [18, 10.1], [19, 10.3], [20, 10.5], [21, 10.7], [22, 10.9], [23, 11.1], [24, 11.3]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '50th',
                        animation: true,
                        data: [[0, 3.3], [1, 4.5], [2, 5.6], [3, 6.4], [4, 7.0], [5, 7.5], [6, 7.9], [7, 8.3], [8, 8.6], [9, 8.9], [10, 9.2], [11, 9.4], [12, 9.7], [13, 9.9], [14, 10.1], [15, 10.3], [16, 10.5], [17, 10.7], [18, 10.9], [19, 11.1], [20, 11.3], [21, 11.5], [22, 11.8], [23, 12.0], [24, 12.2]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '75th',
                        animation: true,
                        data: [[0, 3.7], [1, 4.9], [2, 6.0], [3, 6.9], [4, 7.6], [5, 8.1], [6, 8.5], [7, 8.9], [8, 9.3], [9, 9.6], [10, 9.9], [11, 10.1], [12, 10.4], [13, 10.6], [14, 10.9], [15, 11.1], [16, 11.3], [17, 11.6], [18, 11.8], [19, 12.0], [20, 12.2], [21, 12.5], [22, 12.7], [23, 12.9], [24, 13.1]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                        //enableMouseTracking: false,  //to disable series lines mouse actions
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                    },
                    {
                        type: 'line',
                        name: '85th',
                        animation: true,
                        data: [[0, 3.9], [1, 5.1], [2, 6.3], [3, 7.2], [4, 7.9], [5, 8.4], [6, 8.9], [7, 9.3], [8, 9.6], [9, 10.0], [10, 10.3], [11, 10.5], [12, 10.8], [13, 11.1], [14, 11.3], [15, 11.6], [16, 11.8], [17, 12.0], [18, 12.3], [19, 12.5], [20, 12.7], [21, 13.0], [22, 13.2], [23, 13.4], [24, 13.7]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '95th',
                        animation: true,
                        data: [[0, 4.2], [1, 5.5], [2, 6.8], [3, 7.7], [4, 8.4], [5, 9.0], [6, 9.5], [7, 9.9], [8, 10.3], [9, 10.6], [10, 10.9], [11, 11.2], [12, 11.5], [13, 11.8], [14, 12.1], [15, 12.3], [16, 12.6], [17, 12.9], [18, 13.1], [19, 13.4], [20, 13.6], [21, 13.9], [22, 14.2], [23, 14.4], [24, 14.7]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '97th',
                        animation: true,
                        data: [[0, 4.3], [1, 5.7], [2, 7.0], [3, 7.9], [4, 8.6], [5, 9.2], [6, 9.7], [7, 10.2], [8, 10.5], [9, 10.9], [10, 11.2], [11, 11.5], [12, 11.8], [13, 12.1], [14, 12.4], [15, 12.7], [16, 12.9], [17, 13.2], [18, 13.5], [19, 13.7], [20, 14.0], [21, 14.3], [22, 14.5], [23, 14.8], [24, 15.1]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '99th',
                        animation: true,
                        data: [[0, 4.6], [1, 6.0], [2, 7.4], [3, 8.3], [4, 9.1], [5, 9.7], [6, 10.2], [7, 10.7], [8, 11.1], [9, 11.4], [10, 11.8], [11, 12.1], [12, 12.4], [13, 12.7], [14, 13.0], [15, 13.3], [16, 13.6], [17, 13.9], [18, 14.2], [19, 14.4], [20, 14.7], [21, 15.0], [22, 15.3], [23, 15.6], [24, 15.9]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        name: 'Parent',
                        type: 'scatter',
                        data: this.parentWeightPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#0e39ff',
                            radius: 4,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    },
                    {
                        name: 'Health Professional',
                        type: 'scatter',
                        data: this.healthWeightPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#ffbb30',
                            radius: 5,
                            symbol: 'diamond',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    }
                ],
                navigation: {
                    buttonOptions: {
                        verticalAlign: 'top',
                        y: -15,
                        x: 11,
                        symbolStroke: '#DB496B'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            style: {
                                color: '#000000',
                                fontSize: '8px',
                            },
                            align: 'right',
                            display: 'outside',
                            connectorAllowed: false,
                        },
                    }
                },
                tooltip: {
                    //shared: false,
                    borderWidth: 2,
                    borderColor: '#fff',
                    backgroundColor: '#3B8175',
                    borderRadius: 10,
                    useHTML: true,
                    formatter: function () {
                        if (this.series.name == '1st' || this.series.name == '3rd' || this.series.name == '5th' || this.series.name == '15th' || this.series.name == '25th' || this.series.name == '50th' || this.series.name == '75th' || this.series.name == '85th' || this.series.name == '95th' || this.series.name == '97th' || this.series.name == '99th') {
                            return false;
                        }
                        else {
                            //let percentile = window.localStorage.getItem("percentileWeight");
                            return '<div style="background: #3B8175;">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<label style="color: white; font-weight: bold; font-size: large; text-align:center" >' + this.point.percentile + 'th' + '</label><hr style="border-width: 1px;border-color: white">' + '<b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label>'
                                + '<br><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.point.date + '</label>' + '<br><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></div>';
                            // return '<div style="background: #3B8175;"><br><td><b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label> </td>' + '<br></br><td><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.date + '</label></td></tr>' + '<br></br><td><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></td></tr></div>'
                        }
                    }
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: [{
                                    textKey: 'printChart',
                                    onclick: function () {
                                        this.print();
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPNG',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'image/png'
                                        });
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPDF',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'application/pdf'
                                        });
                                    }
                                },
                            ]
                        }
                    }
                }
            });
        }
        else {
            var myChart = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('weightChart', {
                chart: {
                    //type: 'line',
                    marginLeft: 27,
                    marginRight: 1,
                    marginTop: 15,
                },
                credits: {
                    enabled: false // to remove copyrights
                },
                title: {
                    text: ' '
                },
                xAxis: {
                    title: {
                        text: 'Age(months)'
                    },
                    tickInterval: 2,
                    max: 26,
                    min: 0,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                yAxis: {
                    title: {
                        text: 'Weight(Kg)',
                        align: 'high',
                        offset: 0,
                        rotation: 0,
                        y: -5,
                        x: 40
                    },
                    tickInterval: 1,
                    min: 2,
                    max: 20,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                legend: {
                    enabled: true,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'bottom',
                    x: 2,
                    y: -50,
                    floating: true,
                    borderWidth: 1
                },
                series: [{
                        type: 'line',
                        name: '1st',
                        animation: true,
                        data: [[0, 2.3], [1, 3.0], [2, 3.8], [3, 4.4], [4, 4.8], [5, 5.2], [6, 5.5], [7, 5.8], [8, 6.0], [9, 6.2], [10, 6.4], [11, 6.6], [12, 6.8], [13, 6.9], [14, 7.1], [15, 7.3], [16, 7.4], [17, 7.6], [18, 7.8], [19, 7.9], [20, 8.1], [21, 8.2], [22, 8.4], [23, 8.5], [24, 8.7]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    /*{
                      type:'line',
                      name: '3rd',
                      animation: true,  // animate the line draw
                      data: [[0,2.5],[1,3.4],[2,4.4],[3,5.1],[4,5.6],[5,6.1],[6,6.4],[7,6.7],[8,7.0],[9,7.2],[10,7.5],[11,7.7],[12,7.8],[13,8.0],[14,8.2],[15,8.4],[16,8.5],[17,8.7],[18,8.9],[19,9.0],[20,9.2],[21,9.3],[22,9.5],[23,9.7],[24,9.8]],
                      dashStyle: 'longdash',
                      marker: {
                        enabled: false,
                        states: {
                          hover: {
                            enabled: false
                          }
                        }
                      },
                      lineColor:'#ccd6eb',
                      lineWidth:1,
                      //enableMouseTracking: false,  //to disable series lines mouse actions
                    },*/
                    {
                        type: 'line',
                        name: '5th',
                        showInLegend: false,
                        animation: true,
                        data: [[0, 2.5], [1, 3.3], [2, 4.1], [3, 4.7], [4, 5.2], [5, 5.6], [6, 6.0], [7, 6.3], [8, 6.5], [9, 6.8], [10, 7.0], [11, 7.2], [12, 7.3], [13, 7.5], [14, 7.7], [15, 7.9], [16, 8.1], [17, 8.2], [18, 8.4], [19, 8.6], [20, 8.7], [21, 8.9], [22, 9.1], [23, 9.2], [24, 9.4]],
                        dashStyle: 'longdash',
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '15th',
                        animation: true,
                        data: [[0, 2.8], [1, 3.6], [2, 4.5], [3, 5.1], [4, 5.6], [5, 6.1], [6, 6.4], [7, 6.7], [8, 7.0], [9, 7.3], [10, 7.5], [11, 7.7], [12, 7.9], [13, 8.1], [14, 8.3], [15, 8.5], [16, 8.7], [17, 8.8], [18, 9.0], [19, 9.2], [20, 9.4], [21, 9.6], [22, 9.8], [23, 9.9], [24, 10.1]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '25th',
                        animation: true,
                        data: [[0, 2.9], [1, 3.8], [2, 4.7], [3, 5.4], [4, 5.9], [5, 6.4], [6, 6.7], [7, 7.0], [8, 7.3], [9, 7.6], [10, 7.8], [11, 8.0], [12, 8.2], [13, 8.4], [14, 8.6], [15, 8.8], [16, 9.0], [17, 9.2], [18, 9.4], [19, 9.6], [20, 9.8], [21, 10.0], [22, 10.2], [23, 10.4], [24, 10.6]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '50th',
                        animation: true,
                        data: [[0, 3.2], [1, 4.2], [2, 5.1], [3, 5.8], [4, 6.4], [5, 6.9], [6, 7.3], [7, 7.6], [8, 7.9], [9, 8.2], [10, 8.5], [11, 8.7], [12, 8.9], [13, 9.2], [14, 9.4], [15, 9.6], [16, 9.8], [17, 10.0], [18, 10.2], [19, 10.4], [20, 10.6], [21, 10.9], [22, 11.1], [23, 11.3], [24, 11.5]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '75th',
                        animation: true,
                        data: [[0, 3.6], [1, 4.6], [2, 5.6], [3, 6.4], [4, 7.0], [5, 7.5], [6, 7.9], [7, 8.3], [8, 8.6], [9, 8.9], [10, 9.2], [11, 9.5], [12, 9.7], [13, 10.0], [14, 10.2], [15, 10.4], [16, 10.7], [17, 10.9], [18, 11.1], [19, 11.4], [20, 11.6], [21, 11.8], [22, 12.0], [23, 12.3], [24, 12.5]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                        //enableMouseTracking: false,  //to disable series lines mouse actions
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                    },
                    {
                        type: 'line',
                        name: '85th',
                        animation: true,
                        data: [[0, 3.7], [1, 4.8], [2, 5.9], [3, 6.7], [4, 7.3], [5, 7.8], [6, 8.3], [7, 8.7], [8, 9.0], [9, 9.3], [10, 9.6], [11, 9.9], [12, 10.2], [13, 10.4], [14, 10.7], [15, 10.9], [16, 11.2], [17, 11.4], [18, 11.6], [19, 11.9], [20, 12.1], [21, 12.4], [22, 12.6], [23, 12.8], [24, 13.1]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '95th',
                        animation: true,
                        data: [[0, 4.0], [1, 5.2], [2, 6.3], [3, 7.2], [4, 7.9], [5, 8.4], [6, 8.9], [7, 9.4], [8, 9.7], [9, 10.1], [10, 10.4], [11, 10.7], [12, 11.0], [13, 11.3], [14, 11.5], [15, 11.8], [16, 12.1], [17, 12.3], [18, 12.6], [19, 12.9], [20, 13.1], [21, 13.4], [22, 13.6], [23, 13.9], [24, 14.2]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '97th',
                        animation: true,
                        data: [[0, 4.2], [1, 5.4], [2, 6.5], [3, 7.4], [4, 8.1], [5, 8.7], [6, 9.2], [7, 9.6], [8, 10.0], [9, 10.4], [10, 10.7], [11, 11.0], [12, 11.3], [13, 11.6], [14, 11.9], [15, 12.2], [16, 12.5], [17, 12.7], [18, 13.0], [19, 13.3], [20, 13.5], [21, 13.8], [22, 14.1], [23, 14.3], [24, 14.6]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '99th',
                        animation: true,
                        data: [[0, 4.4], [1, 5.7], [2, 6.9], [3, 7.8], [4, 8.6], [5, 9.2], [6, 9.7], [7, 10.2], [8, 10.6], [9, 11.0], [10, 11.3], [11, 11.7], [12, 12.0], [13, 12.3], [14, 12.6], [15, 12.9], [16, 13.2], [17, 13.5], [18, 13.8], [19, 14.1], [20, 14.4], [21, 14.6], [22, 14.9], [23, 15.2], [24, 15.5]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        name: 'Parent',
                        type: 'scatter',
                        data: this.parentWeightPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#0e39ff',
                            radius: 4,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    },
                    {
                        name: 'Health Professional',
                        type: 'scatter',
                        data: this.healthWeightPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#ffbb30',
                            radius: 5,
                            symbol: 'diamond',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    }
                ],
                navigation: {
                    buttonOptions: {
                        verticalAlign: 'top',
                        y: -15,
                        x: 11,
                        symbolStroke: '#DB496B'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            style: {
                                color: '#000000',
                                fontSize: '8px',
                            },
                            align: 'right',
                            display: 'outside',
                            connectorAllowed: false,
                        },
                    }
                },
                tooltip: {
                    //shared: false,
                    borderWidth: 2,
                    borderColor: '#fff',
                    backgroundColor: '#3B8175',
                    borderRadius: 10,
                    useHTML: true,
                    formatter: function () {
                        if (this.series.name == '1st' || this.series.name == '3rd' || this.series.name == '5th' || this.series.name == '15th' || this.series.name == '25th' || this.series.name == '50th' || this.series.name == '75th' || this.series.name == '85th' || this.series.name == '95th' || this.series.name == '97th' || this.series.name == '99th') {
                            return false;
                        }
                        else {
                            //let percentile = window.localStorage.getItem("percentileWeight");
                            return '<div style="background: #3B8175;">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<label style="color: white; font-weight: bold; font-size: large; text-align:center" >' + this.point.percentile + 'th' + '</label><hr style="border-width: 1px;border-color: white">' + '<b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label>'
                                + '<br><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.point.date + '</label>' + '<br><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></div>';
                            // return '<div style="background: #3B8175;"><br><td><b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label> </td>' + '<br></br><td><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.date + '</label></td></tr>' + '<br></br><td><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></td></tr></div>'
                        }
                    }
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: [{
                                    textKey: 'printChart',
                                    onclick: function () {
                                        this.print();
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPNG',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'image/png'
                                        });
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPDF',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'application/pdf'
                                        });
                                    }
                                },
                            ]
                        }
                    }
                }
            });
        }
        /////////////////////////////////////////////// length chart ///////////////////////////////////////////////////////
        if (this.childSex == "Male") {
            var myChart = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('lengthChart', {
                chart: {
                    //type: 'line',
                    marginLeft: 27,
                    marginRight: 1,
                    marginTop: 15,
                },
                credits: {
                    enabled: false // to remove copyrights
                },
                title: {
                    text: ' '
                },
                xAxis: {
                    title: {
                        text: 'Age(months)'
                    },
                    tickInterval: 2,
                    max: 26,
                    min: 0,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                yAxis: {
                    title: {
                        text: 'Length(cm)',
                        align: 'high',
                        offset: 0,
                        rotation: 0,
                        y: -5,
                        x: 40
                    },
                    tickInterval: 5,
                    min: 40,
                    max: 100,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                legend: {
                    enabled: true,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'bottom',
                    x: 2,
                    y: -50,
                    floating: true,
                    borderWidth: 1
                },
                series: [{
                        type: 'line',
                        name: '1st',
                        animation: true,
                        data: [[0, 45.4], [1, 50.2], [2, 53.8], [3, 56.7], [4, 59.0], [5, 61.0], [6, 62.6], [7, 64.1], [8, 65.5], [9, 66.8], [10, 68.0], [11, 69.1], [12, 70.2], [13, 71.3], [14, 72.3], [15, 73.3], [16, 74.2], [17, 75.1], [18, 76.0], [19, 76.8], [20, 77.7], [21, 78.4], [22, 79.2], [23, 80.0], [24, 80.7]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    /*{
                      type:'line',
                      name: '3rd',
                      animation: true,  // animate the line draw
                      data: [[0,2.5],[1,3.4],[2,4.4],[3,5.1],[4,5.6],[5,6.1],[6,6.4],[7,6.7],[8,7.0],[9,7.2],[10,7.5],[11,7.7],[12,7.8],[13,8.0],[14,8.2],[15,8.4],[16,8.5],[17,8.7],[18,8.9],[19,9.0],[20,9.2],[21,9.3],[22,9.5],[23,9.7],[24,9.8]],
                      dashStyle: 'longdash',
                      marker: {
                        enabled: false,
                        states: {
                          hover: {
                            enabled: false
                          }
                        }
                      },
                      lineColor:'#ccd6eb',
                      lineWidth:1,
                      //enableMouseTracking: false,  //to disable series lines mouse actions
                    },*/
                    {
                        type: 'line',
                        name: '5th',
                        showInLegend: false,
                        animation: true,
                        data: [[0, 46.8], [1, 51.5], [2, 55.1], [3, 58.1], [4, 60.5], [5, 62.4], [6, 64.1], [7, 65.6], [8, 67.0], [9, 68.3], [10, 69.5], [11, 70.7], [12, 71.8], [13, 72.9], [14, 74.0], [15, 75.0], [16, 76.0], [17, 76.9], [18, 77.8], [19, 78.7], [20, 79.6], [21, 80.4], [22, 81.2], [23, 82.0], [24, 82.8]],
                        dashStyle: 'longdash',
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '15th',
                        animation: true,
                        data: [[0, 47.9], [1, 52.7], [2, 56.4], [3, 59.3], [4, 61.7], [5, 63.7], [6, 65.4], [7, 66.9], [8, 68.3], [9, 69.6], [10, 70.9], [11, 72.1], [12, 73.3], [13, 74.4], [14, 75.5], [15, 76.5], [16, 77.5], [17, 78.5], [18, 79.5], [19, 80.4], [20, 81.3], [21, 82.2], [22, 83.0], [23, 83.8], [24, 84.6]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '25th',
                        animation: true,
                        data: [[0, 48.6], [1, 53.4], [2, 57.1], [3, 60.1], [4, 62.5], [5, 64.5], [6, 66.2], [7, 67.7], [8, 69.1], [9, 70.5], [10, 71.7], [11, 73.0], [12, 74.1], [13, 75.3], [14, 76.4], [15, 77.4], [16, 78.5], [17, 79.5], [18, 80.4], [19, 81.4], [20, 82.3], [21, 83.2], [22, 84.1], [23, 84.9], [24, 85.8]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '50th',
                        animation: true,
                        data: [[0, 49.9], [1, 54.7], [2, 58.4], [3, 61.4], [4, 63.9], [5, 65.9], [6, 67.6], [7, 69.2], [8, 70.6], [9, 72.0], [10, 73.3], [11, 74.5], [12, 75.7], [13, 76.9], [14, 78.0], [15, 79.1], [16, 80.2], [17, 81.2], [18, 82.3], [19, 83.2], [20, 84.2], [21, 85.1], [22, 86.0], [23, 86.9], [24, 87.8]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '75th',
                        animation: true,
                        data: [[0, 51.2], [1, 56.0], [2, 59.8], [3, 62.8], [4, 65.3], [5, 67.3], [6, 69.1], [7, 70.6], [8, 72.1], [9, 73.5], [10, 74.8], [11, 76.1], [12, 77.4], [13, 78.6], [14, 79.7], [15, 80.9], [16, 82.0], [17, 83.0], [18, 84.1], [19, 85.1], [20, 86.1], [21, 87.1], [22, 88.0], [23, 89.0], [24, 89.9]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                        //enableMouseTracking: false,  //to disable series lines mouse actions
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                    },
                    {
                        type: 'line',
                        name: '85th',
                        animation: true,
                        data: [[0, 51.8], [1, 56.7], [2, 60.5], [3, 63.5], [4, 66.0], [5, 68.1], [6, 69.8], [7, 71.4], [8, 72.9], [9, 74.3], [10, 75.6], [11, 77.0], [12, 78.2], [13, 79.4], [14, 80.6], [15, 81.8], [16, 82.9], [17, 84.0], [18, 85.1], [19, 86.1], [20, 87.1], [21, 88.1], [22, 89.1], [23, 90.0], [24, 91.0]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '95th',
                        animation: true,
                        data: [[0, 53.0], [1, 57.9], [2, 61.7], [3, 64.8], [4, 67.3], [5, 69.4], [6, 71.1], [7, 72.7], [8, 74.2], [9, 75.7], [10, 77.0], [11, 78.4], [12, 79.7], [13, 80.9], [14, 82.1], [15, 83.3], [16, 84.5], [17, 85.6], [18, 86.7], [19, 87.8], [20, 88.8], [21, 89.9], [22, 90.9], [23, 91.9], [24, 92.8]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '97th',
                        animation: true,
                        data: [[0, 53.4], [1, 58.4], [2, 62.2], [3, 65.3], [4, 67.8], [5, 69.9], [6, 71.6], [7, 73.2], [8, 74.7], [9, 76.2], [10, 77.6], [11, 78.9], [12, 80.2], [13, 81.5], [14, 82.7], [15, 83.9], [16, 85.1], [17, 86.2], [18, 87.3], [19, 88.4], [20, 89.5], [21, 90.5], [22, 91.6], [23, 92.6], [24, 93.6]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '99th',
                        animation: true,
                        data: [[0, 54.3], [1, 59.3], [2, 63.1], [3, 66.2], [4, 68.7], [5, 70.8], [6, 72.6], [7, 74.2], [8, 75.7], [9, 77.2], [10, 78.6], [11, 80.0], [12, 81.3], [13, 82.6], [14, 83.8], [15, 85.0], [16, 86.2], [17, 87.4], [18, 88.5], [19, 89.7], [20, 90.7], [21, 91.8], [22, 92.9], [23, 93.9], [24, 94.9]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        name: 'Parent',
                        type: 'scatter',
                        data: this.parentLengthPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#0e39ff',
                            radius: 4,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    },
                    {
                        name: 'Health Professional',
                        type: 'scatter',
                        data: this.healthLengthPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#ffbb30',
                            radius: 5,
                            symbol: 'diamond',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    }
                ],
                navigation: {
                    buttonOptions: {
                        verticalAlign: 'top',
                        y: -15,
                        x: 11,
                        symbolStroke: '#DB496B'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            style: {
                                color: '#000000',
                                fontSize: '8px',
                            },
                            align: 'right',
                            display: 'outside',
                            connectorAllowed: false,
                        },
                    }
                },
                tooltip: {
                    //shared: false,
                    borderWidth: 2,
                    borderColor: '#fff',
                    backgroundColor: '#3B8175',
                    borderRadius: 10,
                    useHTML: true,
                    formatter: function () {
                        if (this.series.name == '1st' || this.series.name == '3rd' || this.series.name == '5th' || this.series.name == '15th' || this.series.name == '25th' || this.series.name == '50th' || this.series.name == '75th' || this.series.name == '85th' || this.series.name == '95th' || this.series.name == '97th' || this.series.name == '99th') {
                            return false;
                        }
                        else {
                            //let percentile = window.localStorage.getItem("percentileWeight");
                            return '<div style="background: #3B8175;">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<label style="color: white; font-weight: bold; font-size: large; text-align:center" >' + this.point.percentile + 'th' + '</label><hr style="border-width: 1px;border-color: white">' + '<b style="color: white !important;">Length:</b>' + ' ' + '<label style="color: white">' + this.y + 'cm' + '</label>'
                                + '<br><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.point.date + '</label>' + '<br><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></div>';
                            // return '<div style="background: #3B8175;"><br><td><b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label> </td>' + '<br></br><td><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.date + '</label></td></tr>' + '<br></br><td><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></td></tr></div>'
                        }
                    }
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: [{
                                    textKey: 'printChart',
                                    onclick: function () {
                                        this.print();
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPNG',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'image/png'
                                        });
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPDF',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'application/pdf'
                                        });
                                    }
                                },
                            ]
                        }
                    }
                }
            });
        }
        else {
            var myChart = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('lengthChart', {
                chart: {
                    //type: 'line',
                    marginLeft: 27,
                    marginRight: 1,
                    marginTop: 15,
                },
                credits: {
                    enabled: false // to remove copyrights
                },
                title: {
                    text: ' '
                },
                xAxis: {
                    title: {
                        text: 'Age(months)'
                    },
                    tickInterval: 2,
                    max: 26,
                    min: 0,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                yAxis: {
                    title: {
                        text: 'Length(cm)',
                        align: 'high',
                        offset: 0,
                        rotation: 0,
                        y: -5,
                        x: 40
                    },
                    tickInterval: 5,
                    min: 40,
                    max: 100,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                legend: {
                    enabled: true,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'bottom',
                    x: 2,
                    y: -50,
                    floating: true,
                    borderWidth: 1
                },
                series: [{
                        type: 'line',
                        name: '1st',
                        animation: true,
                        data: [[0, 44.8], [1, 49.1], [2, 52.3], [3, 54.9], [4, 57.1], [5, 58.9], [6, 60.5], [7, 61.9], [8, 63.2], [9, 64.5], [10, 65.7], [11, 66.9], [12, 68.0], [13, 69.1], [14, 70.1], [15, 71.1], [16, 72.1], [17, 73.0], [18, 74.0], [19, 74.8], [20, 75.7], [21, 76.5], [22, 77.3], [23, 78.1], [24, 78.9]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    /*{
                      type:'line',
                      name: '3rd',
                      animation: true,  // animate the line draw
                      data: [[0,2.5],[1,3.4],[2,4.4],[3,5.1],[4,5.6],[5,6.1],[6,6.4],[7,6.7],[8,7.0],[9,7.2],[10,7.5],[11,7.7],[12,7.8],[13,8.0],[14,8.2],[15,8.4],[16,8.5],[17,8.7],[18,8.9],[19,9.0],[20,9.2],[21,9.3],[22,9.5],[23,9.7],[24,9.8]],
                      dashStyle: 'longdash',
                      marker: {
                        enabled: false,
                        states: {
                          hover: {
                            enabled: false
                          }
                        }
                      },
                      lineColor:'#ccd6eb',
                      lineWidth:1,
                      //enableMouseTracking: false,  //to disable series lines mouse actions
                    },*/
                    {
                        type: 'line',
                        name: '5th',
                        showInLegend: false,
                        animation: true,
                        data: [[0, 46.1], [1, 50.5], [2, 53.7], [3, 56.3], [4, 58.5], [5, 60.4], [6, 62.0], [7, 63.5], [8, 64.9], [9, 66.2], [10, 67.4], [11, 68.6], [12, 69.8], [13, 70.9], [14, 72.0], [15, 73.0], [16, 74.0], [17, 75.0], [18, 75.9], [19, 76.9], [20, 77.7], [21, 78.6], [22, 79.5], [23, 80.3], [24, 81.1]],
                        dashStyle: 'longdash',
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '15th',
                        animation: true,
                        data: [[0, 47.2], [1, 51.7], [2, 55.0], [3, 57.6], [4, 59.8], [5, 61.7], [6, 63.4], [7, 64.9], [8, 66.3], [9, 67.6], [10, 68.9], [11, 70.2], [12, 71.3], [13, 72.5], [14, 73.6], [15, 74.7], [16, 75.7], [17, 76.7], [18, 77.7], [19, 78.7], [20, 79.6], [21, 80.5], [22, 81.4], [23, 82.2], [24, 83.1]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '25th',
                        animation: true,
                        data: [[0, 47.9], [1, 52.4], [2, 55.7], [3, 58.4], [4, 60.6], [5, 62.5], [6, 64.2], [7, 65.7], [8, 67.2], [9, 68.5], [10, 69.8], [11, 71.1], [12, 72.3], [13, 73.4], [14, 74.6], [15, 75.7], [16, 76.7], [17, 77.7], [18, 78.7], [19, 79.7], [20, 80.7], [21, 81.6], [22, 82.5], [23, 83.4], [24, 84.2]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '50th',
                        animation: true,
                        data: [[0, 49.1], [1, 53.7], [2, 57.1], [3, 59.8], [4, 62.1], [5, 64.0], [6, 65.7], [7, 67.3], [8, 68.7], [9, 70.1], [10, 71.5], [11, 72.8], [12, 74.0], [13, 75.2], [14, 76.4], [15, 77.5], [16, 78.6], [17, 79.7], [18, 80.7], [19, 81.7], [20, 82.7], [21, 83.7], [22, 84.6], [23, 85.5], [24, 86.4]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '75th',
                        animation: true,
                        data: [[0, 50.4], [1, 55.0], [2, 58.4], [3, 61.2], [4, 63.5], [5, 65.5], [6, 67.3], [7, 68.8], [8, 70.3], [9, 71.8], [10, 73.1], [11, 74.5], [12, 75.8], [13, 77.0], [14, 78.2], [15, 79.4], [16, 80.5], [17, 81.6], [18, 82.7], [19, 83.7], [20, 84.7], [21, 85.7], [22, 86.7], [23, 87.7], [24, 88.6]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                        //enableMouseTracking: false,  //to disable series lines mouse actions
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                    },
                    {
                        type: 'line',
                        name: '85th',
                        animation: true,
                        data: [[0, 51.1], [1, 55.7], [2, 59.2], [3, 62.0], [4, 64.3], [5, 66.3], [6, 68.1], [7, 69.7], [8, 71.2], [9, 72.6], [10, 74.0], [11, 75.4], [12, 76.7], [13, 77.9], [14, 79.2], [15, 80.3], [16, 81.5], [17, 82.6], [18, 83.7], [19, 84.8], [20, 85.8], [21, 86.8], [22, 87.8], [23, 88.8], [24, 89.8]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '95th',
                        animation: true,
                        data: [[0, 52.2], [1, 56.9], [2, 60.4], [3, 63.3], [4, 65.7], [5, 67.7], [6, 69.5], [7, 71.1], [8, 72.6], [9, 74.1], [10, 75.5], [11, 76.9], [12, 78.3], [13, 79.5], [14, 80.8], [15, 82.0], [16, 83.2], [17, 84.4], [18, 85.5], [19, 86.6], [20, 87.7], [21, 88.7], [22, 89.7], [23, 90.7], [24, 91.7]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '97th',
                        animation: true,
                        data: [[0, 52.7], [1, 57.4], [2, 60.9], [3, 63.8], [4, 66.2], [5, 68.2], [6, 70.0], [7, 71.6], [8, 73.2], [9, 74.7], [10, 76.1], [11, 77.5], [12, 78.9], [13, 80.2], [14, 81.4], [15, 82.7], [16, 83.9], [17, 85.0], [18, 86.2], [19, 87.3], [20, 88.4], [21, 89.4], [22, 90.5], [23, 91.5], [24, 92.5]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '99th',
                        animation: true,
                        data: [[0, 53.5], [1, 58.2], [2, 61.8], [3, 64.7], [4, 67.1], [5, 69.2], [6, 71.0], [7, 72.7], [8, 74.3], [9, 75.8], [10, 77.2], [11, 78.6], [12, 80.0], [13, 81.3], [14, 82.6], [15, 83.9], [16, 85.1], [17, 86.3], [18, 87.5], [19, 88.6], [20, 89.7], [21, 90.8], [22, 91.9], [23, 92.9], [24, 93.9]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        name: 'Parent',
                        type: 'scatter',
                        data: this.parentLengthPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#0e39ff',
                            radius: 4,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    },
                    {
                        name: 'Health Professional',
                        type: 'scatter',
                        data: this.healthLengthPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#ffbb30',
                            radius: 5,
                            symbol: 'diamond',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    }
                ],
                navigation: {
                    buttonOptions: {
                        verticalAlign: 'top',
                        y: -15,
                        x: 11,
                        symbolStroke: '#DB496B'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            style: {
                                color: '#000000',
                                fontSize: '8px',
                            },
                            align: 'right',
                            display: 'outside',
                            connectorAllowed: false,
                        },
                    }
                },
                tooltip: {
                    //shared: false,
                    borderWidth: 2,
                    borderColor: '#fff',
                    backgroundColor: '#3B8175',
                    borderRadius: 10,
                    useHTML: true,
                    formatter: function () {
                        if (this.series.name == '1st' || this.series.name == '3rd' || this.series.name == '5th' || this.series.name == '15th' || this.series.name == '25th' || this.series.name == '50th' || this.series.name == '75th' || this.series.name == '85th' || this.series.name == '95th' || this.series.name == '97th' || this.series.name == '99th') {
                            return false;
                        }
                        else {
                            //let percentile = window.localStorage.getItem("percentileWeight");
                            return '<div style="background: #3B8175;">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<label style="color: white; font-weight: bold; font-size: large; text-align:center" >' + this.point.percentile + 'th' + '</label><hr style="border-width: 1px;border-color: white">' + '<b style="color: white !important;">Length:</b>' + ' ' + '<label style="color: white">' + this.y + 'cm' + '</label>'
                                + '<br><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.point.date + '</label>' + '<br><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></div>';
                            // return '<div style="background: #3B8175;"><br><td><b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label> </td>' + '<br></br><td><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.date + '</label></td></tr>' + '<br></br><td><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></td></tr></div>'
                        }
                    }
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: [{
                                    textKey: 'printChart',
                                    onclick: function () {
                                        this.print();
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPNG',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'image/png'
                                        });
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPDF',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'application/pdf'
                                        });
                                    }
                                },
                            ]
                        }
                    }
                }
            });
        }
        /////////////////////////////////////////////// head chart ////////////////////////////////////////////////////////
        if (this.childSex == "Male") {
            var myChart = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('headChart', {
                chart: {
                    //type: 'line',
                    marginLeft: 27,
                    marginRight: 1,
                    marginTop: 15,
                },
                credits: {
                    enabled: false // to remove copyrights
                },
                title: {
                    text: ' '
                },
                xAxis: {
                    title: {
                        text: 'Age(months)'
                    },
                    tickInterval: 2,
                    max: 26,
                    min: 0,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                yAxis: {
                    title: {
                        text: 'Head(cm)',
                        align: 'high',
                        offset: 0,
                        rotation: 0,
                        y: -5,
                        x: 40
                    },
                    tickInterval: 5,
                    min: 30,
                    max: 60,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                legend: {
                    enabled: true,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'bottom',
                    x: 2,
                    y: -50,
                    floating: true,
                    borderWidth: 1
                },
                series: [{
                        type: 'line',
                        name: '1st',
                        animation: true,
                        data: [[0, 31.5], [1, 34.6], [2, 36.4], [3, 37.8], [4, 38.9], [5, 39.7], [6, 40.5], [7, 41.1], [8, 41.6], [9, 42.1], [10, 42.5], [11, 42.8], [12, 43.1], [13, 43.3], [14, 43.6], [15, 43.8], [16, 44.0], [17, 44.1], [18, 44.3], [19, 44.4], [20, 44.6], [21, 44.7], [22, 44.8], [23, 45.0], [24, 45.1]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    /*{
                      type:'line',
                      name: '3rd',
                      animation: true,  // animate the line draw
                      data: [[0,2.5],[1,3.4],[2,4.4],[3,5.1],[4,5.6],[5,6.1],[6,6.4],[7,6.7],[8,7.0],[9,7.2],[10,7.5],[11,7.7],[12,7.8],[13,8.0],[14,8.2],[15,8.4],[16,8.5],[17,8.7],[18,8.9],[19,9.0],[20,9.2],[21,9.3],[22,9.5],[23,9.7],[24,9.8]],
                      dashStyle: 'longdash',
                      marker: {
                        enabled: false,
                        states: {
                          hover: {
                            enabled: false
                          }
                        }
                      },
                      lineColor:'#ccd6eb',
                      lineWidth:1,
                      //enableMouseTracking: false,  //to disable series lines mouse actions
                    },*/
                    {
                        type: 'line',
                        name: '5th',
                        showInLegend: false,
                        animation: true,
                        data: [[0, 32.4], [1, 35.4], [2, 37.2], [3, 38.6], [4, 39.7], [5, 40.6], [6, 41.3], [7, 42.0], [8, 42.5], [9, 42.9], [10, 43.3], [11, 43.7], [12, 44.0], [13, 44.2], [14, 44.4], [15, 44.7], [16, 44.8], [17, 45.0], [18, 45.2], [19, 45.3], [20, 45.5], [21, 45.6], [22, 45.8], [23, 45.9], [24, 46.0]],
                        dashStyle: 'longdash',
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '15th',
                        animation: true,
                        data: [[0, 33.1], [1, 36.1], [2, 37.9], [3, 39.3], [4, 40.4], [5, 41.3], [6, 42.1], [7, 42.7], [8, 43.2], [9, 43.7], [10, 44.1], [11, 44.4], [12, 44.7], [13, 45.0], [14, 45.2], [15, 45.5], [16, 45.6], [17, 45.8], [18, 46.0], [19, 46.2], [20, 46.3], [21, 46.4], [22, 46.6], [23, 46.7], [24, 46.8]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '25th',
                        animation: true,
                        data: [[0, 33.6], [1, 36.5], [2, 38.3], [3, 39.7], [4, 40.8], [5, 41.7], [6, 42.5], [7, 43.1], [8, 43.7], [9, 44.2], [10, 44.6], [11, 44.9], [12, 45.2], [13, 45.5], [14, 45.7], [15, 45.9], [16, 46.1], [17, 46.3], [18, 46.5], [19, 46.6], [20, 46.8], [21, 46.9], [22, 47.1], [23, 47.2], [24, 47.3]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '50th',
                        animation: true,
                        data: [[0, 34.5], [1, 37.5], [2, 39.1], [3, 40.5], [4, 41.6], [5, 42.6], [6, 43.3], [7, 44.0], [8, 44.5], [9, 45.0], [10, 45.4], [11, 45.8], [12, 46.1], [13, 46.3], [14, 46.6], [15, 46.8], [16, 47.0], [17, 47.2], [18, 47.4], [19, 47.5], [20, 47.7], [21, 47.8], [22, 48.0], [23, 48.1], [24, 48.3]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '75th',
                        animation: true,
                        data: [[0, 35.3], [1, 38.1], [2, 39.9], [3, 41.3], [4, 42.4], [5, 43.4], [6, 44.2], [7, 44.8], [8, 45.4], [9, 45.8], [10, 46.3], [11, 46.6], [12, 46.9], [13, 47.2], [14, 47.5], [15, 47.7], [16, 47.9], [17, 48.1], [18, 48.3], [19, 48.4], [20, 48.6], [21, 48.7], [22, 48.9], [23, 49.0], [24, 49.2]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                        //enableMouseTracking: false,  //to disable series lines mouse actions
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                    },
                    {
                        type: 'line',
                        name: '85th',
                        animation: true,
                        data: [[0, 35.8], [1, 38.5], [2, 40.3], [3, 41.7], [4, 42.9], [5, 43.8], [6, 44.6], [7, 45.3], [8, 45.8], [9, 46.3], [10, 46.7], [11, 47.1], [12, 47.4], [13, 47.7], [14, 47.9], [15, 48.2], [16, 48.4], [17, 48.6], [18, 48.7], [19, 48.9], [20, 49.1], [21, 49.2], [22, 49.4], [23, 49.5], [24, 49.7]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '95th',
                        animation: true,
                        data: [[0, 36.6], [1, 39.2], [2, 41.1], [3, 42.5], [4, 43.6], [5, 44.5], [6, 45.3], [7, 46.0], [8, 46.6], [9, 47.1], [10, 47.5], [11, 47.9], [12, 48.2], [13, 48.5], [14, 48.7], [15, 49.0], [16, 49.2], [17, 49.4], [18, 49.6], [19, 49.7], [20, 49.9], [21, 50.1], [22, 50.2], [23, 50.3], [24, 50.5]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '97th',
                        animation: true,
                        data: [[0, 36.9], [1, 39.5], [2, 41.3], [3, 42.7], [4, 43.9], [5, 44.8], [6, 45.6], [7, 46.3], [8, 46.9], [9, 47.4], [10, 47.8], [11, 48.2], [12, 48.5], [13, 48.8], [14, 49.0], [15, 49.3], [16, 49.5], [17, 49.7], [18, 49.9], [19, 50.0], [20, 50.2], [21, 50.4], [22, 50.5], [23, 50.7], [24, 50.8]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '99th',
                        animation: true,
                        data: [[0, 37.4], [1, 40.0], [2, 41.9], [3, 43.3], [4, 44.4], [5, 45.4], [6, 46.2], [7, 46.8], [8, 47.4], [9, 47.9], [10, 48.4], [11, 48.7], [12, 49.1], [13, 49.3], [14, 49.6], [15, 49.8], [16, 50.1], [17, 50.3], [18, 50.5], [19, 50.6], [20, 50.8], [21, 51.0], [22, 51.1], [23, 51.3], [24, 51.4]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        name: 'Parent',
                        type: 'scatter',
                        data: this.parentHeadPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#0e39ff',
                            radius: 4,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    },
                    {
                        name: 'Health Professional',
                        type: 'scatter',
                        data: this.healthHeadPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#ffbb30',
                            radius: 5,
                            symbol: 'diamond',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    }
                ],
                navigation: {
                    buttonOptions: {
                        verticalAlign: 'top',
                        y: -15,
                        x: 11,
                        symbolStroke: '#DB496B'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            style: {
                                color: '#000000',
                                fontSize: '8px',
                            },
                            align: 'right',
                            display: 'outside',
                            connectorAllowed: false,
                        },
                    }
                },
                tooltip: {
                    //shared: false,
                    borderWidth: 2,
                    borderColor: '#fff',
                    backgroundColor: '#3B8175',
                    borderRadius: 10,
                    useHTML: true,
                    formatter: function () {
                        if (this.series.name == '1st' || this.series.name == '3rd' || this.series.name == '5th' || this.series.name == '15th' || this.series.name == '25th' || this.series.name == '50th' || this.series.name == '75th' || this.series.name == '85th' || this.series.name == '95th' || this.series.name == '97th' || this.series.name == '99th') {
                            return false;
                        }
                        else {
                            //let percentile = window.localStorage.getItem("percentileWeight");
                            return '<div style="background: #3B8175;">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<label style="color: white; font-weight: bold; font-size: large; text-align:center" >' + this.point.percentile + 'th' + '</label><hr style="border-width: 1px;border-color: white">' + '<b style="color: white !important;">Head:</b>' + ' ' + '<label style="color: white">' + this.y + 'cm' + '</label>'
                                + '<br><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.point.date + '</label>' + '<br><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></div>';
                            // return '<div style="background: #3B8175;"><br><td><b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label> </td>' + '<br></br><td><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.date + '</label></td></tr>' + '<br></br><td><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></td></tr></div>'
                        }
                    }
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: [{
                                    textKey: 'printChart',
                                    onclick: function () {
                                        this.print();
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPNG',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'image/png'
                                        });
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPDF',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'application/pdf'
                                        });
                                    }
                                },
                            ]
                        }
                    }
                }
            });
        }
        else {
            var myChart = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('headChart', {
                chart: {
                    //type: 'line',
                    marginLeft: 27,
                    marginRight: 1,
                    marginTop: 15,
                },
                credits: {
                    enabled: false // to remove copyrights
                },
                title: {
                    text: ' '
                },
                xAxis: {
                    title: {
                        text: 'Age(months)'
                    },
                    tickInterval: 2,
                    max: 26,
                    min: 0,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                yAxis: {
                    title: {
                        text: 'Head(cm)',
                        align: 'high',
                        offset: 0,
                        rotation: 0,
                        y: -5,
                        x: 40
                    },
                    tickInterval: 5,
                    min: 30,
                    max: 60,
                    lineWidth: 2,
                    gridLineWidth: 1,
                },
                legend: {
                    enabled: true,
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'bottom',
                    x: 2,
                    y: -50,
                    floating: true,
                    borderWidth: 1
                },
                series: [{
                        type: 'line',
                        name: '1st',
                        animation: true,
                        data: [[0, 31.1], [1, 33.8], [2, 35.4], [3, 36.6], [4, 37.6], [5, 38.5], [6, 39.2], [7, 39.8], [8, 40.3], [9, 40.7], [10, 41.1], [11, 41.4], [12, 41.7], [13, 42.0], [14, 42.2], [15, 42.5], [16, 42.7], [17, 42.9], [18, 43.0], [19, 43.2], [20, 43.4], [21, 43.5], [22, 43.7], [23, 43.8], [24, 43.9]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    /*{
                      type:'line',
                      name: '3rd',
                      animation: true,  // animate the line draw
                      data: [[0,2.5],[1,3.4],[2,4.4],[3,5.1],[4,5.6],[5,6.1],[6,6.4],[7,6.7],[8,7.0],[9,7.2],[10,7.5],[11,7.7],[12,7.8],[13,8.0],[14,8.2],[15,8.4],[16,8.5],[17,8.7],[18,8.9],[19,9.0],[20,9.2],[21,9.3],[22,9.5],[23,9.7],[24,9.8]],
                      dashStyle: 'longdash',
                      marker: {
                        enabled: false,
                        states: {
                          hover: {
                            enabled: false
                          }
                        }
                      },
                      lineColor:'#ccd6eb',
                      lineWidth:1,
                      //enableMouseTracking: false,  //to disable series lines mouse actions
                    },*/
                    {
                        type: 'line',
                        name: '5th',
                        showInLegend: false,
                        animation: true,
                        data: [[0, 31.9], [1, 34.6], [2, 36.3], [3, 37.5], [4, 38.5], [5, 39.3], [6, 40.1], [7, 40.7], [8, 41.2], [9, 41.6], [10, 42.0], [11, 42.4], [12, 42.7], [13, 42.9], [14, 43.2], [15, 43.4], [16, 43.6], [17, 43.8], [18, 44.0], [19, 44.1], [20, 44.3], [21, 44.5], [22, 44.6], [23, 44.7], [24, 44.9]],
                        dashStyle: 'longdash',
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '15th',
                        animation: true,
                        data: [[0, 32.7], [1, 35.3], [2, 37.0], [3, 38.2], [4, 39.3], [5, 40.1], [6, 40.8], [7, 41.5], [8, 42.0], [9, 42.4], [10, 42.8], [11, 43.2], [12, 43.5], [13, 43.8], [14, 44.0], [15, 44.2], [16, 44.4], [17, 44.6], [18, 44.8], [19, 45.0], [20, 45.1], [21, 45.3], [22, 45.4], [23, 45.6], [24, 45.7]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '25th',
                        animation: true,
                        data: [[0, 33.1], [1, 35.8], [2, 37.4], [3, 38.7], [4, 39.7], [5, 40.6], [6, 41.3], [7, 41.9], [8, 42.5], [9, 42.9], [10, 43.3], [11, 43.7], [12, 44.0], [13, 44.3], [14, 44.5], [15, 44.7], [16, 44.9], [17, 45.1], [18, 45.3], [19, 45.5], [20, 45.6], [21, 45.8], [22, 46.0], [23, 46.1], [24, 46.2]],
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '50th',
                        animation: true,
                        data: [[0, 33.9], [1, 36.5], [2, 38.3], [3, 39.5], [4, 40.6], [5, 41.5], [6, 42.2], [7, 42.8], [8, 43.4], [9, 43.8], [10, 44.2], [11, 44.6], [12, 44.9], [13, 45.2], [14, 45.4], [15, 45.7], [16, 45.9], [17, 46.1], [18, 46.2], [19, 46.4], [20, 46.6], [21, 46.7], [22, 46.9], [23, 47.0], [24, 47.2]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '75th',
                        animation: true,
                        data: [[0, 34.7], [1, 37.3], [2, 39.1], [3, 40.4], [4, 41.4], [5, 42.3], [6, 43.1], [7, 43.7], [8, 44.3], [9, 44.7], [10, 45.1], [11, 45.5], [12, 45.8], [13, 46.1], [14, 46.3], [15, 46.6], [16, 46.8], [17, 47.0], [18, 47.2], [19, 47.3], [20, 47.5], [21, 47.7], [22, 47.8], [23, 48.0], [24, 48.1]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                        //enableMouseTracking: false,  //to disable series lines mouse actions
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                    },
                    {
                        type: 'line',
                        name: '85th',
                        animation: true,
                        data: [[0, 35.1], [1, 37.8], [2, 39.5], [3, 40.8], [4, 41.9], [5, 42.8], [6, 43.5], [7, 44.2], [8, 44.7], [9, 45.2], [10, 45.6], [11, 46.0], [12, 46.3], [13, 46.6], [14, 46.8], [15, 47.1], [16, 47.3], [17, 47.5], [18, 47.7], [19, 47.8], [20, 48.0], [21, 48.2], [22, 48.3], [23, 48.5], [24, 48.6]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '95th',
                        animation: true,
                        data: [[0, 35.8], [1, 38.5], [2, 40.2], [3, 41.6], [4, 42.7], [5, 43.6], [6, 44.3], [7, 45.0], [8, 45.6], [9, 46.0], [10, 46.4], [11, 46.8], [12, 47.1], [13, 47.4], [14, 47.7], [15, 47.9], [16, 48.1], [17, 48.3], [18, 48.5], [19, 48.7], [20, 48.9], [21, 49.0], [22, 49.2], [23, 49.3], [24, 49.5]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '97th',
                        animation: true,
                        data: [[0, 36.1], [1, 38.8], [2, 40.5], [3, 41.9], [4, 43.0], [5, 43.9], [6, 44.6], [7, 45.3], [8, 45.9], [9, 46.3], [10, 46.8], [11, 47.1], [12, 47.5], [13, 47.7], [14, 48.0], [15, 48.2], [16, 48.5], [17, 48.7], [18, 48.8], [19, 49.0], [20, 49.2], [21, 49.4], [22, 49.5], [23, 49.7], [24, 49.8]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        type: 'line',
                        name: '99th',
                        animation: true,
                        data: [[0, 36.6], [1, 39.3], [2, 41.1], [3, 42.4], [4, 43.5], [5, 44.5], [6, 45.2], [7, 45.9], [8, 46.5], [9, 46.9], [10, 47.4], [11, 47.7], [12, 48.1], [13, 48.3], [14, 48.6], [15, 48.8], [16, 49.1], [17, 49.3], [18, 49.5], [19, 49.6], [20, 49.8], [21, 50.0], [22, 50.1], [23, 50.3], [24, 50.4]],
                        visible: true,
                        dashStyle: 'longdash',
                        showInLegend: false,
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        },
                        lineColor: '#ccd6eb',
                        lineWidth: 1,
                    },
                    {
                        name: 'Parent',
                        type: 'scatter',
                        data: this.parentHeadPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#0e39ff',
                            radius: 4,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    },
                    {
                        name: 'Health Professional',
                        type: 'scatter',
                        data: this.healthHeadPlot,
                        //crosshairs: true,
                        //enableMouseTracking: true,
                        marker: {
                            fillColor: '#ffbb30',
                            radius: 5,
                            symbol: 'diamond',
                            states: {
                                hover: {
                                    enabled: false,
                                }
                            }
                        }
                    }
                ],
                navigation: {
                    buttonOptions: {
                        verticalAlign: 'top',
                        y: -15,
                        x: 11,
                        symbolStroke: '#DB496B'
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            style: {
                                color: '#000000',
                                fontSize: '8px',
                            },
                            align: 'right',
                            display: 'outside',
                            connectorAllowed: false,
                        },
                    }
                },
                tooltip: {
                    //shared: false,
                    borderWidth: 2,
                    borderColor: '#fff',
                    backgroundColor: '#3B8175',
                    borderRadius: 10,
                    useHTML: true,
                    formatter: function () {
                        if (this.series.name == '1st' || this.series.name == '3rd' || this.series.name == '5th' || this.series.name == '15th' || this.series.name == '25th' || this.series.name == '50th' || this.series.name == '75th' || this.series.name == '85th' || this.series.name == '95th' || this.series.name == '97th' || this.series.name == '99th') {
                            return false;
                        }
                        else {
                            //let percentile = window.localStorage.getItem("percentileWeight");
                            return '<div style="background: #3B8175;">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<label style="color: white; font-weight: bold; font-size: large; text-align:center" >' + this.point.percentile + 'th' + '</label><hr style="border-width: 1px;border-color: white">' + '<b style="color: white !important;">Head:</b>' + ' ' + '<label style="color: white">' + this.y + 'cm' + '</label>'
                                + '<br><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.point.date + '</label>' + '<br><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></div>';
                            // return '<div style="background: #3B8175;"><br><td><b style="color: white !important;">Weight:</b>' + ' ' + '<label style="color: white">' + this.y + 'Kg' + '</label> </td>' + '<br></br><td><b style="color: white !important;">Date:</b>' + ' ' + '<label style="color: white">' + this.date + '</label></td></tr>' + '<br></br><td><b style="color: white !important;">Age:</b>' + ' ' + '<label style="color: white">' + this.x + ' months</label></td></tr></div>'
                        }
                    }
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: [{
                                    textKey: 'printChart',
                                    onclick: function () {
                                        this.print();
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPNG',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'image/png'
                                        });
                                    }
                                }, {
                                    separator: true
                                }, {
                                    textKey: 'downloadPDF',
                                    onclick: function () {
                                        this.exportChart({
                                            type: 'application/pdf'
                                        });
                                    }
                                },
                            ]
                        }
                    }
                }
            });
        }
        ///////////// end chart///////////
    };
    //growth chart skip popup
    GrowthChartPage.prototype.skipGrowthChart = function () {
        var _this = this;
        window.localStorage.setItem("skipPopup", 'done');
        var alert = this.alertCtrl.create({
            //title: 'NOTICE',
            subTitle: 'This app provides easy to use growth charts to track your child' + '\'s' + ' ' + 'growth. You can enter past measurements as well as any new measurements.',
            cssClass: 'chartSkipAlert',
            buttons: [
                {
                    text: 'SKIP',
                    cssClass: 'skip-button',
                    handler: function (data) {
                        _this.navCtrl.push('MainmenuPage');
                    }
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        // this.openModalPoup(); // show measurements popup
                    }
                }
            ]
        });
        alert.present();
    };
    //growth chart edit popup
    GrowthChartPage.prototype.openModalPoup = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__popup_modal_popup_modal__["a" /* PopupModalPage */]);
        myModal.present();
    };
    GrowthChartPage.prototype.chartEditPopup = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'MEASUREMENT',
            cssClass: 'editChartAlert',
            inputs: [
                {
                    name: 'Baby',
                    placeholder: 'Name',
                    type: 'text'
                },
                {
                    name: 'dates',
                    placeholder: 'Date of measurement',
                    type: 'date'
                },
                {
                    name: 'babyWeight',
                    placeholder: 'Weight in Kg'
                },
                {
                    name: 'babyLength',
                    placeholder: 'Length in cm'
                },
                {
                    name: 'babyHead',
                    placeholder: 'Head circumference in cm'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        if (data.dates === " " && data.babyWeight === " " && data.babyLength === " " && data.babyHead === " ") {
                            console.log("jjjjjjjj===========");
                            _this.chartEditPopup();
                        }
                        else {
                            console.log("added===========", data.babayWeight);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    GrowthChartPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    GrowthChartPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    GrowthChartPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resources_resources__["a" /* ResourcesPage */]);
    };
    GrowthChartPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__settings_settings__["a" /* SettingsPage */]);
    };
    GrowthChartPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__notifications_notifications__["a" /* NotificationsPage */]);
    };
    GrowthChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-growth-chart',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/growth-chart/growth-chart.html"*/'<ion-header>\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;">\n        <img src="assets/imgs/side-menu.png" />\n      </button>\n    </ion-buttons>\n    <ion-title align="center">\n      {{childName}}\'s Growth Chart\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="openModalPoup()" style="width: 50px; height: 50px; background: transparent !important;" >\n        <img src="assets/imgs/plus.png"/>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<!--<div align="center">-->\n  <!--<img alt="logo" height="70" width="70" style="border-radius: 50%; -webkit-border-radius: 50%;" class="logo" src="{{childPhoto}}">-->\n<!--</div>-->\n\n\n<ion-content padding overflow-scroll="true">\n\n  <div align="center">\n    <img alt="logo"  class="logo"  height="70" width="70" class="logo" style="border-radius: 50%; -webkit-border-radius: 50%;"  src="{{childPhoto}}" >\n  </div>\n  <div align="center">\n    <h1 class="title" style="font-size: medium">{{childName}}</h1>\n  </div>\n\n\n  <div align="center">\n    <ion-grid class="button-group" no-padding="true">\n      <ion-row>\n        <ion-col>\n          <button ion-button block [color]="buttonColor2" color="light" (click)="weightChartCliked()">Weight</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block [color]="buttonColor3" color="light" (click)="lengthChartCliked()">Length</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block [color]="buttonColor4" color="light" (click)="headChartCliked()">Head</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div id="weightChart" class="weightChart-wrapper"	[hidden]="weightChartHide" padding-top="false"></div>\n  <div id="lengthChart" class="lengthChart-wrapper"	[hidden]="lengthChartHide" padding-top="false"></div>\n  <div id="headChart" class="headChart-wrapper"	[hidden]="headChartHide" padding-top="false"></div>\n\n  <div [hidden]="hideChidrenCollection">\n    <ul>\n      <img *ngFor="let babys of childrenList; let i = index" src="{{babys.profilePhoto != \'\'? babys.profilePhoto : \'\'}}"   style="border-radius: 50%; -webkit-border-radius: 50%;" (click)="selectChild(babys,i)" class="examplePic">\n    </ul>\n  </div>\n\n  <div>\n    <p style="font-size: 15px; font-style: italic; color: #757575; text-align: justify; text-justify: inter-word;"> Don’t worry, if you make a mistake when entering a measurement. To fix it, just re-enter the correct measure using the <b>same date</b> and it will replace the mistake.</p>\n  </div>\n  <div>\n    <h2 class="title" style="font-size: 15px; font-weight: bold; " align="left" >Growth Charts</h2>\n    <p style="font-size: 15px;  text-align: justify; text-justify: inter-word;">Growth is an important measure of children’s health and wellbeing. These growth charts are suitable for use with New Zealand children up to 2 years of age and are based on measurements collected by the World Health Organization. </p>\n    <p style="font-size: 15px;  text-align: justify; text-justify: inter-word;"> Because children grow at varying rates at different ages we can use growth charts to show the range within which most healthy children are expected to grow and the growth patterns of an individual child over time. </p>\n    <p style="font-size: 15px;  text-align: justify; text-justify: inter-word;"> These growth charts use centiles (shown as lines drawn in curved patterns). Each line at a particular centile marks the weight or height/length below which that percentage of children of that age and gender fall. This way, you can see how your child is growing compared to other children of the same age and gender. The 50th centile represents the median (middle) of the population. </p>\n    <p style="font-size: 15px;  text-align: justify; text-justify: inter-word;"> Healthy children grow along or next to any of the centile lines and all children grow differently so each child’s growth chart will be unique - What matters is that their growth curve stays steady, with no sudden jump or drop across centiles.</p>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 35px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n            <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/growth-chart/growth-chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_13__providers_api_api__["a" /* ApiProvider */]])
    ], GrowthChartPage);
    return GrowthChartPage;
}());

//# sourceMappingURL=growth-chart.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tips_tips__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activities_activities__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_services__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__immunisation_immunisation__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__first_aid_first_aid__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__memories_list_memories_list__ = __webpack_require__(32);
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
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResourcesPage = /** @class */ (function () {
    function ResourcesPage(navCtrl, alertCtrl, platform, navParams, ga, apiProvider, globalProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.globalProvider = globalProvider;
        this.networkConnected = true;
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    ResourcesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad ResourcesPage');
        this.ga.trackView("Home Screen");
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.apiProvider.trackPage("Home Screen")
                .then(function (res) {
            }, function (err) {
            });
            /////////////////////////////// check new notifications available ///////////////////////////////////
            window.localStorage.removeItem("unreadNotifications");
            this.apiProvider.getNotifications()
                .then(function (res) {
                if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                    _this.globalProvider.newNotificitations = true;
                }
                else {
                    _this.globalProvider.newNotificitations = false;
                }
            }, function (err) {
                //this.loading.dismiss();
                _this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            });
            //////////////////////////////////////////////////////////////////////////
        }
    };
    ResourcesPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ResourcesPage.prototype.showTips = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tips_tips__["a" /* TipsPage */]);
    };
    ResourcesPage.prototype.events = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__events_events__["a" /* EventsPage */]);
    };
    ResourcesPage.prototype.showActivities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__activities_activities__["a" /* ActivitiesPage */]);
    };
    ResourcesPage.prototype.services = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__services_services__["a" /* ServicesPage */]);
    };
    ResourcesPage.prototype.immunisation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__immunisation_immunisation__["a" /* ImmunisationPage */]);
    };
    ResourcesPage.prototype.firstAid = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__first_aid_first_aid__["a" /* FirstAidPage */]);
    };
    ResourcesPage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__notifications_notifications__["a" /* NotificationsPage */]);
    };
    ResourcesPage.prototype.charts = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    ResourcesPage.prototype.memories = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    ResourcesPage.prototype.settings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__settings_settings__["a" /* SettingsPage */]);
    };
    ResourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resources',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/resources/resources.html"*/'<!--\n  Generated template for the ResourcesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-title align="center">\n      Home\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <div class="container">\n    <div class="cell-row cell-row-1">\n      <div class="cell-1">\n\n          <div>\n            <div>\n              <img src="assets/imgs/charts.png" (click)="charts()" width="120px" height="120px"/>\n            </div>\n            <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> CHARTS</div>\n          </div>\n\n      </div>\n      <div class="cell-2">\n\n        <div>\n          <div>\n            <img src="assets/imgs/home-noti.png" width="120px" (click)="notifications()" height="120px" *ngIf="!this.globalProvider.newNotificitations"/>\n            <img src="assets/imgs/home-noti-2.png" width="120px" (click)="notifications()" height="120px" *ngIf="this.globalProvider.newNotificitations"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> NOTIFICATIONS</div>\n        </div>\n\n      </div>\n    </div>\n    <div class="cell-row cell-row-2">\n      <div class="cell-3">\n\n        <div>\n          <div>\n            <img src="assets/imgs/home-memory.png" width="120px" (click)="memories()" height="120px"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> MEMORIES</div>\n        </div>\n\n      </div>\n\n      <div class="cell-4">\n\n        <div>\n          <div>\n            <img src="assets/imgs/first-aid.png" width="120px" (click)="firstAid()" height="120px"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> FIRST AID</div>\n        </div>\n\n      </div>\n    </div>\n    <div class="cell-row cell-row-3">\n\n      <div class="cell-1">\n        <div>\n          <div>\n            <img src="assets/imgs/activities.png" width="120px" height="120px" (click)="showActivities()"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> ACTIVITIES</div>\n        </div>\n      </div>\n\n      <div class="cell-5">\n        <div>\n          <div>\n            <img src="assets/imgs/services2.png" width="120px" (click)="services()" height="120px"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> SERVICES</div>\n        </div>\n\n      </div>\n    </div>\n\n\n    <div class="cell-row cell-row-3">\n\n      <div class="cell-1">\n        <div>\n          <div>\n            <img src="assets/imgs/calendar.png" width="120px" height="120px" (click)="events()"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> EVENTS</div>\n        </div>\n      </div>\n      <div class="cell-5">\n        <div>\n          <div>\n            <img src="assets/imgs/tips.png" width="120px" (click)="showTips()" height="120px"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> TIPS</div>\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <div class="cell-row cell-row-3">\n      <div class="cell-5">\n        <div>\n          <div>\n            <img src="assets/imgs/immunisation.png" width="120px" (click)="immunisation()" height="120px"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> IMMUNISATION</div>\n        </div>\n\n      </div>\n      <div class="cell-1">\n        <div>\n          <div>\n            <img src="assets/imgs/home-settings.png" width="120px" height="120px" (click)="settings()"/>\n          </div>\n          <div align="center" style="font-size: 15px; color: black ; font-weight: bold"> SETTINGS</div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/resources/resources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */]])
    ], ResourcesPage);
    return ResourcesPage;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_details_notification_details__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, platform, apiProvider, navParams, ga, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        this.ga = ga;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.status = "active";
        this.networkConnected = true;
        this.notifications = [];
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NotificationsPage');
        this.ga.trackView("Notification Screen");
        this.apiProvider.trackPage("Notifications Screen")
            .then(function (res) {
        }, function (err) {
        });
        this.presentLoading();
        ///// get notifications /////////
        setTimeout(function () {
            _this.apiProvider.getNotifications()
                .then(function (res) {
                for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                    if (JSON.parse(JSON.stringify(res))[i].field_url.length != 0) {
                        _this.notifications.push({
                            body: JSON.parse(JSON.stringify(res))[i].body[0].value,
                            url: JSON.parse(JSON.stringify(res))[i].field_url[0].value,
                            nid: JSON.parse(JSON.stringify(res))[i].nid[0].value,
                            isRead: JSON.parse(JSON.stringify(res))[i].field_read[0].value
                        });
                        window.localStorage.setItem("urlActive", 'true');
                    }
                    else {
                        _this.notifications.push({
                            body: JSON.parse(JSON.stringify(res))[i].body[0].value,
                            url: null,
                            nid: JSON.parse(JSON.stringify(res))[i].nid[0].value,
                            isRead: JSON.parse(JSON.stringify(res))[i].field_read[0].value
                        });
                        window.localStorage.setItem("urlActive", 'false');
                    }
                }
                _this.loading.dismiss();
                console.log("notifications=======" + JSON.stringify(res));
            }, function (err) {
                //this.loading.dismiss();
                _this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }, 1000);
    };
    NotificationsPage.prototype.notificationClicked = function (val, id) {
        console.log("message id=====" + id);
        document.getElementById("label-" + id).style.backgroundColor = 'transparent ';
        document.getElementById("label-" + id).style.color = '#bfbfbf';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_details_notification_details__["a" /* NotificationDetailsPage */], { msg: val });
        this.status = "disable";
    };
    NotificationsPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.message,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    NotificationsPage.prototype.presentLoading = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
            if (!_this.networkConnected) {
                _this.showAlert();
            }
        }, 2000);
    };
    NotificationsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: "Please check your internet connection and try again.",
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/notifications/notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">Notifications</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n    <ion-list>\n        <!--<ion-item [ngClass] ="status == \'active\' ? \'dark-list\' : \'transparent-list\' " (click) = "notificationClicked()">-->\n        <!--<ion-label [ngClass] ="status != \'active\' ? \'transparent-list\' : \'\' ">General Notification</ion-label>-->\n        <!--<ion-icon item-right color="primary" name="ios-arrow-forward" ></ion-icon>-->\n        <!--</ion-item>-->\n        <!--<ion-item style="margin-top:10px;background-color: rgba(199,199,199,0.28)">-->\n        <!--<ion-label>Health Tips</ion-label>-->\n        <!--<ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>-->\n        <!--</ion-item>-->\n        <!--<ion-item style="margin-top:10px;background-color: rgba(199,199,199,0.28)">-->\n        <!--<ion-label>Parenting</ion-label>-->\n        <!--<ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>-->\n        <!--</ion-item>-->\n        <!--<ion-item *ngFor="let mes of notifications" style="margin-top:10px;background-color: rgba(199,199,199,0.28)">-->\n        <!--{{mes}}-->\n        <!--<ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>-->\n        <!--</ion-item>-->\n\n        <ion-item *ngFor="let mes of notifications; let i = index" id="label-{{i}}" [ngClass]="mes.isRead == true ? \'transparent-list\' : \'dark-list\' "\n                  (click)="notificationClicked(mes,i)">\n            <ion-label> {{mes.body}}</ion-label>\n            <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyChildrenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measurements_record_measurements_record__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__child_registration_child_registration__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__memories_list_memories_list__ = __webpack_require__(32);
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
 * Generated class for the MyChildrenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyChildrenPage = /** @class */ (function () {
    function MyChildrenPage(navCtrl, apiProvider, navParams, menuCtrl, ga, globalProvider, platform, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.ga = ga;
        this.globalProvider = globalProvider;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.buttonColor2 = 'light';
        this.buttonColor3 = 'light';
        this.buttonColor4 = 'light';
        this.networkConnected = true;
        this.data = [];
        this.childData = [];
        this.titles = [];
        this.childrenList = [];
        this.childImage = "assets/imgs/child.png";
        // @ts-ignore
        this.data = [
            {
                title: "Weight",
                icon: 'ios-arrow-down',
                showDetails: false
            },
            {
                title: "Length",
                icon: 'ios-arrow-down',
                showDetails: false
            },
            {
                title: "Head Circumference",
                icon: 'ios-arrow-down',
                showDetails: false
            },
            {
                title: "",
                icon: '',
                showDetails: false
            }
        ];
        // @ts-ignore
        this.titles = [
            {
                "subtitle": "View Chart",
            },
        ];
        // @ts-ignore
        this.childData.push({
            id: "child1",
            name: this.globalProvider.childFirstName,
            photo: window.localStorage.getItem("childPhoto")
        });
        // for(let i = 0; i < 3; i++ ){
        //     this.data.push({
        //         title: 'Title '+i,
        //         details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //         icon: 'ios-arrow-down',
        //         showDetails: false
        //     });
        // }
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            /////// track page //////
            this.apiProvider.trackPage("My Children Screen")
                .then(function (res) {
            }, function (err) {
            });
            this.presentLoading();
            setTimeout(function () {
                _this.apiProvider.getChildrenList()
                    .then(function (res) {
                    console.log("children list" + JSON.stringify(res));
                    for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                        _this.childrenList.push({
                            first_name: JSON.parse(JSON.stringify(res))[i].title,
                            dateOfBirth: JSON.parse(JSON.stringify(res))[i].field_date_of_birth,
                            term: JSON.parse(JSON.stringify(res))[i].field_term,
                            profilePhoto: JSON.parse(JSON.stringify(res))[i].field_upload_image,
                            household: JSON.parse(JSON.stringify(res))[i].household,
                            nid: JSON.parse(JSON.stringify(res))[i].nid
                        });
                    }
                    //window.localStorage.setItem("childrenList", JSON.stringify(this.childrenList));
                    _this.loading.dismiss();
                    if (_this.childrenList[0].profilePhoto == "") {
                        _this.childImage = "assets/imgs/child.png";
                        _this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                    }
                    else {
                        _this.childImage = _this.childrenList[0].profilePhoto;
                    }
                    if (_this.childrenList.length == 2) {
                        if (_this.childrenList[1].profilePhoto == "") {
                            _this.childImage = "assets/imgs/child-1.png";
                            _this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                            _this.childrenList[1].profilePhoto = "assets/imgs/child-1.png";
                        }
                        else {
                            _this.childImage = _this.childrenList[1].profilePhoto;
                        }
                    }
                    if (_this.childrenList.length == 3) {
                        if (_this.childrenList[2].profilePhoto == "") {
                            _this.childImage = "assets/imgs/child-2.png";
                            _this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                            _this.childrenList[1].profilePhoto = "assets/imgs/child-1.png";
                            _this.childrenList[2].profilePhoto = "assets/imgs/child-2.png";
                        }
                        else {
                            _this.childImage = _this.childrenList[2].profilePhoto;
                        }
                    }
                    if (_this.childrenList[0].profilePhoto == "") {
                        _this.childImage = "assets/imgs/child.png";
                        _this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                    }
                    else {
                        _this.childImage = _this.childrenList[0].profilePhoto;
                    }
                    _this.babyName = _this.childrenList[0].first_name;
                }, function (err) {
                    _this.loading.dismiss();
                    //this.showError(err);
                    //this.navCtrl.push(ChildRegistrationPage);
                });
            }, 1000);
        }
    }
    MyChildrenPage.prototype.titleCliked = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-arrow-down';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-arrow-up';
        }
    };
    MyChildrenPage.prototype.subTitleCliked = function (sub, titl) {
        if (sub.subtitle == "View Chart") {
            if (titl.title == "Weight") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__growth_chart_growth_chart__["a" /* GrowthChartPage */], { childChartType: 'weight' });
            }
            else if (titl.title == "Length") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__growth_chart_growth_chart__["a" /* GrowthChartPage */], { childChartType: 'length' });
            }
            else if (titl.title == "Head Circumference") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__growth_chart_growth_chart__["a" /* GrowthChartPage */], { childChartType: 'head' });
            }
        }
        else if (sub.subtitle == "View Records") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__measurements_record_measurements_record__["a" /* MeasurementsRecordPage */]);
        }
    };
    MyChildrenPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad MyChildrenPage');
        this.ga.trackView("My Children Screen");
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        this.apiProvider.getNotifications()
            .then(function (res) {
            if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                _this.globalProvider.newNotificitations = true;
            }
            else {
                _this.globalProvider.newNotificitations = false;
            }
        }, function (err) {
            //this.loading.dismiss();
            _this.showError(err);
            //this.navCtrl.push(ChildRegistrationPage);
        });
        //////////////////////////////////////////////////////////////////////////
    };
    MyChildrenPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MyChildrenPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MyChildrenPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    MyChildrenPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    MyChildrenPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__resources_resources__["a" /* ResourcesPage */]);
    };
    MyChildrenPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    MyChildrenPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    MyChildrenPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__notifications_notifications__["a" /* NotificationsPage */]);
    };
    MyChildrenPage.prototype.child = function (val, id) {
        document.getElementById("btn-" + id).style.background = '#3B8175 ';
        document.getElementById("btn-" + id).style.color = 'white ';
        if (id == 0) {
            console.log("button id=====" + id);
            console.log("child count =====" + this.childrenList.length);
            document.getElementById("btn-" + id).style.background = '#3B8175 ';
            document.getElementById("btn-" + id).style.color = 'white ';
            if (this.childrenList.length == 2) {
                document.getElementById("btn-0").style.background = '#3B8175 ';
                document.getElementById("btn-0").style.color = 'white ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black ';
            }
            else if (this.childrenList.length == 3) {
                document.getElementById("btn-0").style.background = '#3B8175 ';
                document.getElementById("btn-0").style.color = 'white ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black ';
                document.getElementById("btn-2").style.background = '#ffffff ';
                document.getElementById("btn-2").style.color = 'black ';
            }
        }
        else if (id == 1) {
            console.log("button id=====" + id);
            console.log("child count =====" + this.childrenList.length);
            document.getElementById("btn-" + id).style.background = '#3B8175 ';
            document.getElementById("btn-" + id).style.color = 'white ';
            if (this.childrenList.length == 2) {
                document.getElementById("btn-1").style.background = '#3B8175 ';
                document.getElementById("btn-1").style.color = 'white ';
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
            }
            else if (this.childrenList.length == 3) {
                document.getElementById("btn-1").style.background = '#3B8175 ';
                document.getElementById("btn-1").style.color = 'white ';
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
                document.getElementById("btn-2").style.background = '#ffffff ';
                document.getElementById("btn-2").style.color = 'black ';
            }
        }
        else if (id == 2) {
            console.log("button id=====" + id);
            console.log("child count =====" + this.childrenList.length);
            document.getElementById("btn-" + id).style.background = '#3B8175 ';
            document.getElementById("btn-" + id).style.color = 'white ';
            if (this.childrenList.length == 2) {
                document.getElementById("btn-2").style.background = '#3B8175 ';
                document.getElementById("btn-2").style.color = 'white ';
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black';
            }
            else if (this.childrenList.length == 3) {
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
                document.getElementById("btn-2").style.background = '#3B8175 ';
                document.getElementById("btn-2").style.color = 'white ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black ';
            }
        }
        this.babyName = val.first_name;
        console.log("child photo===" + val.profilePhoto);
        if (val.profilePhoto == "") {
            this.childImage = "assets/imgs/child.png";
        }
        else {
            this.childImage = val.profilePhoto;
        }
    };
    MyChildrenPage.prototype.addChild = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__child_registration_child_registration__["a" /* ChildRegistrationPage */], { hideBackBtn: 'false' });
    };
    MyChildrenPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MyChildrenPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error.message,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    MyChildrenPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    MyChildrenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-children',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/my-children/my-children.html"*/'<!--\n  Generated template for the MyChildrenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;" >\n        <img src="assets/imgs/side-menu.png"/>\n      </button>\n    </ion-buttons>\n    <ion-title align="center">\n      My Child(ren)\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="addChild()" style="width: 50px; height: 50px; background: transparent !important;">\n        <img src="assets/imgs/plus.png"/>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n  <div align="center">\n    <img alt="logo" height="70" width="70" style="border-radius: 50%; -webkit-border-radius: 50%;" class="logo"   src={{childImage}} >\n  </div>\n  <div align="center">\n    <h1 class="title" style="font-size: medium">{{babyName}}</h1>\n  </div>\n\n  <div align="center">\n    <ion-grid class="button-group" no-padding="true">\n      <ion-row>\n        <ion-col  *ngFor="let d of childrenList ; let i = index">\n          <button ion-button block id="btn-{{i}}" color="light" (click)="child(d,i)">{{d.first_name}}</button>\n        </ion-col>\n        <!--<ion-col>-->\n        <!--<button ion-button block [color]="buttonColor3" color="light" (click)="child_2()">Jimmy</button>-->\n        <!--</ion-col>-->\n        <!--<ion-col>-->\n        <!--<button ion-button block [color]="buttonColor4" color="light" (click)="child_3()">Rosie</button>-->\n        <!--</ion-col>-->\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n  <ion-list>\n    <ion-item padding *ngFor="let d of data"  style="background-color: transparent"><ion-icon color="primary" (click)="titleCliked(d)" item-right [name]="d.icon"></ion-icon>\n      <h2>{{d.title}}</h2>\n      <div *ngIf="d.showDetails">\n        <ion-item *ngFor="let s of titles" style="background-color: transparent" (click)="subTitleCliked(s,d)" >\n          <h2>{{s.subtitle}}</h2>\n        </ion-item>\n      </div>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n            <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/my-children/my-children.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MyChildrenPage);
    return MyChildrenPage;
}());

//# sourceMappingURL=my-children.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications__ = __webpack_require__(24);
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
 * Generated class for the MemoryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemoryDetailsPage = /** @class */ (function () {
    function MemoryDetailsPage(navCtrl, navParams, ga, loadingCtrl, apiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.commentsHide = true;
        this.clicks = 0;
        this.message = '';
        this.commentsList = [];
        this.memoryDetails = navParams.get('memoryDetails');
        this.memoryImage = this.memoryDetails.memoryImage;
        this.description = this.memoryDetails.description;
        this.nid = this.memoryDetails.nid;
        if (this.memoryDetails.uploaderImage == '') {
            this.uploaderImage = "assets/imgs/parent.png";
        }
        else {
            this.uploaderImage = this.memoryDetails.uploaderImage;
        }
        this.uploaderName = this.memoryDetails.uploaderName;
        this.date = this.memoryDetails.date;
        this.commentCount = this.memoryDetails.comments;
        if (this.commentCount == 0) {
            this.commentsHide = true;
        }
        this.likes = this.memoryDetails.likes;
    }
    MemoryDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemoryDetailsPage');
        this.ga.trackView("Memory Details Screen");
    };
    MemoryDetailsPage.prototype.showComments = function () {
        var _this = this;
        console.log("memory comments");
        //this.presentLoading();
        this.commentsList = [];
        ///// get comments  /////////
        setTimeout(function () {
            _this.apiProvider.getMemoryComment(_this.nid)
                .then(function (res) {
                //this.loading.dismiss();
                console.log("memory comments list======" + JSON.stringify(res));
                for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                    _this.commentsList.push({
                        description: JSON.parse(JSON.stringify(res))[i].comment_body,
                        uploaderName: JSON.parse(JSON.stringify(res))[i].field_first_name,
                        uploaderImage: JSON.parse(JSON.stringify(res))[i].user_picture,
                        date: JSON.parse(JSON.stringify(res))[i].created
                    });
                }
                //this.loading.dismiss();
            }, function (err) {
                console.log(JSON.stringify(err));
                //alert("========");
                //this.loading.dismiss();
                //this.showAlert(JSON.stringify(err));
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }, 500);
        if (this.commentCount != 0) {
            this.clicks += 1;
            if (this.clicks != 1) {
                this.clicks = 0;
            }
            if (this.clicks == 1) {
                this.commentsHide = false;
            }
            else {
                this.commentsHide = true;
            }
        }
    };
    MemoryDetailsPage.prototype.commentAdded = function (val) {
        this.comment = val;
    };
    MemoryDetailsPage.prototype.sendComment = function () {
        // this.commentCount += 1;
        var _this = this;
        if (this.comment != null) {
            //this.presentLoading();
            ///// add comment /////////
            setTimeout(function () {
                _this.apiProvider.addMemoryComment(_this.comment, _this.nid)
                    .then(function (res) {
                    //this.loading.dismiss();
                    console.log("ressssss" + JSON.stringify(res));
                    _this.message = '';
                    _this.commentCount = JSON.parse(JSON.stringify(res)).field_comment[0].comment_count;
                    _this.showComments();
                }, function (err) {
                    //alert(JSON.stringify(err));
                    //alert("========");
                    //this.loading.dismiss();
                    //this.showAlert(JSON.stringify(err));
                    //this.navCtrl.push(ChildRegistrationPage);
                });
            }, 1000);
        }
        else {
            this.showAlert('Please add your comment.');
        }
    };
    MemoryDetailsPage.prototype.addLoves = function () {
        var _this = this;
        ///// add loves /////////
        setTimeout(function () {
            _this.apiProvider.addMemoryLoves(_this.nid)
                .then(function (res) {
                //this.loading.dismiss();
                _this.likes = JSON.parse(JSON.stringify(res)).field_like[0].value;
            }, function (err) {
                //alert(JSON.stringify(err));
                //alert("========");
                //this.loading.dismiss();
                //this.showAlert(JSON.stringify(err));
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }, 500);
    };
    MemoryDetailsPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'SHTG',
            message: msg,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    MemoryDetailsPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MemoryDetailsPage.prototype.clickedChart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    MemoryDetailsPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    MemoryDetailsPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resources_resources__["a" /* ResourcesPage */]);
    };
    MemoryDetailsPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    MemoryDetailsPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__notifications_notifications__["a" /* NotificationsPage */]);
    };
    MemoryDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memory-details',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/memory-details/memory-details.html"*/'<!--\n  Generated template for the MemoryDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Memory Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  overflow-scroll="true" class="background">\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src={{uploaderImage}}>\n      </ion-avatar>\n      <h2>{{uploaderName}}</h2>\n      <p>{{date}}</p>\n    </ion-item>\n\n    <img src={{memoryImage}}>\n\n    <ion-card-content>\n      <p style="font-size: 15px">{{description}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <img src="assets/imgs/heart.png" style="width: 20px; height: 20px">\n          <div (click)="addLoves()">  {{likes}} Loves</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <img src="assets/imgs/comment.png" (click)="showComments()" style="width: 20px; height: 20px">\n          <div (click)="showComments()" > {{commentCount}}Comments</div>\n        </button>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card [hidden]="commentsHide" *ngFor="let comments of commentsList">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{comments.uploaderImage  == \'\' ? \'assets/imgs/parent.png\' : comments.uploaderImage}}">\n      </ion-avatar>\n      <h2>{{comments.uploaderName}}</h2>\n      <p>{{comments.date}}</p>\n    </ion-item>\n\n  <ion-card-content>\n    <p style="font-size: 15px">{{comments.description}}</p>\n  </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-textarea [(ngModel)]="message" type="text" style="border-color: #bfbfbf" #C (ionChange)="commentAdded(C.value)" placeholder="Write a comment .... "></ion-textarea>\n    <button ion-button small float-right round class="btnAccept" (click)="sendComment()">Send</button>\n  </ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px">\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/memory-details/memory-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MemoryDetailsPage);
    return MemoryDetailsPage;
}());

//# sourceMappingURL=memory-details.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tips_details_tips_details__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tips_eating_tips_eating__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tips_activity_tips_activity__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tips_growthchart_tips_growthchart__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsPage = /** @class */ (function () {
    function TipsPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
    }
    TipsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipsPage');
        this.ga.trackView("Tips Screen");
        this.apiProvider.trackPage("Tips Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    TipsPage.prototype.eating = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tips_eating_tips_eating__["a" /* TipsEatingPage */]);
    };
    TipsPage.prototype.activity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tips_activity_tips_activity__["a" /* TipsActivityPage */]);
    };
    TipsPage.prototype.growthChart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tips_growthchart_tips_growthchart__["a" /* TipsGrowthchartPage */]);
    };
    TipsPage.prototype.showTips = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tips_details_tips_details__["a" /* TipsDetailsPage */]);
    };
    TipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips/tips.html"*/'<!--\n  Generated template for the TipsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">\n            Tips\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n    <ion-card style="background-color: #3B8175">\n        <ion-card-content>\n            <p style="font-size: 15px;color: white; font-weight: bold">Healthy Eating</p>\n        </ion-card-content>\n        <img src="assets/imgs/tips-4.jpg" height="200px" (click)="eating()">\n    </ion-card>\n\n    <ion-card style="background-color: #3B8175">\n        <ion-card-content>\n            <p style="font-size: 15px;color: white; font-weight: bold">Activity</p>\n        </ion-card-content>\n        <img src="assets/imgs/tips-3.jpg" height="200px" (click)="activity()">\n    </ion-card>\n\n    <ion-card style="background-color: #3B8175">\n        <ion-card-content>\n            <p style="font-size: 15px;color: white; font-weight: bold">Growth Charts</p>\n        </ion-card-content>\n        <img src="assets/imgs/tips-growth-chart.png" height="200px" (click)="growthChart()">\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips/tips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */]])
    ], TipsPage);
    return TipsPage;
}());

//# sourceMappingURL=tips.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
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
 * Generated class for the TipsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsDetailsPage = /** @class */ (function () {
    function TipsDetailsPage(navCtrl, navParams, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
    }
    TipsDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipsDetailsPage');
        this.ga.trackView("Tips Details Screen");
    };
    TipsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips-details',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-details/tips-details.html"*/'<!--\n  Generated template for the TipsDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">\n      TIPS\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n  <ion-slides card-slides slidesPerView="1.18" spaceBetween="10">\n    <ion-slide>\n  <ion-card>\n    <img src="assets/imgs/tips-1.jpg">\n\n    <ion-card-content>\n      <h1 style="font-size: 15px;font-weight: bold">How to Spend More Quality Time With Your Child</h1>\n      <p style="font-size: 15px">Although the days with little kids often seem long, the years fly by. Use this practical and purposeful blueprint to savor the moments you have together.</p>\n      <br>\n      <p style="font-size: 15px">The ten o\'clock news hasn\'t even started, but you\'re too exhausted to watch—who can stay awake that late? Car pools, lunch bags, after-school activities, dinner, homework, bathtime, bedtime. All on top of your own job (or jobs) and the other realities of adulthood. You have just enough energy left to drag yourself to bed so you can wake early and start the routine all over again. Each day with young kids feels like a week, each week like a month.</p>\n    </ion-card-content>\n\n  </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card>\n        <img src="assets/imgs/tips-1.jpg">\n\n        <ion-card-content>\n          <h1 style="font-size: 15px;font-weight: bold">How to Spend More Quality Time With Your Child</h1>\n          <p style="font-size: 15px">Although the days with little kids often seem long, the years fly by. Use this practical and purposeful blueprint to savor the moments you have together.</p>\n          <br>\n          <p style="font-size: 15px">The ten o\'clock news hasn\'t even started, but you\'re too exhausted to watch—who can stay awake that late? Car pools, lunch bags, after-school activities, dinner, homework, bathtime, bedtime. All on top of your own job (or jobs) and the other realities of adulthood. You have just enough energy left to drag yourself to bed so you can wake early and start the routine all over again. Each day with young kids feels like a week, each week like a month.</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-details/tips-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], TipsDetailsPage);
    return TipsDetailsPage;
}());

//# sourceMappingURL=tips-details.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsEatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the TipsEatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsEatingPage = /** @class */ (function () {
    function TipsEatingPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
    }
    TipsEatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipsEatingPage');
        this.ga.trackView("Tips- Healthy Eating Screen");
        this.apiProvider.trackPage("Tips - Healthy Eating Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    TipsEatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips-eating',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-eating/tips-eating.html"*/'<!--\n  Generated template for the TipsEatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">\n            Healthy Eating\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n    <ion-slides card-slides slidesPerView="1.18" spaceBetween="10">\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <h1 style="font-size: 15px;font-weight: bold">Healthy Eating</h1>\n                    <br>\n                    <img src="assets/imgs/tips-eating-4.jpg">\n                    <br>\n                    <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Avoid giving\n                        your baby and toddlers, fizzy drinks, tea, coffee, sugar and salt.They do not need them.</p>\n                </ion-card-content>\n\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                    <h1 style="font-size: 15px;font-weight: bold">Breastfeeding</h1>\n                    <br>\n                    <img src="assets/imgs/tips-Breast_feeding.jpg">\n                    <br>\n                    <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">Breast milk\n                        is the perfect food, because it’s easy for your baby to digest. It adapts to your baby’s needs,\n                        is the right temperature and bes of all, it’s free! There are many benefits to\n                        breastfeeding.</p>\n                    <br>\n                    <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Breast milk\n                        may protect babies from diarrhoea, ear infections and respiratory infections. If they do get an\n                        infection, breastfed babies usually won’t be so ill.</p>\n                    <br>\n                        <h1 style="font-size: 15px;font-weight: bold;" align="left">What if I can\'t breastfeed?</h1>\n\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                        It’s important to seek professional help if you are struggling to breastfeed or can’t at all. Talk with your GP or wellchild provider such as Plunket early.\n                    </p>\n                        <br>\n                    <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                        Don’t be too hard on yourself if you can’t breastfeed. Don’t feel guilty or inadequate – lots of women are in the same position. It doesn’t mean you’re a bad mother or your child won’t flourish. The most important thing is that you and your baby are healthy, happy and thriving.\n                    </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;font-weight: bold">Choosing a formula</p>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                        It can be overwhelming deciding which formula to use as there are many out there on the market. If you’re unsure, seek medical advice from your GP or Plunket\n                    </p>\n                    </ion-scroll>\n\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                    <h1 style="font-size: 15px;font-weight: bold">Starting Solids</h1>\n                    <br>\n                    <img src="assets/imgs/tips-starting-solids.jpg">\n                    <br>\n                    <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Your Plunket\n                        nurse can help you work out when to start offering your baby solid food, and will give you the\n                        information you need.</p>\n                    <br>\n                    <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Your baby\n                        may be ready for solid food if they:</p>\n                    <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                        Seem hungry after breast or formula feeds.\n                    </li>\n                    <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                        Can hold their head up well.\n                    </li>\n                    <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                        Are interested in watching you eat - they reach out, open their mouth when you’re eating, and put their hands and toys in their mouth.\n                    </li>\n                    <li style="font-size: 14px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                        Make chewing movements.\n                    </li>\n                    <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                        Easily open their mouth when you touch their lip with a spoon or bring food to their mouth, and their tongue doesn’t protrude and push the food out.\n                    </li>\n                    <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                        Move food to the back of their mouth and swallow.\n                    </li>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Don’t worry too much about your baby’s food preferences. Keep offering a range of nutritious foods so they can learn to enjoy a variety of food tastes and textures.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Your baby can eat a variety of different first foods. You can also offer them foods with more texture to help them learn how to chew. Foods like softened pasta pieces, banana, mashed potato, avocado are great starters.\n                        </p>\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">Solids</h1>\n                        <br>\n                        <img src="assets/imgs/tips-eating.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;font-weight: bold">Finger foods</p>\n\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            Finger foods are a great way to involve your child in their own eating.  They may  be much more likely to eat what’s on her plate if she can pick it up and feed herself.\n                            One of the great toddler mealtime tactics is to serve a range of foods on a plate that she can select from.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;font-weight: bold">Premade foods</p>\n\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> While fresh foods and less processed foods are best, we know that pre-made foods can be time savers, however, it is  always important to know what is in the premade foods you buy.  All packaged foods and drinks must be labelled with nutrient levels. Ingredients are any substances used to produce the food, including food additives. Ingredients are listed in order of most amounts to least amounts.\n                            So if apple is listed before banana, the food contains more apple than banana.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;font-weight: bold">Food labels</p>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            Knowing what is in your and your baby\'s food is important.  You can go to\n                        </p>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                            <a style="color: #3B8175; " href="https://www.heartfoundation.org.nz/wellbeing/healthy-eating/how-to-read-food-labels" class="button button-positive">https://www.heartfoundation.org.nz</a> to see how to read the labels on packaged foods so you can make sure you are not giving too much sugar, fat or salt.\n                        </p>\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-eating/tips-eating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], TipsEatingPage);
    return TipsEatingPage;
}());

//# sourceMappingURL=tips-eating.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
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
 * Generated class for the TipsActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsActivityPage = /** @class */ (function () {
    function TipsActivityPage(navCtrl, navParams, apiProvider, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.ga = ga;
    }
    TipsActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipsActivityPage');
        this.ga.trackView("Tips - Activity Eating");
        this.apiProvider.trackPage("Tips - Activity Eating Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    TipsActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips-activity',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-activity/tips-activity.html"*/'<!--\n  Generated template for the TipsActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">\n            Activity\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n    <ion-slides card-slides slidesPerView="1.18" spaceBetween="10">\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold"></h1>\n                        <br>\n                        <img src="assets/imgs/tips-activity-1.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            Take time to talk to, play with, cuddle, and have fun with your baby. Babies thrive on\n                            attention.\n                            Your baby will enjoy motion and the opportunity to get out of her horizontal position. As\n                            she moves around with you, she will start to develop a sense how her body orients itself in\n                            space.\n                        </p>\n                    </ion-scroll>\n                </ion-card-content>\n\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">0-3 Months</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Tummy Time</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-2.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">It’s good\n                            to let your baby lie on the floor on their tummy at least once a day. It strengthens their\n                            neck and back muscles and they become used to being on their tummy. It also helps to reduce\n                            or prevent flattening to the back of your baby’s head. Do it when they’re settled and awake,\n                            and stay with them. If they go to sleep, put them to bed on their back.</p>\n                    </ion-scroll>\n\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">0-3 Months</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Play</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-3.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Movement\n                            helps your baby to develop a sense of balance, learn about their body and\n                            develop strong back and tummy muscles.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Let your\n                            baby lie on the floor with their nappy off, so they can kick.</p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Place\n                            toys on both sides of your baby to encourage them to turn to both sides.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Hold\n                            your baby and slowly move them up and down and around to music.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Movement\n                            helps your baby to develop a sense of balance, learn about their body and develop strong\n                            back and tummy  muscles.\n                        </p>\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">0-3 Months</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Play</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-4.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;"> Place\n                            toys on both sides of your baby to encourage them to turn to both sides.</p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Hold\n                            your baby and slowly move them up and down and around to music.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Touch\n                            different things with their hands and feet (a feather or a ball are good to use for this).\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Hold a\n                            toy up a little higher than she can reach, and encourage baby to try to get it.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Babies\n                            reflexively move their hands in clapping motions, but can\'t connect their hands together.\n                            Help her clap by holding a hand in each of yours and clapping to music.\n                        </p>\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">3-6 Months</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Play</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-5.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> The airplane game is a fun game to play when your baby has control of their head and can keep it up. Fly him around the room and then in for a landing on a soft surface. Don\'t forget the sound effects.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Prop baby up different positions using a variety of different objects like an inflatable swimming pool ring, or a stoller, or pillows, or a bean bag.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Play Peek-A-Boo by holding one hand in front of your face and pulling it away while say Peek-A-Boo.\n                        </p>\n\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">6-12 Months</h1>\n                        <br>\n                        <img src="assets/imgs/tips-activity-7.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            Babies learn and develop by playing, so it’s important to give you and your baby plenty of playtime. You can use things around the house to play with, or choose toys suited to your baby’s personality. Babies don’t understand danger, so they need you to keep them safe by moving things out of reach,\n                            or protecting them with guards, safety catches and plugs.\n                        </p>\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">6-12 Months</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Play</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-6.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            At 4–8 months your baby may enjoy playing with toys that:\n                        </p>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                            They can reach, grasp, and chew on, as they learn about size, shape, taste, and texture by putting things in their mouth.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                            Make noises such as rattles and squeaky toys.\n                        </li>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            At 9-12 months your baby may enjoy:\n                        </p>\n\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                            Dropping toys to watch them fall. They enjoy dropping food from the highchair or toys from the cot too.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                            Playing with toys that they can bang together or put inside one another, like blocks that stack in and out of plastic containers or pots and pans.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                            Give your baby toys they can suck and chew on safely. Your baby is learning a lot by doing this. They’re developing important muscles for eating and talking,\n                            and their mouth is a great tool for them to learn about objects.\n                        </li>\n\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">6-12 Months</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Water and Swimming</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-8.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            When your baby is around 6 months old, try taking them to a public swimming pool. Your baby will probably have a lot of fun at the pool, but make sure they don’t dunk under the water too often—you don’t want them to swallow too much water! You can buy special disposable\n                            nappies or togs to contain any poos your baby does.\n                        </p>\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            Bath time is also fun time.\n                        </p>\n\n\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">12 Months to 2 Years</h1>\n                        <br>\n                        <img src="assets/imgs/tips-activity-9.jpg">\n                        <br>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            Between 1 and 2 years of age children are becoming more independent and curious about things. Toddlers have lots of energy and are constantly on the move.\n                        </p>\n                        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n                            They enjoy\n                        </p>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                            Copying you\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; ">\n                            Helping you\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; ">\n                            Trying new things\n                        </li>\n\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">12 Months to 2 Years</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Inside activities</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-10.jpg">\n                        <br>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; ">\n                            Try snorkling in the bath.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                            Playing dress up.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                            Building with blocks or boxes or pillows and have fun knocking them down.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                            Make things with play dough.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; word-spacing:-2px;">\n                            Listen to music, sing, dance and play with musical instruments.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; ">\n                            Play in large cardboard boxes.\n                        </li>\n\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card>\n                <ion-card-content style="height: 510px">\n                    <ion-scroll scrollY="true" style="height: 510px;">\n\n                        <h1 style="font-size: 15px;font-weight: bold">12 Months to 2 Years</h1>\n                        <h1 style="font-size: 15px;font-weight: bold">Outdoors</h1>\n\n                        <br>\n                        <img src="assets/imgs/tips-activity-11.jpg">\n                        <br>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px; ">\n                            Parks and swings and fields are great for running in, exploring and just being together.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; ">\n                            Hide things and then have them go exploring.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; ">\n                            Take a bubble maker and chase the bubbles you make.\n                        </li>\n                        <li style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; ">\n                            Feed the ducks or birds at the beach or park.\n                        </li>\n\n                    </ion-scroll>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-activity/tips-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], TipsActivityPage);
    return TipsActivityPage;
}());

//# sourceMappingURL=tips-activity.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsGrowthchartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
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
 * Generated class for the TipsGrowthchartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsGrowthchartPage = /** @class */ (function () {
    function TipsGrowthchartPage(navCtrl, navParams, apiProvider, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.ga = ga;
    }
    TipsGrowthchartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipsGrowthchartPage');
        this.ga.trackView("Tips - Growth Chart Screen");
        this.apiProvider.trackPage("Tips - Growth Chart Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    TipsGrowthchartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips-growthchart',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-growthchart/tips-growthchart.html"*/'<!--\n  Generated template for the TipsGrowthchartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">\n      Growth Charts\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n  <ion-slides card-slides slidesPerView="1.18" spaceBetween="10">\n    <ion-slide>\n      <ion-card>\n        <ion-card-content style="height: 510px">\n          <ion-scroll scrollY="true" style="height: 510px;">\n\n          <h1 style="font-size: 15px;font-weight: bold">Growth Charts</h1>\n          <br>\n          <img src="assets/imgs/tips-growthchart-1.jpg">\n          <br>\n          <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Because  children  grow  at  varying  rates  at  different  ages,  we  can\n            only  understand  whether  a  measurement  is  normal  by  comparing\n            it with the normal range of measurements for other children of the\n            same  age  and  gender,  and  this  is  what  growth  charts  allow  us  to\n            do. They enable a child’s growth pattern to be assessed over time.</p>\n          <br>\n          <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Your baby\'s growth is tracked on a development chart from the moment she or he is born. Measurements of\n            length, weight and head circumference are taken in the first minutes of life and these measurements are then put onto the growth chart to begin monitoring their growth.\n          </p>\n          <br>\n          <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> All infants show different patterns of weight gain immediately after birth  and  charts  cannot  allow  for  this.    What  is  important  in  the\n            first  2  weeks  is  looking  at  weight  gain  relative  to  birth  weight,  not  centile position.\n          </p>\n          <br>\n          <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Growth charts are used to help health professionals and you, see where the growth of your child fits in with the growth of similar children of the same age and gender as well as\n            to follow the pattern of your child’s height and weight growth over time.\n          </p>\n          <br>\n          <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Growth charts use percentile bands to capture and track  your child’s growth. These percentile bands cover the variations of ‘normal’ growth and most\n            children consistently fall somewhere between the 5th and 97th percentile bands which are all normal.\n          </p>\n          <br>\n          <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Consistent growth along any percentile band shows ‘normal’ growth.\n          </p>\n          <br>\n          <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Mostly, growth charts show consistent growth from baby to older child, but in some cases, they can be used to detect development problems.\n            For example, if your child is growing disproportionately such as the height and weight becoming very different, a growth chart will swiftly pick this up. Your GP or health professional will see this and continue to review and monitor your child with you.\n          </p>\n            <br>\n          </ion-scroll>\n\n        </ion-card-content>\n\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card>\n        <ion-card-content style="height: 510px">\n          <ion-scroll scrollY="true" style="height: 510px;">\n\n            <h1 style="font-size: 15px;font-weight: bold">What do centile lines mean?</h1>\n            <br>\n            <img src="assets/imgs/tips-growthchart-2.jpg">\n            <br>\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">Each line at a particular centile marks the weight or height below\n              which  that  percent  of  children  of  that age and gender fall. For\n              example, 25 percent of children are lighter than the 25th centile for\n              weight or shorter than the 25th centile for height.  The 50th centile\n              represents the median (middle) of the population.\n            </p>\n            <br>\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Healthy children grow along or next to\n              any  of the centile lines. What matters is\n              that their growth curve stays steady, with no sudden jump or drop.</p>\n            <br>\n          </ion-scroll>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card>\n        <ion-card-content style="height: 510px">\n          <ion-scroll scrollY="true" style="height: 510px;">\n\n            <h1 style="font-size: 15px;font-weight: bold">Where did the charts come from? </h1>\n            <br>\n            <img src="assets/imgs/tips-growthchart-3.jpg">\n            <br>\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> The NZ growth charts are based on the World Health Organisation charts.</p>\n            <br>\n\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;">\n\n              The process of planning, data collection and analysis took 15 years and charts were finally published in 2006. Infants were only included if they were healthy and born at term, were breastfed exclusively for at least four months, with continued partial breastfeeding for a year and complementary foods started by six months. Mothers had to be non-smoking and living in comfortable economic circumstances.\n            </p>\n            <br>\n\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Data  were  collected  from  birth  to  age  five  in  six  countries  (USA,\n              Norway, India, Ghana, Brazil, Oman) and very similar growth patterns were found in all six.</p>\n            <br>\n\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;font-weight: bold">Are these charts relevant to me?</p>\n            <br>\n\n            <p style="font-size: 14px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> The  World  Health  Organization  study  found  that  healthy  breastfed\n              babies in a number of countries, no matter what their ethnicity, grew\n              in a similar way, at a similar rate.</p>\n            <br>\n\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;word-spacing:-2px;"> Although Māori and Pacific children were not part of the development of  the  WHO  charts,  the  charts  appear  to  be  appropriate  for  Māori  children.\n              Pacific  children  are  often  slightly  bigger,  but  still  within  the range of normal shown on the charts.</p>\n            <br>\n\n          </ion-scroll>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/tips-growthchart/tips-growthchart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], TipsGrowthchartPage);
    return TipsGrowthchartPage;
}());

//# sourceMappingURL=tips-growthchart.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_modal_events_modal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, alertCtrl, calendar, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
        this.ga = ga;
        this.apiProvider = apiProvider;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
        this.date = new Date();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.getDaysOfMonth();
        this.loadEventThisMonth();
        this.ga.trackView("Events Screen");
        this.apiProvider.trackPage("Events Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    EventsPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
                this.daysInNextMonth.push(l);
            }
        }
    };
    EventsPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    EventsPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    EventsPage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_modal_events_modal__["a" /* EventsModalPage */]);
    };
    EventsPage.prototype.loadEventThisMonth = function () {
        var _this = this;
        this.eventList = new Array();
        var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        this.calendar.listEventsInRange(startDate, endDate).then(function (msg) {
            msg.forEach(function (item) {
                _this.eventList.push(item);
            });
        }, function (err) {
            console.log(err);
        });
    };
    EventsPage.prototype.checkEvent = function (day) {
        var hasEvent = false;
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
        this.eventList.forEach(function (event) {
            if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
                hasEvent = true;
            }
        });
        return hasEvent;
    };
    EventsPage.prototype.selectDate = function (day) {
        var _this = this;
        this.isSelected = false;
        this.selectedEvent = new Array();
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
        this.eventList.forEach(function (event) {
            if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
                _this.isSelected = true;
                _this.selectedEvent.push(event);
            }
        });
    };
    EventsPage.prototype.deleteEvent = function (evt) {
        var _this = this;
        // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
        // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure want to delete this event?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(function (msg) {
                            console.log(msg);
                            _this.loadEventThisMonth();
                            _this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">Events</ion-title>\n    <ion-buttons end>\n      <button (click)="addEvent()" style="width: 50px; height: 50px; background: transparent !important;" >\n        <img src="assets/imgs/plus.png"/>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <br>\n\n\n  <div class="calendar-header">\n    <ion-row class="calendar-month">\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n  <div class="calendar-body">\n    <ion-grid>\n      <ion-row class="calendar-weekday">\n        <ion-col>Su</ion-col>\n        <ion-col>Mo</ion-col>\n        <ion-col>Tu</ion-col>\n        <ion-col>We</ion-col>\n        <ion-col>Th</ion-col>\n        <ion-col>Fr</ion-col>\n        <ion-col>Sa</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" (click)="goToLastMonth()">{{lastDay}}</ion-col>\n        <ion-col col-1 *ngFor="let day of daysInThisMonth" (click)="selectDate(day)">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">\n            {{day}}\n            <div class="event-bullet" *ngIf="checkEvent(day)"></div>\n          </ng-template>\n        </ion-col>\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="goToNextMonth()">{{nextDay}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="selected-event"  *ngIf="isSelected">\n    <ion-list>\n      <ion-item *ngFor="let se of selectedEvent" style="background-color: rgba(199,199,199,0.28);">\n        <ion-buttons end>\n          <button ion-button clear icon-only (click)="deleteEvent(se)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n        <h2>{{se.title}}</h2>\n        <h3>{{se.message}}</h3>\n        <p>Start Date: {{se.startDate}}<br>\n          Start Date: {{se.endDate}}</p>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(136);
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
 * Generated class for the EventsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsModalPage = /** @class */ (function () {
    function EventsModalPage(navCtrl, navParams, alertCtrl, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
        this.event = { title: "", location: "", message: "", startDate: "", endDate: "" };
    }
    EventsModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsModalPage');
    };
    EventsModalPage.prototype.save = function () {
        var _this = this;
        this.calendar.createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(function (msg) {
            var alert = _this.alertCtrl.create({
                title: 'Success!',
                cssClass: 'childNoticeAlert',
                subTitle: 'Event saved successfully',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.pop();
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Failed!',
                cssClass: 'childNoticeAlert',
                subTitle: err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    EventsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-modal',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/events-modal/events-modal.html"*/'<!--\n  Generated template for the EventsModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar>\n        <ion-title align="center">Event Details</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n\n    <ion-card id="" class="ion-card" [hidden]="" transparent="true">\n        <ion-card-content>\n\n            <form (ngSubmit)="save()">\n                <ion-list style="background-color: transparent">\n                    <ion-item>\n                        <ion-label floating>Title</ion-label>\n                        <ion-input type="text" [(ngModel)]="event.title" name="event.title"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Location</ion-label>\n                        <ion-input type="text" [(ngModel)]="event.location" name="event.location"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Notes</ion-label>\n                        <ion-input type="text" [(ngModel)]="event.message" name="event.message"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Start Date</ion-label>\n                        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="event.startDate" name="event.startDate"></ion-datetime>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>End Date</ion-label>\n                        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="event.endDate" name="event.endDate"></ion-datetime>\n                    </ion-item>\n                    <ion-item>\n                        <button ion-button block type="submit"  class="btnAccept" style="height: 40px; font-size: 1.4rem; font-weight: bold">Save</button>\n                    </ion-item>\n                </ion-list>\n            </form>\n\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/events-modal/events-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
    ], EventsModalPage);
    return EventsModalPage;
}());

//# sourceMappingURL=events-modal.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesPage = /** @class */ (function () {
    function ActivitiesPage(navCtrl, navParams, ga, apiProvider, platform, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.networkConnected = true;
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesPage');
        this.ga.trackView("Activities Screen");
        this.presentLoading();
        this.apiProvider.trackPage("Activities Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    ActivitiesPage.prototype.presentLoading = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
            if (!_this.networkConnected) {
                _this.showAlert();
            }
        }, 2000);
    };
    ActivitiesPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: "Please check your internet connection and try again.",
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/activities/activities.html"*/'<!--\n  Generated template for the ActivitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">\n      Activities\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <iframe\n          width="100%"\n          height="100%"\n          frameborder="0" style="border:0"\n          src="https://www.google.com/maps/embed/v1/search\n?key=AIzaSyA9lbNV4NR5MdIbS0Yne3TVf5g0ZZPHG00&center=-36.8849118,174.7367943&zoom=8\n&q=new+zealand+kids+play+parks" allowfullscreen>\n  </iframe>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = /** @class */ (function () {
    function ServicesPage(navCtrl, navParams, ga, apiProvider, platform, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.networkConnected = true;
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
        this.ga.trackView("Services Screen");
        this.presentLoading();
        this.apiProvider.trackPage("Services Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    ServicesPage.prototype.presentLoading = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
            if (!_this.networkConnected) {
                _this.showAlert();
            }
        }, 2000);
    };
    ServicesPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: "Please check your internet connection and try again.",
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/services/services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">\n      Services\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <iframe\n          width="100%"\n          height="100%"\n          frameborder="0" style="border:0"\n          src="https://www.google.com/maps/embed/v1/search\n?key=AIzaSyA9lbNV4NR5MdIbS0Yne3TVf5g0ZZPHG00&center=-36.8849118,174.7367943&zoom=8\n&q=new+zealand+accident+and+medical+centre" allowfullscreen>\n  </iframe>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/services/services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmunisationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the ImmunisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmunisationPage = /** @class */ (function () {
    function ImmunisationPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
    }
    ImmunisationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmunisationPage');
        this.ga.trackView("Immunisation Screen");
        this.apiProvider.trackPage("Immunisation Screen")
            .then(function (res) {
        }, function (err) {
        });
        this.ageCalculate(window.localStorage.getItem("childDateOffBirth"), new Date());
        if (this.ageInWeeks == 0) {
            this.baby1_top = "cd-timeline-picture-baby-1-1 dark";
            this.milestone_dot1 = "cd-timeline-picture1 dark";
            this.milestone_dot2 = "cd-timeline-picture2 dark";
            this.milestone_dot3 = "cd-timeline-picture3 dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1 dark";
            this.content1_1 = "cd-timeline-content1-1 dark";
            this.content1_2 = "cd-timeline-content1-2 dark";
            this.content2 = "cd-timeline-content2 dark";
            this.content2_2 = "cd-timeline-content2-2 dark";
            this.content2_3 = "cd-timeline-content2-3 dark";
            this.content3 = "cd-timeline-content3 dark";
            this.content3_1 = "cd-timeline-content3-1 dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks > 0 && this.ageInWeeks < 6) {
            this.baby1_top = "cd-timeline-picture-baby-1-2 dark";
            this.milestone_dot1 = "cd-timeline-picture1 dark";
            this.milestone_dot2 = "cd-timeline-picture2 dark";
            this.milestone_dot3 = "cd-timeline-picture3 dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1 dark";
            this.content1_1 = "cd-timeline-content1-1 dark";
            this.content1_2 = "cd-timeline-content1-2 dark";
            this.content2 = "cd-timeline-content2 dark";
            this.content2_2 = "cd-timeline-content2-2 dark";
            this.content2_3 = "cd-timeline-content2-3 dark";
            this.content3 = "cd-timeline-content3 dark";
            this.content3_1 = "cd-timeline-content3-1 dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks == 6) {
            this.baby1_top = "cd-timeline-picture-baby-1-3 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2 dark";
            this.milestone_dot3 = "cd-timeline-picture3 dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2 dark";
            this.content2_2 = "cd-timeline-content2-2 dark";
            this.content2_3 = "cd-timeline-content2-3 dark";
            this.content3 = "cd-timeline-content3 dark";
            this.content3_1 = "cd-timeline-content3-1 dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks > 6 && this.ageInWeeks < 12) {
            this.baby1_top = "cd-timeline-picture-baby-1-4 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2 dark";
            this.milestone_dot3 = "cd-timeline-picture3 dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2 dark";
            this.content2_2 = "cd-timeline-content2-2 dark";
            this.content2_3 = "cd-timeline-content2-3 dark";
            this.content3 = "cd-timeline-content3 dark";
            this.content3_1 = "cd-timeline-content3-1 dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks == 12) {
            this.baby1_top = "cd-timeline-picture-baby-1-5 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2-green dark";
            this.milestone_dot3 = "cd-timeline-picture3 dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2-green dark";
            this.content2_2 = "cd-timeline-content2-2-green dark";
            this.content2_3 = "cd-timeline-content2-3-green dark";
            this.content3 = "cd-timeline-content3 dark";
            this.content3_1 = "cd-timeline-content3-1 dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks > 12 && this.ageInWeeks < 20) {
            this.baby1_top = "cd-timeline-picture-baby-1-6 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2-green dark";
            this.milestone_dot3 = "cd-timeline-picture3 dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2-green dark";
            this.content2_2 = "cd-timeline-content2-2-green dark";
            this.content2_3 = "cd-timeline-content2-3-green dark";
            this.content3 = "cd-timeline-content3 dark";
            this.content3_1 = "cd-timeline-content3-1 dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks == 20) {
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2-green dark";
            this.milestone_dot3 = "cd-timeline-picture3-green dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.baby1_top = "cd-timeline-picture-baby-1-7 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2-green dark";
            this.content2_2 = "cd-timeline-content2-2-green dark";
            this.content2_3 = "cd-timeline-content2-3-green dark";
            this.content3 = "cd-timeline-content3-green dark";
            this.content3_1 = "cd-timeline-content3-1-green dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks > 20 && this.ageInWeeks < 60) {
            this.baby1_top = "cd-timeline-picture-baby-1-8 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2-green dark";
            this.milestone_dot3 = "cd-timeline-picture3-green dark";
            this.milestone_dot4 = "cd-timeline-picture4 dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2-green dark";
            this.content2_2 = "cd-timeline-content2-2-green dark";
            this.content2_3 = "cd-timeline-content2-3-green dark";
            this.content3 = "cd-timeline-content3-green dark";
            this.content3_1 = "cd-timeline-content3-1-green dark";
            this.content4 = "cd-timeline-content4 dark";
            this.content4_1 = "cd-timeline-content4-1 dark";
            this.content4_2 = "cd-timeline-content4-2 dark";
            this.content4_3 = "cd-timeline-content4-3 dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks == 60) {
            this.baby1_top = "cd-timeline-picture-baby-1-9 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2-green dark";
            this.milestone_dot3 = "cd-timeline-picture3-green dark";
            this.milestone_dot4 = "cd-timeline-picture4-green dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2-green dark";
            this.content2_2 = "cd-timeline-content2-2-green dark";
            this.content2_3 = "cd-timeline-content2-3-green dark";
            this.content3 = "cd-timeline-content3-green dark";
            this.content3_1 = "cd-timeline-content3-1-green dark";
            this.content4 = "cd-timeline-content4-green dark";
            this.content4_1 = "cd-timeline-content4-1-green dark";
            this.content4_2 = "cd-timeline-content4-2-green dark";
            this.content4_3 = "cd-timeline-content4-3-green dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks > 60 && this.ageInWeeks < 192) {
            this.baby1_top = "cd-timeline-picture-baby-1-10 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2-green dark";
            this.milestone_dot3 = "cd-timeline-picture3-green dark";
            this.milestone_dot4 = "cd-timeline-picture4-green dark";
            this.milestone_dot5 = "cd-timeline-picture5 dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2-green dark";
            this.content2_2 = "cd-timeline-content2-2-green dark";
            this.content2_3 = "cd-timeline-content2-3-green dark";
            this.content3 = "cd-timeline-content3-green dark";
            this.content3_1 = "cd-timeline-content3-1-green dark";
            this.content4 = "cd-timeline-content4-green dark";
            this.content4_1 = "cd-timeline-content4-1-green dark";
            this.content4_2 = "cd-timeline-content4-2-green dark";
            this.content4_3 = "cd-timeline-content4-3-green dark";
            this.content5 = "cd-timeline-content5 dark";
            this.content5_1 = "cd-timeline-content5-1 dark";
        }
        if (this.ageInWeeks == 192) {
            this.baby1_top = "cd-timeline-picture-baby-1-11 dark";
            this.milestone_dot1 = "cd-timeline-picture1-green dark";
            this.milestone_dot2 = "cd-timeline-picture2-green dark";
            this.milestone_dot3 = "cd-timeline-picture3-green dark";
            this.milestone_dot4 = "cd-timeline-picture4-green dark";
            this.milestone_dot5 = "cd-timeline-picture5-green dark";
            this.content1 = "cd-timeline-content1-green dark";
            this.content1_1 = "cd-timeline-content1-1-green dark";
            this.content1_2 = "cd-timeline-content1-2-green dark";
            this.content2 = "cd-timeline-content2-green dark";
            this.content2_2 = "cd-timeline-content2-2-green dark";
            this.content2_3 = "cd-timeline-content2-3-green dark";
            this.content3 = "cd-timeline-content3-green dark";
            this.content3_1 = "cd-timeline-content3-1-green dark";
            this.content4 = "cd-timeline-content4-green dark";
            this.content4_1 = "cd-timeline-content4-1-green dark";
            this.content4_2 = "cd-timeline-content4-2-green dark";
            this.content4_3 = "cd-timeline-content4-3-green dark";
            this.content5 = "cd-timeline-content5-green dark";
            this.content5_1 = "cd-timeline-content5-1-green dark";
        }
    };
    ImmunisationPage.prototype.ageCalculate = function (d1, d2) {
        console.log(" =========" + d1 + "00000" + d2);
        var diffDays, oneDay;
        oneDay = 24 * 60 * 60 * 1000;
        diffDays = ((Date.parse(d2) - Date.parse(d1)) / oneDay);
        var age = (diffDays / 30);
        this.ageInDays = Math.round((diffDays) * 10) / 10;
        this.ageInMonths = Math.round((diffDays / 30) * 10) / 10;
        this.ageInWeeks = Math.round(Math.round((diffDays / 7) * 10) / 10);
        //this.ageInWeeks = 192
        console.log("age----week-----" + this.ageInWeeks);
        console.log("age----month-----" + this.ageInMonths);
        console.log("age----days-----" + this.ageInDays);
    };
    ImmunisationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-immunisation',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/immunisation/immunisation.html"*/'<!--\n  Generated template for the ImmunisationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">\n            Immunisation\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n    <div class="row">\n        <div class="column" style=" width:23%;">\n            <br>\n            <br>\n            <div class="row2" style="font-weight: bold">\n                Birth\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class="row2" style="font-weight: bold">\n                6 Weeks\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class="row2" style="font-weight: bold">\n                3 Months\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class="row2" style="font-weight: bold">\n                5 Months\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class="row2" style="font-weight: bold">\n                15 Months\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class="row2" style="font-weight: bold">\n                4 Years\n            </div>\n\n        </div>\n        <div class="column" style="width:15%;">\n            <section id="cd-timeline" class="cd-container">\n                <div class="cd-timeline-block-baby-1">\n                    <div class="{{this.baby1_top}}">\n                        <img src="assets/imgs/child.png">\n                    </div>\n                    <!-- cd-timeline-img -->\n                </div>\n                <div class="cd-timeline-block1">\n                    <div class={{this.milestone_dot1}}>\n                    </div>\n                    <!-- cd-timeline-img -->\n                </div>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <div class="cd-timeline-block2">\n                    <div class={{this.milestone_dot2}}>\n                    </div>\n                    <!-- cd-timeline-img -->\n                </div>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <div class="cd-timeline-block2">\n                    <div class={{this.milestone_dot3}}>\n                    </div>\n                    <!-- cd-timeline-img -->\n                </div>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <div class="cd-timeline-block2">\n                    <div class={{this.milestone_dot4}}>\n                    </div>\n                    <!-- cd-timeline-img -->\n                </div>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <div class="cd-timeline-block2">\n                    <div class={{this.milestone_dot5}}>\n                    </div>\n                    <!-- cd-timeline-img -->\n                </div>\n\n            </section>\n\n        </div>\n        <div class="column" style="width:60%;">\n            <div class={{this.content1}} style="align:left" >\n                <ion-row style="height: 16px; background: white; border-color:#3B8175 ">\n                    <label class="timelineText" style="padding-left: 60px;color: #000000; font-size: 14px">Rotavirus</label>\n                </ion-row>\n            </div>\n            <div class={{this.content1_1}} >\n                <ion-row style="height: 70px; background: white; border-color:#3B8175 " >\n                    <label class="timelineText" style="padding-left: 3px; width: 100%;color: #000000;text-align: justify;font-size: 14px">Diphtheria/Tetanus/Pertussis</label>\n                    <label class="timelineText" style="padding-left: 3px; width: 100%;color: #000000;text-align: left;font-size: 14px">/Polio/Hepatitis B/ </label>\n                    <label class="timelineText" style="padding-left: 3px; width: 100%;color: #000000;text-align: left;font-size: 13px">Haemophilus influenzae type b</label>\n\n                </ion-row>\n            </div>\n            <div class={{this.content1_2}} >\n                <ion-row style="height: 16px; background: white; border-color:#3B8175 ">\n                    <label class="timelineText" style="padding-left: 50px;color: #000000; font-size: 14px">Pneumococcal</label>\n                </ion-row>\n            </div>\n\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class={{this.content2}} >\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 60px;color: #000000; font-size: 14px">Rotavirus</label>\n                </ion-row>\n            </div>\n            <div class={{this.content2_2}} >\n                <ion-row style="height: 70px; background: white; border-color:#3B8175 " >\n                    <label class="timelineText" style="padding-left: 3px; width: 100%;color: #000000;text-align: justify;font-size: 14px">Diphtheria/Tetanus/Pertussis</label>\n                    <label class="timelineText" style="padding-left: 0px; width: 100%;color: #000000;text-align: left;font-size: 14px">/Polio/Hepatitis B/ </label>\n                    <label class="timelineText" style="padding-left: 3px; width: 100%;color: #000000;text-align: left;font-size: 13px">Haemophilus influenzae type b</label>\n                </ion-row>\n            </div>\n            <div class={{this.content2_3}} >\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 50px;color: #000000; font-size: 14px">Pneumococcal</label>\n                </ion-row>\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class={{this.content3}} >\n                <ion-row style="height: 70px; background: white; border-color:#3B8175 " >\n                    <label class="timelineText" style="padding-left: 3px; width: 100%;color: #000000;text-align: justify;font-size: 14px">Diphtheria/Tetanus/Pertussis</label>\n                    <label class="timelineText" style="padding-left: 0px; width: 100%;color: #000000;text-align: left;font-size: 14px">/Polio/Hepatitis B/ </label>\n                    <label class="timelineText" style="padding-left: 3px; width: 100%;color: #000000;text-align: left;font-size: 13px">Haemophilus influenzae type b</label>\n                </ion-row>\n            </div>\n            <div class={{this.content3_1}} style="height: 20px" >\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 50px;color: #000000; font-size: 14px">Pneumococcal</label>\n                </ion-row>\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class={{this.content4}}  style="width: 100%; height: 20px">\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 3px;color: #000000; font-size: 13px;text-align: justify">Haemophilus influenzae type b</label>\n                </ion-row>\n            </div>\n            <div class={{this.content4_1}}  style="width: 100%; height: 20px">\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 20px;color: #000000; font-size: 14px;text-align: justify">Measles/Mumps/Rubella</label>\n                </ion-row>\n            </div>\n            <div class={{this.content4_2}}  style="width: 100%; height: 20px">\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 50px;color: #000000; font-size: 14px;text-align: justify">Pneumococcal</label>\n                </ion-row>\n            </div>\n            <div class={{this.content4_3}}  style="width: 100%; height: 20px">\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 30px;color: #000000; font-size: 14px;text-align: justify">Varicella (Chickenpox)</label>\n                </ion-row>\n            </div>\n\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <div class={{this.content5}} (click)="memoryDetailsView()" style="width: 100%; height: 40px">\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 5px;color: #000000; font-size: 14px;text-align: justify">Diphtheria/Tetanus/Pertussis</label>\n                </ion-row>\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 3px;color: #000000; font-size: 14px;text-align: justify">/Polio</label>\n                </ion-row>\n            </div>\n            <div class={{this.content5_1}} (click)="memoryDetailsView()" style="width: 100%; height: 20px">\n                <ion-row style="height: 16px; background: white; border-color:#000000 ">\n                    <label class="timelineText" style="padding-left: 20px;color:#000000; font-size: 14px;text-align: justify">Measles/Mumps/Rubella</label>\n                </ion-row>\n            </div>\n\n\n\n        </div>\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/immunisation/immunisation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], ImmunisationPage);
    return ImmunisationPage;
}());

//# sourceMappingURL=immunisation.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstAidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_aid_danger_first_aid_danger__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__first_aid_cpr_first_aid_cpr__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__first_aid_first_first_aid_first__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the FirstAidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstAidPage = /** @class */ (function () {
    function FirstAidPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
    }
    FirstAidPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstAidPage');
        this.ga.trackView("First Aid Screen");
        this.apiProvider.trackPage("First Aid Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    FirstAidPage.prototype.danger = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__first_aid_danger_first_aid_danger__["a" /* FirstAidDangerPage */]);
    };
    FirstAidPage.prototype.cpr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__first_aid_cpr_first_aid_cpr__["a" /* FirstAidCprPage */]);
    };
    FirstAidPage.prototype.firstAids = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__first_aid_first_first_aid_first__["a" /* FirstAidFirstPage */]);
    };
    FirstAidPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-aid',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid/first-aid.html"*/'<!--\n  Generated template for the FirstAidPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">First Aid</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n    <ion-list>\n        <ion-card>\n            <!--<ion-card-header style="background-color: #3B8175; color:white ">-->\n                <!--Grazes, cuts and wounds-->\n            <!--</ion-card-header>-->\n            <ion-card-content style="background-color: #3B8175; font-size: 15px; color:white; ">\n                <li style="font-size: 17px;text-align: justify; text-justify: inter-word; ">\n                    In an emergency call <b><a href="tel:111" style="color: #ffff">111</a></b> and ask for Ambulance.\n                </li>\n                <!--<li style="font-size: 20px;text-align: center">-->\n                    <!--Poisons line-->\n                <!--</li>-->\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n                <ion-card-content style="background-color: #3B8175; font-size: 17px; color:white; ">\n                    <li style="font-size: 15px; ">\n                        If your child is sick and you\'re not sure what to do,call the free Healthline, <b><a href="tel:0800 611 116" style="color: #ffff">0800 611 116</a></b>. Healthline is New Zealand\'s 24-hour telephone health advice service. All calls are answered by registered nurses.\n                    </li>\n                    <!--<li style="font-size: 20px;text-align: center">-->\n                    <!--Poisons line-->\n                    <!--</li>-->\n                </ion-card-content>\n        </ion-card>\n\n        <ion-card transparent="true">\n                <ion-row>\n                    <ion-col>\n                        <div>\n\n                            <div>\n                                <div>\n                                    <img src="assets/imgs/first-aid-4.png" (click)="danger()" width="115px" height="210px"/>\n                                </div>\n                            </div>\n\n                        </div>\n                    </ion-col>\n                    <ion-col>\n                        <div>\n\n                            <div>\n                                <div>\n                                    <img src="assets/imgs/first-aid-1.png" (click)="cpr()" width="115px" height="210px"/>\n                                </div>\n                            </div>\n\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <div style="width: 80px"></div>\n                    <ion-col align="center" style="width: 115px !important;">\n                        <div>\n\n                            <div>\n                                <div>\n                                    <img src="assets/imgs/first-aid-2.png" (click)="firstAids()" width="120px" height="210px"/>\n                                </div>\n                            </div>\n\n                        </div>\n                    </ion-col>\n                    <div style="width: 80px"></div>\n                </ion-row>\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid/first-aid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */]])
    ], FirstAidPage);
    return FirstAidPage;
}());

//# sourceMappingURL=first-aid.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstAidDangerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the FirstAidDangerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstAidDangerPage = /** @class */ (function () {
    function FirstAidDangerPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.iconNameT = "ios-arrow-down";
        this.iconNameD = "ios-arrow-down";
        this.iconNameS = "ios-arrow-down";
        this.iconNameB = "ios-arrow-down";
        this.iconNameV = "ios-arrow-down";
        this.iconNameP = "ios-arrow-down";
        this.iconNameM = "ios-arrow-down";
        this.showDetails = false;
        this.showtempDetails = false;
        this.showSkinDetails = false;
        this.showBreathDetails = false;
        this.showVomitingDetails = false;
        this.showPoisoningDetails = false;
        this.showMeningitisDetails = false;
        this.dangerClicks = 0;
        this.tempClicks = 0;
        this.skinClicks = 0;
        this.breathClicks = 0;
        this.vomitingClicks = 0;
        this.poisoningClicks = 0;
        this.meningitisClicks = 0;
    }
    FirstAidDangerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstAidDangerPage');
        this.ga.trackView("First Aid Danger Screen");
        this.apiProvider.trackPage("First Aid Danger Signs Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    FirstAidDangerPage.prototype.generalSigns = function () {
        this.dangerClicks += 1;
        if (this.dangerClicks != 1) {
            this.dangerClicks = 0;
        }
        ;
        if (this.dangerClicks == 1) {
            this.showDetails = true;
            this.iconNameD = "ios-arrow-up";
        }
        else {
            this.showDetails = false;
            this.iconNameD = "ios-arrow-down";
        }
    };
    FirstAidDangerPage.prototype.temperature = function () {
        this.tempClicks += 1;
        if (this.tempClicks != 1) {
            this.tempClicks = 0;
        }
        ;
        if (this.tempClicks == 1) {
            this.showtempDetails = true;
            this.iconNameT = "ios-arrow-up";
        }
        else {
            this.showtempDetails = false;
            this.iconNameT = "ios-arrow-down";
        }
    };
    FirstAidDangerPage.prototype.skin = function () {
        this.skinClicks += 1;
        if (this.skinClicks != 1) {
            this.skinClicks = 0;
        }
        ;
        if (this.skinClicks == 1) {
            this.showSkinDetails = true;
            this.iconNameS = "ios-arrow-up";
        }
        else {
            this.showSkinDetails = false;
            this.iconNameS = "ios-arrow-down";
        }
    };
    FirstAidDangerPage.prototype.breath = function () {
        this.breathClicks += 1;
        if (this.breathClicks != 1) {
            this.breathClicks = 0;
        }
        ;
        if (this.breathClicks == 1) {
            this.showBreathDetails = true;
            this.iconNameS = "ios-arrow-up";
        }
        else {
            this.showBreathDetails = false;
            this.iconNameS = "ios-arrow-down";
        }
    };
    FirstAidDangerPage.prototype.vomiting = function () {
        this.vomitingClicks += 1;
        if (this.vomitingClicks != 1) {
            this.vomitingClicks = 0;
        }
        ;
        if (this.vomitingClicks == 1) {
            this.showVomitingDetails = true;
            this.iconNameV = "ios-arrow-up";
        }
        else {
            this.showVomitingDetails = false;
            this.iconNameV = "ios-arrow-down";
        }
    };
    FirstAidDangerPage.prototype.poisoning = function () {
        this.poisoningClicks += 1;
        if (this.poisoningClicks != 1) {
            this.poisoningClicks = 0;
        }
        ;
        if (this.poisoningClicks == 1) {
            this.showPoisoningDetails = true;
            this.iconNameP = "ios-arrow-up";
        }
        else {
            this.showPoisoningDetails = false;
            this.iconNameP = "ios-arrow-down";
        }
    };
    FirstAidDangerPage.prototype.meningitis = function () {
        this.meningitisClicks += 1;
        if (this.meningitisClicks != 1) {
            this.meningitisClicks = 0;
        }
        ;
        if (this.meningitisClicks == 1) {
            this.showMeningitisDetails = true;
            this.iconNameM = "ios-arrow-up";
        }
        else {
            this.showMeningitisDetails = false;
            this.iconNameM = "ios-arrow-down";
        }
    };
    FirstAidDangerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-aid-danger',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-danger/first-aid-danger.html"*/'<!--\n  Generated template for the FirstAidDangerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">Danger Signs</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n    <ion-list>\n        <ion-card>\n            <ion-card-content style="background-color: #3B8175; font-size: 17px; color:white ">\n                Get help quickly from a doctor if your baby or young child shows any of the signs listed below.\n            </ion-card-content>\n        </ion-card>\n        <div>&nbsp;&nbsp;</div>\n\n        <!--<ion-item style="background-color: rgba(167,167,167,0.49)">-->\n            <!--<ion-icon item-right color="primary" (click)="generalSigns()" item-right name="{{iconNameD}}"></ion-icon>-->\n            <!--<h2>General Signs</h2>-->\n        <!--</ion-item>-->\n        <!--<ion-item *ngIf="showDetails">-->\n            <!--<ul style="list-style-type:disc;">-->\n                <!--<li style="font-size: 15px;word-wrap: break-word;">Cannot be woken or is responding less <br>than usual-->\n                    <!--to what is going on around <br> them.-->\n                <!--</li>-->\n                <!--<li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Has glazed eyes and is not-->\n                    <!--focusing on <br> anything.-->\n                <!--</li>-->\n                <!--<li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Seems more floppy, more-->\n                    <!--drowsy, or <br>less alert than usual.-->\n                <!--</li>-->\n                <!--<li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Has a convulsion or fit.-->\n                <!--</li>-->\n                <!--<li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Has an unusual cry (high-->\n                    <!--pitched, weak <br>or continuous) for 1 hour or more.-->\n                <!--</li>-->\n                <!--<li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Has severe abdominal pain.-->\n                <!--</li>-->\n                <!--<li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Has a bulge in the groin that-->\n                    <!--gets bigger <br>with crying.-->\n                    <!--<div>&nbsp;&nbsp;</div>-->\n            <!--</ul>-->\n        <!--</ion-item>-->\n\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item text-wrap style="background-color: rgb(59,129,117)" (click)="generalSigns()">\n                    <ion-card-title > General Signs</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right name="{{iconNameD}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showDetails">\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;line-height: normal">\n                    Cannot be woken or is responding less than usual to what is going on around them.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; line-height: normal">\n                    Has glazed eyes and is not focusing on anything.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; line-height: normal">\n                    Seems more floppy, more drowsy, or less alert than usual.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word; line-height: normal">\n                    Has a convulsion or fit.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;line-height: normal">\n                    Has an unusual cry (high pitched, weak or continuous) for 1 hour or more.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;line-height: normal">\n                    Has severe abdominal pain.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;line-height: normal">\n                    Has a bulge in the groin that gets bigger with crying.\n                </p>\n\n            </ion-card-content >\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                <ion-item text-wrap style="background-color: rgb(59,129,117)" (click)="temperature()">\n                    <ion-card-title color="#3B8175"> Temperature</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right name="{{iconNameT}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content text-wrap *ngIf="showtempDetails">\n                <ul style="list-style-type:disc;">\n                    <li style="font-size: 15px">Feels too hot and temperature  is above 38.5°C.\n                    </li>\n                    <li style="font-size: 15px;">Feels too cold and temperature  is below 35°C.\n                    </li>\n                </ul>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">A baby under 2 months old with a fever needs to see a doctor urgently.\n                </p>\n            </ion-card-content >\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item  style="background-color: rgb(59,129,117)" (click)="skin()">\n                    <ion-card-title> Skin colour circulation</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right name="{{iconNameS}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showSkinDetails">\n                <ul style="list-style-type:disc;">\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Skin is much paler than usual  or suddenly goes very white.\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">Nails are blue, or big toe is completely  white or mottled, or colour does not return to the toe within three seconds of being squeezed.\n                    </li>\n                    <li style="font-size: 15px;">Blue colour develops around the mouth.\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">A rash develops with reddish-purple spots or bruises – it’s especially important if the spots or bruises <b>don’t</b> disappear when you  press a glass onto them.\n                    </li>\n                </ul>\n            </ion-card-content >\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item  style="background-color: rgb(59,129,117)" (click)="breath()">\n                    <ion-card-title> Breathing</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right name="{{iconNameB}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showBreathDetails">\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    If your child has difficulty breathing,\n                </p>\n                <ul style="list-style-type:disc;">\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Finds it hard to breathe\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Is breathing quickly\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Grunts when breathing\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Has a bad cough or wheezes\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Turns blue or stops breathing\n                    </li>\n                    <p style="font-size: 15px;--font-weight-bold;text-align: justify; text-justify: inter-word;">\n                        Call 111\n                    </p>\n\n                </ul>\n            </ion-card-content >\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item  style="background-color: rgb(59,129,117)" (click)="vomiting()">\n                    <ion-card-title> Vomiting and diarrhoea</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right name="{{iconNameV}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showVomitingDetails">\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    Get help from a doctor quickly if your baby or young child shows any of the following signs:\n                </p>\n                <ul style="list-style-type:disc;">\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Has trouble swallowing or uncontrolled dribbling\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Has vomiting and diarrhoea (smelly, runny poos) together\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        The vomit is green or has blood in it - these are very serious\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Keeps vomiting or it is severe\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Has been vomiting for more than 6 hours\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Has several runny, dirty nappies (diarrhoea) in 1 or 2 hours\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Has diarrhoea that lasts longer than 24 hours\n                    </li>\n                    <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n                        Has blood in their poo\n                    </li>\n\n                </ul>\n            </ion-card-content >\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item  style="background-color: rgb(59,129,117)" (click)="poisoning()">\n                    <ion-card-title> Poisoning</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right name="{{iconNameP}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showPoisoningDetails">\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">Stay calm. Take the product container to the phone if you can. If the child is awake,\n                    call the Poisons Centre on <b><a style="color: #3B8175; " href="tel:0800764766" class="button button-positive">0800 POISON</a>  <a style="color: #3B8175" href="tel:0800764766" class="button button-positive">0800 764 766</a></b>.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    If the child is sleepy or unconscious, lie them on their side and call 111 for an ambulance.\n                </p>\n            </ion-card-content >\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item text-wrap style="background-color: rgb(59,129,117)" (click)="meningitis()">\n                    <ion-card-title color="#3B8175"> Meningitis</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right name="{{iconNameM}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content text-wrap *ngIf="showMeningitisDetails">\n                <p style="font-size: 15px;color: black;"><b>Meningitis is a serious infection</b></p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;"> If you think your child may have meningitis, don\'t wait. Babies and children with meningitis get sick very quickly.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;"> See your doctor urgently.\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;"><b>What to look for.</b></p>\n                <br>\n                <p style="font-size: 15px;color: black;"> Not all these symptoms may show at once. Your child may:</p>\n                <ul style="list-style-type:disc;">\n                    <li style="font-size: 15px">Have a fever.</li>\n                    <li style="font-size: 15px;">Have high-pitched crying or be unsettled.</li>\n                    <li style="font-size: 15px;">Refuse drinks or feeds.</li>\n                    <li style="font-size: 15px;">Vomit.</li>\n                    <li style="font-size: 15px;">Be sleepy or floppy or harder to wake.</li>\n                    <li style="font-size: 15px;">Have a stiff neck.</li>\n                    <li style="font-size: 15px;">Dislike bright lights.</li>\n                    <li style="font-size: 15px;">Have a rash of red or blue spots, or bruising.</li>\n                </ul>\n\n            </ion-card-content >\n        </ion-card>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-danger/first-aid-danger.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], FirstAidDangerPage);
    return FirstAidDangerPage;
}());

//# sourceMappingURL=first-aid-danger.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstAidCprPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_aid_cpr_under_oneyear_first_aid_cpr_under_oneyear__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__first_aid_cpr_over_oneyear_first_aid_cpr_over_oneyear__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the FirstAidCprPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstAidCprPage = /** @class */ (function () {
    function FirstAidCprPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
    }
    FirstAidCprPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstAidCprPage');
        this.ga.trackView("First Aid CPR Screen");
        this.apiProvider.trackPage("First Aid CPR Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    FirstAidCprPage.prototype.overOneYear = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__first_aid_cpr_over_oneyear_first_aid_cpr_over_oneyear__["a" /* FirstAidCprOverOneyearPage */]);
    };
    FirstAidCprPage.prototype.underOneYear = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__first_aid_cpr_under_oneyear_first_aid_cpr_under_oneyear__["a" /* FirstAidCprUnderOneyearPage */]);
    };
    FirstAidCprPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-aid-cpr',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-cpr/first-aid-cpr.html"*/'<!--\n  Generated template for the FirstAidCprPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">CPR</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <ion-card transparent="true">\n    <ion-row>\n      <ion-col>\n        <div>\n\n          <div>\n            <div>\n              <img src="assets/imgs/first-aid-6.png" (click)="underOneYear()" width="130px" height="230px"/>\n            </div>\n          </div>\n\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n\n          <div>\n            <div>\n              <img src="assets/imgs/first-aid-5.png" (click)="overOneYear()" width="130px" height="230px"/>\n            </div>\n          </div>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <br>\n  <ion-card>\n    <!--<ion-card-header style="background-color: #3B8175; color:white ">-->\n    <!--Grazes, cuts and wounds-->\n    <!--</ion-card-header>-->\n    <ion-card-content style="background-color: #3B8175; font-size: 12px; color:white; ">\n    <p style="font-size: 15px;color: white;" align="center">\n      Download the St John CPR Mobile app. It includes Adult, child and infant CPR tutorials.\n    </p>\n\n      <ion-row>\n        <ion-col>\n\n\n            <div>\n              <div>\n                <a href="https://itunes.apple.com/nz/app/st-john-nz-cpr/id333191630"><img src="assets/imgs/first-aid-7.png"  width="auto" height="40px"/></a>\n              </div>\n            </div>\n\n        </ion-col>\n        <ion-col>\n          <div>\n\n              <div>\n                <a href="https://play.google.com/store/apps/details?id=nz.org.stjohn.stjohnnz&hl=en_US"><img src="assets/imgs/first-aid-8.png"  width="auto" height="40px"/></a>\n              </div>\n            </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-cpr/first-aid-cpr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */]])
    ], FirstAidCprPage);
    return FirstAidCprPage;
}());

//# sourceMappingURL=first-aid-cpr.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstAidCprUnderOneyearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the FirstAidCprUnderOneyearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstAidCprUnderOneyearPage = /** @class */ (function () {
    function FirstAidCprUnderOneyearPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.iconNameD = "ios-arrow-down";
        this.dangerClicks = 0;
        this.showDetails = false;
    }
    FirstAidCprUnderOneyearPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstAidCprUnderOneyearPage');
        this.ga.trackView("First Aid CPR Under Oneyear Screen");
        this.apiProvider.trackPage("CPR Under One year Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    FirstAidCprUnderOneyearPage.prototype.generalSigns = function () {
        this.dangerClicks += 1;
        if (this.dangerClicks != 1) {
            this.dangerClicks = 0;
        }
        ;
        if (this.dangerClicks == 1) {
            this.showDetails = true;
            this.iconNameD = "ios-arrow-up";
        }
        else {
            this.showDetails = false;
            this.iconNameD = "ios-arrow-down";
        }
    };
    FirstAidCprUnderOneyearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-aid-cpr-under-oneyear',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-cpr-under-oneyear/first-aid-cpr-under-oneyear.html"*/'<!--\n  Generated template for the FirstAidCprUnderOneyearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">Babies under 1 year </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <ion-card>\n\n     <ion-card-content style="background-color: #3B8175; font-size: 17px; color:white ">\n        First check for response, then call for an Ambulance.\n      </ion-card-content>\n    <br>\n\n\n    <ion-card-content text-wrap>\n      <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n        <label style="font-size: 15px; font-weight: bold">Airway</label>\n        <br>\n        <!--<img src="assets/imgs/airway.png" />-->\n        Open the airway by moving the head into a neutral position and lifting the chin. Do not tilt the head\n        back too far.\n      </p>\n      <br>\n      <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n        <label style="font-size: 15px; font-weight: bold">Breathing</label>\n        <br>\n        <!--<img src="assets/imgs/first-aid-9.png"/>-->\n        Look and feel for movement of the lower chest and stomach area. Listen and feel for air coming from the\n        nose or mouth.\n        If they are breathing, place the child on their side.\n      </p>\n      <br>\n      <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n        <label style="font-size: 15px; font-weight: bold">Chest Compression (CPR)</label>\n        <br>\n        <!--<img src="assets/imgs/chest.png" />-->\n        If the baby is not breathing, start CPR – 30 compressions to 2 breaths. Put the baby on a firm\n        surface. Place 2 fingers of one hand in the centre of the chest just below the nipples. Push down hard\n        and fast 30 times in about 15 seconds (push down one-third of chest depth). Once you have completed 30\n        compressions (pushes) on the chest, breathe into the child’s mouth 2 times. Seal your lips around the\n        baby’s mouth and nose. Gently puff into the child until you see their chest rise.\n        Continue with the cycle of 30 chest compressions and 2 breaths until the ambulance arrives.\n      </p>\n\n\n    </ion-card-content>\n\n\n\n\n\n\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-cpr-under-oneyear/first-aid-cpr-under-oneyear.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], FirstAidCprUnderOneyearPage);
    return FirstAidCprUnderOneyearPage;
}());

//# sourceMappingURL=first-aid-cpr-under-oneyear.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstAidCprOverOneyearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the FirstAidCprOverOneyearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstAidCprOverOneyearPage = /** @class */ (function () {
    function FirstAidCprOverOneyearPage(navCtrl, navParams, ga, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.iconNameD = "ios-arrow-down";
        this.dangerClicks = 0;
        this.showDetails = false;
    }
    FirstAidCprOverOneyearPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstAidCprOverOneyearPage');
        this.ga.trackView("First Aid CPR Over One year Screen");
        this.apiProvider.trackPage("CPR Over One year Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    FirstAidCprOverOneyearPage.prototype.generalSigns = function () {
        this.dangerClicks += 1;
        if (this.dangerClicks != 1) {
            this.dangerClicks = 0;
        }
        ;
        if (this.dangerClicks == 1) {
            this.showDetails = true;
            this.iconNameD = "ios-arrow-up";
        }
        else {
            this.showDetails = false;
            this.iconNameD = "ios-arrow-down";
        }
    };
    FirstAidCprOverOneyearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-aid-cpr-over-oneyear',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-cpr-over-oneyear/first-aid-cpr-over-oneyear.html"*/'<!--\n  Generated template for the FirstAidCprOverOneyearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">Babies over 1 year</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n    <ion-card>\n\n        <ion-card-content style="background-color: #3B8175; font-size: 17px; color:white ">\n            First Check for Response, then call for an Ambulance.\n        </ion-card-content>\n        <br>\n        <ion-card-content text-wrap>\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                <label style="font-size: 15px; font-weight: bold">Airway</label>\n                <br>\n                <!--<img src="assets/imgs/airway.png" />-->\n                Open the airway by moving the head into a neutral position and lifting the chin. Do not tilt the head\n                back too far.\n            </p>\n            <br>\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                <label style="font-size: 15px; font-weight: bold">Breathing</label>\n                <br>\n                <!--<img src="assets/imgs/first-aid-9.png"/>-->\n                Look and feel for movement of the lower chest and stomach area. Listen and feel for air coming from the\n                nose or mouth.\n                If they are breathing, place the child in the recovery position.\n                If you are alone and come across a child over 1 year of age who is not responding and not breathing\n                normally, start CPR immediately (Airway, Breathing, Chest compressions) and then seek help\n            </p>\n                <br>\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                <label style="font-size: 15px; font-weight: bold">Chest Compression (CPR)</label>\n                <br>\n                <!--<img src="assets/imgs/chest.png" />-->\n                If the child is not breathing, start CPR – 30 compressions to 2 breaths. Put the child on a firm\n                surface. Place the heel of one hand in the centre of the chest just below the nipples. Push down hard\n                and fast 30 times in about 15 seconds (push down one-third of chest depth).Once you have completed 30\n                compressions (pushes) on the chest, breathe into the child’s mouth 2 times. Seal your lips around the\n                child’s mouth and nose. You may need to breathe into their mouth and pinch their nose closed.\n                Gently puff into the child until you see their chest rise.\n                Continue with the cycle of 30 chest compressions and 2 breaths until the ambulance arrives.\n            </p>\n                <br>\n            <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                <label style="font-size: 15px; font-weight: bold">Defibrillator</label>\n                <br>\n                <!--<img src="assets/imgs/first-aid-10.png"/>-->\n                Attach a defibrillator (AED) as soon as it arrives. Place the pads according to the diagram on the AED. If paediatric pads are not available, use standard pads.\n                The pads should not touch each other – if they are too large, place one on the front in the centre of the chest and one on the back between the shoulder blades. Turn on AED and follow prompts.\n                Return to chest compressions and keep going until the child responds or starts breathing normally, or professional help arrives and takes over.\n            </p>\n\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-cpr-over-oneyear/first-aid-cpr-over-oneyear.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], FirstAidCprOverOneyearPage);
    return FirstAidCprOverOneyearPage;
}());

//# sourceMappingURL=first-aid-cpr-over-oneyear.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstAidFirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the FirstAidFirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstAidFirstPage = /** @class */ (function () {
    function FirstAidFirstPage(navCtrl, navParams, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.iconNameI = "ios-arrow-down";
        this.iconNameG = "ios-arrow-down";
        this.iconNameM = "ios-arrow-down";
        this.iconNameB = "ios-arrow-down";
        this.showInspectBitesDetails = false;
        this.showGrazesDetails = false;
        this.showManagingBleedingDetails = false;
        this.showBumpsBruiesDetails = false;
        this.inspectClicks = 0;
        this.grazesClicks = 0;
        this.managingBleClicks = 0;
        this.bumpsClicks = 0;
    }
    FirstAidFirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstAidFirstPage');
        this.apiProvider.trackPage("First Aid first-aid Screen")
            .then(function (res) {
        }, function (err) {
        });
    };
    FirstAidFirstPage.prototype.inspectBites = function () {
        this.inspectClicks += 1;
        if (this.inspectClicks != 1) {
            this.inspectClicks = 0;
        }
        ;
        if (this.inspectClicks == 1) {
            this.showInspectBitesDetails = true;
            this.iconNameI = "ios-arrow-up";
        }
        else {
            this.showInspectBitesDetails = false;
            this.iconNameI = "ios-arrow-down";
        }
    };
    FirstAidFirstPage.prototype.grazesCuts = function () {
        this.grazesClicks += 1;
        if (this.grazesClicks != 1) {
            this.grazesClicks = 0;
        }
        ;
        if (this.grazesClicks == 1) {
            this.showGrazesDetails = true;
            this.iconNameG = "ios-arrow-up";
        }
        else {
            this.showGrazesDetails = false;
            this.iconNameG = "ios-arrow-down";
        }
    };
    FirstAidFirstPage.prototype.managingBleeding = function () {
        this.managingBleClicks += 1;
        if (this.managingBleClicks != 1) {
            this.managingBleClicks = 0;
        }
        ;
        if (this.managingBleClicks == 1) {
            this.showManagingBleedingDetails = true;
            this.iconNameM = "ios-arrow-up";
        }
        else {
            this.showManagingBleedingDetails = false;
            this.iconNameM = "ios-arrow-down";
        }
    };
    FirstAidFirstPage.prototype.bumpsBruies = function () {
        this.bumpsClicks += 1;
        if (this.bumpsClicks != 1) {
            this.bumpsClicks = 0;
        }
        ;
        if (this.bumpsClicks == 1) {
            this.showBumpsBruiesDetails = true;
            this.iconNameB = "ios-arrow-up";
        }
        else {
            this.showBumpsBruiesDetails = false;
            this.iconNameB = "ios-arrow-down";
        }
    };
    FirstAidFirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-aid-first',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-first/first-aid-first.html"*/'<!--\n  Generated template for the FirstAidFirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">First Aid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ion-list>\n    <ion-card>\n      <ion-card-header>\n        <ion-item text-wrap style="background-color: rgb(59,129,117)" (click)="inspectBites()">\n          <ion-card-title> Inspect Bites</ion-card-title>\n          <ion-icon item-right color="primary"  item-right name="{{iconNameI}}"></ion-icon>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content *ngIf="showInspectBitesDetails">\n       <br>\n        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n          Check and clean every day.\n          Wash the bite with cool water.\n        </p>\n        <br>\n        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n          Keep your child’s nails short and clean.\n        </p>\n        <br>\n        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n          Do things to stop the itching like soaking in a cool bath, or putting calamine lotion\n          or aloe vera on the bites.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n      <ion-card-header>\n        <ion-item text-wrap style="background-color: rgb(59,129,117)" (click)="grazesCuts()">\n          <ion-card-title>Grazes, Cuts and Wounds</ion-card-title>\n          <ion-icon item-right color="primary"  item-right name="{{iconNameG}}"></ion-icon>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content *ngIf="showGrazesDetails">\n        <br>\n        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n          What to do:\n        </p>\n        <ul style="list-style-type:disc;">\n        <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n          Clean and check the area every day.\n        </li>\n        <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n          Wash with warm water.\n        </li>\n        <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n          Cover with a plaster or bandage.\n        </li>\n        <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n          Try to use things that won’t\n          stick to the cut, scratch or graze.\n          Go to the doctor if it is a deep\n          cut or it won’t stop bleeding.\n        </li>\n          <br>\n          <label style="font-size: 15px;">What to do if it gets worse. See your Doctor if:</label>\n          <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n            The area around the cut, scratch or graze gets red, swollen or painful.\n          </li>\n          <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n            There is pus.\n          </li>\n          <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n            There are red lines on the skin spread out from the infected area.\n          </li>\n          <li style="font-size: 15px;text-align: justify; text-justify: inter-word;">\n            Your child feels unwell or has a fever.\n          </li>\n        </ul>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-item text-wrap style="background-color: rgb(59,129,117)" (click)="managingBleeding()">\n          <ion-card-title> Managing Bleeding</ion-card-title>\n          <ion-icon item-right color="primary"  item-right name="{{iconNameM}}"></ion-icon>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content *ngIf="showManagingBleedingDetails">\n        <br>\n        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n          Apply firm pressure over the wound until the bleeding stops. See your Doctor if the bleeding does not stop. If it is dirty, clean under running water. Dry with sterile gauze and cover with a sterile bandage.\n        </p>\n\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n      <ion-card-header>\n        <ion-item text-wrap style="background-color: rgb(59,129,117)" (click)="bumpsBruies()">\n          <ion-card-title> Bumps and Bruises </ion-card-title>\n          <ion-icon item-right color="primary"  item-right name="{{iconNameB}}"></ion-icon>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content *ngIf="showBumpsBruiesDetails">\n        <br>\n        <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n          An ice pack will help to reduce pain.\n          Apply for short periods (less than 10 minutes at a time). Elevate the injury, if possible. Rest.\n        </p>\n\n      </ion-card-content>\n    </ion-card>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/first-aid-first/first-aid-first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], FirstAidFirstPage);
    return FirstAidFirstPage;
}());

//# sourceMappingURL=first-aid-first.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_feedback__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(15);
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
 * Generated class for the NotificationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationDetailsPage = /** @class */ (function () {
    function NotificationDetailsPage(navCtrl, navParams, ga, apiProvider, globalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.globalProvider = globalProvider;
        this.active = true;
        this.message = navParams.get("msg").body;
        this.url = navParams.get("msg").url;
        this.nid = navParams.get("msg").nid;
        this.urlActive = window.localStorage.getItem("urlActive");
        if (this.urlActive == 'true') {
            this.active = false;
        }
        else {
            this.active = true;
        }
    }
    NotificationDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationDetailsPage');
        this.ga.trackView("Notification Details Screen");
        this.apiProvider.updateNotifications(this.nid)
            .then(function (res) {
            //alert("updated notifications" +JSON.stringify(res));
            // for (let i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
            //     if(JSON.parse(JSON.stringify(res))[i].field_read[0].value == false){
            //         window.localStorage.setItem("unreadNotifications",'yes');
            //     }else{
            //         window.localStorage.setItem("unreadNotifications",'no');
            //
            //     }
            // }
        }, function (err) {
            //this.loading.dismiss();
            //this.showError(err);
            //this.navCtrl.push(ChildRegistrationPage);
        });
    };
    NotificationDetailsPage.prototype.view = function (url) {
        if (url != null && url == 'feedback') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feedback_feedback__["a" /* FeedbackPage */]);
        }
        else {
            window.open(url, '_blank');
        }
    };
    NotificationDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-details',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/notification-details/notification-details.html"*/'<!--\n  Generated template for the NotificationDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title>Notifications</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n    <ion-card id="InformationSheet" class="ion-card" transparent="true">\n        <ion-card-content>\n            <p style="font-size: 15px; color:black" align="center">{{this.message}}</p>\n            <button  [hidden]="active" ion-item no-lines (click)="view(this.url)">\n                <div style="font-size: 15px; color:black">Click here:</div>\n            </button>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/notification-details/notification-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]])
    ], NotificationDetailsPage);
    return NotificationDetailsPage;
}());

//# sourceMappingURL=notification-details.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resources_resources__ = __webpack_require__(23);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, alertCtrl, globalProvider, formBuilder, navParams, loadingCtrl, menuCtrl, apiProvider, imagePicker, base64, platform, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.globalProvider = globalProvider;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.apiProvider = apiProvider;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.platform = platform;
        this.ga = ga;
        this.buttonColor1 = 'tabColor';
        this.buttonColor2 = 'light';
        this.buttonColor3 = 'light';
        this.buttonColor4 = 'light';
        this.buttonColor5 = 'light';
        this.parentSettingsHide = false;
        this.childSettingsHide = true;
        this.childrenHide = true;
        this.photoSelected = false;
        this.networkConnected = true;
        this.parentRelationship = '';
        this.parentGender = '';
        this.parentAge = '';
        this.parentRegen = '';
        this.hideChildUpdate = false;
        this.childrenList = [];
        this.relationship = ["Mother", "Father", "Grandmother", "Grandfather", "Uncle", "Aunt", "Friend", "Whānau"];
        this.ethnicitys = ["European", "Māori", "Asian", "Pacific", "Chinese", "Indian", "Other"];
        this.parentGenders = ["Male", "Female"];
        this.parentAges = ["15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-59", "Over 60"];
        this.parentRegens = ["Auckland", "Northland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Wanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"];
        this.weeksAtBirth = ["Full-term(more than 37 weeks)", "Pre-term(less than 37 weeks)"];
        this.sex = ["Male", "Female"];
        this.household = ["Yes", "No"];
        this.parentUpdateForm = this.formBuilder.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(25)]),
            lastName: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(25)]),
            // email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
            //     Validators.minLength(2), Validators.maxLength(25)]),
            phone: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].pattern('^([()\\- x+]*\\d[()\\- x+]*){8,16}$')]),
            postCode: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].pattern('^[0-9]{3,20}$')]),
            relationship: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            ethnicity: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            gender: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            age: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            region: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
        });
        this.childUpdateForm = this.formBuilder.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(25)]),
            dateOfBirth: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            weekAtBirth: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            sex: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            childLive: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required)
        });
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
        if (window.localStorage.getItem("primaryUser") != "true") {
            this.hideChildUpdate = true;
        }
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ga.trackView("Settings Screen");
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            /////// track page //////
            this.apiProvider.trackPage("Settings Screen")
                .then(function (res) {
            }, function (err) {
            });
            this.apiProvider.getNotifications()
                .then(function (res) {
                if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                    _this.globalProvider.newNotificitations = true;
                }
                else {
                    _this.globalProvider.newNotificitations = false;
                }
            }, function (err) {
                //this.loading.dismiss();
                _this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            setTimeout(function () {
                _this.apiProvider.getChildrenList()
                    .then(function (res) {
                    console.log("memory list" + JSON.stringify(res));
                    for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                        _this.childrenList.push({
                            first_name: JSON.parse(JSON.stringify(res))[i].title,
                            dateOfBirth: JSON.parse(JSON.stringify(res))[i].field_date_of_birth,
                            term: JSON.parse(JSON.stringify(res))[i].field_term,
                            profilePhoto: JSON.parse(JSON.stringify(res))[i].field_upload_image,
                            household: JSON.parse(JSON.stringify(res))[i].field_same_household,
                            nid: JSON.parse(JSON.stringify(res))[i].nid,
                            sex: JSON.parse(JSON.stringify(res))[i].field_sex
                        });
                    }
                    _this.childNid = _this.childrenList[0].nid;
                    _this.childDateOfBirth = _this.childrenList[0].dateOfBirth;
                    //window.localStorage.setItem("childrenList", JSON.stringify(this.childrenList));
                    _this.loading.dismiss();
                }, function (err) {
                    _this.loading.dismiss();
                    //this.showError(err);
                    //this.navCtrl.push(ChildRegistrationPage);
                });
            }, 1000);
            //var storedNames = JSON.parse(localStorage.getItem("memoryTest"));
            //alert("memory test =======" + JSON.stringify(storedNames));
            console.log('ionViewDidLoad SettingsPage');
            if (window.localStorage.getItem("parentFirstName") != null && window.localStorage.getItem("parentLastName") != null && window.localStorage.getItem("parentEmail") != null && window.localStorage.getItem("parentMobileNumber") != null && window.localStorage.getItem("parentPostCode") != null) {
                this.parentFirstName = window.localStorage.getItem("parentFirstName");
                this.parentLastName = window.localStorage.getItem("parentLastName");
                this.parentEmail = window.localStorage.getItem("parentEmail");
                this.parentMobileNumber = window.localStorage.getItem("parentMobileNumber");
                this.parentPostCode = window.localStorage.getItem("parentPostCode");
            }
            if (window.localStorage.getItem("parentPhoto") != null) {
                this.imgPreview = window.localStorage.getItem("parentPhoto");
            }
            else {
                this.imgPreview = "assets/imgs/parent.png";
            }
            console.log("ethinicity=====" + window.localStorage.getItem("parentEthnicity"));
            this.parentRelationship = window.localStorage.getItem("parentRelationship");
            for (var y = 0; y < window.localStorage.getItem("parentEthnicity").length; y++) {
                this.parentEthnicity = window.localStorage.getItem("parentEthnicity");
            }
            // this.parentEthnicity = window.localStorage.getItem("parentEthnicity");
            this.parentGender = window.localStorage.getItem("parentGender");
            this.parentAge = window.localStorage.getItem("parentAge");
            this.parentRegen = window.localStorage.getItem("parentRegion");
        }
    };
    SettingsPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    SettingsPage.prototype.getPhoto = function (val) {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                //this.imgPreview = 'assets/imgs/parent.png';
                console.log("url======" + results[i]);
                _this.imgPreview = results[i];
                if (_this.platform.is('android')) {
                    window.resolveLocalFileSystemURL(results[i], function (fileEntry) {
                        fileEntry.file(function (resFile) {
                            var reader = new FileReader();
                            reader.onloadend = function (evt) {
                                _this.imageData = evt.target.result;
                                //alert(evt.target.result + "======binary value");
                                _this.photoSelected = true;
                                if (val === "parent") {
                                    console.log("parent------------");
                                    //window.localStorage.setItem("parentPhoto", this.imgPreview);
                                }
                            };
                            reader.readAsArrayBuffer(resFile);
                        });
                    });
                }
                else {
                    /////////////*******************/////////
                    window.resolveLocalFileSystemURL('file://' + results, function (fileEntry) {
                        // alert('Type: ' + (typeof fileEntry));
                        fileEntry.file(function (file) {
                            // alert('File: ' + (typeof file) + ', ' + JSON.stringify(file));
                            var fileReader = new FileReader();
                            fileReader.onloadend = function (result) {
                                // alert('File Reader Result: ' + JSON.stringify(result));
                                _this.imageData = result.target.result;
                                _this.photoSelected = true;
                                if (val === "parent") {
                                    console.log("parent------------");
                                    //window.localStorage.setItem("parentPhoto", this.imgPreview);
                                }
                                //alert(evt.target.result + "======binary value");
                            };
                            fileReader.onerror = function (error) {
                                //reject(error);
                            };
                            fileReader.readAsArrayBuffer(file);
                        }, function (error) {
                            // alert('File Entry Error: ' + JSON.stringify(error));
                        });
                    }, function (error) {
                        //   alert('Error resolving file: ' + JSON.stringify(error));
                    });
                    ////////////********************///////////
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    SettingsPage.prototype.relationshipChange = function (value) {
        this.globalProvider.parentRelationshipToChild = value;
    };
    SettingsPage.prototype.ethnicityChange = function (value) {
        this.globalProvider.parentEthnicity = this.parentEthnicity;
    };
    SettingsPage.prototype.genderChange = function (gender) {
        this.globalProvider.parentGender = gender;
    };
    SettingsPage.prototype.ageChange = function (age) {
        this.globalProvider.parentAge = age;
    };
    SettingsPage.prototype.regenChange = function (regen) {
        this.globalProvider.parentRegion = regen;
    };
    SettingsPage.prototype.dateChange = function (date) {
        this.childDateOfBirth = date;
    };
    SettingsPage.prototype.weekChange = function (term) {
        this.childWeeksAtBirth = term;
    };
    SettingsPage.prototype.sexChange = function (sex) {
        this.childSex = sex;
    };
    SettingsPage.prototype.householdChange = function (household) {
        this.childHousehold = household;
    };
    SettingsPage.prototype.parentUpdate = function () {
        var _this = this;
        this.globalProvider.parentFirstName = this.parentUpdateForm.value.firstName;
        this.globalProvider.parentLastName = this.parentUpdateForm.value.lastName;
        this.globalProvider.parentEmail = this.parentUpdateForm.value.email;
        this.globalProvider.parentMobileNumber = this.parentUpdateForm.value.phone;
        if (this.globalProvider.parentRelationshipToChild == undefined) {
            this.globalProvider.parentRelationshipToChild = window.localStorage.getItem("parentRelationship");
        }
        if (this.globalProvider.parentEthnicity == undefined) {
            this.globalProvider.parentEthnicity = window.localStorage.getItem("parentEthnicity");
        }
        if (this.globalProvider.parentGender == undefined) {
            this.globalProvider.parentGender = window.localStorage.getItem("parentGender");
        }
        if (this.globalProvider.parentAge == undefined) {
            this.globalProvider.parentAge = window.localStorage.getItem("parentAge");
        }
        if (this.globalProvider.parentRegion == undefined) {
            this.globalProvider.parentRegion = window.localStorage.getItem("parentRegion");
        }
        this.globalProvider.parentPostcode = this.parentUpdateForm.value.postCode;
        if (this.photoSelected) {
            this.finalProfilePic = this.imageData;
        }
        else {
            this.finalProfilePic = this.imgPreview;
        }
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            if (this.photoSelected) {
                //// parent profile picture upload ///////
                setTimeout(function () {
                    _this.apiProvider.updateParentPhoto(_this.imageData)
                        .then(function (res) {
                        console.log("parent photo uploaded doneeee=====");
                        window.localStorage.setItem("parentPhoto", _this.imgPreview);
                        ///// parent update without photo /////////
                        setTimeout(function () {
                            _this.apiProvider.updateParent()
                                .then(function (res) {
                                //alert("fdfdfdfdfdfdfdfdf");
                                _this.loading.dismiss();
                            }, function (err) {
                                console.log(JSON.stringify(err));
                                //alert("ttttttttt");
                                //alert(JSON.stringify(err));
                                _this.loading.dismiss();
                                _this.showAlert(JSON.stringify(err));
                            });
                        }, 1000);
                        _this.loading.dismiss();
                    }, function (err) {
                        //alert(JSON.stringify(err) + "image upload error");
                        console.log("111111111111");
                        _this.showAlert(JSON.stringify(err));
                    });
                }, 1000);
            }
            else {
                ///// parent update without photo /////////
                setTimeout(function () {
                    _this.apiProvider.updateParent()
                        .then(function (res) {
                        //alert("fdfdfdfdfdfdfdfdf");
                        _this.loading.dismiss();
                    }, function (err) {
                        console.log(JSON.stringify(err));
                        //alert("ttttttttt");
                        //alert(JSON.stringify(err));
                        _this.loading.dismiss();
                        _this.showAlert(JSON.stringify(err));
                        //this.navCtrl.push(ChildRegistrationPage);
                    });
                }, 1000);
            }
        }
    };
    SettingsPage.prototype.parentClicked = function () {
        if (window.localStorage.getItem("parentPhoto") != null) {
            this.imgPreview = window.localStorage.getItem("parentPhoto");
        }
        else {
            this.imgPreview = 'assets/imgs/parent.png';
        }
        this.parentSettingsHide = false;
        this.childSettingsHide = true;
        this.buttonColor1 = 'tabColor';
        this.buttonColor2 = 'light';
        this.buttonColor3 = 'light';
        this.buttonColor4 = 'light';
        this.buttonColor5 = 'light';
        this.childrenHide = true;
    };
    SettingsPage.prototype.childrenClicked = function () {
        this.childrenHide = false;
        console.log("children date" + this.childrenList[0].dateOfBirth);
        this.childFirstName = this.childrenList[0].first_name;
        this.childDateOfBirth = this.childrenList[0].dateOfBirth;
        this.childWeeksAtBirth = this.childrenList[0].term;
        this.childSex = this.childrenList[0].sex;
        if (this.childrenList[0].household == "True") {
            this.childHousehold = "Yes";
        }
        else {
            this.childHousehold = "No";
        }
        this.parentSettingsHide = true;
        this.childSettingsHide = false;
        this.buttonColor1 = 'light';
        this.buttonColor2 = 'tabColor';
        this.buttonColor3 = 'tabColor';
        this.buttonColor4 = 'light';
        this.buttonColor5 = 'light';
        /////////// child profile photo ///////////////
        // if (this.childrenList[0].profilePhoto == "") {
        //     this.imgPreview = "assets/imgs/child.png";
        //     this.childrenList[0].profilePhoto = "assets/imgs/child.png";
        // } else {
        //     this.imgPreview = this.childrenList[0].profilePhoto;
        // }
        if (this.childrenList.length == 2) {
            if (this.childrenList[1].profilePhoto == "") {
                this.imgPreview = "assets/imgs/child-1.png";
                this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                this.childrenList[1].profilePhoto = "assets/imgs/child-1.png";
            }
            else {
                this.imgPreview = this.childrenList[1].profilePhoto;
            }
        }
        if (this.childrenList.length == 3) {
            if (this.childrenList[2].profilePhoto == "") {
                this.imgPreview = "assets/imgs/child-2.png";
                this.childrenList[0].profilePhoto = "assets/imgs/child.png";
                this.childrenList[1].profilePhoto = "assets/imgs/child-1.png";
                this.childrenList[2].profilePhoto = "assets/imgs/child-2.png";
            }
            else {
                this.imgPreview = this.childrenList[2].profilePhoto;
            }
        }
        if (this.childrenList[0].profilePhoto == "") {
            this.imgPreview = "assets/imgs/child.png";
            this.childrenList[0].profilePhoto = "assets/imgs/child.png";
        }
        else {
            this.imgPreview = this.childrenList[0].profilePhoto;
        }
        // document.getElementById("btn-" + 0).style.background = '#3B8175 ';
        // document.getElementById("btn-" + 0).style.color = 'white ';
        // document.getElementById("btn-" + 1).style.background = 'light ';
        // document.getElementById("btn-" + 1).style.color = 'black ';
        // document.getElementById("btn-" + 2).style.background = 'light ';
        // document.getElementById("btn-" + 2).style.color = 'black ';
    };
    SettingsPage.prototype.child1 = function (val, id) {
        document.getElementById("btn-" + id).style.background = '#3B8175 ';
        document.getElementById("btn-" + id).style.color = 'white ';
        if (id == 0) {
            this.childDateOfBirth = this.childrenList[0].dateOfBirth;
            console.log("button id=====" + id);
            console.log("child count =====" + this.childrenList.length);
            document.getElementById("btn-" + id).style.background = '#3B8175 ';
            document.getElementById("btn-" + id).style.color = 'white ';
            if (this.childrenList.length == 2) {
                document.getElementById("btn-0").style.background = '#3B8175 ';
                document.getElementById("btn-0").style.color = 'white ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black ';
            }
            else if (this.childrenList.length == 3) {
                document.getElementById("btn-0").style.background = '#3B8175 ';
                document.getElementById("btn-0").style.color = 'white ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black ';
                document.getElementById("btn-2").style.background = '#ffffff ';
                document.getElementById("btn-2").style.color = 'black ';
            }
        }
        else if (id == 1) {
            console.log("button id=====" + id);
            console.log("child count =====" + this.childrenList.length);
            document.getElementById("btn-" + id).style.background = '#3B8175 ';
            document.getElementById("btn-" + id).style.color = 'white ';
            if (this.childrenList.length == 2) {
                document.getElementById("btn-1").style.background = '#3B8175 ';
                document.getElementById("btn-1").style.color = 'white ';
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
            }
            else if (this.childrenList.length == 3) {
                document.getElementById("btn-1").style.background = '#3B8175 ';
                document.getElementById("btn-1").style.color = 'white ';
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
                document.getElementById("btn-2").style.background = '#ffffff ';
                document.getElementById("btn-2").style.color = 'black ';
            }
        }
        else if (id == 2) {
            console.log("button id=====" + id);
            console.log("child count =====" + this.childrenList.length);
            document.getElementById("btn-" + id).style.background = '#3B8175 ';
            document.getElementById("btn-" + id).style.color = 'white ';
            if (this.childrenList.length == 2) {
                document.getElementById("btn-2").style.background = '#3B8175 ';
                document.getElementById("btn-2").style.color = 'white ';
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black';
            }
            else if (this.childrenList.length == 3) {
                document.getElementById("btn-0").style.background = '#ffffff ';
                document.getElementById("btn-0").style.color = 'black ';
                document.getElementById("btn-2").style.background = '#3B8175 ';
                document.getElementById("btn-2").style.color = 'white ';
                document.getElementById("btn-1").style.background = '#ffffff ';
                document.getElementById("btn-1").style.color = 'black ';
            }
        }
        if (val.profilePhoto == "") {
            this.imgPreview = 'assets/imgs/child.png';
        }
        else {
            this.imgPreview = val.profilePhoto;
        }
        this.childFirstName = val.first_name;
        this.childNid = val.nid;
        this.childDateOfBirth = val.dateOfBirth;
        this.childWeeksAtBirth = val.term;
        this.childSex = val.sex;
        if (val.household == "True") {
            this.childHousehold = "Yes";
        }
        else if (val.household == "False") {
            this.childHousehold = "No";
        }
        console.log("house hold========" + this.childHousehold);
    };
    SettingsPage.prototype.updateChild = function () {
        var _this = this;
        this.childFirstName = this.childUpdateForm.value.firstName;
        //this.childDateOfBirth = this.childUpdateForm.value.dateOfBirth;
        if (this.childHousehold === "Yes") {
            this.households = true;
        }
        else if (this.childHousehold === "No") {
            this.households = false;
        }
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            if (this.photoSelected) {
                //// child profile picture update ///////
                setTimeout(function () {
                    _this.apiProvider.updateChildPhoto(_this.imageData)
                        .then(function (res) {
                        _this.loading.dismiss();
                        ///// child update /////////
                        setTimeout(function () {
                            _this.apiProvider.updateChild(_this.childFirstName, _this.childDateOfBirth, _this.childSex, _this.households, _this.childWeeksAtBirth, _this.childNid)
                                .then(function (res) {
                                _this.loading.dismiss();
                                //window.localStorage.setItem("registerDone", "done");
                                console.log("update child done" + JSON.stringify(res));
                            }, function (err) {
                                //alert(JSON.stringify(err));
                                _this.loading.dismiss();
                                _this.showAlert(JSON.stringify(err));
                                console.log("update child error" + JSON.stringify(err));
                                //this.navCtrl.push(ChildRegistrationPage);
                            });
                        }, 1000);
                    }, function (err) {
                        //alert(JSON.stringify(err) + "image upload error");
                        _this.showAlert(JSON.stringify(err));
                    });
                }, 1000);
            }
            else {
                ///// child update /////////
                setTimeout(function () {
                    _this.apiProvider.updateChild(_this.childFirstName, _this.childDateOfBirth, _this.childSex, _this.households, _this.childWeeksAtBirth, _this.childNid)
                        .then(function (res) {
                        _this.loading.dismiss();
                        //window.localStorage.setItem("registerDone", "done");
                        console.log("update child done" + JSON.stringify(res));
                    }, function (err) {
                        //alert(JSON.stringify(err));
                        _this.loading.dismiss();
                        _this.showAlert(JSON.stringify(err));
                        console.log("update child error" + JSON.stringify(err));
                        //this.navCtrl.push(ChildRegistrationPage);
                    });
                }, 1000);
            }
        }
    };
    SettingsPage.prototype.deleteChild = function () {
    };
    SettingsPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SettingsPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error.message,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    SettingsPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__resources_resources__["a" /* ResourcesPage */]);
    };
    SettingsPage.prototype.clickedSettings = function () {
        this.navCtrl.push(SettingsPage_1);
    };
    SettingsPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    SettingsPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="true">\n        <ion-buttons left>\n            <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;">\n                <img src="assets/imgs/side-menu.png"/>\n            </button>\n        </ion-buttons>\n        <ion-title align="center">\n            Settings\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n    <div align="center">\n        <ion-grid class="button-group" no-padding="true">\n            <ion-row>\n                <ion-col>\n                    <button ion-button block [color]="buttonColor1" color="light" (click)="parentClicked()">Parent /\n                        Whānau\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button block [color]="buttonColor2" color="light" (click)="childrenClicked()">Children\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div align="center" [hidden]="childrenHide">\n        <ion-grid class="button-group" no-padding="true">\n            <ion-row>\n                <ion-col *ngFor="let ch of childrenList ; let i = index">\n                    <button ion-button block id="btn-{{i}}" color="light" (click)="child1(ch,i)">\n                        {{ch.first_name}}\n                    </button>\n\n                </ion-col>\n                <!--<ion-col>-->\n                <!--<button ion-button block [color]="buttonColor4" color="light" (click)="child2()">-->\n                <!--{{this.childNames}}-->\n                <!--</button>-->\n                <!--</ion-col>-->\n                <!--<ion-col>-->\n                <!--<button ion-button block [color]="buttonColor5" color="light" (click)="child3()">-->\n                <!--{{this.childNames}}-->\n                <!--</button>-->\n                <!--</ion-col>-->\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <!-- parent settings -->\n\n\n    <div [hidden]="parentSettingsHide">\n        <div align="center">\n            <img alt="logo" height="70" width="70" style="border-radius: 50%; -webkit-border-radius: 50%;" class="logo"\n                 (click)="getPhoto(\'parent\')" src="{{imgPreview}}">\n        </div>\n        <div align="center">\n            <h1 class="title" style="font-size: small">Tap to Upload Photo</h1>\n        </div>\n\n        <form class="form" [formGroup]="parentUpdateForm" (submit)="parentUpdate()">\n\n            <ion-card id="" class="ion-card" [hidden]="" transparent="true">\n                <ion-card-content>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Full Name</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-input type="text" style="font-size: 15px" value="{{parentFirstName}}"\n                                   class="dropQuestions" style="width:50%" formControlName="firstName"\n                                   class="form-controll">\n                        </ion-input>\n\n                        <ion-input type="text" style="font-size: 15px" value="{{parentLastName}}"\n                                   class="dropQuestions" style="width:50%" formControlName="lastName"\n                                   class="form-controll">\n\n                        </ion-input>\n\n                    </ion-row>\n                    <ion-row>\n                        <div class="validation-errors">\n                            <ng-container *ngFor="let validation of globalProvider.validation_messages.firstName">\n                                <div class="error-message"\n                                     *ngIf="parentUpdateForm.get(\'firstName\').hasError(validation.type) && (parentUpdateForm.get(\'firstName\').dirty || parentUpdateForm.get(\'firstName\').touched)">\n                                    {{ validation.message }}\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class="validation-errors">\n                            <ng-container *ngFor="let validation of globalProvider.validation_messages.lastName">\n                                <div class="error-message"\n                                     *ngIf="parentUpdateForm.get(\'lastName\').hasError(validation.type) && (parentUpdateForm.get(\'lastName\').dirty || parentUpdateForm.get(\'lastName\').touched)">\n                                    {{ validation.message }}\n                                </div>\n                            </ng-container>\n                        </div>\n                    </ion-row>\n\n                    <!--<ion-row>-->\n                    <!--<ion-label stacked style="font-size: 15px">Email</ion-label>-->\n                    <!--<div class="tooltip"><img src="assets/imgs/info.png"-->\n                    <!--style="width: 20px;height: 20px; margin-top: 15px;"/>-->\n                    <!--<span class="tooltiptext tooltip-left" align="center">Email required so we can send you the study survey.</span>-->\n                    <!--</div>-->\n                    <!--</ion-row>-->\n\n                    <!--<ion-row>-->\n                    <!--<ion-input type="email" style="font-size: 15px" value="{{parentEmail}}"-->\n                    <!--class="dropQuestions" style="width:100%" formControlName="email" class="form-controll"></ion-input>-->\n                    <!--</ion-row>-->\n\n                    <!--<ion-row>-->\n                    <!--<div class="validation-errors">-->\n                    <!--<ng-container *ngFor="let validation of globalProvider.validation_messages.email">-->\n                    <!--<div class="error-message" *ngIf="parentUpdateForm.get(\'email\').hasError(validation.type) && (parentUpdateForm.get(\'email\').dirty || parentUpdateForm.get(\'email\').touched)">-->\n                    <!--{{ validation.message }}-->\n                    <!--</div>-->\n                    <!--</ng-container>-->\n                    <!--</div>-->\n                    <!--</ion-row>-->\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Mobile Number</ion-label>\n                        <div class="tooltip"><img src="assets/imgs/info.png"\n                                                  style="width: 20px;height: 20px; margin-top: 15px;"/>\n                            <span class="tooltiptext tooltip-left" align="center">Phone number required so we can contact you about the study if required.</span>\n                        </div>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-input type="number" style="font-size: 15px" value="{{parentMobileNumber}}"\n                                   class="dropQuestions" style="width:100%" formControlName="phone"\n                                   class="form-controll"></ion-input>\n                    </ion-row>\n\n                    <ion-row>\n                        <div class="validation-errors">\n                            <ng-container *ngFor="let validation of globalProvider.validation_messages.phone">\n                                <div class="error-message"\n                                     *ngIf="parentUpdateForm.get(\'phone\').hasError(validation.type) && (parentUpdateForm.get(\'phone\').dirty || parentUpdateForm.get(\'phone\').touched)">\n                                    {{ validation.message }}\n                                </div>\n                            </ng-container>\n                        </div>\n                    </ion-row>\n\n                    <!--<ion-row>-->\n                    <!--<ion-label stacked style="font-size: 15px">Relationship to Child</ion-label>-->\n                    <!--&lt;!&ndash;<select class="dropQuestions" style="width:100%" formControlName="relationship"-->\n                    <!--value="{{parentMobileNumber}}"> &ndash;&gt;-->\n                    <!--<select class="dropQuestions" style="width:100%">-->\n                    <!--<option value="Mother" selected>Mother</option>-->\n                    <!--<option value="Father">Father</option>-->\n                    <!--<option value="Grandmother">Grandmother</option>-->\n                    <!--<option value="Grandfather">Grandfather</option>-->\n                    <!--<option value="Uncle">Uncle</option>-->\n                    <!--<option value="Aunt">Aunt</option>-->\n                    <!--<option value="Friend">Friend</option>-->\n                    <!--<option value="Whānau">Whānau</option>-->\n                    <!--</select>-->\n                    <!--</ion-row>-->\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Relationship to Child</ion-label>\n                        <!--<select class="dropQuestions" style="width:100%" formControlName="relationship"\n                                value="{{parentMobileNumber}}"> -->\n                        <select class="dropQuestions" [(ngModel)]="parentRelationship"\n                                [ngModelOptions]="{standalone: true}" (change)="relationshipChange($event.target.value)"\n                                style="width:100%">\n                            <option *ngFor="let relation of relationship" [value]="relation">\n                                {{relation}}\n                            </option>\n                        </select>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Ethnicity(Select all that apply)</ion-label>\n                        <br/>\n                        <ion-row> <ion-label> {{parentEthnicity}}</ion-label></ion-row>\n                        <select class="dropQuestions" selected [(ngModel)]="parentEthnicity" multiple="true"\n                                [ngModelOptions]="{standalone: true}" (change)="ethnicityChange($event.target.value)"\n                                style="width:100%">\n                            <option *ngFor=" let ethnicity of ethnicitys" selected>\n                                {{ethnicity}}\n                            </option>\n                        </select>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Gender</ion-label>\n                        <!--<select class="dropQuestions" style="width:100%" formControlName="gender">-->\n                        <select class="dropQuestions" style="width:100%" [(ngModel)]="parentGender"\n                                [ngModelOptions]="{standalone: true}" (change)="genderChange($event.target.value)">\n                            <option *ngFor=" let genders of parentGenders">\n                                {{genders}}\n                            </option>\n                        </select>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Age</ion-label>\n                        <!-- <select class="dropQuestions" style="width:100%" formControlName="age"> -->\n                        <select class="dropQuestions" style="width:100%" [(ngModel)]="parentAge"\n                                [ngModelOptions]="{standalone: true}" (change)="ageChange($event.target.value)">\n                            <option *ngFor=" let age of parentAges">\n                                {{age}}\n                            </option>\n                        </select>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Region</ion-label>\n                        <!--<select class="dropQuestions" style="width:100%" formControlName="region"> -->\n                        <select class="dropQuestions" style="width:100%" [(ngModel)]="parentRegen"\n                                [ngModelOptions]="{standalone: true}" (change)="regenChange($event.target.value)">\n                           <option *ngFor=" let regen of parentRegens">\n                               {{regen}}\n                           </option>\n                        </select>\n                    </ion-row>\n\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Postcode</ion-label>\n                    </ion-row>\n                    <ion-row>\n                        <ion-input type="number" style="font-size: 15px" align="left" class="dropQuestions"\n                                   value="{{parentPostCode}}" style="width:100%" formControlName="postCode"\n                                   class="form-controll"></ion-input>\n                    </ion-row>\n                    <ion-row>\n                        <div class="validation-errors">\n                            <ng-container *ngFor="let validation of globalProvider.validation_messages.postCode">\n                                <div class="error-message"\n                                     *ngIf="parentUpdateForm.get(\'postCode\').hasError(validation.type) && (parentUpdateForm.get(\'postCode\').dirty || parentUpdateForm.get(\'postCode\').touched)">\n                                    {{ validation.message }}\n                                </div>\n                            </ng-container>\n                        </div>\n                    </ion-row>\n\n\n                </ion-card-content>\n            </ion-card>\n\n            <div class="btnBottom">\n                <ion-row align="center">\n                    <ion-col>\n                        <!--<button ion-button block class="btnAccept" type=\'submit\' [disabled]="!parentUpdateForm.valid">\n                            UPDATE\n                        </button>-->\n                        <button ion-button block class="btnAccept" type=\'submit\'>\n                            UPDATE\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n        </form>\n\n    </div>\n\n    <!-- child settings -->\n\n    <div [hidden]=childSettingsHide>\n\n        <div align="center">\n            <img alt="logo" height="70" width="70" style="border-radius: 50%; -webkit-border-radius: 50%;" class="logo"\n                 (click)="getPhoto(\'child\')" src="{{imgPreview}}">\n        </div>\n        <div align="center">\n            <h1 class="title" style="font-size: small">Tap to Upload Photo</h1>\n        </div>\n\n\n        <form class="form" [formGroup]="childUpdateForm" (submit)="updateChild()">\n\n            <ion-card class="ion-card" [hidden]="" transparent="true">\n                <ion-card-content>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">First Name</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-input type="text" style="font-size: 15px" placeholder="Fist Name" [value]="childFirstName"\n                                   class="dropQuestions" style="width:50%" formControlName="firstName"\n                                   class="form-controll"></ion-input>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Date of Birth</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <input type="date" style="font-size: 15px;" placeholder="yyyy-MM-dd"\n                               class="dropQuestions" value="{{ childDateOfBirth | date: \'yyyy-MM-dd\'}}"\n                               style="width:100%" (change)="dateChange($event.target.value)">\n                    </ion-row>\n\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Weeks at birth</ion-label>\n                        <select class="dropQuestions" style="width:100%" [(ngModel)]="childWeeksAtBirth" [ngModelOptions]="{standalone: true}" (change)="weekChange($event.target.value)">\n                            <option *ngFor=" let weeks of weeksAtBirth">\n                                {{weeks}}\n                            </option>\n                        </select>\n                    </ion-row>\n\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px">Sex</ion-label>\n                        <select class="dropQuestions" style="width:100%"  [(ngModel)]="childSex" [ngModelOptions]="{standalone: true}" (change)="sexChange($event.target.value)">\n                            <option *ngFor=" let sex of sex"> {{sex}}</option>\n                        </select>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-label stacked style="font-size: 15px; white-space: normal">Do you and your child live in\n                            the\n                            same household\n                        </ion-label>\n                        <select class="dropQuestions" style="width:100%"  [(ngModel)]="childHousehold" [ngModelOptions]="{standalone: true}" (change)="householdChange($event.target.value)">\n                            <option *ngFor="let house of household"> {{house}}</option>\n                        </select>\n                    </ion-row>\n\n                </ion-card-content>\n            </ion-card>\n\n            <div class="btnBottom">\n                <ion-row align="center">\n                    <!--<ion-col>-->\n                    <!--<button ion-button block class="btnMoreInfo" (click)="deleteChild($event.target)">DELETE-->\n                    <!--</button>-->\n                    <!--</ion-col>-->\n                    <ion-col>\n                        <button ion-button block class="btnAccept" [hidden]="hideChildUpdate" type=\'submit\'>UPDATE\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n        </form>\n\n    </div>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="toolbar-background" style="height: 30px">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n                        <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notifications_notifications__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Base64} from '@ionic-native/base64';












/**
 * Generated class for the MemoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemoriesPage = /** @class */ (function () {
    function MemoriesPage(navCtrl, navParams, imagePicker, alertCtrl, platform, apiProvider, globalProvider, loadingCtrl, file, filePath, camera, ga, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.apiProvider = apiProvider;
        this.globalProvider = globalProvider;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.filePath = filePath;
        this.camera = camera;
        this.ga = ga;
        this.http = http;
        this.memoryTextHide = false;
        this.memoryDescriptionHide = true;
        this.memoryAddPhotoBtnHide = false;
        this.memorySaveBtnHide = true;
        this.memoryCancelBtnHide = true;
        this.photoSelected = false;
        this.imgPreview = 'assets/imgs/default.jpg';
        this.networkConnected = true;
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    MemoriesPage_1 = MemoriesPage;
    MemoriesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad MemoriesPage');
        this.ga.trackView("Add Memories Screen");
        this.apiProvider.trackPage("Add Memories Screen")
            .then(function (res) {
        }, function (err) {
        });
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        this.apiProvider.getNotifications()
            .then(function (res) {
            if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                _this.globalProvider.newNotificitations = true;
            }
            else {
                _this.globalProvider.newNotificitations = false;
            }
        }, function (err) {
            //this.loading.dismiss();
            _this.showError(err);
            //this.navCtrl.push(ChildRegistrationPage);
        });
        //////////////////////////////////////////////////////////////////////////
    };
    MemoriesPage.prototype.getPhoto = function (val) {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        //  alert("get Pic2");
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                //
                //  alert(results[i]);
                _this.imgPreview = results[i];
                _this.memoryTextHide = true;
                _this.memoryDescriptionHide = false;
                _this.memoryAddPhotoBtnHide = true;
                _this.memorySaveBtnHide = false;
                _this.memoryCancelBtnHide = false;
                if (_this.platform.is('android')) {
                    window.resolveLocalFileSystemURL(results[i], function (fileEntry) {
                        fileEntry.file(function (resFile) {
                            var reader = new FileReader();
                            reader.onloadend = function (evt) {
                                _this.imageData = evt.target.result;
                                //alert(evt.target.result + "======binary value");
                                _this.photoSelected = true;
                                //alert("dfdfdfdfd");
                            };
                            reader.readAsArrayBuffer(resFile);
                        });
                    });
                }
                else {
                    ////////////*****************//////////////
                    window.resolveLocalFileSystemURL('file://' + results, function (fileEntry) {
                        // alert('Type: ' + (typeof fileEntry));
                        fileEntry.file(function (file) {
                            // alert('File: ' + (typeof file) + ', ' + JSON.stringify(file));
                            var fileReader = new FileReader();
                            fileReader.onloadend = function (result) {
                                // alert('File Reader Result: ' + JSON.stringify(result));
                                _this.imageData = result.target.result;
                                _this.photoSelected = true;
                                //alert(evt.target.result + "======binary value");
                            };
                            fileReader.onerror = function (error) {
                                //reject(error);
                            };
                            fileReader.readAsArrayBuffer(file);
                        }, function (error) {
                            // alert('File Entry Error: ' + JSON.stringify(error));
                        });
                    }, function (error) {
                        //   alert('Error resolving file: ' + JSON.stringify(error));
                    });
                    /////////////***************////////////////
                }
            }
        });
    };
    MemoriesPage.prototype.descriptionChange = function (value) {
        this.description = value;
    };
    MemoriesPage.prototype.addMemoryClicked = function () {
        this.memoryTextHide = true;
        this.memoryDescriptionHide = false;
        this.memoryAddPhotoBtnHide = true;
        this.memorySaveBtnHide = false;
        this.memoryCancelBtnHide = false;
        this.imgPreview = 'assets/imgs/upload-image.jpg';
    };
    MemoriesPage.prototype.memorySaved = function () {
        var _this = this;
        if (!this.photoSelected && (this.description === null || this.description === undefined)) {
            this.showAlert('Please add memory.');
        }
        else {
            if (this.networkConnected === false) {
                this.showError("Check your internet connection and try again.");
            }
            else {
                this.presentLoading();
                //  alert('now start upload');
                if (this.photoSelected) {
                    //// memory photo upload ///////
                    setTimeout(function () {
                        _this.apiProvider.uploadPhotoOther(_this.imageData)
                            .then(function (res) {
                            _this.loading.dismiss();
                            ///// add memory with photo/////////
                            setTimeout(function () {
                                _this.apiProvider.addMemory(_this.description)
                                    .then(function (res) {
                                    _this.loading.dismiss();
                                    //alert("add memory" + JSON.stringify(res))
                                    window.localStorage.setItem("memoryAdded", true);
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__memories_list_memories_list__["a" /* MemoriesListPage */]);
                                }, function (err) {
                                    //alert(JSON.stringify(err));
                                    //alert("========");
                                    _this.loading.dismiss();
                                    _this.showAlert(JSON.stringify(err));
                                    //this.navCtrl.push(ChildRegistrationPage);
                                });
                            }, 1000);
                        }, function (err) {
                            //alert(JSON.stringify(err) + "image upload error");
                            _this.loading.dismiss();
                            _this.showAlert(JSON.stringify(err));
                        });
                    }, 1000);
                }
                else {
                    ///// add memory without photo/////////
                    setTimeout(function () {
                        _this.apiProvider.addMemory(_this.description)
                            .then(function (res) {
                            _this.loading.dismiss();
                            console.log("add memory" + JSON.stringify(res));
                            window.localStorage.setItem("memoryAdded", true);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__memories_list_memories_list__["a" /* MemoriesListPage */]);
                        }, function (err) {
                            //alert(JSON.stringify(err));
                            //alert("========");
                            _this.loading.dismiss();
                            _this.showAlert(JSON.stringify(err));
                            //this.navCtrl.push(ChildRegistrationPage);
                        });
                    }, 1000);
                }
            }
        }
    };
    MemoriesPage.prototype.memoryCanceled = function () {
        this.memoryTextHide = false;
        this.memoryDescriptionHide = true;
        this.memoryAddPhotoBtnHide = false;
        this.memorySaveBtnHide = true;
        this.memoryCancelBtnHide = true;
        this.imgPreview = 'assets/imgs/default.jpg';
    };
    MemoriesPage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'SHTG',
            message: msg,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    MemoriesPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MemoriesPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    MemoriesPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    MemoriesPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(MemoriesPage_1);
        }
    };
    MemoriesPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__resources_resources__["a" /* ResourcesPage */]);
    };
    MemoriesPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__settings_settings__["a" /* SettingsPage */]);
    };
    MemoriesPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__notifications_notifications__["a" /* NotificationsPage */]);
    };
    MemoriesPage = MemoriesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memories',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/memories/memories.html"*/'<!--\n  Generated template for the MemoriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">\n      Memories\n    </ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding  class="background">\n\n  <ion-card id="" class="ion-card"  transparent="true">\n    <ion-card-content>\n      <p style="font-size: 20px; color:black;text-align: justify; text-justify: inter-word; " align="center" [hidden]="memoryTextHide" >We\'re sure you have lots of happy memories, but you haven\'t uploaded any yet. You can upload and share here.</p>\n      <br>\n      <div align="center">\n        <img alt="logo"   class="logo"  src="{{imgPreview}}" (click)="memoryAddPhotoBtnHide ? getPhoto($event) : \'\' " style="height: 275px" >\n      </div>\n      <br>\n      <div [hidden]="memoryDescriptionHide">\n        <ion-textarea placeholder="Add a description here..." #C (ionChange)="descriptionChange(C.value)" class="dropQuestions" style="width: 100%; height: 150px; border-color: #3B8175"></ion-textarea>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <div  class="btnBottom" [hidden]="memoryAddPhotoBtnHide">\n    <ion-row align="center">\n      <ion-col>\n        <button ion-button block   class="btnAccept" (click)="addMemoryClicked()" >ADD MEMORY</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div  class="btnBottom">\n    <ion-row align="center">\n      <ion-col>\n        <button ion-button block [hidden]="memoryCancelBtnHide" (click)="memoryCanceled()" class="btnMoreInfo"> CANCEL </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block [hidden]="memorySaveBtnHide" class="btnAccept" (click)="memorySaved()" >SAVE</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n            <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/memories/memories.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]])
    ], MemoriesPage);
    return MemoriesPage;
    var MemoriesPage_1;
}());

//# sourceMappingURL=memories.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoriesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memory_details_memory_details__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifications_notifications__ = __webpack_require__(24);
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
 * Generated class for the MemoriesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemoriesListPage = /** @class */ (function () {
    function MemoriesListPage(navCtrl, platform, alertCtrl, navParams, ga, apiProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.ga = ga;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        //public memoryData: any;
        this.memoryList = [];
        this.networkConnected = true;
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
        this.comments = "0";
        this.likes = "0";
        if (window.localStorage.getItem("parentPhoto") == null) {
            this.uploaderImage = "assets/imgs/parent.png";
        }
        else {
            this.uploaderImage = window.localStorage.getItem("parentPhoto");
        }
        this.uploaderName = window.localStorage.getItem("parentFirstName") + " " + window.localStorage.getItem("parentLastName");
        //console.log("memory data" + this.memoryData)
    }
    MemoriesListPage_1 = MemoriesListPage;
    MemoriesListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MemoriesListPage');
        this.ga.trackView("Memory List Screen");
        this.apiProvider.trackPage("Memories List Screen")
            .then(function (res) {
        }, function (err) {
        });
        this.presentLoading();
        setTimeout(function () {
            _this.apiProvider.getMemoryList()
                .then(function (res) {
                //alert("memory list==========="+JSON.stringify(res));
                for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                    _this.memoryList.push({
                        description: JSON.parse(JSON.stringify(res))[i].body,
                        uploaderName: JSON.parse(JSON.stringify(res))[i].field_first_name,
                        uploaderImage: JSON.parse(JSON.stringify(res))[i].user_picture,
                        memoryImage: JSON.parse(JSON.stringify(res))[i].field_upload_image,
                        date: JSON.parse(JSON.stringify(res))[i].created,
                        likes: JSON.parse(JSON.stringify(res))[i].field_like,
                        comments: JSON.parse(JSON.stringify(res))[i].comment_count,
                        nid: JSON.parse(JSON.stringify(res))[i].nid
                    });
                }
                window.localStorage.setItem("memoryTest", JSON.stringify(_this.memoryList));
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                //this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }, 1000);
    };
    MemoriesListPage.prototype.presentLoading = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
            if (!_this.networkConnected) {
                _this.showAlert();
            }
        }, 2000);
    };
    MemoriesListPage.prototype.memoryDetailsView = function (val) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__memory_details_memory_details__["a" /* MemoryDetailsPage */], { memoryDetails: val });
    };
    MemoriesListPage.prototype.addMemory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__memories_memories__["a" /* MemoriesPage */]);
    };
    MemoriesListPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: "Please check your internet connection and try again.",
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    MemoriesListPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    MemoriesListPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(MemoriesListPage_1);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    MemoriesListPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resources_resources__["a" /* ResourcesPage */]);
    };
    MemoriesListPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    MemoriesListPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__notifications_notifications__["a" /* NotificationsPage */]);
    };
    MemoriesListPage = MemoriesListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memories-list',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/memories-list/memories-list.html"*/'<!--\n  Generated template for the MemoriesListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">\n      Memories\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="addMemory()" style="width: 45px; height: 45px;background: transparent !important;" transparent="true">\n        <img src="assets/imgs/plus.png"/>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n      <section id="cd-timeline" class="cd-container">\n        <div ng-repeat="activity in timeline" >\n\n          <div class="cd-timeline-block" *ngFor="let memorys of memoryList">\n            <div class="cd-timeline-picture dark">\n              <img src="{{memorys.uploaderImage == \'\' ? \'assets/imgs/parent.png\' : memorys.uploaderImage}}">\n            </div>\n            <!-- cd-timeline-img -->\n            <div class="cd-timeline-content dark" (click)="memoryDetailsView(memorys)">\n              <ion-row>\n                <ion-col>\n                  <p class="timelineText">{{memorys.description}}</p>\n                </ion-col>\n                <ion-col align="right">\n                  <img src={{memorys.memoryImage}}  style="height: 50px;width: 80px" >\n                </ion-col>\n              </ion-row>\n\n              <p class="marginTop5 cd-author">by {{memorys.uploaderName}} on {{memorys.date}}</p>\n              <div>\n                <ion-row>\n                  <ion-col>\n                    <button ion-button icon-start clear small>\n                      <img src="assets/imgs/heart.png" style="width: 20px; height: 20px">\n                      <div>  {{memorys.likes}} Loves</div>\n                    </button>\n                  </ion-col>\n                  <ion-col>\n                    <button ion-button icon-start clear small>\n                      <img src="assets/imgs/comment.png" style="width: 20px; height: 20px">\n                      <div>   {{memorys.comments}} Comments</div>\n                    </button>\n                  </ion-col>\n\n                </ion-row>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </section>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px">\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/memories-list/memories-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MemoriesListPage);
    return MemoriesListPage;
    var MemoriesListPage_1;
}());

//# sourceMappingURL=memories-list.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasurementsRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_modal_popup_modal__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
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
 * Generated class for the MeasurementsRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeasurementsRecordPage = /** @class */ (function () {
    function MeasurementsRecordPage(navCtrl, navParams, modalCtrl, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ga = ga;
    }
    MeasurementsRecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeasurementsRecordPage');
        this.ga.trackView("Measurements Record Screen");
    };
    MeasurementsRecordPage.prototype.addEntry = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popup_modal_popup_modal__["a" /* PopupModalPage */]);
        myModal.present();
    };
    MeasurementsRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-measurements-record',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/measurements-record/measurements-record.html"*/'<!--\n  Generated template for the MeasurementsRecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="false">\n    <ion-title align="center">\n      Max - Weight Records\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="addEntry()" style="width: 50px; height: 50px" transparent="true">\n        <img src="assets/imgs/plus.png"/>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n  <ion-list>\n   <ion-row>\n    <ion-col>\n        <div class="circle-p">\n          31 Aug\n        </div>\n    </ion-col>\n    <ion-col>\n      <div class="rectangle_p">\n        <ion-row>\n          <ion-col>\n            5Kg\n          </ion-col>\n          <ion-col>\n            Mom\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class="circle-h">\n          31 Aug\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="rectangle_h">\n          <ion-row>\n            <ion-col>\n              5Kg\n            </ion-col>\n            <ion-col>\n              Dr. John\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class="circle-p">\n          31 Aug\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="rectangle_p">\n          <ion-row>\n            <ion-col>\n              5Kg\n            </ion-col>\n            <ion-col>\n              Dad\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class="circle-h">\n          31 Aug\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="rectangle_h">\n          <ion-row>\n            <ion-col>\n              5Kg\n            </ion-col>\n            <ion-col>\n              Dr. John\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/measurements-record/measurements-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], MeasurementsRecordPage);
    return MeasurementsRecordPage;
}());

//# sourceMappingURL=measurements-record.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitedFamilyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_users_invite_users__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(15);
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
 * Generated class for the InvitedFamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitedFamilyPage = /** @class */ (function () {
    function InvitedFamilyPage(navCtrl, globalProvider, apiProvider, platform, loadingCtrl, navParams, alertCtrl, menuCtrl, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.globalProvider = globalProvider;
        this.apiProvider = apiProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.ga = ga;
        this.removeUser = 'remove-circle';
        this.userStatus = 'active';
        this.inviteUserHide = false;
        this.networkConnected = true;
        this.invidedUsersList = [];
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    InvitedFamilyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ga.trackView("Invited Family Screen");
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            /////// track page //////
            this.apiProvider.trackPage("Invited Family Screen")
                .then(function (res) {
            }, function (err) {
            });
            this.apiProvider.getNotifications()
                .then(function (res) {
                if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                    _this.globalProvider.newNotificitations = true;
                }
                else {
                    _this.globalProvider.newNotificitations = false;
                }
            }, function (err) {
                //this.loading.dismiss();
                _this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }
        //////////////////////////////////////////////////////////////////////////
        console.log('ionViewDidLoad InvitedFamilyPage');
        if (window.localStorage.getItem("primaryUser") === "true") {
            this.inviteUserHide = false;
        }
        else {
            this.inviteUserHide = true;
        }
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            setTimeout(function () {
                _this.apiProvider.getSecondaryUsers(window.localStorage.getItem("familyId"))
                    .then(function (res) {
                    console.log("secondary users list" + JSON.stringify(res));
                    for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                        _this.invidedUsersList.push({
                            first_name: JSON.parse(JSON.stringify(res))[i].field_first_name,
                            last_name: JSON.parse(JSON.stringify(res))[i].field_last_name,
                            user_picture: JSON.parse(JSON.stringify(res))[i].user_picture,
                            uid: JSON.parse(JSON.stringify(res))[i].uid
                        });
                    }
                    //window.localStorage.setItem("childrenList", JSON.stringify(this.childrenList));
                    _this.loading.dismiss();
                }, function (err) {
                    _this.loading.dismiss();
                    //this.showError(err);
                    //this.navCtrl.push(ChildRegistrationPage);
                });
            }, 1000);
        }
    };
    InvitedFamilyPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    InvitedFamilyPage.prototype.inviteFamily = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invite_users_invite_users__["a" /* InviteUsersPage */]);
    };
    InvitedFamilyPage.prototype.deleteFamily = function (user) {
        if (this.removeUser == "remove-circle") {
            this.deleteUserPopup(user.uid);
        }
        else if (this.removeUser == "add-circle") {
            this.removeUser = 'remove-circle';
            this.userStatus = 'de-active';
        }
    };
    InvitedFamilyPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    InvitedFamilyPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    InvitedFamilyPage.prototype.deleteUserPopup = function (uid) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'NOTICE',
            message: 'Are you sure you want to deactivate this users access? You can reactivate it at any time.',
            cssClass: 'chartSkipAlert',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Yes',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                        if (_this.networkConnected === false) {
                            _this.showError("Check your internet connection and try again.");
                        }
                        else {
                            //this.presentLoading();
                            setTimeout(function () {
                                _this.apiProvider.deleteSecondaryUser(uid)
                                    .then(function (res) {
                                    console.log("secondary users deleted");
                                    _this.userStatus = 'de-active';
                                    _this.removeUser = 'add-circle';
                                }, function (err) {
                                    console.log("secondary users deleted error" + JSON.stringify(err));
                                    //this.loading.dismiss();
                                    //this.showError(err);
                                    //this.navCtrl.push(ChildRegistrationPage);
                                });
                            }, 1000);
                        }
                    }
                },
                {
                    text: 'No',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    InvitedFamilyPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    InvitedFamilyPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__resources_resources__["a" /* ResourcesPage */]);
    };
    InvitedFamilyPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__settings_settings__["a" /* SettingsPage */]);
    };
    InvitedFamilyPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    InvitedFamilyPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */]);
    };
    InvitedFamilyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invited-family',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/invited-family/invited-family.html"*/'<!--\n  Generated template for the InvitedFamilyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;" >\n        <img src="assets/imgs/side-menu.png"/>\n      </button>\n    </ion-buttons>\n    <ion-title align="center">\n      Invited Family\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n  <ion-list>\n\n    <ion-item  style="margin-top:10px;background-color: transparent" *ngFor=" let users of invidedUsersList">\n      <ion-avatar item-start style="margin-left:-15px" [class]="removeUser == \'remove-circle\' ? \'unBlur\' : \'blur\' ">\n        <img src="{{users.user_picture}}">\n      </ion-avatar>\n      <ion-label>{{users.first_name}} {{users.last_name}}</ion-label>\n      <ion-icon item-right color="primary" name={{removeUser}} (click) = "deleteFamily(users)"></ion-icon>\n    </ion-item>\n\n    <!--<ion-item  style="margin-top:10px; background-color: transparent">-->\n      <!--<ion-avatar item-start style="margin-left:-15px">-->\n        <!--<img src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg">-->\n      <!--</ion-avatar>-->\n      <!--<ion-label>John Max</ion-label>-->\n      <!--<ion-icon item-right color="primary" name="remove-circle"></ion-icon>-->\n    <!--</ion-item>-->\n\n    <!--<ion-item  style="margin-top:10px; background-color: transparent">-->\n      <!--<ion-avatar item-start style="margin-left:-15px">-->\n        <!--<img src="https://www.lawyersweekly.com.au/images/LW_Media_Library/LW-602-p24-partner-profile.jpg">-->\n      <!--</ion-avatar>-->\n      <!--<ion-label>John Max</ion-label>-->\n      <!--<ion-icon item-right color="primary" name="remove-circle"></ion-icon>-->\n    <!--</ion-item>-->\n\n    <ion-item style="background-color: rgba(199,199,199,0.28)" (click)="inviteFamily()" [hidden]="inviteUserHide">\n      Invite Family\n      <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n            <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/invited-family/invited-family.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], InvitedFamilyPage);
    return InvitedFamilyPage;
}());

//# sourceMappingURL=invited-family.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__memories_list_memories_list__ = __webpack_require__(32);
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
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, globalProvider, apiProvider, navParams, menuCtrl, ga) {
        this.navCtrl = navCtrl;
        this.globalProvider = globalProvider;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.ga = ga;
        this.iconName1 = "ios-arrow-down";
        this.iconName2 = "ios-arrow-down";
        this.iconName3 = "ios-arrow-down";
        this.takingPartClicks = 0;
        this.aboutAppClicks = 0;
        this.aboutStudyClicks = 0;
        this.showTakingPartDetails = false;
        this.showAboutappDetails = false;
        this.showAboutStudyDetails = false;
    }
    FaqPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad FaqPage');
        this.ga.trackView("FAQ Screen");
        this.apiProvider.trackPage("FAQ Screen")
            .then(function (res) {
        }, function (err) {
        });
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        this.apiProvider.getNotifications()
            .then(function (res) {
            if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                _this.globalProvider.newNotificitations = true;
            }
            else {
                _this.globalProvider.newNotificitations = false;
            }
        }, function (err) {
            //this.loading.dismiss();
            //this.showError(err);
            //this.navCtrl.push(ChildRegistrationPage);
        });
        //////////////////////////////////////////////////////////////////////////
    };
    FaqPage.prototype.takingPart = function () {
        this.takingPartClicks += 1;
        if (this.takingPartClicks != 1) {
            this.takingPartClicks = 0;
        }
        ;
        if (this.takingPartClicks == 1) {
            this.showTakingPartDetails = true;
            this.iconName1 = "ios-arrow-up";
        }
        else {
            this.showTakingPartDetails = false;
            this.iconName1 = "ios-arrow-down";
        }
    };
    FaqPage.prototype.aboutApp = function () {
        this.aboutAppClicks += 1;
        if (this.aboutAppClicks != 1) {
            this.aboutAppClicks = 0;
        }
        ;
        if (this.aboutAppClicks == 1) {
            this.showAboutappDetails = true;
            this.iconName2 = "ios-arrow-up";
        }
        else {
            this.showAboutappDetails = false;
            this.iconName2 = "ios-arrow-down";
        }
    };
    FaqPage.prototype.aboutStudy = function () {
        this.aboutStudyClicks += 1;
        if (this.aboutStudyClicks != 1) {
            this.aboutStudyClicks = 0;
        }
        ;
        if (this.aboutStudyClicks == 1) {
            this.showAboutStudyDetails = true;
            this.iconName3 = "ios-arrow-up";
        }
        else {
            this.showAboutStudyDetails = false;
            this.iconName3 = "ios-arrow-down";
        }
    };
    FaqPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    FaqPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
    };
    FaqPage.prototype.clickedChart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    FaqPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    FaqPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__resources_resources__["a" /* ResourcesPage */]);
    };
    FaqPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */]);
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/faq/faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="true">\n        <ion-buttons left>\n            <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;">\n                <img src="assets/imgs/side-menu.png"/>\n            </button>\n        </ion-buttons>\n        <ion-title align="center">\n            FAQs\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n\n    <ion-list>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item text-wrap style="background-color: #3B8175" (click)="takingPart()">\n                    <ion-card-title> Taking Part</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right\n                              name="{{iconName1}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showTakingPartDetails">\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Who can register to use the SHTG app</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">a) A parent /whānau carer of a child aged 0-21 months.</label>\n                    <br>\n                    <label style="font-size: 15px;">b) Anyone who is invited by a parent /whānau carer who is already\n                        using the app\n                        How do I register?</label>\n                    <br>\n                    <br>\n                    <label style="font-size: 15px;">Complete the registration screen of the app, read the information\n                        sheet about the study and then give consent to take part.\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Do my friends/family need to register to\n                        participate?</label>\n                </p>\n\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">Yes, if you invite your family/friends they will need to register\n                        and give consent before they can be part of the study and use the app. Through the app you can\n                        send them an invitation\n                        with a unique code. They will need to enter the code when they complete the\n                        registration.</label>\n                </p>\n                <br>\n\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What if I have problems registering?\n                    </label>\n                </p>\n                <p style="font-size: 15px;color: black;text-justify: inter-word;">\n                    <label style="font-size: 15px;">Please email seehowtheygrow@auckland</label>\n                    <label style="font-size: 15px;">.ac.nz or leave a message on 08003676444 and a member of the team\n                        will help you.</label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What if I enter the wrong information when I am\n                        registering?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-justify: inter-word;">\n                    <label style="font-size: 15px;">You can edit or update your information by going to Settings in the\n                        menu of the app</label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What if I don’t want to be part of the study any\n                        longer?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">Please email us at seehowtheygrow@auckland.ac.nz.</label>\n                    <label style="font-size: 15px;">if you wish to withdraw from the study. We would really appreciate\n                        some feedback as to why you wish to withdraw but this is optional.\n                        You can uninstall the app at any time.</label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What if I don\'t want to share the app\n                        anymore?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">If you invited a friend or whanau to share the app, you can disable\n                        that function by going to settings.\n                        If you change your mind, you can reable it at a later date. No information is deleted or removed\n                        that was added by people you have invited.</label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What if my baby was born prematurely?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        The app is not specficially designed for premature babies (born earlier than 37 weeks) in mind.\n                        However, you can use this app and map your babies data on the chart while remembering that your\n                        baby\'s calendar age is impacted by the gestational age.Where,\n                        preterm infants have remained well, their growth patterns should match the centile at their\n                        corrected age,while preterm children who have had problems in the neonatal period and dropped\n                        away will usually gradually climb back up the centiles after term.\n                        If you are worried at any time, it is always good to chat with your health professional.\n                    </label>\n                </p>\n\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item text-wrap style="background-color: #3B8175" (click)="aboutApp()" >\n                    <ion-card-title> About the App</ion-card-title>\n                    <ion-icon item-right color="primary" item-right\n                              name="{{iconName2}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showAboutappDetails">\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Do I need internet access to use the app or\n                        participate in the study?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Yes you will need internet access to be able to participate in the study. Some functions of the\n                        app will work when you are offline and you can add information, however, many features, such as\n                        activities and services will only work when you are connected to the internet.\n                        If you are sharing the app with your partner and whānau, then you will need to connect to the\n                        internet regularly to ensure that they can see any new information.\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Using the app</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        I want to put a photo on my profile, how do I do this?\n                        In the app go to the menu ( in top left corner of your screen), then settings, tap on upload\n                        photo.\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Notifications</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Notifications are an important feature of the app as they will provide you with information\n                        about the study, how to use the app, as well as personalised information about your child’s\n                        growth and health.\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Can I use the app for more than one child?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Yes. At the moment the app is only designed to be used with babies and children under 2 years.\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Can I add photos and comments</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Absolutely. You can record as little or as much as you would like to using the Memories\n                        function.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">How is the Percentile calculated?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Percentiles gives information about how an individual measure compares to a broader group of\n                        measures. We used the World Health Organisation tools and refered to Bowling et al (2009)\n                        A logistic approximation to the cumulative normal distribution\n                        doi:10.3926/jiem.2009.v2n1.p114-127 to help us calculate the cnetiles presented in this app.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">How to correct a mistake when entering a measurement?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Don’t worry, if you make a mistake when entering a measurement. To fix it, just re-enter the correct measure using the <b>same date</b> and it will replace the mistake.\n                    </label>\n                </p>\n\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n                <ion-item text-wrap style="background-color: #3B8175" (click)="aboutStudy()">\n                    <ion-card-title> About the Study</ion-card-title>\n                    <ion-icon item-right color="primary"  item-right\n                              name="{{iconName3}}"></ion-icon>\n                </ion-item>\n            </ion-card-header>\n            <ion-card-content *ngIf="showAboutStudyDetails">\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Who funded this study?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        This study I jointly funded by the NZ National Science Challenge, Cure Kids, and Precision\n                        Driven Health\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Does this Study have Ethics approval?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Yes, this study has been reviewd by the University of Auckland Human Participants Ethics\n                        Committee and approved, reference 022248\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What am I expected to do to be part of the\n                        study?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        You will need to download the app, register, and complete questions about child growth. You can\n                        then use the app for 12 weeks adding in any height, weight and head circumference measurements\n                        for your child.\n                        At 12 weeks you will be asked to complete a brief online questionnaire about how you found the\n                        app and was it useful.\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">How long will the questionnaires take to\n                        complete?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        It is expected the registration process and first questions will take about 10 mins. The 12 week\n                        questionnaire will also take about 10 mins to complete.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What happens after 12 weeks of using the\n                        app?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        After you have completed your 12 week questionnaire you can continue to use the app if you wish\n                        until we are ready to release an newer version.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What if I want to access the information I have\n                        entered into the app?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        You can export your child’s measurement data, as a PNG or PDF file, to your computer.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Who can see my data?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Any data you enter into the app (e.g. your child’s measurements, photos) will only be able to be\n                        seen by the people you choose to invite to use the app and the researchers.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What data will the research use?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        For this study we will be looking at the answers to the initial questions in the app, answers to\n                        the 3-month online questionnaire, data on your app usage (e.g. what pages are used most often,\n                        how often people enter data into the app), how many people are invited and use the app. We will\n                        NOT be looking at the specfic text or content that you enter.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">What happens with the information\n                        collected?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Reports and papers will be written about how the app is used and how participants like it. All\n                        information will be anonymised and will not be able to identify you, your child or family\n                        personally. As part of the final questionnaire you can ask to have a summary of the study sent\n                        to you when it is ready.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Where is my data stored?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        All information collected will be strictly controlled in accordance with the Privacy Act, 1993.\n                        All data in the app will be password protected and stored indefinitely on a server at the\n                        University of Auckland.\n                    </label>\n                </p>\n\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Want to talk with some one at the ethics\n                        committee?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        You can also contact the health and disability ethics committee (HDEC) that approved this study\n                        on:\n                    </label>\n                    <br>\n                    <label style="font-size: 15px;">\n                        Phone: 0800 4 ETHICS\n                    </label>\n                    <br>\n                    <label style="font-size: 15px;">\n                        Email:  hdecs@moh.govt.nz\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Want to talk with someone about the study?</label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        Pleae feel free to contact the study team  emial: seehowtheygrow@auckland.ac.nz or leave a message on 08003676444.  Don\'t forget to leave contact details so we can get back to you.\n\n                    </label>\n                </p>\n                <br>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px; font-weight: bold">Want to talk with an independent health and disability advocate?\n                    </label>\n                </p>\n                <p style="font-size: 15px;color: black;text-align: justify; text-justify: inter-word;">\n                    <label style="font-size: 15px;">\n                        If you want to talk with someone who is not involved with this study, you can contact and independent advocate.\n                    </label>\n                    <br>\n                    <label style="font-size: 15px;">\n                        Phone:  0800 555 050\n                    </label>\n                    <br>\n                    <label style="font-size: 15px;">\n                        Fax:   0800 2 SUPPORT (0800 2787 7678)\n                    </label>\n                    <br>\n                    <label style="font-size: 15px;">\n                        Email:   advocacy@hdc.org.nz\n                    </label>\n                </p>\n\n            </ion-card-content>\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="toolbar-background" style="height: 30px">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button\n                            style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n                        <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n                        <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutStudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the AboutStudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutStudyPage = /** @class */ (function () {
    function AboutStudyPage(navCtrl, apiProvider, globalProvider, navParams, menuCtrl, ga) {
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.globalProvider = globalProvider;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.ga = ga;
    }
    AboutStudyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad AboutStudyPage');
        this.ga.trackView("About App Screen");
        this.apiProvider.trackPage("About the App Screen")
            .then(function (res) {
        }, function (err) {
        });
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        this.apiProvider.getNotifications()
            .then(function (res) {
            if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                _this.globalProvider.newNotificitations = true;
            }
            else {
                _this.globalProvider.newNotificitations = false;
            }
        }, function (err) {
            //this.loading.dismiss();
            // this.showError(err);
            //this.navCtrl.push(ChildRegistrationPage);
        });
        //////////////////////////////////////////////////////////////////////////
    };
    AboutStudyPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AboutStudyPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    AboutStudyPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resources_resources__["a" /* ResourcesPage */]);
    };
    AboutStudyPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__settings_settings__["a" /* SettingsPage */]);
    };
    AboutStudyPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    AboutStudyPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
    };
    AboutStudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-study',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/about-study/about-study.html"*/'<!--\n  Generated template for the AboutStudyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;" >\n        <img src="assets/imgs/side-menu.png"/>\n      </button>\n    </ion-buttons>\n    <ion-title align="center">\n      About the App\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <ion-card id="InformationSheet" class="ion-card"  transparent="true">\n    <ion-card-content>\n      <ion-card-title align="center" style="font-weight: bold">See How They Grow</ion-card-title>\n      <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;" >Over the last 18 months researchers at the National Institute for Health Innovation have undertaken a set of research activities aimed at developing a mobile app to capture your child(ren)’s growth, from birth to 2 years.The aim of the app is to:</p>\n      <ul style="list-style-type:disc">\n        <li style="font-size: 15px; text-align: justify; text-justify: inter-word;">provide a readily accessible and engaging place for these measures to be recorded and tracked;</li>\n        <li style="font-size: 15px; text-align: justify; text-justify: inter-word;">provide relevant and age specific information that support parents and whānau carers to understand their child’s growth pattern over time;</li>\n        <li style="font-size: 15px; text-align: justify; text-justify: inter-word;">provide a range of relevant and appropriate resources useful to parents and whānau carers;</li>\n        <li style="font-size: 15px; text-align: justify; text-justify: inter-word;">enable you to capture key and precious moments such as photos and notes;</li>\n        <li style="font-size: 15px; text-align: justify; text-justify: inter-word;">provide a digital tool that you can share with your whānau and health care provider.</li>\n\n      </ul>\n      <p> <a href="http://www.seehowtheygrow.nihi.auckland.ac.nz/about-the-study"> <b style="color: #3B8175">For more information please see our website.</b></a></p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n            <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/about-study/about-study.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], AboutStudyPage);
    return AboutStudyPage;
}());

//# sourceMappingURL=about-study.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings_settings__ = __webpack_require__(27);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, apiProvider, navParams, alertCtrl, platform, globalProvider, menuCtrl, formBuilder, loadingController, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.globalProvider = globalProvider;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.ga = ga;
        this.networkConnected = true;
        this.contactUsForm = this.formBuilder.group({
            // email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
            //     Validators.minLength(2), Validators.maxLength(25)]),
            subject: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(50)]),
            message: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(500)]),
        });
        this.platform.ready().then(function () {
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    ContactPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad ContactPage');
        this.ga.trackView("Contacts Screen");
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            /////// track page //////
            this.apiProvider.trackPage("Contact Us Screen")
                .then(function (res) {
            }, function (err) {
            });
            this.apiProvider.getNotifications()
                .then(function (res) {
                if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                    _this.globalProvider.newNotificitations = true;
                }
                else {
                    _this.globalProvider.newNotificitations = false;
                }
            }, function (err) {
                //this.loading.dismiss();
                _this.showError(err);
                //this.navCtrl.push(ChildRegistrationPage);
            });
        }
        //////////////////////////////////////////////////////////////////////////
    };
    ContactPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ContactPage.prototype.clickedMemory = function () {
        if (window.localStorage.getItem('memoryAdded')) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__memories_list_memories_list__["a" /* MemoriesListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__memories_memories__["a" /* MemoriesPage */]);
        }
    };
    ContactPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__resources_resources__["a" /* ResourcesPage */]);
    };
    ContactPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__settings_settings__["a" /* SettingsPage */]);
    };
    ContactPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    ContactPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
    };
    ContactPage.prototype.contactUsSubmit = function () {
        var _this = this;
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            if (window.localStorage.getItem("parentEmail") != null) {
                this.parent_email = window.localStorage.getItem("parentEmail");
            }
            ///// contact us submit /////////
            setTimeout(function () {
                _this.apiProvider.contactUs(_this.contactUsForm.value.subject, _this.contactUsForm.value.message)
                    .then(function (res) {
                    _this.loading.dismiss();
                    _this.showAlert("Thank you for contacting us!");
                    //this.navCtrl.push(InviteUsersPage);
                }, function (err) {
                    _this.loading.dismiss();
                    _this.showError(err);
                    //this.navCtrl.push(ChildRegistrationPage);
                });
            }, 1000);
        }
    };
    ContactPage.prototype.presentLoading = function () {
        this.loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ContactPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'SHTG',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ContactPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;" >\n        <img src="assets/imgs/side-menu.png"/>\n      </button>\n    </ion-buttons>\n    <ion-title align="center">Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <form class="form" [formGroup]="contactUsForm" (submit)="contactUsSubmit()">\n\n  <ion-card  class="ion-card"  transparent="true">\n    <ion-card-content transparent="true">\n\n      <!--<ion-row>-->\n        <!--<ion-label stacked style="font-size: 15px" >Email:</ion-label>-->\n      <!--</ion-row>-->\n\n      <!--<ion-row>-->\n        <!--<ion-input  type="email" style="font-size: 15px" placeholder="Email"  formControlName="email" class="form-controll" class="dropQuestions" style="width:50%"></ion-input>-->\n      <!--</ion-row>-->\n\n      <!--<ion-row>-->\n        <!--<div class="validation-errors">-->\n          <!--<ng-container *ngFor="let validation of globalProvider.validation_messages.email">-->\n            <!--<div class="error-message" *ngIf="contactUsForm.get(\'email\').hasError(validation.type) && (contactUsForm.get(\'email\').dirty || contactUsForm.get(\'email\').touched)">-->\n              <!--{{ validation.message }}-->\n            <!--</div>-->\n          <!--</ng-container>-->\n        <!--</div>-->\n      <!--</ion-row>-->\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px" >Subject:</ion-label>\n      </ion-row>\n\n      <ion-row>\n        <ion-input  type="text" style="font-size: 15px" placeholder="Subject"  formControlName="subject" class="form-controll" class="dropQuestions" style="width:50%"></ion-input>\n      </ion-row>\n\n      <ion-row>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of globalProvider.validation_messages.subject">\n            <div class="error-message" *ngIf="contactUsForm.get(\'subject\').hasError(validation.type) && (contactUsForm.get(\'subject\').dirty || contactUsForm.get(\'subject\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-row>\n\n      <ion-row>\n        <ion-label stacked style="font-size: 15px" >Message:</ion-label>\n      </ion-row>\n\n      <ion-row>\n        <textarea   type="text" style="font-size: 15px; height: 100px;width: 100%" placeholder="Message" formControlName="message" class="form-controll" class="dropQuestions" ></textarea>\n      </ion-row>\n      <ion-row>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of globalProvider.validation_messages.message">\n            <div class="error-message" *ngIf="contactUsForm.get(\'message\').hasError(validation.type) && (contactUsForm.get(\'message\').dirty || contactUsForm.get(\'message\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-row>\n\n\n\n    </ion-card-content>\n  </ion-card>\n\n  <div  class="btnBottom">\n    <ion-row align="center">\n      <ion-col>\n        <button ion-button block  type="submit" class="btnAccept" [disabled]="!contactUsForm.valid" >Send</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  </form>\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n            <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcknowledgementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(7);
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
 * Generated class for the AcknowledgementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcknowledgementPage = /** @class */ (function () {
    function AcknowledgementPage(navCtrl, apiProvider, globalProvider, navParams, menuCtrl, ga) {
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.globalProvider = globalProvider;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.ga = ga;
    }
    AcknowledgementPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad AcknowledgementPage');
        this.ga.trackView("Acknowledgement Screen");
        this.apiProvider.trackPage("Acknowledgement Screen")
            .then(function (res) {
        }, function (err) {
        });
        /////////////////////////////// check new notifications available ///////////////////////////////////
        window.localStorage.removeItem("unreadNotifications");
        this.apiProvider.getNotifications()
            .then(function (res) {
            if (window.localStorage.getItem("unreadNotifications") == 'yes') {
                _this.globalProvider.newNotificitations = true;
            }
            else {
                _this.globalProvider.newNotificitations = false;
            }
        }, function (err) {
            //this.loading.dismiss();
            //this.showError(err);
            //this.navCtrl.push(ChildRegistrationPage);
        });
        //////////////////////////////////////////////////////////////////////////
    };
    AcknowledgementPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AcknowledgementPage.prototype.clickedChart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
    };
    AcknowledgementPage.prototype.clickedMemory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__memories_memories__["a" /* MemoriesPage */]);
    };
    AcknowledgementPage.prototype.clickedResources = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resources_resources__["a" /* ResourcesPage */]);
    };
    AcknowledgementPage.prototype.clickedSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    AcknowledgementPage.prototype.clickedNotifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__notifications_notifications__["a" /* NotificationsPage */]);
    };
    AcknowledgementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acknowledgement',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/acknowledgement/acknowledgement.html"*/'<!--\n  Generated template for the AcknowledgementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-buttons left>\n      <button (click)="toggleMenu()" style="width: 50px; height: 50px; background: transparent !important;" >\n        <img src="assets/imgs/side-menu.png"/>\n      </button>\n    </ion-buttons>\n    <ion-title align="center">\n      Acknowledgement\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <ion-card id="InformationSheet" class="ion-card"  transparent="true">\n    <ion-card-content>\n      <ion-card-title align="center" style="font-weight: bold">Acknowledgement</ion-card-title>\n      <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;" >We would like to acknowledge and thank our funders,<b>Cure Kids, A Better Start National Science Challenge </b>and <b>Precision Driven Health,</b> as without your interest and support this research and app would not have been possible.</p>\n      <br>\n      <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;" >The research team would like to thank all the parents and whānau who contributed their time and insights to help the team design and develop this app.  We were privileged to work with you and we thank you for helping us shape the app into something we can all be proud of.</p>\n      <br>\n      <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;" >We wish to acknowledge our research steering group who have helped guide and shape the research.  Thank you to, Associate Professor Susan Morton (Director, GUiNZ) , Mrs Marion Hiemstra (Well Child Plunket), Dr Stephen Howie (Paediatrician Waitemata DHB), Dr Tueila Percival (Child Health and Pacific Health Unit), Megan Tunks & Dario Penetito-Hemara (Toi Tangata), Dr Samantha Marsh (NIHI), Dr Rosie Dobson (NIHI), Dr Yannan Jiang (NIHI, Dept Statistics), Professor Chris Bullen (Director, NIHI),  Dr Dylan Mordaunt (Geneticist, Waitemata DHB)</p>\n      <br>\n      <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;" >We acknowledge the New Zealand Ministry of Health 2018 Well Child Tamariki Ora My Health Book for the fabulous content which is freely shared and that we have used some of this in the Tips and First Aid functions of the app.</p>\n      <br>\n      <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;" >We also wish to acknowledge Highcharts(Non-Commercial) library, Ionic framework and Cordova which we have used to create our app.</p>\n      <br>\n      <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;" >We appreciate the use of photographs from Unsplash.com and NIHI staff members.\n        Study data was collected and managed using REDCap electronic data capture tools at the University of Auckland.</p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="toolbar-background" style="height: 30px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/dash-board.png" (click)="clickedChart()" width="30px" height="30px" >\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/memory.png" (click)="clickedMemory()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/services.png" (click)="clickedResources()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/setting.png" (click)="clickedSettings()" width="30px" height="30px">\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background-color: transparent; border: transparent;box-shadow: none !important;">\n            <img src="assets/imgs/notification.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="!this.globalProvider.newNotificitations">\n            <img src="assets/imgs/notification-2.png" (click)="clickedNotifications()" width="30px" height="30px" *ngIf="this.globalProvider.newNotificitations">\n\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/acknowledgement/acknowledgement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], AcknowledgementPage);
    return AcknowledgementPage;
}());

//# sourceMappingURL=acknowledgement.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splashscreen2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resources_resources__ = __webpack_require__(23);
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
 * Generated class for the Splashscreen2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Splashscreen2Page = /** @class */ (function () {
    function Splashscreen2Page(navCtrl, _SplashScreen, navParams, _platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._SplashScreen = _SplashScreen;
        this.navParams = navParams;
        this._platform = _platform;
        this._platform.ready().then(function () {
            setTimeout(function () {
                _this._SplashScreen.hide();
            }, 3000);
        });
        this.navCtrl = navCtrl;
    }
    Splashscreen2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Splashscreen2Page');
        setTimeout(function () {
            if (window.localStorage.getItem("registerDone") != null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__resources_resources__["a" /* ResourcesPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
            }
        }, 4000);
    };
    Splashscreen2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splashscreen2',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/splashscreen2/splashscreen2.html"*/'<!--\n  Generated template for the Splashscreen2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding  class="background">\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/splashscreen2/splashscreen2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], Splashscreen2Page);
    return Splashscreen2Page;
}());

//# sourceMappingURL=splashscreen2.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introduction_introduction__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notifications_notifications__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, _SplashScreen, _app, notification, _platform, iab, alertCtrl, globalProvider, apiProvider, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._SplashScreen = _SplashScreen;
        this._app = _app;
        this.notification = notification;
        this._platform = _platform;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.globalProvider = globalProvider;
        this.apiProvider = apiProvider;
        this.ga = ga;
        this.PISCardHide = false;
        this.consentCardHide = true;
        this.moreInfoBtnHide = false;
        this.acceptBtnHide = false;
        this.tamarikiCardHide = true;
        this.testCheckboxOpen = false;
        this.firstTwoQHide = false;
        this.Q1Hide = true;
        this.Q234CardHide = true;
        this.nextPrevBtnHide = true;
        this.Q5CardHide = true;
        this.nextBtnHide = true;
        this.tamariki = true;
        this._platform.ready().then(function () {
            setTimeout(function () {
                _this._SplashScreen.hide();
                //this.globalProvider.UUID = device.uuid;
            }, 3000);
        });
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.oraBookAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Thanks for agreeing to participate in the See How They Grow study.\n' +
            'Just before you get started, we have a couple of questions.');
        alert.setCssClass('fewQuestionsAlert');
        alert.addInput({
            type: 'message',
            label: 'dfdsfdsfdsfdsfBddfdsfsdfdsfdlue?',
            value: '1',
        });
        alert.addInput({
            type: 'checkbox',
            label: '1. Bdfdsfsdfdsfdlue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: '2. Greensdfsfdsffd',
            value: 'green'
        });
        alert.addInput({
            type: 'checkbox',
            label: '3. Redsdfsfdsfds',
            value: 'red'
        });
        alert.addInput({
            type: 'checkbox',
            label: '4. Yellowsdfsfdfd',
            value: 'yellow'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        //this.apiProvider.answer5 = 1;
        console.log("q5 answer" + this.apiProvider.answer5);
        this.ga.trackView("Welcome Screen");
    };
    WelcomePage.prototype.moreInfo = function () {
        var browser = this.iab.create('http://www.seehowtheygrow.nihi.auckland.ac.nz/about-the-study');
        browser.show();
    };
    WelcomePage.prototype.PISAccepted = function () {
        this.PISCardHide = true;
        this.consentCardHide = false;
        //this.apiProvider.answers.push("PISAccepted");
    };
    WelcomePage.prototype.previous = function () {
        this.PISCardHide = true;
        this.consentCardHide = true;
        this.moreInfoBtnHide = true;
        this.acceptBtnHide = true;
        this.tamarikiCardHide = false;
        this.firstTwoQHide = true;
        this.Q1Hide = false;
        this.nextPrevBtnHide = true;
        this.Q5CardHide = true;
        this.Q234CardHide = true;
    };
    WelcomePage.prototype.consentAccepted = function () {
        this.PISCardHide = true;
        this.consentCardHide = true;
        this.moreInfoBtnHide = true;
        this.acceptBtnHide = true;
        this.tamarikiCardHide = false;
        this.firstTwoQHide = true;
        this.Q1Hide = false;
        //this.oraBookAlert();
        //this.apiProvider.answers.push("ConsentFormAccepted");
    };
    WelcomePage.prototype.tamarikiNo = function () {
        this.PISCardHide = true;
        this.consentCardHide = true;
        this.moreInfoBtnHide = true;
        this.acceptBtnHide = true;
        this.tamarikiCardHide = true;
        this.firstTwoQHide = true;
        this.Q234CardHide = true;
        this.Q1Hide = true;
        this.nextPrevBtnHide = false;
        this.apiProvider.answer1 = "No";
        this.Q5CardHide = false;
        this.tamariki = false;
    };
    WelcomePage.prototype.tamarikiYes = function () {
        this.PISCardHide = true;
        this.consentCardHide = true;
        this.moreInfoBtnHide = true;
        this.acceptBtnHide = true;
        this.tamarikiCardHide = true;
        this.firstTwoQHide = true;
        this.Q234CardHide = false;
        this.Q1Hide = true;
        this.nextPrevBtnHide = false;
        this.apiProvider.answer1 = "Yes";
        this.Q5CardHide = false;
        this.tamariki = true;
    };
    WelcomePage.prototype.welcomeQcompleted = function () {
        //this.apiProvider.answer = "No";
        //this.apiProvider.answers.push("Q2-2");
        // this.apiProvider.answers.push("Q3-1");
        //this.apiProvider.answers.push("Q4-2");
        // this.apiProvider.answers.push("Q5-2");
        //this.apiProvider.answers.push("Q5C-JSDBFJDBFJDSJF");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__introduction_introduction__["a" /* IntroductionPage */]);
        this.notification.init(); // call notification
        //this.navCtrl.push(ChildRegistrationPage)
        //this.navCtrl.setRoot('GrowthChartPage');
    };
    WelcomePage.prototype.q2Answered = function (val) {
        this.apiProvider.answer2 = val;
        console.log("q2 anserd" + this.apiProvider.answer2);
        if (this.apiProvider.answer2 != null && this.apiProvider.answer3 != null && this.apiProvider.answer4 != null && this.apiProvider.answer5 != null) {
            this.nextBtnHide = false;
        }
    };
    WelcomePage.prototype.q3Answered = function (val) {
        this.apiProvider.answer3 = val;
        console.log("q3 anserd" + this.apiProvider.answer3);
        if (this.apiProvider.answer2 != null && this.apiProvider.answer3 != null && this.apiProvider.answer4 != null && this.apiProvider.answer5 != null) {
            this.nextBtnHide = false;
        }
    };
    WelcomePage.prototype.q4Answered = function (val) {
        this.apiProvider.answer4 = val;
        console.log("q4 anserd" + this.apiProvider.answer4);
        if (this.apiProvider.answer2 != null && this.apiProvider.answer3 != null && this.apiProvider.answer4 != null && this.apiProvider.answer5 != null) {
            this.nextBtnHide = false;
        }
    };
    WelcomePage.prototype.q5Answered = function (val) {
        this.apiProvider.answer5 = val;
        console.log("q5 anserd" + this.apiProvider.answer5);
        if (this.apiProvider.answer2 != null && this.apiProvider.answer3 != null && this.apiProvider.answer4 != null && this.apiProvider.answer5 != null) {
            this.nextBtnHide = false;
        }
    };
    WelcomePage.prototype.q5Answeredonly = function (val) {
        this.apiProvider.answer5 = val;
        this.nextBtnHide = false;
        console.log("q5 anserd" + this.apiProvider.answer5);
    };
    WelcomePage.prototype.q5Answered_comment = function (val) {
        this.apiProvider.answer5_comment = val;
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the Welcome page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbarColor" hideBackButton="true">\n        <ion-title align="center">\n            Welcome\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n    <ion-card id="InformationSheet" class="ion-card" [hidden]="PISCardHide" transparent="true">\n        <ion-card-content>\n            <ion-card-title align="center" style="font-weight: bold">Nau Mai, Haere Mai, Welcome to See\n                How they Grow App.\n            </ion-card-title>\n            <p style="font-size: 15px; color:black; text-align: justify; text-justify: inter-word;">Over the last year\n                researchers at the National\n                Institute for Health Innovation (NIHI), University of Auckland have been working to develop this free\n                app ‘See How They Grow’ for mobile phones to see if it can give you, as parents and whānau, a more\n                accessible and understandable way of seeing the growth of your child(ren).\n                Because the first two years of life are often where the most change happens, the app has started with a\n                focus on families with\n                children up to the age of 2. </p>\n            <br>\n            <p style="font-size: 15px; color:black ;text-align: justify; text-justify: inter-word;"> If you are reading\n                this, are aged over 18 and are\n                the parent or whānau of a child aged 0-21 months then you are one of the parents/ whānau who we would\n                love to invite and have try our free app and help us understand what is useful, what is not, what you\n                like and don’t like, what is missing and what could be improved on.\n            </p>\n            <br>\n            <p style="font-size: 15px; color:black ; font-weight: bold">\n                So what does the app do?\n            </p>\n\n            <p style="font-size: 15px; color:black ;text-align: justify; text-justify: inter-word;">\n                The app is designed to enable you to add the measures about how your child is growing. You can access\n                different resources, including activities for you and your child, what to expect and when, foods and\n                nutrition, and links to other sites with useful information when you need it. Regular notifications will\n                remind you of things coming up and what things mean. You can upload photos about what you, your whānau\n                and your child(ren) have been up to, too. You can also invite and share the app securely with your\n                whanau so they can be part of the journey with you, your child and whanau even if they live with your or\n                far away.\n            </p>\n            <br>\n\n            <p style="font-size: 15px; color:black ; font-weight: bold">\n                What does participating mean?\n            </p>\n            <p style="font-size: 15px; color:black ;text-align: justify; text-justify: inter-word;">\n                As mentioned, this is research and we are trying to see if this app could be useful. Participating means\n                that you will need to be ok to download the app on your phone (android or apple), answer a couple of\n                questions so we know a bit about you, then be happy to have the app on your phone for 3 months using it\n                however you want. Although we do prompt you to enter some measures for your child just so you get the\n                most out of the app. At the end we ask you to answer a few questions about how you found it.\n            </p>\n            <br>\n            <p style="font-size: 15px; color:black ; font-weight: bold">\n                Will I get paid to use the app?\n            </p>\n            <p style="font-size: 15px; color:black ;text-align: justify; text-justify: inter-word;">\n                No, you won’t get paid but at the end of the 3 months, we will send you a $30 voucher to thank you for\n                your time and insights into how to make this app better.\n            </p>\n            <br>\n            <p style="font-size: 15px; color:black ; font-weight: bold">\n                How do I agree to participate?\n            </p>\n            <p style="font-size: 15px; color:black ;text-align: justify; text-justify: inter-word;">\n                This is simple, after reading this, click ACCEPT.\n            </p>\n            <br>\n            <p style="font-size: 15px; color:black ; font-weight: bold">\n                What if I want to know more?\n            </p>\n            <p style="font-size: 15px; color:black; ">\n                You can read more <a href="http://seehowtheygrow.nihi.auckland.ac.nz"><b style="color: #3B8175"> here</b> </a> or go to our website <a\n                    href="http://seehowtheygrow.nihi.auckland.ac.nz/"><b style="color: #3B8175">http://seehowtheygrow.nihi.auckland.ac.nz</b></a>\n            </p>\n            <p style="font-size: 15px; color:black;">\n                You can also contact the lead investigator Gayl at <a href="mailto:seehowtheygrow@auckland.ac.nz"><b\n                    style="color: #3B8175">seehowtheygrow@auckland.ac.nz</b></a>\n            </p>\n            <div>&nbsp;&nbsp; </div>\n            <div>&nbsp;&nbsp; </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card id="consent" class="ion-card" [hidden]="consentCardHide">\n        <ion-card-content>\n            <ion-card-title align="center" style="font-weight: bold">Consent Form</ion-card-title>\n            <p style="font-size: 15px; color:black" align="center">I have read the information sheet and I\n                understand that participating in the See How they Grow Study means that,</p>\n            <br>\n            <ul style="list-style-type:disc">\n                <li style="font-size: 15px">I am aged 18 years or older.</li>\n                <li style="font-size: 15px">I will use the app over 3 months.</li>\n                <li style="font-size: 15px">I can enter measurements.</li>\n                <li style="font-size: 15px">I will be invited to answer a few questions at the end of the 3 months.</li>\n                <li style="font-size: 15px">How I use the app will be collected but no personal information will be used\n                    about me or any child.\n                </li>\n                <li style="font-size: 15px">I can stop participating in the study if I want to but agree for a final\n                    survey to be sent to me.\n                </li>\n                <li style="font-size: 15px">I understand that if I complete the 3 month survey I will receive a $30\n                    voucher.\n                </li>\n                <li style="font-size: 15px">I know that if I have questions at any time that I can contact the\n                    researcher using the app.\n                </li>\n                <li style="font-size: 15px; font-weight: bold">I agree to take part in this study.</li>\n                <div>&nbsp;&nbsp; </div>\n\n            </ul>\n\n        </ion-card-content>\n    </ion-card>\n\n    <div align="center">\n        <ion-label [hidden]="tamarikiCardHide" style="font-weight: bold; font-size: 18px"> Just a few questions before\n            you start.\n        </ion-label>\n    </div>\n    <ion-card id="tamarikiCard" class="ion-card" [hidden]="tamarikiCardHide">\n        <ion-card-content>\n            <!--<ion-card-title align="center" style="font-weight: bold"> Just a few questions before you start.</ion-card-title> -->\n            <p style="font-size: 15px; color: black; text-align: justify; text-justify: inter-word;"> Q1. Are you aware\n                of the growth charts in the Well Child Tamariki\n                Ora Book?</p>\n        </ion-card-content>\n    </ion-card>\n\n    <div padding-vertical [hidden]="Q234CardHide">\n\n    </div>\n\n\n    <ion-card id="Q234Card" class="ion-card" [hidden]="Q234CardHide">\n        <ion-card-content>\n            <td>\n                &nbsp;\n            </td>\n            <ion-row>\n                <p style="font-size: 15px; color: black"> Q2. Do you think growth charts are useful for tracking your\n                    child\'s growth?</p>\n                <select class="dropQuestions" (change)="q2Answered($event.target.value)"  style="width:100%">\n                    <option selected disabled>Choose one</option>\n                    <option value="1" >I think they are useful</option>\n                    <option value="2" >I don’t think they are useful</option>\n                </select>\n            </ion-row>\n\n            <td>\n                &nbsp;\n            </td>\n\n            <ion-row>\n                <p style="font-size: 15px; color: black;text-align: justify; text-justify: inter-word;"> Q3. How well do\n                    you understand the information about your\n                    child on the growth charts?</p>\n                <select class="dropQuestions" (change)="q3Answered($event.target.value)" style="width:100%">\n                    <option selected disabled>Choose one</option>\n                    <option value="1" >I understand them clearly</option>\n                    <option value="2"> 󠄀I understand them a little</option>\n                    <option value="3"> 󠄀I don’t understand them at all</option>\n                </select>\n            </ion-row>\n\n            <td>\n                &nbsp;\n            </td>\n\n            <ion-row>\n                <p style="font-size: 15px; color: black;text-align: justify; text-justify: inter-word;"> Q4. Do you\n                    think that the growth charts in the Well Child\n                    Tamariki Ora Book are relevant to your child?</p>\n                <select class="dropQuestions" (change)="q4Answered($event.target.value)" style="width:100%">\n                    <option selected disabled>Choose one</option>\n                    <option value="1">Yes</option>\n                    <option value="2">No</option>\n                </select>\n            </ion-row>\n\n            <td>\n                &nbsp;\n            </td>\n\n        </ion-card-content>\n    </ion-card>\n\n        <ion-card id="Q5Card" class="ion-card" [hidden]="Q5CardHide">\n    <ion-card-content>\n            <ion-row>\n                <p style="font-size: 15px; color: black;text-align: justify; text-justify: inter-word;"> Q5. Do you use\n                    any other growth tools or resources to convey\n                    how your child is growing?\n                    (e.g. can include apps/tools for other purpose but including growth tracking)\n                </p>\n                <select class="dropQuestions" style="width:100%" (change)="tamariki ?  q5Answered($event.target.value) : q5Answeredonly($event.target.value)">\n                    <option selected disabled>Choose one</option>\n                    <option value="1">Yes</option>\n                    <option value="2">No</option>\n                </select>\n                <td></td>\n                <textarea placeholder="Please specify here..." style="width: 100%;" (change)="q5Answered_comment($event.target.value)"></textarea>\n            </ion-row>\n\n        </ion-card-content>\n    </ion-card>\n\n    <div padding-vertical [hidden]="Q234CardHide">\n\n    </div>\n\n\n    <div [hidden]="Q1Hide" class="btnBottom">\n        <ion-row align="center">\n            <ion-col>\n                <button ion-button block class="btnMoreInfo" (click)="tamarikiNo()">NO</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button block class="btnAccept" (click)="tamarikiYes()">YES</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n\n</ion-content>\n\n<ion-footer [hidden]="nextPrevBtnHide">\n    <div class="btnBottom">\n        <ion-row align="center">\n            <ion-col>\n                <button ion-button block class="btnMoreInfo" (click)="previous()">Previous</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button block class="btnAccept"  [disabled]="nextBtnHide" (click)="welcomeQcompleted()">Next</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n\n</ion-footer>\n\n\n<ion-footer [hidden]="firstTwoQHide">\n        <div class="btnBottom">\n            <ion-row align="center">\n                <ion-col>\n                    <button ion-button block [hidden]="moreInfoBtnHide" class="btnMoreInfo" (click)="moreInfo()">MORE\n                        INFO\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button block [hidden]="acceptBtnHide" class="btnAccept"\n                            (click)="PISCardHide ? consentAccepted() : PISAccepted()">ACCEPT\n                    </button>\n                </ion-col>\n            </ion-row>\n        </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/welcome/welcome.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_8__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parent_registration_parent_registration__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(6);
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
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroductionPage = /** @class */ (function () {
    function IntroductionPage(navCtrl, navParams, ga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ga = ga;
    }
    IntroductionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroductionPage');
        this.ga.trackView("Introduction Screen");
    };
    IntroductionPage.prototype.startApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__parent_registration_parent_registration__["a" /* ParentRegistrationPage */]);
    };
    IntroductionPage.prototype.skipIntro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__parent_registration_parent_registration__["a" /* ParentRegistrationPage */]);
    };
    IntroductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introduction',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/introduction/introduction.html"*/'<!--\n  Generated template for the IntroductionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbarColor" hideBackButton="true">\n    <ion-title align="center">\n      Introduction\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  overflow-scroll="true" class="background">\n\n  <ion-slides pager="true" parallax="true" padding>\n\n    <ion-slide>\n      <h2>View Growth Chart</h2>\n      <img src="assets/imgs/slide-1.png" style="height: 55vh !important;">\n      <p>View and track your child’s growth using growth charts.</p>\n      <button ion-button outline  class="startAppBtn" style="width: 150px" (click)="skipIntro()">\n        Skip\n      </button>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>Memories</h2>\n      <img src="assets/imgs/slide-2.png" style="height: 55vh !important;">\n      <p>Record your child’s special moments and milestones.</p>\n      <button ion-button outline  class="startAppBtn" style="width: 150px" (click)="skipIntro()">\n        Skip\n      </button>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>Helpful Resources</h2>\n      <img src="assets/imgs/slide-3.png" style="height: 55vh !important;">\n      <p>View tips, services, events and immunisations to support your child’s healthy growth.</p>\n      <button ion-button outline  class="startAppBtn" (click)="startApp()">\n        Start using the app\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/introduction/introduction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], IntroductionPage);
    return IntroductionPage;
}());

//# sourceMappingURL=introduction.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_registration_child_registration__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_notifications_notifications__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ParentRegistrationPage = /** @class */ (function () {
    function ParentRegistrationPage(navCtrl, alertCtrl, platform, notification, device, navParams, imagePicker, apiProvider, globalProvider, loadingCtrl, formBuilder, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.notification = notification;
        this.device = device;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.apiProvider = apiProvider;
        this.globalProvider = globalProvider;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.ga = ga;
        this.imgPreview = 'assets/imgs/parent.png';
        this.regData = { email: '', password: '', fullname: '', avatar: '' };
        this.photoSelected = false;
        this.networkConnected = true;
        this.parentRegisterForm = this.formBuilder.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(25)]),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(25)]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(25)]),
            phone: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^([()\\- x+]*\\d[()\\- x+]*){8,16}$')]),
            invitationCode: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[0-9]{1,20}$')),
            postCode: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('^[0-9]{3,20}$')]),
            relationship: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            ethnicity: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            gender: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            age: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            region: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
        });
        this.platform.ready().then(function () {
            _this.globalProvider.UUID = _this.device.uuid;
            _this.globalProvider.parentRegisterDateTime = __WEBPACK_IMPORTED_MODULE_8_moment___default()().format("MM-DD-YYYY HH:mm:ss");
            if (window.cordova && (window.navigator.connection.type === window.Connection.UNKNOWN || window.navigator.connection.type === window.Connection.NONE)) {
                _this.networkConnected = false;
            }
            else {
                _this.networkConnected = true;
            }
        });
    }
    ParentRegistrationPage.prototype.relationshipChange = function (value) {
        // alert("relllll" + value)
        this.relationship = value;
        if (this.gender == "Male" && (this.relationship == "Mother" || this.relationship == "Grandmother" || this.relationship == "Aunt")) {
            this.showError('Please check that gender and relationship to child selections are correct.');
        }
        else if (this.gender == "Female" && (this.relationship == "Father" || this.relationship == "Grandfather" || this.relationship == "Uncle")) {
            this.showError('Please check that gender and relationship to child selections are correct.');
        }
    };
    ParentRegistrationPage.prototype.genderChange = function (value) {
        // alert("geeennn" + value)
        this.gender = value;
        if ((this.relationship == "Mother" || this.relationship == "Grandmother" || this.relationship == "Aunt") && this.gender == "Male") {
            this.showError('Please check that gender and relationship to child selections are correct.');
        }
        else if ((this.relationship == "Father" || this.relationship == "Grandfather" || this.relationship == "Uncle") && this.gender == "Female") {
            this.showError('Please check that gender and relationship to child selections are correct.');
        }
    };
    ParentRegistrationPage.prototype.getPhoto = function (val) {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            quality: 80 //android
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                //this.imgPreview = 'assets/imgs/parent.png';
                _this.imgPreview = results[i];
                if (_this.platform.is('android')) {
                    window.resolveLocalFileSystemURL(results[i], function (fileEntry) {
                        fileEntry.file(function (resFile) {
                            var reader = new FileReader();
                            reader.onloadend = function (evt) {
                                _this.imageData = evt.target.result;
                                //alert(evt.target.result + "======binary value");
                                _this.photoSelected = true;
                                //alert("dfdfdfdfd");
                                window.localStorage.setItem("parentPhoto", _this.imgPreview);
                            };
                            reader.readAsArrayBuffer(resFile);
                        });
                    });
                }
                else {
                    ////////////*****************//////////////
                    window.resolveLocalFileSystemURL('file://' + results, function (fileEntry) {
                        // alert('Type: ' + (typeof fileEntry));
                        fileEntry.file(function (file) {
                            // alert('File: ' + (typeof file) + ', ' + JSON.stringify(file));
                            var fileReader = new FileReader();
                            fileReader.onloadend = function (result) {
                                // alert('File Reader Result: ' + JSON.stringify(result));
                                _this.imageData = result.target.result;
                                _this.photoSelected = true;
                                window.localStorage.setItem("parentPhoto", _this.imgPreview);
                                //alert(evt.target.result + "======binary value");
                            };
                            fileReader.onerror = function (error) {
                                //reject(error);
                            };
                            fileReader.readAsArrayBuffer(file);
                        }, function (error) {
                            // alert('File Entry Error: ' + JSON.stringify(error));
                        });
                    }, function (error) {
                        //   alert('Error resolving file: ' + JSON.stringify(error));
                    });
                    /////////////***************////////////////
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    ParentRegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParentRegistrationPage');
        this.ga.trackView("Parent Registration Screen");
    };
    ParentRegistrationPage.prototype.parentRegistered = function () {
        var _this = this;
        this.globalProvider.parentFirstName = this.parentRegisterForm.value.firstName;
        this.globalProvider.parentLastName = this.parentRegisterForm.value.lastName;
        this.globalProvider.parentEmail = this.parentRegisterForm.value.email;
        this.globalProvider.parentMobileNumber = this.parentRegisterForm.value.phone;
        this.globalProvider.parentInvitationCode = this.parentRegisterForm.value.invitationCode;
        this.globalProvider.parentRelationshipToChild = this.parentRegisterForm.value.relationship;
        this.globalProvider.parentEthnicity = this.parentRegisterForm.value.ethnicity;
        this.globalProvider.parentGender = this.parentRegisterForm.value.gender;
        this.globalProvider.parentAge = this.parentRegisterForm.value.age;
        this.globalProvider.parentRegion = this.parentRegisterForm.value.region;
        this.globalProvider.parentPostcode = this.parentRegisterForm.value.postCode;
        if (this.photoSelected) {
            this.finalProfilePic = this.imageData;
        }
        else {
            this.finalProfilePic = this.imgPreview;
        }
        if (this.networkConnected === false) {
            this.showError("Check your internet connection and try again.");
        }
        else {
            this.presentLoading();
            if (this.photoSelected) {
                //// parent profile picture upload ///////
                setTimeout(function () {
                    _this.apiProvider.uploadPhotoParent(_this.imageData)
                        .then(function (res) {
                        _this.loading.dismiss();
                        //alert("uploaded");
                        ///// parent with photo register /////////
                        setTimeout(function () {
                            _this.apiProvider.addParent()
                                .then(function (res) {
                                _this.apiProvider.login()
                                    .then(function (res) {
                                    _this.loading.dismiss();
                                    window.localStorage.setItem("registerDone", "done");
                                    if (window.localStorage.getItem("primaryUser") === "true") {
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__child_registration_child_registration__["a" /* ChildRegistrationPage */]);
                                    }
                                    else {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
                                    }
                                }, function (err) {
                                    //alert(JSON.stringify(err)+"=====");
                                    console.log("22222222222");
                                    _this.loading.dismiss();
                                    _this.showAlert(err);
                                });
                            }, function (err) {
                                _this.loading.dismiss();
                                console.log("333333333");
                                _this.showAlert(err);
                                //this.navCtrl.push(ChildRegistrationPage);
                            });
                        }, 1000);
                    }, function (err) {
                        //alert(JSON.stringify(err) + "image upload error");
                        console.log("111111111111");
                        _this.showAlert(err);
                    });
                }, 1000);
            }
            else {
                ///// parent register without photo /////////
                setTimeout(function () {
                    _this.apiProvider.addParent()
                        .then(function (res) {
                        _this.apiProvider.login()
                            .then(function (res) {
                            _this.loading.dismiss();
                            window.localStorage.setItem("registerDone", "done");
                            if (window.localStorage.getItem("primaryUser") === "true") {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__child_registration_child_registration__["a" /* ChildRegistrationPage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__growth_chart_growth_chart__["a" /* GrowthChartPage */]);
                            }
                        }, function (err) {
                            //alert(JSON.stringify(err)+"=====");
                            console.log("22222222222");
                            _this.loading.dismiss();
                            _this.showAlert(err);
                        });
                    }, function (err) {
                        _this.loading.dismiss();
                        console.log("333333333");
                        _this.showAlert(err);
                        //this.navCtrl.push(ChildRegistrationPage);
                    });
                }, 1000);
            }
        }
    };
    ParentRegistrationPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ParentRegistrationPage.prototype.showAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ERROR',
            message: err.error.message,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ParentRegistrationPage.prototype.showError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'ALERT',
            message: err,
            cssClass: 'childNoticeAlert',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.navCtrl.push('InviteUsersPage');
                    }
                }
            ]
        });
        alert.present();
    };
    ParentRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parent-registration',template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/parent-registration/parent-registration.html"*/'<!--\n  Generated template for the ParentRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="navbarColor" hideBackButton="false">\n        <ion-title align="center">\n            Registration\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding overflow-scroll="true" class="background">\n    <div align="center">\n        <img alt="logo" height="70" width="70" style="border-radius: 50%; -webkit-border-radius: 50%;" class="logo"\n             (click)="getPhoto()" src="{{imgPreview}}">\n    </div>\n    <div align="center" (click)="getPhoto(\'photo\')">\n        <h1 class="title" style="font-size: small">Tap to Upload Photo</h1>\n    </div>\n\n    <form class="form" [formGroup]="parentRegisterForm" (submit)="parentRegistered()">\n\n    <ion-card id="" class="ion-card" [hidden]="" transparent="true">\n        <ion-card-content>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Full Name</ion-label>\n            </ion-row>\n\n            <ion-row>\n                <ion-input type="text" style="font-size: 15px" placeholder="First Name" class="dropQuestions"\n                           style="width:50%" formControlName="firstName" class="form-controll" required>\n                </ion-input>\n\n\n                <ion-input type="text" style="font-size: 15px" placeholder="Last Name" class="dropQuestions"\n                           style="width:50%" formControlName="lastName" class="form-controll">\n                </ion-input>\n            </ion-row>\n            <ion-row>\n                <div class="validation-errors">\n                    <ng-container *ngFor="let validation of globalProvider.validation_messages.firstName">\n                        <div class="error-message" *ngIf="parentRegisterForm.get(\'firstName\').hasError(validation.type) && (parentRegisterForm.get(\'firstName\').dirty || parentRegisterForm.get(\'firstName\').touched)">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n                <div class="validation-errors">\n                    <ng-container *ngFor="let validation of globalProvider.validation_messages.lastName">\n                        <div class="error-message" *ngIf="parentRegisterForm.get(\'lastName\').hasError(validation.type) && (parentRegisterForm.get(\'lastName\').dirty || parentRegisterForm.get(\'lastName\').touched)">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Email</ion-label>\n               <!-- <button align="left" type="button" tooltip="Email required so we can send you the study survey."\n                        tooltip-trigger="mouseenter">\n               <!-- </button> -->\n                <div class="tooltip"><img src="assets/imgs/info.png"style="width: 20px;height: 20px; margin-top: 15px;" />\n                    <span class="tooltiptext tooltip-left" align="center">Email required so we can send you the study survey.</span>\n                </div>\n\n            </ion-row>\n\n            <ion-row>\n                <ion-input type="email" style="font-size: 15px" placeholder="example@gmail.com" class="dropQuestions"\n                           style="width:100%" formControlName="email" class="form-controll"></ion-input>\n            </ion-row>\n\n            <ion-row>\n                <div class="validation-errors">\n                    <ng-container *ngFor="let validation of globalProvider.validation_messages.email">\n                        <div class="error-message" *ngIf="parentRegisterForm.get(\'email\').hasError(validation.type) && (parentRegisterForm.get(\'email\').dirty || parentRegisterForm.get(\'email\').touched)">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Mobile Number</ion-label>\n                <div class="tooltip"><img src="assets/imgs/info.png"style="width: 20px;height: 20px; margin-top: 15px;" />\n                    <span class="tooltiptext tooltip-left" align="center">Phone number required so we can contact you about the study if required.</span>\n                </div>\n            </ion-row>\n\n            <ion-row>\n                <ion-input type="number" style="font-size: 15px" placeholder="022xxxxxxx" class="dropQuestions"\n                           style="width:100%" formControlName="phone" class="form-controll"></ion-input>\n            </ion-row>\n            <ion-row>\n                <div class="validation-errors">\n                    <ng-container *ngFor="let validation of globalProvider.validation_messages.phone">\n                        <div class="error-message" *ngIf="parentRegisterForm.get(\'phone\').hasError(validation.type) && (parentRegisterForm.get(\'phone\').dirty || parentRegisterForm.get(\'phone\').touched)">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n            </ion-row>\n\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Invitation Code</ion-label>\n                <div class="tooltip"><img src="assets/imgs/info.png"style="width: 20px;height: 20px; margin-top: 15px;" />\n                    <span class="tooltiptext tooltip-left" align="center">If you have been invited by family /Whānau please enter the email code here.</span>\n                </div>\n            </ion-row>\n\n            <ion-row>\n                <ion-input type="text" style="font-size: 15px" placeholder="If you have been invited enter code here"\n                           align="left" class="dropQuestions" style="width:100%" formControlName="invitationCode" class="form-controll"></ion-input>\n            </ion-row>\n            <ion-row>\n                <div class="validation-errors">\n                    <ng-container *ngFor="let validation of globalProvider.validation_messages.invitationCode">\n                        <div class="error-message" *ngIf="parentRegisterForm.get(\'invitationCode\').hasError(validation.type) && (parentRegisterForm.get(\'invitationCode\').dirty || parentRegisterForm.get(\'invitationCode\').touched)">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Relationship to Child</ion-label>\n                <select class="dropQuestions" style="width:100%" formControlName="relationship" (change)="relationshipChange($event.target.value)">\n                    <option value="Mother" selected>Mother</option>\n                    <option value="Father">Father</option>\n                    <option value="Grandmother">Grandmother</option>\n                    <option value="Grandfather">Grandfather</option>\n                    <option value="Uncle">Uncle</option>\n                    <option value="Aunt">Aunt</option>\n                    <option value="Friend">Friend</option>\n                    <option value="Whānau">Whānau</option>\n                    <option value="Caregiver">Caregiver</option>\n                </select>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Ethnicity(Select all that apply)</ion-label>\n                <select class="dropQuestions2" multiple="true" style="width:100%" formControlName="ethnicity" >\n                    <option value="European" selected>European</option>\n                    <option value="Maori">Māori</option>\n                    <option value="Asian">Asian</option>\n                    <option value="Pacific">Pacific</option>\n                    <option value="Chinese">Chinese</option>\n                    <option value="Indian">Indian</option>\n                    <option value="Other">Other</option>\n                </select>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Gender</ion-label>\n                <select class="dropQuestions" style="width:100%" formControlName="gender" (change)="genderChange($event.target.value)">\n                    <option value="Male" selected>Male</option>\n                    <option value="Female">Female</option>\n                </select>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Age</ion-label>\n                <select class="dropQuestions" style="width:100%" formControlName="age" >\n                    <option value="15-19" selected>15-19</option>\n                    <option value="20-24">20-24</option>\n                    <option value="25-29">25-29</option>\n                    <option value="30-34">30-34</option>\n                    <option value="35-39">35-39</option>\n                    <option value="40-44">40-44</option>\n                    <option value="45-49">45-49</option>\n                    <option value="50-59">50-59</option>\n                    <option value="Over 60">Over 60</option>\n                </select>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Region</ion-label>\n                <select class="dropQuestions" style="width:100%" formControlName="region" >\n                    <option value="Auckland" selected>Auckland</option>\n                    <option value="Northland">Northland</option>\n                    <option value="Waikato">Waikato</option>\n                    <option value="Bay of Plenty">Bay of Plenty</option>\n                    <option value="Gisborne">Gisborne</option>\n                    <option value="Hawke\'s Bay">Hawke\'s Bay</option>\n                    <option value="Taranaki">Taranaki</option>\n                    <option value="Manawatu-Wanganui">Manawatu-Wanganui</option>\n                    <option value="Wellington">Wellington</option>\n                    <option value="Tasman">Tasman</option>\n                    <option value="Nelson">Nelson</option>\n                    <option value="Marlborough">Marlborough</option>\n                    <option value="West Coast">West Coast</option>\n                    <option value="Canterbury">Canterbury</option>\n                    <option value="Otago">Otago</option>\n                    <option value="Southland">Southland</option>\n\n                </select>\n            </ion-row>\n\n            <ion-row>\n                <ion-label stacked style="font-size: 15px">Postcode</ion-label>\n            </ion-row>\n            <ion-row>\n                <ion-input type="number" style="font-size: 15px" align="left" class="dropQuestions" placeholder="Postcode" style="width:100%"  formControlName="postCode" class="form-controll"></ion-input>\n            </ion-row>\n            <ion-row>\n                <div class="validation-errors">\n                    <ng-container *ngFor="let validation of globalProvider.validation_messages.postCode">\n                        <div class="error-message" *ngIf="parentRegisterForm.get(\'postCode\').hasError(validation.type) && (parentRegisterForm.get(\'postCode\').dirty || parentRegisterForm.get(\'postCode\').touched)">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n            </ion-row>\n\n\n        </ion-card-content>\n    </ion-card>\n\n\n    <div class="btnBottom">\n        <ion-row align="center">\n            <ion-col>\n                <button ion-button block class="btnAccept" type=\'submit\' [disabled]="!parentRegisterForm.valid" >CONTINUE</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/pages/parent-registration/parent-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], ParentRegistrationPage);
    return ParentRegistrationPage;
}());

//# sourceMappingURL=parent-registration.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_introduction_introduction__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_parent_registration_parent_registration__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_splashscreen2_splashscreen2__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_child_registration_child_registration__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resources_resources__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_memories_memories__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_memories_list_memories_list__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_memory_details_memory_details__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tips_tips__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tips_details_tips_details__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_popup_modal_popup_modal__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_children_my_children__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_measurements_record_measurements_record__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_invited_family_invited_family__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_faq_faq__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_about_study_about_study__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_contact_contact__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_invite_users_invite_users__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_feedback_feedback__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_notifications_notifications__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_notification_details_notification_details__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_events_events__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_events_modal_events_modal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_activities_activities__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_services_services__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_immunisation_immunisation__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_first_aid_first_aid__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_acknowledgement_acknowledgement__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_first_aid_danger_first_aid_danger__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_first_aid_cpr_first_aid_cpr__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_first_aid_first_first_aid_first__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_first_aid_cpr_over_oneyear_first_aid_cpr_over_oneyear__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_first_aid_cpr_under_oneyear_first_aid_cpr_under_oneyear__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_tips_eating_tips_eating__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_tips_activity_tips_activity__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_tips_growthchart_tips_growthchart__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_image_picker__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_base64__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_camera__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_sqlite__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_push__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ionic_tooltips__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_calendar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_app_version__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_platform_browser_animations__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_users_users__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_file__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_device__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_network__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_storage__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_screen_orientation__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_growth_chart_growth_chart__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_notifications_notifications__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































//import { GrowthChartPageModule} from '../pages/growth-chart/growth-chart.module';





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_introduction_introduction__["a" /* IntroductionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_parent_registration_parent_registration__["a" /* ParentRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splashscreen2_splashscreen2__["a" /* Splashscreen2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_child_registration_child_registration__["a" /* ChildRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_memories_memories__["a" /* MemoriesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_memories_list_memories_list__["a" /* MemoriesListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_memory_details_memory_details__["a" /* MemoryDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tips_tips__["a" /* TipsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tips_details_tips_details__["a" /* TipsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_tips_activity_tips_activity__["a" /* TipsActivityPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tips_growthchart_tips_growthchart__["a" /* TipsGrowthchartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_popup_modal_popup_modal__["a" /* PopupModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_children_my_children__["a" /* MyChildrenPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_measurements_record_measurements_record__["a" /* MeasurementsRecordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_invited_family_invited_family__["a" /* InvitedFamilyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_about_study_about_study__["a" /* AboutStudyPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_notification_details_notification_details__["a" /* NotificationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_events_modal_events_modal__["a" /* EventsModalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_immunisation_immunisation__["a" /* ImmunisationPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_first_aid_first_aid__["a" /* FirstAidPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_acknowledgement_acknowledgement__["a" /* AcknowledgementPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_invite_users_invite_users__["a" /* InviteUsersPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_first_aid_danger_first_aid_danger__["a" /* FirstAidDangerPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_first_aid_cpr_first_aid_cpr__["a" /* FirstAidCprPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_first_aid_first_first_aid_first__["a" /* FirstAidFirstPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_first_aid_cpr_over_oneyear_first_aid_cpr_over_oneyear__["a" /* FirstAidCprOverOneyearPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_first_aid_cpr_under_oneyear_first_aid_cpr_under_oneyear__["a" /* FirstAidCprUnderOneyearPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tips_eating_tips_eating__["a" /* TipsEatingPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_growth_chart_growth_chart__["a" /* GrowthChartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_50_ionic_tooltips__["a" /* TooltipsModule */],
                //GrowthChartPageModule,
                __WEBPACK_IMPORTED_MODULE_56__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_53__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/invite-users/invite-users.module#InviteUsersPageModule', name: 'InviteUsersPage', segment: 'invite-users', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_introduction_introduction__["a" /* IntroductionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_parent_registration_parent_registration__["a" /* ParentRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splashscreen2_splashscreen2__["a" /* Splashscreen2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_child_registration_child_registration__["a" /* ChildRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resources_resources__["a" /* ResourcesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_memories_memories__["a" /* MemoriesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_memories_list_memories_list__["a" /* MemoriesListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_memory_details_memory_details__["a" /* MemoryDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tips_tips__["a" /* TipsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tips_details_tips_details__["a" /* TipsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tips_eating_tips_eating__["a" /* TipsEatingPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_tips_activity_tips_activity__["a" /* TipsActivityPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tips_growthchart_tips_growthchart__["a" /* TipsGrowthchartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_popup_modal_popup_modal__["a" /* PopupModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_children_my_children__["a" /* MyChildrenPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_measurements_record_measurements_record__["a" /* MeasurementsRecordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_invited_family_invited_family__["a" /* InvitedFamilyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_about_study_about_study__["a" /* AboutStudyPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_notification_details_notification_details__["a" /* NotificationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_events_modal_events_modal__["a" /* EventsModalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_immunisation_immunisation__["a" /* ImmunisationPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_first_aid_first_aid__["a" /* FirstAidPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_acknowledgement_acknowledgement__["a" /* AcknowledgementPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_invite_users_invite_users__["a" /* InviteUsersPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_growth_chart_growth_chart__["a" /* GrowthChartPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_first_aid_danger_first_aid_danger__["a" /* FirstAidDangerPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_first_aid_cpr_first_aid_cpr__["a" /* FirstAidCprPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_first_aid_first_first_aid_first__["a" /* FirstAidFirstPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_first_aid_cpr_over_oneyear_first_aid_cpr_over_oneyear__["a" /* FirstAidCprOverOneyearPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_first_aid_cpr_under_oneyear_first_aid_cpr_under_oneyear__["a" /* FirstAidCprUnderOneyearPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_54__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_users_users__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_57__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_65__providers_notifications_notifications__["a" /* NotificationsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_children_my_children__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_invited_family_invited_family__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_faq_faq__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_study_about_study__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feedback_feedback__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_acknowledgement_acknowledgement__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_splashscreen2_splashscreen2__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_version__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_notifications_notifications__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, ga, appVersion, splashScreen, globalProvider, notificationProvider, screenOrientation, push) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.ga = ga;
        this.appVersion = appVersion;
        this.globalProvider = globalProvider;
        this.notificationProvider = notificationProvider;
        this.screenOrientation = screenOrientation;
        this.push = push;
        this.appVersions = "1.0";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_splashscreen2_splashscreen2__["a" /* Splashscreen2Page */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.notificationProvider.init();
            //screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            _this.ga.startTrackerWithId('UA-115566225-1')
                .then(function () {
                console.log('Google analytics is ready now');
                //the component is ready and you can call any method here
                _this.ga.debugMode();
                _this.ga.setAllowIDFACollection(true);
            })
                .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        });
        platform.registerBackButtonAction(null, 101); // disable android back button
        if (window.localStorage.getItem("parentPhoto") != null) {
            this.parentImg = window.localStorage.getItem("parentPhoto");
        }
        else {
            this.parentImg = "assets/imgs/parent.png";
        }
        if (window.localStorage.getItem("parentFirstName") != null && window.localStorage.getItem("parentLastName") != null) {
            //globalProvider.parentFirstName = window.localStorage.getItem("parentFirstName");
            //globalProvider.parentLastName = window.localStorage.getItem("parentLastName");
            this.parentFullName = window.localStorage.getItem("parentFirstName") + " " + window.localStorage.getItem("parentLastName");
        }
    }
    // pushSetup(){
    //     const options: PushOptions = {
    //         android: {
    //             senderID:'586452150795'
    //         },
    //         ios: {
    //             alert: true,
    //             badge: true,
    //             sound: true,
    //             fcmSandbox: true
    //         },
    //     };
    //
    //     const pushObject: PushObject = this.push.init(options);
    //
    //
    //     pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    //
    //     pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    //
    //     pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    // }
    MyApp.prototype.myChildren = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_my_children_my_children__["a" /* MyChildrenPage */]);
    };
    MyApp.prototype.myFamily = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_invited_family_invited_family__["a" /* InvitedFamilyPage */]);
    };
    MyApp.prototype.settings = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.feedback = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_feedback_feedback__["a" /* FeedbackPage */]);
    };
    MyApp.prototype.contactUs = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */]);
    };
    MyApp.prototype.aboutStudy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_about_study_about_study__["a" /* AboutStudyPage */]);
    };
    MyApp.prototype.faq = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_faq_faq__["a" /* FaqPage */]);
    };
    MyApp.prototype.acknowledgement = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_acknowledgement_acknowledgement__["a" /* AcknowledgementPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/app/app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n        <ion-navbar color="navbarColor" hideBackButton="true">\n        <ion-item no-lines style="margin-top:10px; background-color: transparent">\n            <ion-avatar item-start style="margin-left:-5px">\n                <img src="{{parentImg}}">\n            </ion-avatar>\n\n            <h6 style="color: white"><b>{{parentFullName}}</b></h6>\n        </ion-item>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <ion-item menuClose=""  (click)="myChildren()" >\n                My Child(ren)\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item menuClose="" (click)="myFamily()">\n                Invited Family\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item menuClose="" (click)="settings()">\n                Settings\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item menuClose="" (click)="feedback()">\n                Feedback\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item menuClose="" (click)="contactUs()">\n                Contact Us\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item menuClose="" (click)="aboutStudy()">\n                About the App\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item menuClose="" (click)="faq()">\n                FAQs\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item menuClose="" (click)="acknowledgement()">\n                Acknowledgement\n                <ion-icon item-right color="primary" name="ios-arrow-forward"></ion-icon>\n            </ion-item>\n            <ion-item-divider>\n                App Version v{{appVersions}}\n            </ion-item-divider>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mthe777/Documents/test/see-how-they-grow-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_13__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__["a" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 267,
	"./af.js": 267,
	"./ar": 268,
	"./ar-dz": 269,
	"./ar-dz.js": 269,
	"./ar-kw": 270,
	"./ar-kw.js": 270,
	"./ar-ly": 271,
	"./ar-ly.js": 271,
	"./ar-ma": 272,
	"./ar-ma.js": 272,
	"./ar-sa": 273,
	"./ar-sa.js": 273,
	"./ar-tn": 274,
	"./ar-tn.js": 274,
	"./ar.js": 268,
	"./az": 275,
	"./az.js": 275,
	"./be": 276,
	"./be.js": 276,
	"./bg": 277,
	"./bg.js": 277,
	"./bm": 278,
	"./bm.js": 278,
	"./bn": 279,
	"./bn.js": 279,
	"./bo": 280,
	"./bo.js": 280,
	"./br": 281,
	"./br.js": 281,
	"./bs": 282,
	"./bs.js": 282,
	"./ca": 283,
	"./ca.js": 283,
	"./cs": 284,
	"./cs.js": 284,
	"./cv": 285,
	"./cv.js": 285,
	"./cy": 286,
	"./cy.js": 286,
	"./da": 287,
	"./da.js": 287,
	"./de": 288,
	"./de-at": 289,
	"./de-at.js": 289,
	"./de-ch": 290,
	"./de-ch.js": 290,
	"./de.js": 288,
	"./dv": 291,
	"./dv.js": 291,
	"./el": 292,
	"./el.js": 292,
	"./en-au": 293,
	"./en-au.js": 293,
	"./en-ca": 294,
	"./en-ca.js": 294,
	"./en-gb": 295,
	"./en-gb.js": 295,
	"./en-ie": 296,
	"./en-ie.js": 296,
	"./en-il": 297,
	"./en-il.js": 297,
	"./en-nz": 298,
	"./en-nz.js": 298,
	"./eo": 299,
	"./eo.js": 299,
	"./es": 300,
	"./es-do": 301,
	"./es-do.js": 301,
	"./es-us": 302,
	"./es-us.js": 302,
	"./es.js": 300,
	"./et": 303,
	"./et.js": 303,
	"./eu": 304,
	"./eu.js": 304,
	"./fa": 305,
	"./fa.js": 305,
	"./fi": 306,
	"./fi.js": 306,
	"./fo": 307,
	"./fo.js": 307,
	"./fr": 308,
	"./fr-ca": 309,
	"./fr-ca.js": 309,
	"./fr-ch": 310,
	"./fr-ch.js": 310,
	"./fr.js": 308,
	"./fy": 311,
	"./fy.js": 311,
	"./gd": 312,
	"./gd.js": 312,
	"./gl": 313,
	"./gl.js": 313,
	"./gom-latn": 314,
	"./gom-latn.js": 314,
	"./gu": 315,
	"./gu.js": 315,
	"./he": 316,
	"./he.js": 316,
	"./hi": 317,
	"./hi.js": 317,
	"./hr": 318,
	"./hr.js": 318,
	"./hu": 319,
	"./hu.js": 319,
	"./hy-am": 320,
	"./hy-am.js": 320,
	"./id": 321,
	"./id.js": 321,
	"./is": 322,
	"./is.js": 322,
	"./it": 323,
	"./it.js": 323,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mn": 340,
	"./mn.js": 340,
	"./mr": 341,
	"./mr.js": 341,
	"./ms": 342,
	"./ms-my": 343,
	"./ms-my.js": 343,
	"./ms.js": 342,
	"./mt": 344,
	"./mt.js": 344,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./pa-in": 351,
	"./pa-in.js": 351,
	"./pl": 352,
	"./pl.js": 352,
	"./pt": 353,
	"./pt-br": 354,
	"./pt-br.js": 354,
	"./pt.js": 353,
	"./ro": 355,
	"./ro.js": 355,
	"./ru": 356,
	"./ru.js": 356,
	"./sd": 357,
	"./sd.js": 357,
	"./se": 358,
	"./se.js": 358,
	"./si": 359,
	"./si.js": 359,
	"./sk": 360,
	"./sk.js": 360,
	"./sl": 361,
	"./sl.js": 361,
	"./sq": 362,
	"./sq.js": 362,
	"./sr": 363,
	"./sr-cyrl": 364,
	"./sr-cyrl.js": 364,
	"./sr.js": 363,
	"./ss": 365,
	"./ss.js": 365,
	"./sv": 366,
	"./sv.js": 366,
	"./sw": 367,
	"./sw.js": 367,
	"./ta": 368,
	"./ta.js": 368,
	"./te": 369,
	"./te.js": 369,
	"./tet": 370,
	"./tet.js": 370,
	"./tg": 371,
	"./tg.js": 371,
	"./th": 372,
	"./th.js": 372,
	"./tl-ph": 373,
	"./tl-ph.js": 373,
	"./tlh": 374,
	"./tlh.js": 374,
	"./tr": 375,
	"./tr.js": 375,
	"./tzl": 376,
	"./tzl.js": 376,
	"./tzm": 377,
	"./tzm-latn": 378,
	"./tzm-latn.js": 378,
	"./tzm.js": 377,
	"./ug-cn": 379,
	"./ug-cn.js": 379,
	"./uk": 380,
	"./uk.js": 380,
	"./ur": 381,
	"./ur.js": 381,
	"./uz": 382,
	"./uz-latn": 383,
	"./uz-latn.js": 383,
	"./uz.js": 382,
	"./vi": 384,
	"./vi.js": 384,
	"./x-pseudo": 385,
	"./x-pseudo.js": 385,
	"./yo": 386,
	"./yo.js": 386,
	"./zh-cn": 387,
	"./zh-cn.js": 387,
	"./zh-hk": 388,
	"./zh-hk.js": 388,
	"./zh-tw": 389,
	"./zh-tw.js": 389
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 483;

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(15);
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
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsersProvider = /** @class */ (function () {
    function UsersProvider(global, http) {
        this.global = global;
        this.http = http;
        this.answers = [];
        this.headers = new Headers().append('Content-Type', 'application/json');
        console.log('Hello UsersProvider Provider');
    }
    UsersProvider.prototype.addParent = function () {
        var _this = this;
        var parentData = {
            "mail": [{ "value": "manoj1@abc.com" }],
            "pass": [{ "value": "uuid" }],
            "field_uuid": [{ "value": "device uuid" }],
            "field_first_name": [{ "value": "First" }],
            "field_last_name": [{ "value": "Last" }],
            "field_mobile_number": [{ "value": "+64 10123123" }],
            "field_ethinicity": [{ "value": "Asian" }, { "value": "Maori" }],
            "field_answer": [{ "value": "PISAccepted" }, { "value": "ConsentFormAccepted" }, { "value": "Q1-1" }, { "value": "Q2-2" }, { "value": "Q3-1" }, { "value": "Q4-1" }, { "value": "Q5-1" }, { "value": "Q5C-dfdifjdsiff" }]
        };
        /*return this.http.post("https://stage.api.seehowtheygrow.nihi.auckland.ac.nz/nihi_rest_api/registration?_format=json", JSON.stringify(parentData), {
          headers: { 'Content-Type': 'application/json'}  }); */
        return new Promise(function (resolve, reject) {
            _this.http.post("https://stage.api.seehowtheygrow.nihi.auckland.ac.nz/nihi_rest_api/registration?_format=json", JSON.stringify(parentData), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsersProvider.prototype.addParent2 = function () {
        return this.http.get("https://restcountries.eu/rest/v2/all").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    UsersProvider.prototype.extractData = function (res) {
        var body = res;
        alert("xcxcxcxcxc===" + body);
        return body || {};
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(247);
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
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(globalProvider, http, storage) {
        this.globalProvider = globalProvider;
        this.http = http;
        this.storage = storage;
        this.answer2 = null;
        this.answer3 = null;
        this.answer4 = null;
        this.answer5 = null;
        this.childCount = 0;
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.addParent = function () {
        var _this = this;
        window.localStorage.setItem("uuid", this.globalProvider.UUID);
        window.localStorage.setItem("parentEmail", this.globalProvider.parentEmail);
        window.localStorage.setItem("parentFirstName", this.globalProvider.parentFirstName);
        window.localStorage.setItem("parentLastName", this.globalProvider.parentLastName);
        window.localStorage.setItem("parentMobileNumber", this.globalProvider.parentMobileNumber);
        window.localStorage.setItem("parentPostCode", this.globalProvider.parentPostcode);
        window.localStorage.setItem("parentGender", this.globalProvider.parentGender);
        window.localStorage.setItem("parentEthnicity", this.globalProvider.parentEthnicity);
        window.localStorage.setItem("parentRelationship", this.globalProvider.parentRelationshipToChild);
        window.localStorage.setItem("parentAge", this.globalProvider.parentAge);
        window.localStorage.setItem("parentRegion", this.globalProvider.parentRegion);
        var parentData = {
            "mail": [{ "value": this.globalProvider.parentEmail }],
            "pass": [{ "value": this.globalProvider.UUID }],
            //"pass": [{"value": "123456"}],
            "field_uuid": [{ "value": this.globalProvider.notificationToken }],
            //"field_uuid": [{"value": "123456"}],
            "field_first_name": [{ "value": this.globalProvider.parentFirstName }],
            "field_last_name": [{ "value": this.globalProvider.parentLastName }],
            "field_code": [{ "value": this.globalProvider.parentInvitationCode }],
            "user_picture": [{ "target_id": this.picIdParent }],
            "field_location": [{ "value": this.globalProvider.parentRegion }],
            "field_age": [{ "value": this.globalProvider.parentAge }],
            "field_gender": [{ "value": this.globalProvider.parentGender }],
            "field_postcode": [{ "value": this.globalProvider.parentPostcode }],
            "field_relationship": [{ "value": this.globalProvider.parentRelationshipToChild }],
            "field_mobile_number": [{ "value": this.globalProvider.parentMobileNumber }],
            "field_ethnicity": [{ "value": this.globalProvider.parentEthnicity[0] }, { "value": this.globalProvider.parentEthnicity[1] }, { "value": this.globalProvider.parentEthnicity[2] }, { "value": this.globalProvider.parentEthnicity[3] },
                { "value": this.globalProvider.parentEthnicity[4] }, { "value": this.globalProvider.parentEthnicity[5] }, { "value": this.globalProvider.parentEthnicity[6] }, { "value": this.globalProvider.parentEthnicity[7] }],
            "field_q1": [{ "value": this.answer1 }],
            "field_q2": [{ "value": this.answer2 }],
            "field_q3": [{ "value": this.answer3 }],
            "field_q4": [{ "value": this.answer4 }],
            "field_q5": [{ "value": this.answer5 }],
            "field_q5_comment": [{ "value": this.answer5_comment }],
            "field_pis": [{ "value": "PISAccepted" }],
            "field_consent": [{ "value": "ConsentFormAccepted" }],
        };
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json');
        //.set('X-CSRF-Token', this.globalProvider.parentCSRF_Token);
        console.log(JSON.stringify(parentData) + "!!!!!!!!!!!!!!!");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/nihi_rest_api/registration?_format=json", JSON.stringify(parentData), { headers: header })
                .subscribe(function (res) {
                _this.parentUID = JSON.parse(JSON.stringify(res)).uid[0].value;
                window.localStorage.setItem("parentUID", _this.parentUID);
                if (JSON.parse(JSON.stringify(res)).field_is_primary[0].value == true) {
                    window.localStorage.setItem("primaryUser", "true");
                }
                _this.globalProvider.familyId = JSON.parse(JSON.stringify(res)).field_family_id[0].value;
                window.localStorage.setItem("familyId", _this.globalProvider.familyId);
                console.log("parent UID------" + JSON.parse(JSON.stringify(res)).uid[0].value);
                resolve(res);
            }, function (err) {
                console.log("add parent error" + err);
                reject(err);
            });
        });
    };
    //// image upload ///////
    ApiProvider.prototype.uploadPhotoParent = function (image) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
        if (this.globalProvider.parentCSRF_Token == null) {
            header = header.set('Content-Type', 'application/octet-stream')
                .set('Content-Disposition', 'file; filename="test.jpg"');
        }
        else {
            header = header.set('Content-Type', 'application/octet-stream')
                .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
                .set('Content-Disposition', 'file; filename="test.jpg"');
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/file/upload/node/file/field_upload_file?_format=json", image, { headers: header })
                .subscribe(function (res) {
                _this.picIdParent = JSON.parse(JSON.stringify(res)).fid[0].value;
                console.log(JSON.parse(JSON.stringify(res)).fid[0].value);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //// image upload ///////
    ApiProvider.prototype.uploadPhotoChild = function (image) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
        if (this.globalProvider.parentCSRF_Token == null) {
            header = header.set('Content-Type', 'application/octet-stream')
                .set('Content-Disposition', 'file; filename="test.jpg"');
        }
        else {
            header = header.set('Content-Type', 'application/octet-stream')
                .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
                .set('Content-Disposition', 'file; filename="test.jpg"');
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/file/upload/node/file/field_upload_file?_format=json", image, { headers: header })
                .subscribe(function (res) {
                _this.picIdChild = JSON.parse(JSON.stringify(res)).fid[0].value;
                console.log(JSON.parse(JSON.stringify(res)).fid[0].value);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //////login/////
    ApiProvider.prototype.login = function () {
        var _this = this;
        var user = {
            "name": this.globalProvider.parentEmail,
            "pass": this.globalProvider.UUID
            //"pass": "123456"
        };
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/user/login?_format=json", user, { headers: header })
                .subscribe(function (res) {
                _this.globalProvider.parentCSRF_Token = JSON.parse(JSON.stringify(res)).csrf_token;
                window.localStorage.setItem("token", _this.globalProvider.parentCSRF_Token);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ///// adding child/////
    ApiProvider.prototype.addChild = function () {
        var _this = this;
        var childData = [
            {
                "title": [{ "value": this.globalProvider.childFirstName }],
                "field_term": [{ "value": this.globalProvider.childWeeksBirth }],
                "field_sex": [{ "value": this.globalProvider.childSex }],
                "field_same_household": [{ "value": this.globalProvider.childHousehold }],
                "field_upload_image": [{ "target_id": this.picIdChild }],
                "field_date_of_birth": [{ "value": this.globalProvider.childDateBirth }]
            }
        ];
        window.localStorage.setItem("childName", this.globalProvider.childFirstName);
        window.localStorage.setItem("childSex", this.globalProvider.childSex);
        window.localStorage.setItem("childDateOffBirth", this.globalProvider.childDateBirth);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("parentEmail") != null && window.localStorage.getItem("token")) {
            this.globalProvider.parentEmail = window.localStorage.getItem("parentEmail");
            this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
        }
        var authDatas = window.btoa(this.globalProvider.parentEmail + ':' + window.localStorage.getItem("uuid"));
        //let authDatas = window.btoa(this.globalProvider.parentEmail + ':' + "123456");
        //alert("uuuuuuuuuu===="+authData);
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
            .set('Authorization', 'Basic ' + authDatas);
        window.localStorage.setItem("authData", authDatas);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/nihi_rest_api/child?_format=json", JSON.stringify(childData), { headers: header })
                .subscribe(function (res) {
                //alert("child---"+JSON.parse(JSON.stringify(res))[0].uid[0].target_id);
                window.localStorage.setItem('childIds', JSON.parse(JSON.stringify(res))[0].nid[0].value);
                _this.childCount++;
                window.localStorage.setItem('childCount', String(_this.childCount));
                resolve(res);
            }, function (err) {
                console.log("child register error" + JSON.stringify(err));
                reject(err);
            });
        });
    };
    /////////////////////////////////////////////////update child///////////////////////////////////////////////////
    ApiProvider.prototype.updateChild = function (firstName, dateOfBirth, sex, houseHold, weeksAtBirth, nid) {
        var _this = this;
        var childData = {
            "title": [{ "value": firstName }],
            "field_term": [{ "value": weeksAtBirth }],
            "field_sex": [{ "value": sex }],
            "field_same_household": [{ "value": houseHold }],
            "field_upload_image": [{ "target_id": this.picIdChild }],
            "field_date_of_birth": [{ "value": dateOfBirth }],
            "type": [{ "target_id": "child" }]
        };
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.globalProvider.staging_url + "/node/" + nid + "?_format=json", JSON.stringify(childData), { headers: header })
                .subscribe(function (res) {
                console.log("child updated");
                resolve(res);
            }, function (err) {
                console.log("child update error===========" + JSON.stringify(err));
                reject(err);
            });
        });
    };
    /// invite users/////
    ApiProvider.prototype.inviteUsers = function () {
        var _this = this;
        var inviteUserDate = {
            "type": [
                {
                    "target_id": "invitation"
                }
            ],
            "title": [
                {
                    "value": "anything"
                }
            ],
            "field_email": [
                {
                    "value": this.globalProvider.inviteeEmail
                }
            ],
            "field_name": [
                {
                    "value": this.globalProvider.inviteeName
                }
            ]
        };
        //return this.http.post(this.apiUrl+"/registration?_format=json", JSON.stringify(parentData), {
        //  headers: { 'Content-Type': 'application/json'}  });
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null && window.localStorage.getItem("token") != null) {
            this.authData = window.localStorage.getItem("authData");
            this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
            header = header.set('Content-Type', 'application/json')
                .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
                .set('Authorization', 'Basic ' + this.authData);
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/node?_format=json", JSON.stringify(inviteUserDate), { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /// Add Measurements/////
    ApiProvider.prototype.addMeasurements = function (val1, val2, val3, val4, val5, val6, val7, val8, val9, val10) {
        var _this = this;
        var addMeasurementDate = {
            "type": [
                {
                    "target_id": "measurement"
                }
            ],
            "title": [
                {
                    "value": "anything"
                }
            ],
            "field_child": [
                {
                    "target_id": val1
                }
            ],
            "field_date": [
                {
                    "value": val2
                }
            ],
            "field_weight": [
                {
                    "value": val3
                }
            ],
            "field_length": [
                {
                    "value": val4
                }
            ],
            "field_head_circumference": [
                {
                    "value": val5
                }
            ],
            "field_is_professional": [
                {
                    "value": val6
                }
            ],
            "field_weight_centile": [
                {
                    "value": val7
                }
            ],
            "field_length_centile": [
                {
                    "value": val8
                }
            ],
            "field_head_cir_centile": [
                {
                    "value": val9
                }
            ],
            "field_age": [
                {
                    "value": val10
                }
            ]
        };
        //return this.http.post(this.apiUrl+"/registration?_format=json", JSON.stringify(parentData), {
        //  headers: { 'Content-Type': 'application/json'}  });
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
        }
        console.log("===authdata====" + this.authData);
        console.log("===token====" + this.globalProvider.parentCSRF_Token);
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/nihi_rest_api/measurement?_format=json", JSON.stringify(addMeasurementDate), { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /// invite users/////
    ApiProvider.prototype.contactUs = function (subject, message) {
        var _this = this;
        var contactDate = {
            "type": [
                {
                    "target_id": "contact"
                }
            ],
            "title": [
                {
                    "value": subject
                }
            ],
            "body": [
                {
                    "value": message
                }
            ]
        };
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/node?_format=json", JSON.stringify(contactDate), { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                //alert("eeerrrrr=====contact"+err);
                reject(err);
            });
        });
    };
    ApiProvider.prototype.updateParent = function () {
        var _this = this;
        //window.localStorage.setItem("parentEmail", this.globalProvider.parentEmail);
        window.localStorage.setItem("parentFirstName", this.globalProvider.parentFirstName);
        window.localStorage.setItem("parentLastName", this.globalProvider.parentLastName);
        window.localStorage.setItem("parentMobileNumber", this.globalProvider.parentMobileNumber);
        window.localStorage.setItem("parentPostCode", this.globalProvider.parentPostcode);
        window.localStorage.setItem("parentGender", this.globalProvider.parentGender);
        window.localStorage.setItem("parentEthnicity", this.globalProvider.parentEthnicity);
        window.localStorage.setItem("parentRelationship", this.globalProvider.parentRelationshipToChild);
        window.localStorage.setItem("parentAge", this.globalProvider.parentAge);
        window.localStorage.setItem("parentRegion", this.globalProvider.parentRegion);
        console.log("parent------000000000 uid" + window.localStorage.getItem("parentUID"));
        var parentData = {
            "field_first_name": [{ "value": this.globalProvider.parentFirstName }],
            "field_last_name": [{ "value": this.globalProvider.parentLastName }],
            "user_picture": [{ "target_id": this.picIdParent }],
            "field_location": [{ "value": this.globalProvider.parentRegion }],
            "field_age": [{ "value": this.globalProvider.parentAge }],
            "field_gender": [{ "value": this.globalProvider.parentGender }],
            "field_postcode": [{ "value": this.globalProvider.parentPostcode }],
            "field_relationship": [{ "value": this.globalProvider.parentRelationshipToChild }],
            "field_mobile_number": [{ "value": this.globalProvider.parentMobileNumber }],
            "field_ethnicity": [{ "value": this.globalProvider.parentEthnicity[0] }, { "value": this.globalProvider.parentEthnicity[1] }, { "value": this.globalProvider.parentEthnicity[2] }, { "value": this.globalProvider.parentEthnicity[3] },
                { "value": this.globalProvider.parentEthnicity[4] }, { "value": this.globalProvider.parentEthnicity[5] }, { "value": this.globalProvider.parentEthnicity[6] }, { "value": this.globalProvider.parentEthnicity[7] }]
        };
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.globalProvider.staging_url + "/user/" + window.localStorage.getItem("parentUID") + "?_format=json", JSON.stringify(parentData), { headers: header })
                .subscribe(function (res) {
                console.log("parent updated");
                resolve(res);
            }, function (err) {
                console.log("update parent error" + JSON.stringify(err));
                reject(err);
            });
        });
    };
    ApiProvider.prototype.addFeedback = function (val1, val2, val3, val4, val5, val6, val7) {
        var _this = this;
        var feedbackData = {
            "type": [
                {
                    "target_id": "feedback"
                }
            ],
            "title": [
                {
                    "value": "anything"
                }
            ],
            "field_ans1": [
                {
                    "value": val1
                }
            ],
            "field_ans2": [
                {
                    "value": val2
                }
            ],
            "field_ans3": [
                {
                    "value": val3
                }
            ],
            "field_ans4": [
                {
                    "value": val4
                }
            ],
            "field_ans5": [
                { "value": val5[0] }, { "value": val5[1] }, { "value": val5[2] }, { "value": val5[3] }, { "value": val5[4] }, { "value": val5[5] }, { "value": val5[6] }, { "value": val5[7] }, { "value": val5[8] }
            ],
            "field_ans6": [
                {
                    "value": val6
                }
            ],
            "field_ans7": [
                {
                    "value": val7
                }
            ],
        };
        //return this.http.post(this.apiUrl+"/registration?_format=json", JSON.stringify(parentData), {
        //  headers: { 'Content-Type': 'application/json'}  });
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/node?_format=json", JSON.stringify(feedbackData), { headers: header })
                .subscribe(function (res) {
                console.log(JSON.stringify(res) + "feedback====");
                resolve(res);
            }, function (err) {
                console.log(err);
                //alert("eeerrrrr=====contact"+err);
                reject(err);
            });
        });
    };
    //// image uploads ///////
    ApiProvider.prototype.uploadPhotoOther = function (image) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
        header = header.set('Content-Type', 'application/octet-stream')
            .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
            .set('Content-Disposition', 'file; filename="test.jpg"')
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/file/upload/node/file/field_upload_file?_format=json", image, { headers: header })
                .subscribe(function (res) {
                //alert("pic id - 1====" +this.picId);
                _this.picId = JSON.parse(JSON.stringify(res)).fid[0].value;
                //alert("pic id - 2====" +this.picId);
                console.log("upload photo other" + JSON.parse(JSON.stringify(res)).fid[0].value);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////// updateParentPhoto //////////
    ApiProvider.prototype.updateParentPhoto = function (image) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
        header = header.set('Content-Type', 'application/octet-stream')
            .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
            .set('Content-Disposition', 'file; filename="test.jpg"')
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/file/upload/node/file/field_upload_file?_format=json", image, { headers: header })
                .subscribe(function (res) {
                _this.picIdParent = JSON.parse(JSON.stringify(res)).fid[0].value;
                console.log("upload photo other" + JSON.parse(JSON.stringify(res)).fid[0].value);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////// updateChildPhoto /////////////
    ApiProvider.prototype.updateChildPhoto = function (image) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
        header = header.set('Content-Type', 'application/octet-stream')
            .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
            .set('Content-Disposition', 'file; filename="test.jpg"')
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/file/upload/node/file/field_upload_file?_format=json", image, { headers: header })
                .subscribe(function (res) {
                //alert("pic id 111 ======"+this.picIdChild);
                _this.picIdChild = JSON.parse(JSON.stringify(res)).fid[0].value;
                //alert("pic id 2222 ======"+this.picIdChild);
                console.log("upload photo other" + JSON.parse(JSON.stringify(res)).fid[0].value);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //////////////////// add memory////////////////////
    ApiProvider.prototype.addMemory = function (val1) {
        //alert("family id"+ window.localStorage.getItem("familyId"));
        //alert("upload image id"+this.picId);
        var _this = this;
        var memoryData = {
            "type": [
                {
                    "target_id": "memory"
                }
            ],
            "title": [
                {
                    "value": "anything"
                }
            ],
            "field_family_id": [
                {
                    "value": window.localStorage.getItem("familyId")
                }
            ],
            "field_upload_image": [
                {
                    "target_id": this.picId
                }
            ],
            "body": [
                {
                    "value": val1
                }
            ],
            "field_like": [
                {
                    "value": 0
                }
            ]
        };
        //return this.http.post(this.apiUrl+"/registration?_format=json", JSON.stringify(parentData), {
        //  headers: { 'Content-Type': 'application/json'}  });
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/node?_format=json", JSON.stringify(memoryData), { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                //alert("eeerrrrr=====contact"+err);
                reject(err);
            });
        });
    };
    /////////////////////////////get memory//////////////////////////
    ApiProvider.prototype.getMemoryList = function () {
        var _this = this;
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.globalProvider.staging_url + "/nihi_rest_api/memory/" + window.localStorage.getItem("familyId") + "?_format=json", { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    ApiProvider.prototype.addMemoryComment = function (comments, nid) {
        var _this = this;
        var comment = {
            "comment_type": [
                {
                    "target_id": "comment"
                }
            ],
            "entity_id": [
                {
                    "target_id": nid
                }
            ],
            "entity_type": [
                {
                    "value": "node"
                }
            ],
            "field_name": [
                {
                    "value": "comment"
                }
            ],
            "comment_body": [
                {
                    "value": comments
                }
            ]
        };
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/nihi_rest_api/memory_comment?_format=json", JSON.stringify(comment), { headers: header })
                .subscribe(function (res) {
                //alert("hariiiii" + JSON.stringify(res));
                resolve(res);
            }, function (err) {
                //alert("naaaaaaa" + JSON.stringify(err));
                console.log(err);
                //alert("eeerrrrr=====contact"+err);
                reject(err);
            });
        });
    };
    ApiProvider.prototype.getMemoryComment = function (val) {
        var _this = this;
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.globalProvider.staging_url + "/nihi_rest_api/memory/comment/" + val + "?_format=json", { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    ApiProvider.prototype.getNotifications = function () {
        var _this = this;
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.globalProvider.staging_url + "/nihi_rest_api/notification?_format=json", { headers: header })
                .subscribe(function (res) {
                for (var i = 0; i < JSON.parse(JSON.stringify(res)).length; i++) {
                    if (JSON.parse(JSON.stringify(res))[i].field_read[0].value == false) {
                        window.localStorage.setItem("unreadNotifications", 'yes');
                    }
                }
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    ApiProvider.prototype.updateNotifications = function (noti_id) {
        var _this = this;
        var notiData = {
            "type": [
                {
                    "target_id": "notification_out"
                }
            ],
            "field_read": [
                {
                    "value": true
                }
            ]
        };
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.globalProvider.staging_url + "/node/" + noti_id + "?_format=json", JSON.stringify(notiData), { headers: header })
                .subscribe(function (res) {
                console.log("notifications read");
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////// get child list ///////////
    ApiProvider.prototype.getChildrenList = function () {
        var _this = this;
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.globalProvider.staging_url + "/nihi_rest_api/children?_format=json", { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    /////////get measurements /////////////
    ApiProvider.prototype.getMeasurements = function (childId) {
        var _this = this;
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.globalProvider.staging_url + "/nihi_rest_api/measurement/" + childId + "?_format=json", { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    /////////get secondary users /////////////
    ApiProvider.prototype.getSecondaryUsers = function (familyId) {
        var _this = this;
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.globalProvider.staging_url + "/nihi_rest_api/secondary/" + familyId + "?_format=json", { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    //////// delete secondary user////////////
    ApiProvider.prototype.deleteSecondaryUser = function (uid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        console.log("auth====" + this.authData);
        console.log("token====" + this.token);
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.globalProvider.staging_url + "/nihi_rest_api/disable_sec_user/" + uid + "?_format=json", null, { headers: header })
                .subscribe(function (res) {
                //alert("hariiiii" + JSON.stringify(res));
                resolve(res);
            }, function (err) {
                //alert("naaaaaaa" + JSON.stringify(err));
                console.log(err);
                //alert("eeerrrrr=====contact"+err);
                reject(err);
            });
        });
    };
    //////// add memory loves///////////////
    ApiProvider.prototype.addMemoryLoves = function (nid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null) {
            this.authData = window.localStorage.getItem("authData");
        }
        if (window.localStorage.getItem("token") != null) {
            this.token = window.localStorage.getItem("token");
        }
        header = header.set('Content-Type', 'application/json')
            .set('X-CSRF-Token', this.token)
            .set('Authorization', 'Basic ' + this.authData);
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.globalProvider.staging_url + "/nihi_rest_api/memory_like/" + nid + "?_format=json", null, { headers: header })
                .subscribe(function (res) {
                //alert("hariiiii" + JSON.stringify(res));
                resolve(res);
            }, function (err) {
                //alert("naaaaaaa" + JSON.stringify(err));
                console.log(err);
                //alert("eeerrrrr=====contact"+err);
                reject(err);
            });
        });
    };
    //////////////////////// track page view /////////////////////////
    ApiProvider.prototype.trackPage = function (title) {
        var _this = this;
        var pageInfo = {
            "type": [
                {
                    "target_id": "event"
                }
            ],
            "title": [
                {
                    "value": title
                }
            ]
        };
        //return this.http.post(this.apiUrl+"/registration?_format=json", JSON.stringify(parentData), {
        //  headers: { 'Content-Type': 'application/json'}  });
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        if (window.localStorage.getItem("authData") != null && window.localStorage.getItem("token") != null) {
            this.authData = window.localStorage.getItem("authData");
            this.globalProvider.parentCSRF_Token = window.localStorage.getItem("token");
            header = header.set('Content-Type', 'application/json')
                .set('X-CSRF-Token', this.globalProvider.parentCSRF_Token)
                .set('Authorization', 'Basic ' + this.authData);
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.globalProvider.staging_url + "/node?_format=json", JSON.stringify(pageInfo), { headers: header })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notifications_notifications__ = __webpack_require__(24);
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
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsProvider = /** @class */ (function () {
    function NotificationsProvider(http, api, push, app, device, global, alertCtrl) {
        var _this = this;
        this.http = http;
        this.api = api;
        this.push = push;
        this.app = app;
        this.device = device;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.onPushError = function (data) {
            (function (error) { return console.error('Error with Push plugin' + error); });
        };
        this.onLocalTriggered = function (data) {
            console.log('onLocalTriggered', data);
            if ('android' == window.cordova.platformId) {
                console.log('onLocalTriggered is ignored on Android');
                return;
            }
            //this.updateNotifications();
        };
        this.onLocalClicked = function (data) {
            console.log('onLocalClicked', data);
            if ('android' == window.cordova.platformId) {
                console.log('onLocalClicked is ignored on Android');
                return;
            }
        };
        this.onPushRegistered = function (data) {
            console.log("device token:" + data.registrationId + ", uuid:" + _this.device.uuid);
            //alert(data.registrationId);
            _this.global.notificationToken = data.registrationId;
            console.log("ttttttt", data.registrationId);
            // let device: DeviceToken = {
            //     device_id: this.device.uuid,
            //     token: data.registrationId
            // }
            // this.api.postDevice(device)
            //     .then(res => {
            //         console.log('postDevice', res)
            //     })
            //     .catch(err => {
            //         console.log('postDevice err', err)
            //     })
        };
        this.onPushNotified = function (data) {
            console.log('onPushNotified', data);
            //this.updateNotifications();
            if (data.additionalData.foreground) {
                _this.localNoti(data.title, data.message);
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_notifications_notifications__["a" /* NotificationsPage */]);
            }
            else {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_notifications_notifications__["a" /* NotificationsPage */]);
            }
            // if (data.additionalData.foreground){
            //     let confirmAlert = this.alertCtrl.create({
            //         title: data.title,
            //         message: data.message,
            //         buttons: [{
            //             text: 'Ignore',
            //             role: 'cancel'
            //         }, {
            //             text: 'View',
            //             handler: () => {
            //                 this.nav.push(NotificationsPage);
            //             }
            //         }]
            //     });
            //     confirmAlert.present();
            // }else {
            //     console.log('on else');
            //     this.nav.push(NotificationsPage);
            //     console.log('Push notification clicked');
            // }
            // if(data.additionalData.coldstart){
            //     //redirecturl will be additional key in your payload to hold the relative url for redirection
            //     this.nav.push(NotificationsPage);
            //
            // }
        };
        this.localNoti = function (title, text) {
            console.log("localNoti title: " + title + " text: " + text);
            window.cordova.plugins.notification.local.schedule({
                title: title,
                text: text,
                icon: 'res://icon'
            });
        };
        console.log('Hello NotificationsProvider Provider');
        this.nav = app.getActiveNav();
    }
    NotificationsProvider.prototype.init = function () {
        console.log('NotificationProvider init');
        if (window.cordova) {
            this.initLocalNotification();
            this.initPushNotification();
        }
        //this.updateNotifications();
    };
    NotificationsProvider.prototype.initLocalNotification = function () {
        //if ('android' != window.cordova.platformId) {
        window.cordova.plugins.notification.local.on("trigger", this.onLocalTriggered, this);
        window.cordova.plugins.notification.local.on('click', this.onLocalClicked, this);
        window.cordova.plugins.notification.hasPermission(function (data) { if (!data.isEnabled) {
            window.cordova.plugins.notification.grantPermission();
        } });
        //}
    };
    NotificationsProvider.prototype.initPushNotification = function () {
        var options = {
            android: {
                // senderID: '600992923443',
                // forceShow: true,
                icon: 'icon',
            },
            ios: {
                // senderID: '600992923443',
                alert: true,
                badge: true,
                sound: true,
                // gcmSandbox: true
                fcmSandbox: true
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(this.onPushRegistered);
        pushObject.on('notification').subscribe(this.onPushNotified);
        pushObject.on('error').subscribe(this.onPushError);
    };
    NotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_5__global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NotificationsProvider);
    return NotificationsProvider;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

},[421]);
//# sourceMappingURL=main.js.map