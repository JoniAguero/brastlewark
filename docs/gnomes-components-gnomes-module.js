(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gnomes-components-gnomes-module"],{

/***/ "./src/app/gnomes-components/dashboard/dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/gnomes-components/dashboard/dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvZGFzaGJvYXJkL0Q6XFxQcm95ZWN0b3NcXGJhcmNlbG9uYVxcZGljaWVtYnJlXFxhc3Nlc3NtZW50XFxmcm9udC1lbmQvc3JjXFxhcHBcXGdub21lcy1jb21wb25lbnRzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2dub21lcy1jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/gnomes-components/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/gnomes-components/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: "<app-navbar></app-navbar>\n              <div class=\"dashboard-container\">\n                <router-outlet></router-outlet>\n              </div>\n             <app-footer></app-footer>",
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/gnomes-components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/gnomes-components/details-gnome/details-gnome.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/gnomes-components/details-gnome/details-gnome.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-container {\n  display: grid;\n  background-color: rgba(63, 81, 181, 0.9);\n  padding: 10px 10px;\n  border-radius: 5px;\n  box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.75); }\n\n.details-title {\n  font-size: 1.6em;\n  margin: 0;\n  margin-left: 25px; }\n\n.details-info {\n  display: flex; }\n\n.details-info > div, p {\n  display: inline; }\n\n.details-info-data {\n  width: 100%;\n  font-size: 20px;\n  margin-left: 15px;\n  margin-top: 5px; }\n\n.arrow_right {\n  -webkit-animation: right .5s linear infinite;\n  animation: right .5s linear infinite; }\n\n@-webkit-keyframes right {\n  100% {\n    -webkit-transform: translate(5px, 0); } }\n\n@keyframes right {\n  100% {\n    -webkit-transform: translate(5px, 0);\n    transform: translate(5px, 0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvZGV0YWlscy1nbm9tZS9EOlxcUHJveWVjdG9zXFxiYXJjZWxvbmFcXGRpY2llbWJyZVxcYXNzZXNzbWVudFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxnbm9tZXMtY29tcG9uZW50c1xcZGV0YWlscy1nbm9tZVxcZGV0YWlscy1nbm9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix5Q0FBdUM7RUFDdkMsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUdsQixvREFBbUQsRUFDdEQ7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsNkNBQTRDO0VBRTVDLHFDQUFvQyxFQUNyQzs7QUFHRDtFQUEyQjtJQUFPLHFDQUFtQyxFQUFBLEVBQUE7O0FBQ3JFO0VBQW1CO0lBQU8scUNBQW1DO0lBQUUsNkJBQTBCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dub21lcy1jb21wb25lbnRzL2RldGFpbHMtZ25vbWUvZGV0YWlscy1nbm9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgLjkpO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLmRldGFpbHMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uZGV0YWlscy1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGV0YWlscy1pbmZvID4gZGl2LCBwIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5kZXRhaWxzLWluZm8tZGF0YXtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uYXJyb3dfcmlnaHQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodCAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiByaWdodCAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogcmlnaHQgLjVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHJpZ2h0IHsgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LDApOyB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0IHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LDApOyB9IH1cclxuQGtleWZyYW1lcyByaWdodCB7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwwKTsgdHJhbnNmb3JtOnRyYW5zbGF0ZSg1cHgsMCk7IH0gfSJdfQ== */"

/***/ }),

/***/ "./src/app/gnomes-components/details-gnome/details-gnome.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/gnomes-components/details-gnome/details-gnome.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetailsGnomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsGnomeComponent", function() { return DetailsGnomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsGnomeComponent = /** @class */ (function () {
    function DetailsGnomeComponent() {
    }
    DetailsGnomeComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailsGnomeComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DetailsGnomeComponent.prototype, "title", void 0);
    DetailsGnomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-gnome',
            template: "<div class=\"details-container\">\n              <div>\n                <h4 class=\"details-title\">{{title}}</h4>\n              </div>\n              <div class=\"details-info\">\n                <div class=\"details-info-icon\">\n                  <mat-icon class=\"arrow_right\">arrow_right</mat-icon>\n                </div>\n                <div class=\"details-info-data\">\n                  <p>{{data}}</p>\n                </div>\n              </div>\n            </div>",
            styles: [__webpack_require__(/*! ./details-gnome.component.scss */ "./src/app/gnomes-components/details-gnome/details-gnome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsGnomeComponent);
    return DetailsGnomeComponent;
}());



/***/ }),

/***/ "./src/app/gnomes-components/friends-gnome/friends-gnome.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/gnomes-components/friends-gnome/friends-gnome.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-friends {\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 20px; }\n\n.friends-title {\n  font-size: 1.6em;\n  margin: 0;\n  margin-left: 25px;\n  margin-bottom: 10px; }\n\n.friends-items {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly !important; }\n\n.friend-item {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvZnJpZW5kcy1nbm9tZS9EOlxcUHJveWVjdG9zXFxiYXJjZWxvbmFcXGRpY2llbWJyZVxcYXNzZXNzbWVudFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxnbm9tZXMtY29tcG9uZW50c1xcZnJpZW5kcy1nbm9tZVxcZnJpZW5kcy1nbm9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBQ2YseUNBQXdDLEVBQ3pDOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nbm9tZXMtY29tcG9uZW50cy9mcmllbmRzLWdub21lL2ZyaWVuZHMtZ25vbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZyaWVuZHMge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZnJpZW5kcy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZyaWVuZHMtaXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mcmllbmQtaXRlbXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gnomes-components/friends-gnome/friends-gnome.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/gnomes-components/friends-gnome/friends-gnome.component.ts ***!
  \****************************************************************************/
/*! exports provided: FriendsGnomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsGnomeComponent", function() { return FriendsGnomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_redux_actions_search_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/redux/actions/search.action */ "./src/app/redux/actions/search.action.ts");
/* harmony import */ var src_app_redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/actions/gnomes.actions */ "./src/app/redux/actions/gnomes.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/ui.actions */ "./src/app/redux/actions/ui.actions.ts");








var FriendsGnomeComponent = /** @class */ (function () {
    function FriendsGnomeComponent(router, store, _apiService) {
        this.router = router;
        this.store = store;
        this._apiService = _apiService;
    }
    FriendsGnomeComponent.prototype.goToFriend = function (friend) {
        var _this = this;
        this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_7__["SetLoadingAction"]());
        this.store.dispatch(new src_app_redux_actions_search_action__WEBPACK_IMPORTED_MODULE_3__["SetSearch"](friend));
        this.store.select(function (state) { return state.search.search; }).subscribe(function (search) {
            _this._apiService.getDataByName(search).subscribe(function (data) {
                _this.store.dispatch(new src_app_redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_4__["SetGnomeSelected"](data));
                _this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_7__["UnsetLoadingAction"]());
                _this.router.navigate(["gnome/" + data.id]);
            });
        }).unsubscribe();
    };
    FriendsGnomeComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new src_app_redux_actions_search_action__WEBPACK_IMPORTED_MODULE_3__["UnsetSearch"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FriendsGnomeComponent.prototype, "friends", void 0);
    FriendsGnomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends-gnome',
            template: "<div class=\"container-friends\">\n              <h4 class=\"friends-title\">Friends</h4>\n              <ng-container *ngIf=\"friends && friends.length > 0; else elseTemplate\">\n                <mat-chip-list class=\"friends-items\">\n                  <mat-chip class=\"friend-item\" *ngFor=\"let friend of friends\" (click)=\"goToFriend(friend)\">{{friend}}</mat-chip>\n                </mat-chip-list>\n              </ng-container>\n              <ng-template #elseTemplate>\n                <p>No records found</p>\n              </ng-template>\n            </div>",
            styles: [__webpack_require__(/*! ./friends-gnome.component.scss */ "./src/app/gnomes-components/friends-gnome/friends-gnome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], FriendsGnomeComponent);
    return FriendsGnomeComponent;
}());



/***/ }),

/***/ "./src/app/gnomes-components/gnome/gnome.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/gnomes-components/gnome/gnome.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gnome {\n  display: inline-block;\n  width: 100%;\n  position: relative; }\n\n.gnome img {\n  height: 100%;\n  width: 100%;\n  min-width: 150px;\n  cursor: pointer;\n  box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.75);\n  background-color: #e9e9e9;\n  border-radius: 5px; }\n\n.gnome-image {\n  margin: 10px 10px; }\n\n.gnome-image img {\n  width: 100%;\n  vertical-align: top; }\n\n.gnome-overlay {\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  text-align: center; }\n\n.gnome-name {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  text-align: center; }\n\n.gnome-name-display {\n  width: 200px;\n  margin: 5px;\n  font-weight: bold;\n  text-align: center;\n  display: inline-block; }\n\n.gnome:hover .gnome-overlay {\n  display: flex; }\n\n.gnome-info {\n  width: 80px;\n  margin: 5px;\n  font-weight: bold;\n  text-align: center;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvZ25vbWUvRDpcXFByb3llY3Rvc1xcYmFyY2Vsb25hXFxkaWNpZW1icmVcXGFzc2Vzc21lbnRcXGZyb250LWVuZC9zcmNcXGFwcFxcZ25vbWVzLWNvbXBvbmVudHNcXGdub21lXFxnbm9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFHZixvREFBbUQ7RUFDbkQsMEJBQW9DO0VBQ3BDLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSwrQkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxPQUFNO0VBQ04sY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLHFDQUFvQztFQUNwQyxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvZ25vbWUvZ25vbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ25vbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5nbm9tZSBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmdub21lLWltYWdlIHtcclxuICBtYXJnaW46IDEwcHggMTBweDtcclxufVxyXG5cclxuLmdub21lLWltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmdub21lLW92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ25vbWUtbmFtZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ25vbWUtbmFtZS1kaXNwbGF5IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmdub21lOmhvdmVyIC5nbm9tZS1vdmVybGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ25vbWUtaW5mbyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/gnomes-components/gnome/gnome.component.ts":
/*!************************************************************!*\
  !*** ./src/app/gnomes-components/gnome/gnome.component.ts ***!
  \************************************************************/
/*! exports provided: GnomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomeComponent", function() { return GnomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_models_Gnome_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/models/Gnome.model */ "./src/app/utils/models/Gnome.model.ts");
/* harmony import */ var _redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/gnomes.actions */ "./src/app/redux/actions/gnomes.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





var GnomeComponent = /** @class */ (function () {
    function GnomeComponent(store) {
        this.store = store;
    }
    GnomeComponent.prototype.setGnomeSelected = function () {
        this.store.dispatch(new _redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_3__["SetGnomeSelected"](this.data));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _utils_models_Gnome_model__WEBPACK_IMPORTED_MODULE_2__["Gnome"])
    ], GnomeComponent.prototype, "data", void 0);
    GnomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gnome',
            template: "<a *ngIf=\"data\" routerLink=\"/gnome/{{data.id}}\" class=\"gnome\" (click)=\"setGnomeSelected()\">\n              <figure class=\"gnome-image\">\n                <img src={{data.thumbnail}} alt=\"{{data.name}}\">\n              </figure>\n              <span class=\"gnome-overlay\">\n                <p>\n                  <span class=\"gnome-info\">Ver Informaci\u00F3n</span>\n                </p>\n              </span>\n              <span class=\"gnome-name\">\n                <p>\n                  <span class=\"gnome-name-display\">{{data.name}}</span>\n                </p>\n              </span>\n            </a>",
            styles: [__webpack_require__(/*! ./gnome.component.scss */ "./src/app/gnomes-components/gnome/gnome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], GnomeComponent);
    return GnomeComponent;
}());



/***/ }),

/***/ "./src/app/gnomes-components/gnomes-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/gnomes-components/gnomes-routing.module.ts ***!
  \************************************************************/
/*! exports provided: GnomesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomesRoutingModule", function() { return GnomesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/gnomes-components/dashboard/dashboard.component.ts");
/* harmony import */ var _gnomes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gnomes.routes */ "./src/app/gnomes-components/gnomes.routes.ts");





// import { AuthGuardService } from '../services/auth-guard.service';
var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: _gnomes_routes__WEBPACK_IMPORTED_MODULE_4__["GnomesRoutes"]
        // canActivate: [AuthGuardService]
    }
];
var GnomesRoutingModule = /** @class */ (function () {
    function GnomesRoutingModule() {
    }
    GnomesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], GnomesRoutingModule);
    return GnomesRoutingModule;
}());



/***/ }),

/***/ "./src/app/gnomes-components/gnomes.module.ts":
/*!****************************************************!*\
  !*** ./src/app/gnomes-components/gnomes.module.ts ***!
  \****************************************************/
/*! exports provided: GnomesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomesModule", function() { return GnomesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _gnome_gnome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gnome/gnome.component */ "./src/app/gnomes-components/gnome/gnome.component.ts");
/* harmony import */ var _gnomes_gnomes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gnomes/gnomes.component */ "./src/app/gnomes-components/gnomes/gnomes.component.ts");
/* harmony import */ var _info_gnome_info_gnome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-gnome/info-gnome.component */ "./src/app/gnomes-components/info-gnome/info-gnome.component.ts");
/* harmony import */ var _details_gnome_details_gnome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-gnome/details-gnome.component */ "./src/app/gnomes-components/details-gnome/details-gnome.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _friends_gnome_friends_gnome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./friends-gnome/friends-gnome.component */ "./src/app/gnomes-components/friends-gnome/friends-gnome.component.ts");
/* harmony import */ var _professions_gnome_professions_gnome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./professions-gnome/professions-gnome.component */ "./src/app/gnomes-components/professions-gnome/professions-gnome.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/gnomes-components/dashboard/dashboard.component.ts");
/* harmony import */ var _gnomes_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gnomes-routing.module */ "./src/app/gnomes-components/gnomes-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _redux_reducers_gnomes_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/reducers/gnomes.reducer */ "./src/app/redux/reducers/gnomes.reducer.ts");
















var GnomesModule = /** @class */ (function () {
    function GnomesModule() {
    }
    GnomesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _gnomes_routing_module__WEBPACK_IMPORTED_MODULE_13__["GnomesRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forFeature('gnomes', _redux_reducers_gnomes_reducer__WEBPACK_IMPORTED_MODULE_15__["GnomesReducer"])],
            declarations: [_gnome_gnome_component__WEBPACK_IMPORTED_MODULE_5__["GnomeComponent"], _gnomes_gnomes_component__WEBPACK_IMPORTED_MODULE_6__["GnomesComponent"], _info_gnome_info_gnome_component__WEBPACK_IMPORTED_MODULE_7__["InfoGnomeComponent"], _details_gnome_details_gnome_component__WEBPACK_IMPORTED_MODULE_8__["DetailsGnomeComponent"],
                _friends_gnome_friends_gnome_component__WEBPACK_IMPORTED_MODULE_10__["FriendsGnomeComponent"], _professions_gnome_professions_gnome_component__WEBPACK_IMPORTED_MODULE_11__["ProfessionsGnomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"]],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]]
        })
    ], GnomesModule);
    return GnomesModule;
}());



/***/ }),

/***/ "./src/app/gnomes-components/gnomes.routes.ts":
/*!****************************************************!*\
  !*** ./src/app/gnomes-components/gnomes.routes.ts ***!
  \****************************************************/
/*! exports provided: GnomesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomesRoutes", function() { return GnomesRoutes; });
/* harmony import */ var _gnomes_gnomes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gnomes/gnomes.component */ "./src/app/gnomes-components/gnomes/gnomes.component.ts");
/* harmony import */ var _info_gnome_info_gnome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-gnome/info-gnome.component */ "./src/app/gnomes-components/info-gnome/info-gnome.component.ts");


var GnomesRoutes = [
    { path: '', component: _gnomes_gnomes_component__WEBPACK_IMPORTED_MODULE_0__["GnomesComponent"] },
    { path: 'gnomes', component: _gnomes_gnomes_component__WEBPACK_IMPORTED_MODULE_0__["GnomesComponent"] },
    { path: 'gnome/:id', component: _info_gnome_info_gnome_component__WEBPACK_IMPORTED_MODULE_1__["InfoGnomeComponent"] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/gnomes-components/gnomes/gnomes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/gnomes-components/gnomes/gnomes.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 5%;\n  margin-top: 150px;\n  width: 90%; }\n\n@media only screen and (min-width: 480px) {\n  .container {\n    -webkit-column-count: 2;\n    column-count: 2; } }\n\n@media only screen and (min-width: 768px) {\n  .container {\n    -webkit-column-count: 3;\n    column-count: 3; } }\n\n@media only screen and (min-width: 960px) {\n  .container {\n    -webkit-column-count: 3;\n    column-count: 3; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvZ25vbWVzL0Q6XFxQcm95ZWN0b3NcXGJhcmNlbG9uYVxcZGljaWVtYnJlXFxhc3Nlc3NtZW50XFxmcm9udC1lbmQvc3JjXFxhcHBcXGdub21lcy1jb21wb25lbnRzXFxnbm9tZXNcXGdub21lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsV0FBVSxFQUNiOztBQUVEO0VBQ0U7SUFFRSx3QkFBdUI7SUFDdkIsZ0JBQWUsRUFDaEIsRUFBQTs7QUFHSDtFQUNFO0lBRUUsd0JBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2hCLEVBQUE7O0FBR0g7RUFDRTtJQUVFLHdCQUF1QjtJQUN2QixnQkFBZSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvZ25vbWVzL2dub21lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcclxuICAgIGNvbHVtbi1jb3VudDogMjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDM7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMztcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xyXG4gICAgY29sdW1uLWNvdW50OiAzO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/gnomes-components/gnomes/gnomes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gnomes-components/gnomes/gnomes.component.ts ***!
  \**************************************************************/
/*! exports provided: GnomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomesComponent", function() { return GnomesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/gnomes.actions */ "./src/app/redux/actions/gnomes.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var GnomesComponent = /** @class */ (function () {
    function GnomesComponent(_apiService, store) {
        this._apiService = _apiService;
        this.store = store;
    }
    GnomesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) { return state.search.search; }).subscribe(function (search) {
            _this.gnomesView$ = _this.store.select(function (state) { return state.gnomes.gnomes; }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (gnome) { return gnome.filter(function (gnomeFilter) { return gnomeFilter.name.toLocaleLowerCase().match(search.toLocaleLowerCase()); }); }));
        });
        this.setGnomes();
    };
    GnomesComponent.prototype.setGnomes = function () {
        var _this = this;
        this.store.select(function (state) { return state.counter.counter; }).subscribe({
            next: function (x) {
                _this.contador$ = x;
                _this._apiService.getData(_this.contador$).subscribe(function (data) { return _this.store.dispatch(new _redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_4__["SetGnomes"](data)); }, function (err) { return console.error(err); });
            }
        });
    };
    GnomesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gnomes',
            template: "<div class=\"container\">\n                <app-gnome [data]=\"item\" *ngFor=\"let item of gnomesView$ | async\"></app-gnome>\n              </div>\n              <app-button-more></app-button-more>",
            styles: [__webpack_require__(/*! ./gnomes.component.scss */ "./src/app/gnomes-components/gnomes/gnomes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], GnomesComponent);
    return GnomesComponent;
}());



/***/ }),

/***/ "./src/app/gnomes-components/info-gnome/info-gnome.component.html":
/*!************************************************************************!*\
  !*** ./src/app/gnomes-components/info-gnome/info-gnome.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!loading$; else elseTemplate\">\n<div class=\"grid\">\n  <div class=\"grid-container\" *ngIf=\"gnomeSelected\">\n    <div class=\"title\">{{gnomeSelected.name}}</div>\n    <div class=\"image\" [ngStyle]=\"{'background-image': 'url(' + gnomeSelected.thumbnail + ')'}\"></div>\n    <div class=\"age\">\n      <app-details-gnome [title]=\"'Age'\" [data]=\"gnomeSelected.age\"></app-details-gnome>\n    </div>\n    <div class=\"weight\">\n      <app-details-gnome [title]=\"'Weight'\" [data]=\"gnomeSelected.weight.toPrecision(4)\"></app-details-gnome>\n    </div>\n    <div class=\"height\">\n      <app-details-gnome [title]=\"'Height'\" [data]=\"gnomeSelected.height.toPrecision(4)\"></app-details-gnome>\n    </div>\n    <div class=\"hair_color\">\n      <app-details-gnome [title]=\"'Hair Color'\" [data]=\"gnomeSelected.hair_color\"></app-details-gnome>\n    </div>\n    <div class=\"professions_gnome\">\n      <app-professions-gnome [professions]=\"gnomeSelected.professions\"></app-professions-gnome>\n    </div>\n    <div class=\"friends_gnome\">\n      <app-friends-gnome [friends]=\"gnomeSelected.friends\"></app-friends-gnome>\n    </div>\n  </div>\n</div>\n</ng-container>\n<ng-template #elseTemplate>\n\t<div class=\"spinner\">\n\t\t<mat-spinner></mat-spinner>\n\t</div>\n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/gnomes-components/info-gnome/info-gnome.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/gnomes-components/info-gnome/info-gnome.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  color: black;\n  padding: 32px 2.5%;\n  display: grid;\n  grid-template-columns: minmax(auto, 100%);\n  margin-top: 100px; }\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 600px 1fr 1fr 1fr 1fr;\n  grid-template-areas: \"title title title title title\"\r \"image age weight height hair_color\"\r \"image professions_gnome professions_gnome friends_gnome friends_gnome\";\n  justify-content: center;\n  font-size: 12px;\n  text-align: center;\n  grid-gap: 10px; }\n\n.image {\n  grid-area: image;\n  max-width: 100%;\n  width: 95%;\n  margin-left: 2.5%;\n  height: 70vh;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: top center;\n  border-radius: 10px; }\n\n.title {\n  grid-area: title;\n  font-size: 36px;\n  font-weight: normal;\n  margin: 0;\n  margin-bottom: 30px;\n  display: flex;\n  justify-self: center; }\n\n.age {\n  grid-area: age;\n  width: 80%;\n  margin-left: 10%;\n  text-align: center; }\n\n.weight {\n  grid-area: weight;\n  width: 80%;\n  margin-left: 10%;\n  text-align: center; }\n\n.height {\n  grid-area: height;\n  width: 80%;\n  margin-left: 10%;\n  text-align: center; }\n\n.hair_color {\n  grid-area: hair_color;\n  width: 80%;\n  margin-left: 10%;\n  text-align: center; }\n\n.professions_gnome {\n  grid-area: professions_gnome; }\n\n.friends_gnome {\n  grid-area: friends_gnome; }\n\n.spinner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%); }\n\n@media only screen and (max-width: 1024px) {\n  .grid {\n    padding: 0; }\n  .grid-container {\n    display: grid;\n    grid-template-columns: 600px 1fr 1fr;\n    grid-template-areas: \"title title title\"\r \"image age weight\"\r \"image height hair_color\"\r \"image professions_gnome friends_gnome\";\n    justify-content: center;\n    font-size: 12px;\n    text-align: center; }\n  .image {\n    text-align: center;\n    max-width: 100%;\n    width: 95%;\n    margin-left: 2.5%;\n    height: 70vh;\n    background-size: contain;\n    background-position: top center; }\n  .title {\n    margin: 0;\n    margin-top: 30px;\n    margin-bottom: 20px; } }\n\n@media only screen and (max-width: 950px) {\n  .grid {\n    padding: 0; }\n  .grid-container {\n    display: grid;\n    grid-template-columns: 1fr 170px;\n    grid-template-areas: \"title title\"\r \"image age\"\r \"image weight\"\r \"image height\"\r \"image hair_color\"\r \"professions_gnome professions_gnome\"\r \"friends_gnome friends_gnome\";\n    justify-content: center;\n    font-size: 12px;\n    text-align: center; }\n  .image {\n    max-width: 100%;\n    height: 100vh;\n    width: 95%;\n    margin-left: 2.5%;\n    background-size: cover; }\n  .title {\n    margin: 0;\n    margin-top: 30px;\n    margin-bottom: 20px; } }\n\n@media only screen and (max-width: 480px) {\n  .grid {\n    padding: 0; }\n  .grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"title title\"\r \"image image\"\r \"age weight\"\r \"height hair_color\"\r \"professions_gnome professions_gnome\"\r \"friends_gnome friends_gnome\";\n    justify-content: center;\n    font-size: 12px;\n    text-align: center; }\n  .image {\n    max-width: 100%;\n    height: 50vh;\n    width: 95%;\n    margin-left: 2.5%;\n    background-size: cover; }\n  .title {\n    margin: 0;\n    margin-top: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvaW5mby1nbm9tZS9EOlxcUHJveWVjdG9zXFxiYXJjZWxvbmFcXGRpY2llbWJyZVxcYXNzZXNzbWVudFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxnbm9tZXMtY29tcG9uZW50c1xcaW5mby1nbm9tZVxcaW5mby1nbm9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvaW5mby1nbm9tZS9pbmZvLWdub21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsMENBQXlDO0VBQ3pDLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGNBQWE7RUFDYiw2Q0FBNEM7RUFDNUMsb0tBSWU7RUFDZix3QkFBa0I7RUFDbEIsZ0JBQWM7RUNGZCxtQkFBbUI7RURLckIsZUFBTyxFQUFBOztBQ0ZQO0VES0UsaUJBQVU7RUFDVixnQkFBYTtFQUNiLFdBQVE7RUFDUixrQkFBaUI7RUFDakIsYUFBQTtFQUNBLDZCQUFxQjtFQUNyQix5QkFDRDtFQ0pDLGdDQUFnQztFRE1sQyxvQkFBTyxFQUFBOztBQ0hQO0VETUUsaUJBQWE7RUFDYixnQkFBUztFQUNULG9CQUFtQjtFQUNuQixVQUFTO0VBQ1Qsb0JBQW9CO0VDSnBCLGNBQWM7RURPaEIscUJBQUssRUFBQTs7QUNKTDtFRE9FLGVBQWE7RUFDYixXQUFVO0VDTFYsaUJBQWlCO0VET25CLG1CQUFRLEVBQUE7O0FDSlI7RURPRSxrQkFBZ0I7RUFDaEIsV0FBVTtFQ0xWLGlCQUFpQjtFRE9uQixtQkFBUSxFQUFBOztBQ0pSO0VET0Usa0JBQWdCO0VBQ2hCLFdBQVU7RUNMVixpQkFBaUI7RURPbkIsbUJBQVksRUFBQTs7QUNKWjtFRE9FLHNCQUFnQjtFQUNoQixXQUFVO0VDTFYsaUJBQWlCO0VET25CLG1CQUFtQixFQUFBOztBQ0puQjtFRE9BLDZCQUFlLEVBQUE7O0FDSmY7RURRQSx5QkFBUyxFQUFBOztBQ0xUO0VEUUUsbUJBQVE7RUFDUixVQUFTO0VBQ1QsU0FBQTtFQ05BLGlDQUFpQztFRFNuQyx5Q0FBeUMsRUFBQTs7QUNOekM7RURXRTtJQUNFLFdBQVMsRUFBSTtFQ1RmO0lEV0UsY0FBQTtJQUlBLHFDQUF1QjtJQUN2QixpSUFLa0I7SUFDbEIsd0JBQWU7SUFDZixnQkFBVTtJQUNWLG1CQUFpQixFQUFBO0VDZG5CO0lEZ0JFLG1CQUFpQjtJQUNqQixnQkFBQTtJQUdGLFdBQU87SUFDTCxrQkFBUztJQUNULGFBQVk7SUFDWix5QkFDRDtJQ2pCQyxnQ0FBZ0MsRUFBRTtFRG9CdEM7SUFDRSxVQUFNO0lBQ0osaUJBQ0Q7SUFFRCxvQkFBZ0IsRUFBQSxFQUFBOztBQ25CbEI7RUFDRTtJRDRCRSxXQUFBLEVBQUE7RUMxQkY7SUQ0QkUsY0FBWTtJQUdkLGlDQUFPO0lBQ0wsMEtBUVM7SUFDVCx3QkFBZ0I7SUFDaEIsZ0JBQWU7SUM5QmYsbUJBQW1CLEVBQUU7RURrQ3pCO0lBQ0UsZ0JBQU07SUFDSixjQUNEO0lBQ0QsV0FBQTtJQUNFLGtCQUFhO0lBQ2IsdUJBQXVCLEVBQUE7RUNqQ3pCO0lEd0NFLFVBQUE7SUFDQSxpQkFBZTtJQUNmLG9CQUFrQixFQUNuQixFQUFBOztBQ3RDSDtFQUNFO0lEeUNFLFdBQVUsRUFBQTtFQ3ZDWjtJRHlDRSxjQUFBO0lBRUYsK0JBQU87SUFDTCwySkNwQzJCO0lBQzNCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCLEVBQUU7RUFDM0I7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2dub21lcy1jb21wb25lbnRzL2luZm8tZ25vbWUvaW5mby1nbm9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMzJweCAyLjUlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMTAwJSk7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4IDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlIGFnZSB3ZWlnaHQgaGVpZ2h0IGhhaXJfY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZSBwcm9mZXNzaW9uc19nbm9tZSBwcm9mZXNzaW9uc19nbm9tZSBmcmllbmRzX2dub21lIGZyaWVuZHNfZ25vbWVcIjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGdyaWQtYXJlYTogaW1hZ2U7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZ2Uge1xyXG4gIGdyaWQtYXJlYTogYWdlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndlaWdodCB7XHJcbiAgZ3JpZC1hcmVhOiB3ZWlnaHQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVpZ2h0IHtcclxuICBncmlkLWFyZWE6IGhlaWdodDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oYWlyX2NvbG9yIHtcclxuICBncmlkLWFyZWE6IGhhaXJfY29sb3I7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZmVzc2lvbnNfZ25vbWUge1xyXG4gIGdyaWQtYXJlYTogcHJvZmVzc2lvbnNfZ25vbWU7XHJcbn1cclxuLmZyaWVuZHNfZ25vbWUge1xyXG4gIGdyaWQtYXJlYTogZnJpZW5kc19nbm9tZTtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGxlIHRpdGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2UgYWdlIHdlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlIGhlaWdodCBoYWlyX2NvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2UgcHJvZmVzc2lvbnNfZ25vbWUgZnJpZW5kc19nbm9tZVwiO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNzBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGl0bGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlIGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2Ugd2VpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZSBoZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlIGhhaXJfY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2Zlc3Npb25zX2dub21lIHByb2Zlc3Npb25zX2dub21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmllbmRzX2dub21lIGZyaWVuZHNfZ25vbWVcIjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aXRsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWdlIHdlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodCBoYWlyX2NvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZmVzc2lvbnNfZ25vbWUgcHJvZmVzc2lvbnNfZ25vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmllbmRzX2dub21lIGZyaWVuZHNfZ25vbWVcIjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIuZ3JpZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMzJweCAyLjUlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChhdXRvLCAxMDAlKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7IH1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweCAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGl0bGUgdGl0bGUgdGl0bGUgdGl0bGUgdGl0bGVcIlxyIFwiaW1hZ2UgYWdlIHdlaWdodCBoZWlnaHQgaGFpcl9jb2xvclwiXHIgXCJpbWFnZSBwcm9mZXNzaW9uc19nbm9tZSBwcm9mZXNzaW9uc19nbm9tZSBmcmllbmRzX2dub21lIGZyaWVuZHNfZ25vbWVcIjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBncmlkLWdhcDogMTBweDsgfVxuXG4uaW1hZ2Uge1xuICBncmlkLWFyZWE6IGltYWdlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4udGl0bGUge1xuICBncmlkLWFyZWE6IHRpdGxlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH1cblxuLmFnZSB7XG4gIGdyaWQtYXJlYTogYWdlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLndlaWdodCB7XG4gIGdyaWQtYXJlYTogd2VpZ2h0O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmhlaWdodCB7XG4gIGdyaWQtYXJlYTogaGVpZ2h0O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmhhaXJfY29sb3Ige1xuICBncmlkLWFyZWE6IGhhaXJfY29sb3I7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ucHJvZmVzc2lvbnNfZ25vbWUge1xuICBncmlkLWFyZWE6IHByb2Zlc3Npb25zX2dub21lOyB9XG5cbi5mcmllbmRzX2dub21lIHtcbiAgZ3JpZC1hcmVhOiBmcmllbmRzX2dub21lOyB9XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgcGFkZGluZzogMDsgfVxuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweCAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGl0bGUgdGl0bGUgdGl0bGVcIlxyIFwiaW1hZ2UgYWdlIHdlaWdodFwiXHIgXCJpbWFnZSBoZWlnaHQgaGFpcl9jb2xvclwiXHIgXCJpbWFnZSBwcm9mZXNzaW9uc19nbm9tZSBmcmllbmRzX2dub21lXCI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuaW1hZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7IH1cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xuICAuZ3JpZCB7XG4gICAgcGFkZGluZzogMDsgfVxuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTcwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0aXRsZSB0aXRsZVwiXHIgXCJpbWFnZSBhZ2VcIlxyIFwiaW1hZ2Ugd2VpZ2h0XCJcciBcImltYWdlIGhlaWdodFwiXHIgXCJpbWFnZSBoYWlyX2NvbG9yXCJcciBcInByb2Zlc3Npb25zX2dub21lIHByb2Zlc3Npb25zX2dub21lXCJcciBcImZyaWVuZHNfZ25vbWUgZnJpZW5kc19nbm9tZVwiO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZ3JpZCB7XG4gICAgcGFkZGluZzogMDsgfVxuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGl0bGUgdGl0bGVcIlxyIFwiaW1hZ2UgaW1hZ2VcIlxyIFwiYWdlIHdlaWdodFwiXHIgXCJoZWlnaHQgaGFpcl9jb2xvclwiXHIgXCJwcm9mZXNzaW9uc19nbm9tZSBwcm9mZXNzaW9uc19nbm9tZVwiXHIgXCJmcmllbmRzX2dub21lIGZyaWVuZHNfZ25vbWVcIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/gnomes-components/info-gnome/info-gnome.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/gnomes-components/info-gnome/info-gnome.component.ts ***!
  \**********************************************************************/
/*! exports provided: InfoGnomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoGnomeComponent", function() { return InfoGnomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/actions/gnomes.actions */ "./src/app/redux/actions/gnomes.actions.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/redux/actions/ui.actions */ "./src/app/redux/actions/ui.actions.ts");








var InfoGnomeComponent = /** @class */ (function () {
    function InfoGnomeComponent(store, router, routeActive, _apiService) {
        this.store = store;
        this.router = router;
        this.routeActive = routeActive;
        this._apiService = _apiService;
    }
    InfoGnomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionLoading = this.store.select(function (state) { return state.ui.loading; }).subscribe({
            next: function (x) {
                _this.loading$ = x;
                console.log(_this.loading$);
            }
        });
        this.setGnomeSeletected();
        this.routeActive.params.subscribe(function (params) {
            var id = parseInt(params.id, 0);
            if (_this.idSelected && id !== _this.idSelected) {
                _this.store.dispatch(new src_app_redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_6__["SetLoadingAction"]());
                _this._apiService.getDataById(id).subscribe(function (data) {
                    _this.gnomeSelected = data;
                    _this.idSelected = data.id;
                    _this.store.dispatch(new src_app_redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_4__["SetGnomeSelected"](data));
                    _this.store.dispatch(new src_app_redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_6__["UnsetLoadingAction"]());
                    _this.router.navigate(["gnome/" + data.id]);
                });
            }
        });
    };
    InfoGnomeComponent.prototype.setGnomeSeletected = function () {
        var _this = this;
        this.subscriptionGnomeSelected = this.store.select(function (state) { return state.gnomes.gnomeSelected; }).subscribe(function (data) {
            if (data === undefined) {
                _this.router.navigate(['/gnomes']);
            }
            else {
                _this.gnomeSelected = data;
                _this.idSelected = data.id;
            }
        }, function (err) { return console.error(err); });
    };
    InfoGnomeComponent.prototype.ngOnDestroy = function () {
        this.subscriptionGnomeSelected.unsubscribe();
        this.subscriptionLoading.unsubscribe();
    };
    InfoGnomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-gnome',
            template: __webpack_require__(/*! ./info-gnome.component.html */ "./src/app/gnomes-components/info-gnome/info-gnome.component.html"),
            styles: [__webpack_require__(/*! ./info-gnome.component.scss */ "./src/app/gnomes-components/info-gnome/info-gnome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], InfoGnomeComponent);
    return InfoGnomeComponent;
}());



/***/ }),

/***/ "./src/app/gnomes-components/professions-gnome/professions-gnome.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/gnomes-components/professions-gnome/professions-gnome.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-professions {\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 20px; }\n\n.professions-title {\n  font-size: 1.6em;\n  margin: 0;\n  margin-left: 25px;\n  margin-bottom: 10px; }\n\n.professions-items {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvcHJvZmVzc2lvbnMtZ25vbWUvRDpcXFByb3llY3Rvc1xcYmFyY2Vsb25hXFxkaWNpZW1icmVcXGFzc2Vzc21lbnRcXGZyb250LWVuZC9zcmNcXGFwcFxcZ25vbWVzLWNvbXBvbmVudHNcXHByb2Zlc3Npb25zLWdub21lXFxwcm9mZXNzaW9ucy1nbm9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBQ2YseUNBQXVDLEVBQ3hDIiwiZmlsZSI6InNyYy9hcHAvZ25vbWVzLWNvbXBvbmVudHMvcHJvZmVzc2lvbnMtZ25vbWUvcHJvZmVzc2lvbnMtZ25vbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXByb2Zlc3Npb25ze1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5wcm9mZXNzaW9ucy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucHJvZmVzc2lvbnMtaXRlbXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5IWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/gnomes-components/professions-gnome/professions-gnome.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/gnomes-components/professions-gnome/professions-gnome.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfessionsGnomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionsGnomeComponent", function() { return ProfessionsGnomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfessionsGnomeComponent = /** @class */ (function () {
    function ProfessionsGnomeComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProfessionsGnomeComponent.prototype, "professions", void 0);
    ProfessionsGnomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professions-gnome',
            template: "<div class=\"container-professions\">\n              <h4 class=\"professions-title\">Professions</h4>\n              <ng-container *ngIf=\"professions && professions.length > 0; else elseTemplate\">\n                <mat-chip-list class=\"professions-items\">\n                  <mat-chip *ngFor=\"let profession of professions\">{{profession}}</mat-chip>\n                </mat-chip-list>\n              </ng-container>\n              <ng-template #elseTemplate>\n                <p>No records found</p>\n              </ng-template>\n            </div>",
            styles: [__webpack_require__(/*! ./professions-gnome.component.scss */ "./src/app/gnomes-components/professions-gnome/professions-gnome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfessionsGnomeComponent);
    return ProfessionsGnomeComponent;
}());



/***/ }),

/***/ "./src/app/redux/reducers/gnomes.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/redux/reducers/gnomes.reducer.ts ***!
  \**************************************************/
/*! exports provided: GnomesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomesReducer", function() { return GnomesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/gnomes.actions */ "./src/app/redux/actions/gnomes.actions.ts");


var initialState = {
    gnomes: [],
    gnomeSelected: undefined
};
function GnomesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_1__["SET_GNOMES"]:
            return {
                gnomes: action.gnomes.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
                }).slice(),
                gnomeSelected: state.gnomeSelected
            };
        case _actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_1__["UNSET_GNOMES"]:
            return {
                gnomes: [],
                gnomeSelected: state.gnomeSelected
            };
        case _actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_1__["SET_GNOME_SELECTED"]:
            return {
                gnomes: state.gnomes.slice(),
                gnomeSelected: action.gnomeSelected
            };
        case _actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_1__["UNSET_GNOME_SELECTED"]:
            return {
                gnomes: state.gnomes.slice(),
                gnomeSelected: undefined
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
    }
    ApiService.prototype.getData = function (counter) {
        return this.http.get(this.URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.Brastlewark.filter(function (item) { return item.id <= counter; }); }));
    };
    ApiService.prototype.getDataByName = function (name) {
        return this.http.get(this.URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.Brastlewark.find(function (item) { return item.name === name; }); }));
    };
    ApiService.prototype.getDataById = function (id) {
        return this.http.get(this.URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.Brastlewark.find(function (item) { return item.id === id; }); }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/button-more/button-more.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/button-more/button-more.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-more {\n  margin-top: 1%;\n  margin-bottom: 3%;\n  text-align: center; }\n\n/* ::ng-deep .mat-icon {\r\n  height: 56px !important;\r\n  width: 56px !important;\r\n  font-size: 56px !important;\r\n} */\n\n.arrow_drop_down {\n  -webkit-animation: down 1s linear infinite;\n  animation: down 1s linear infinite; }\n\n@-webkit-keyframes down {\n  100% {\n    -webkit-transform: translate(0, 20px); } }\n\n@keyframes down {\n  100% {\n    -webkit-transform: translate(0, 20px);\n    transform: translate(0, 20px); } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2J1dHRvbi1tb3JlL0Q6XFxQcm95ZWN0b3NcXGJhcmNlbG9uYVxcZGljaWVtYnJlXFxhc3Nlc3NtZW50XFxmcm9udC1lbmQvc3JjXFxhcHBcXHNoYXJlZFxcYnV0dG9uLW1vcmVcXGJ1dHRvbi1tb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBRUQ7Ozs7SUFJSTs7QUFFSjtFQUNJLDJDQUF5QztFQUV6QyxtQ0FBaUMsRUFDcEM7O0FBR0Q7RUFBMEI7SUFBTyxzQ0FBb0MsRUFBQSxFQUFBOztBQUNyRTtFQUFrQjtJQUFPLHNDQUFvQztJQUFFLDhCQUEyQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYnV0dG9uLW1vcmUvYnV0dG9uLW1vcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLW1vcmV7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiA6Om5nLWRlZXAgLm1hdC1pY29uIHtcclxuICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogNTZweCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uYXJyb3dfZHJvcF9kb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmRvd24gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246ZG93biAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246ZG93biAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBkb3duIHsgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwyMHB4KTsgfSB9XHJcbkAtd2Via2l0LWtleWZyYW1lcyBkb3duIHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwyMHB4KTsgfSB9XHJcbkBrZXlmcmFtZXMgZG93biB7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMjBweCk7IHRyYW5zZm9ybTp0cmFuc2xhdGUoMCwyMHB4KTsgfSB9Il19 */"

/***/ }),

/***/ "./src/app/shared/button-more/button-more.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/button-more/button-more.component.ts ***!
  \*************************************************************/
/*! exports provided: ButtonMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonMoreComponent", function() { return ButtonMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_redux_actions_counter_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/redux/actions/counter.action */ "./src/app/redux/actions/counter.action.ts");




var ButtonMoreComponent = /** @class */ (function () {
    function ButtonMoreComponent(store) {
        this.store = store;
    }
    ButtonMoreComponent.prototype.clickMore = function () {
        var _this = this;
        this.store.select(function (state) { return state.counter.counter; }).subscribe(function (data) {
            _this.counter = data;
        }).unsubscribe();
        this.store.dispatch(new src_app_redux_actions_counter_action__WEBPACK_IMPORTED_MODULE_3__["SetCounter"](20));
    };
    ButtonMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-more',
            template: "<div class=\"button-more\">\n              <button mat-icon-button (click)=\"clickMore()\">\n                <mat-icon class=\"arrow_drop_down\">arrow_drop_down</mat-icon>\n              </button>\n             </div>",
            styles: [__webpack_require__(/*! ./button-more.component.scss */ "./src/app/shared/button-more/button-more.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ButtonMoreComponent);
    return ButtonMoreComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #3f51b5;\n  color: white;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9EOlxcUHJveWVjdG9zXFxiYXJjZWxvbmFcXGRpY2llbWJyZVxcYXNzZXNzbWVudFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixRQUFPO0VBQ1AsVUFBUztFQUNULFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: "<div class=\"footer\">\n              Jonathan Ag\u00FCero - {{year}}\n             </div>",
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <p class=\"user\" *ngIf=\"user\">Hi {{user.name}}!</p>\n  <button mat-menu-item (click)=\"goGnomes()\">\n    <mat-icon>list</mat-icon>\n    <span>Gnomes</span>\n  </button>\n  <button mat-menu-item (click)=\"logout()\">\n    <mat-icon>account_circle</mat-icon>\n    <span>Logout</span>\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user {\n  width: 80%;\n  margin-left: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lbnUvRDpcXFByb3llY3Rvc1xcYmFyY2Vsb25hXFxkaWNpZW1icmVcXGFzc2Vzc21lbnRcXGZyb250LWVuZC9zcmNcXGFwcFxcc2hhcmVkXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVTtFQUNWLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/user.actions */ "./src/app/redux/actions/user.actions.ts");






var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, store, _authService) {
        this.router = router;
        this.store = store;
        this._authService = _authService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) { return state.user.user; }).subscribe(function (data) {
            _this.user = data;
        });
    };
    MenuComponent.prototype.goGnomes = function () {
        this.router.navigate(['/gnomes']);
    };
    MenuComponent.prototype.logout = function () {
        this.store.dispatch(new _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LogoutUserAction"]());
        this._authService.logoutUser();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/shared/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/shared/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  width: 100%;\n  height: 100px;\n  background-color: #3f51b5;\n  margin-bottom: 1%;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.2s;\n  box-shadow: 10px 10px 21px -8px rgba(0, 0, 0, 0.75); }\n\n.navbar .navbar-image {\n  width: 90px;\n  height: 90px;\n  margin: 0;\n  padding-left: 20px;\n  transition: 0.2s; }\n\n.navbar .navbar-image img {\n  width: 100%;\n  height: 100%;\n  cursor: pointer; }\n\n.navbar-form {\n  margin-top: 20px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.navbar-form-input {\n  width: 100%; }\n\n.navbar-menu {\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9EOlxcUHJveWVjdG9zXFxiYXJjZWxvbmFcXGRpY2llbWJyZVxcYXNzZXNzbWVudFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxzaGFyZWRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsWUFBVztFQUNYLE9BQU07RUFDTixjQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLGtCQUFpQjtFQUNqQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUdoQixvREFBbUQsRUFDdEQ7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVcsRUFDZDs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXItZm9ybS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXItbWVudSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_redux_actions_search_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/actions/search.action */ "./src/app/redux/actions/search.action.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(fb, store) {
        this.fb = fb;
        this.store = store;
        this.color = 'accent';
        this.gnomeForm = this.fb.group({
            name: ['']
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.formControlValueChanged();
    };
    NavbarComponent.prototype.formControlValueChanged = function () {
        var _this = this;
        this.gnomeForm.get('name').valueChanges.subscribe(function (search) {
            _this.store.dispatch(new src_app_redux_actions_search_action__WEBPACK_IMPORTED_MODULE_4__["SetSearch"](search));
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: "<div class=\"navbar\" id=\"navbar\">\n              <a routerLink=\"/\" class=\"navbar-link\">\n                <figure class=\"navbar-image\" id=\"navbar-image\">\n                  <img src=\"../../../assets/images/icon.png\" alt=\"icon\">\n                </figure>\n              </a>\n              <form class=\"navbar-form\" [formGroup]=\"gnomeForm\">\n                <mat-form-field class=\"navbar-form-input\" [color]=\"color\">\n                  <input matInput placeholder=\"Search Gnome\" value=\"\" formControlName=\"name\">\n                </mat-form-field>\n              </form>\n              <div class=\"navbar-menu\">\n                <app-menu></app-menu>\n              <div>\n             <div>",
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/shared/menu/menu.component.ts");
/* harmony import */ var _button_more_button_more_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-more/button-more.component */ "./src/app/shared/button-more/button-more.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gnomes_components_gnomes_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gnomes-components/gnomes-routing.module */ "./src/app/gnomes-components/gnomes-routing.module.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _gnomes_components_gnomes_routing_module__WEBPACK_IMPORTED_MODULE_9__["GnomesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _button_more_button_more_component__WEBPACK_IMPORTED_MODULE_7__["ButtonMoreComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _button_more_button_more_component__WEBPACK_IMPORTED_MODULE_7__["ButtonMoreComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/utils/models/Gnome.model.ts":
/*!*********************************************!*\
  !*** ./src/app/utils/models/Gnome.model.ts ***!
  \*********************************************/
/*! exports provided: Gnome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gnome", function() { return Gnome; });
var Gnome = /** @class */ (function () {
    function Gnome(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.thumbnail = obj.thumbnail;
        this.age = obj.age;
        this.weight = obj.weight;
        this.height = obj.height;
        this.hair_color = obj.hair_color;
        this.professions = obj.professions;
        this.friends = obj.friends;
    }
    return Gnome;
}());



/***/ })

}]);
//# sourceMappingURL=gnomes-components-gnomes-module.js.map