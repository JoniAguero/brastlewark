(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./gnomes-components/gnomes.module": [
		"./src/app/gnomes-components/gnomes.module.ts",
		"gnomes-components-gnomes-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]],
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");






var routes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    {
        path: '',
        loadChildren: './gnomes-components/gnomes.module#GnomesModule',
        canLoad: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_authService) {
        this._authService = _authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._authService.initAuthListener();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _redux_app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redux/app.reducer */ "./src/app/redux/app.reducer.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");








// ngrx








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase, 'bastlewark'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_redux_app_reducer__WEBPACK_IMPORTED_MODULE_10__["AppReducer"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-login\">\n  <div class=\"container-login-dark\">\n    <div class=\"container-login-windows\">\n      <div class=\"login-windows\">\n        <div class=\"login-windows-form\">\n          <h3 class=\"mat-h3\">LOGIN</h3>\n          <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <mat-form-field>\n              <input matInput placeholder=\"Enter your email\" formControlName=\"email\" required>\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"password\">\n              <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </mat-form-field>\n            <ng-container *ngIf=\"!loading; else elseTemplate\">\n              <button class=\"submit\" mat-raised-button color=\"primary\">Login</button>\n              <p>Not registered?</p>\n              <a class=\"create-account\" routerLink=\"/register\">Sing in</a>\n            </ng-container>\n            <ng-template #elseTemplate>\n              <div class=\"spinner\">\n                <mat-spinner></mat-spinner>\n              </div>\n            </ng-template>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-login {\n  background: url('login.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100vh; }\n\n.container-login-dark {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100vh; }\n\n.container-login-windows {\n  height: 350px;\n  background-color: white;\n  box-shadow: 10px 10px 12px -3px rgba(0, 0, 0, 0.75);\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  -webkit-transform: translate(0, -50%);\n  border-radius: 4px;\n  width: 40%;\n  margin-left: 30%;\n  min-width: 300px; }\n\n.login-windows {\n  width: 90%;\n  margin-left: 5%;\n  height: auto;\n  margin-top: 40px; }\n\n.login-windows-form {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.login-windows-form > form > mat-form-field {\n  width: 100%; }\n\n.password {\n  margin-top: 20px; }\n\n.submit {\n  width: 100%; }\n\n.spinner {\n  width: 100%;\n  text-align: center; }\n\n.spinner > mat-spinner {\n  margin: auto; }\n\n.create-account {\n  text-decoration: none; }\n\n@media only screen and (max-width: 950px) {\n  .container-login-windows {\n    width: 50%;\n    margin-left: 25%; } }\n\n@media only screen and (max-width: 480px) {\n  .container-login-windows {\n    width: 80%;\n    margin-left: 10%; } }\n\n@media only screen and (max-width: 321px) {\n  .container-login-windows {\n    width: 70%;\n    margin-left: 15%;\n    min-width: 200px; } }\n\n@media only screen and (max-height: 321px) {\n  .container-login-windows {\n    height: 300px;\n    width: 70%;\n    margin-left: 15%; }\n  .password {\n    margin-top: 0px; }\n  .login-windows {\n    width: 90%;\n    margin-left: 5%;\n    height: auto;\n    margin-top: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9EOlxcUHJveWVjdG9zXFxiYXJjZWxvbmFcXGRpY2llbWJyZVxcYXNzZXNzbWVudFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBd0Q7RUFDeEQsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUVEO0VBQ0kscUNBQW1DO0VBQ25DLFlBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QjtFQUd2QixvREFBbUQ7RUFDbkQsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUiw4QkFBNkI7RUFDN0Isc0NBQXFDO0VBQ3JDLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNFLFdBQVU7RUFDVixnQkFBZTtFQUNmLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRTtJQUNFLFdBQVU7SUFDVixpQkFBZ0IsRUFDakIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsV0FBVTtJQUNWLGlCQUFnQixFQUNqQixFQUFBOztBQUdIO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUNqQixFQUFBOztBQUdIO0VBQ0U7SUFDRSxjQUFhO0lBQ2IsV0FBVTtJQUNWLGlCQUFnQixFQUNqQjtFQUNEO0lBQ0UsZ0JBQWUsRUFDaEI7RUFDRDtJQUNFLFdBQVU7SUFDVixnQkFBZTtJQUNmLGFBQVk7SUFDWixnQkFBZSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbG9naW4ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F1dGgvbG9naW4uanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWxvZ2luLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9naW4td2luZG93cyB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDEycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi13aW5kb3dze1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubG9naW4td2luZG93cy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4td2luZG93cy1mb3JtID4gZm9ybSA+IG1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhc3N3b3JkIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXI+IG1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jcmVhdGUtYWNjb3VudCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgLmNvbnRhaW5lci1sb2dpbi13aW5kb3dzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb250YWluZXItbG9naW4td2luZG93cyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcclxuICAuY29udGFpbmVyLWxvZ2luLXdpbmRvd3Mge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMzIxcHgpIHtcclxuICAuY29udGFpbmVyLWxvZ2luLXdpbmRvd3Mge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIH1cclxuICAucGFzc3dvcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICAubG9naW4td2luZG93cyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _authService, router, store) {
        this._authService = _authService;
        this.router = router;
        this.store = store;
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.loginForm = fb.group({
            email: this.email,
            password: this.password
        });
    }
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) { return state.ui.loading; }).subscribe(function (loading) {
            _this.loading = loading;
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _a = this.loginForm.value, email = _a.email, password = _a.password;
        this._authService.loginUser(email, password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-register\">\n  <div class=\"container-register-dark\">\n    <div class=\"container-register-windows\">\n      <div class=\"register-windows\">\n        <div class=\"register-windows-form\">\n          <form class=\"register-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <mat-form-field>\n              <input matInput placeholder=\"Enter your email\" formControlName=\"email\" required>\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Enter yout name\" formControlName=\"name\" required>\n            </mat-form-field>\n            <mat-form-field class=\"password\">\n              <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </mat-form-field>\n            <ng-container *ngIf=\"!loading; else elseTemplate\">\n              <button type=\"submit\" class=\"submit\" mat-raised-button color=\"primary\">Sing In</button>\n              <p>You have an account?</p>\n              <a class=\"create-account\" routerLink=\"/login\">Login</a>\n            </ng-container>\n            <ng-template #elseTemplate>\n              <div class=\"spinner\">\n                <mat-spinner></mat-spinner>\n              </div>\n            </ng-template>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-register {\n  background: url('register.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100vh; }\n\n.container-register-dark {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100vh; }\n\n.container-register-windows {\n  height: 420px;\n  background-color: white;\n  box-shadow: 10px 10px 12px -3px rgba(0, 0, 0, 0.75);\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  -webkit-transform: translate(0, -50%);\n  border-radius: 4px;\n  width: 40%;\n  margin-left: 30%;\n  min-width: 300px; }\n\n.register-windows {\n  width: 90%;\n  margin-left: 5%;\n  height: auto;\n  margin-top: 40px; }\n\n.register-windows-form {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.register-windows-form > form > mat-form-field {\n  width: 100%; }\n\n.password {\n  margin-top: 20px; }\n\n.submit {\n  width: 100%; }\n\n.create-account {\n  text-decoration: none; }\n\n.spinner {\n  width: 100%;\n  text-align: center; }\n\n.spinner > mat-spinner {\n  margin: auto; }\n\n@media only screen and (max-width: 950px) {\n  .container-register-windows {\n    width: 50%;\n    margin-left: 25%;\n    min-width: 300px; } }\n\n@media only screen and (max-width: 480px) {\n  .container-register-windows {\n    width: 80%;\n    margin-left: 10%; } }\n\n@media only screen and (max-width: 321px) {\n  .container-register-windows {\n    width: 70%;\n    margin-left: 15%;\n    min-width: 200px; } }\n\n@media only screen and (max-height: 321px) {\n  .container-register-windows {\n    height: 300px;\n    width: 70%;\n    margin-left: 15%; }\n  .password {\n    margin-top: 0px; }\n  .register-windows {\n    width: 90%;\n    margin-left: 5%;\n    height: auto;\n    margin-top: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9EOlxcUHJveWVjdG9zXFxiYXJjZWxvbmFcXGRpY2llbWJyZVxcYXNzZXNzbWVudFxcZnJvbnQtZW5kL3NyY1xcYXBwXFxhdXRoXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBMkQ7RUFDM0QsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxxQ0FBbUM7RUFDbkMsWUFBVztFQUNYLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFHdkIsb0RBQW1EO0VBQ25ELG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsOEJBQTZCO0VBQzdCLHNDQUFxQztFQUNyQyxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsZ0JBQWU7RUFDZixhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUNqQixFQUFBOztBQUdIO0VBQ0U7SUFDRSxXQUFVO0lBQ1YsaUJBQWdCLEVBQ2pCLEVBQUE7O0FBR0g7RUFDRTtJQUNFLFdBQVU7SUFDVixpQkFBZ0I7SUFDaEIsaUJBQWdCLEVBQ2pCLEVBQUE7O0FBR0g7RUFDRTtJQUNFLGNBQWE7SUFDYixXQUFVO0lBQ1YsaUJBQWdCLEVBQ2pCO0VBRUQ7SUFDRSxnQkFBZSxFQUNoQjtFQUVEO0lBQ0UsV0FBVTtJQUNWLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGdCQUFlLEVBQ2hCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1yZWdpc3RlciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F1dGgvcmVnaXN0ZXIuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXJlZ2lzdGVyLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXItcmVnaXN0ZXItd2luZG93cyB7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItd2luZG93cyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci13aW5kb3dzLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci13aW5kb3dzLWZvcm0+Zm9ybT5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wYXNzd29yZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jcmVhdGUtYWNjb3VudCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lcj5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgLmNvbnRhaW5lci1yZWdpc3Rlci13aW5kb3dzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGFpbmVyLXJlZ2lzdGVyLXdpbmRvd3Mge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XHJcbiAgLmNvbnRhaW5lci1yZWdpc3Rlci13aW5kb3dzIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDMyMXB4KSB7XHJcbiAgLmNvbnRhaW5lci1yZWdpc3Rlci13aW5kb3dzIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC5wYXNzd29yZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItd2luZG93cyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, _authService, router, store) {
        this._authService = _authService;
        this.router = router;
        this.store = store;
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.registerForm = fb.group({
            email: this.email,
            name: this.name,
            password: this.password
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) { return state.ui.loading; }).subscribe(function (loading) {
            _this.loading = loading;
        });
    };
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _a = this.registerForm.value, name = _a.name, email = _a.email, password = _a.password;
        this._authService.createUser(name, email, password);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/redux/actions/counter.action.ts":
/*!*************************************************!*\
  !*** ./src/app/redux/actions/counter.action.ts ***!
  \*************************************************/
/*! exports provided: SET_COUNTER, UNSET_COUNTER, SetCounter, UnsetCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNTER", function() { return SET_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSET_COUNTER", function() { return UNSET_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCounter", function() { return SetCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsetCounter", function() { return UnsetCounter; });
var SET_COUNTER = '[SET COUNTER] Set ...';
var UNSET_COUNTER = '[UNSET COUNTER] Unset ...';
var SetCounter = /** @class */ (function () {
    function SetCounter(counter) {
        this.counter = counter;
        this.type = SET_COUNTER;
    }
    return SetCounter;
}());

var UnsetCounter = /** @class */ (function () {
    function UnsetCounter() {
        this.type = UNSET_COUNTER;
    }
    return UnsetCounter;
}());



/***/ }),

/***/ "./src/app/redux/actions/gnomes.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/redux/actions/gnomes.actions.ts ***!
  \*************************************************/
/*! exports provided: SET_GNOMES, UNSET_GNOMES, SET_GNOME_SELECTED, UNSET_GNOME_SELECTED, SetGnomes, UnsetGnomes, SetGnomeSelected, UnsetGnomeSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GNOMES", function() { return SET_GNOMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSET_GNOMES", function() { return UNSET_GNOMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GNOME_SELECTED", function() { return SET_GNOME_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSET_GNOME_SELECTED", function() { return UNSET_GNOME_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGnomes", function() { return SetGnomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsetGnomes", function() { return UnsetGnomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGnomeSelected", function() { return SetGnomeSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsetGnomeSelected", function() { return UnsetGnomeSelected; });
var SET_GNOMES = '[SET GNOMES] Set ...';
var UNSET_GNOMES = '[UNSET GNOMES] Unset ...';
var SET_GNOME_SELECTED = '[SET GNOME SELECTED] Set ...';
var UNSET_GNOME_SELECTED = '[UNSET GNOME SELECTED] Unset ...';
var SetGnomes = /** @class */ (function () {
    function SetGnomes(gnomes) {
        this.gnomes = gnomes;
        this.type = SET_GNOMES;
    }
    return SetGnomes;
}());

var UnsetGnomes = /** @class */ (function () {
    function UnsetGnomes() {
        this.type = UNSET_GNOMES;
    }
    return UnsetGnomes;
}());

var SetGnomeSelected = /** @class */ (function () {
    function SetGnomeSelected(gnomeSelected) {
        this.gnomeSelected = gnomeSelected;
        this.type = SET_GNOME_SELECTED;
    }
    return SetGnomeSelected;
}());

var UnsetGnomeSelected = /** @class */ (function () {
    function UnsetGnomeSelected() {
        this.type = UNSET_GNOME_SELECTED;
    }
    return UnsetGnomeSelected;
}());



/***/ }),

/***/ "./src/app/redux/actions/search.action.ts":
/*!************************************************!*\
  !*** ./src/app/redux/actions/search.action.ts ***!
  \************************************************/
/*! exports provided: SET_SEARCH, UNSET_SEARCH, SetSearch, UnsetSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH", function() { return SET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSET_SEARCH", function() { return UNSET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearch", function() { return SetSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsetSearch", function() { return UnsetSearch; });
var SET_SEARCH = '[SET SEARCH] Set ...';
var UNSET_SEARCH = '[UNSET SEARCH] Unset ...';
var SetSearch = /** @class */ (function () {
    function SetSearch(search) {
        this.search = search;
        this.type = SET_SEARCH;
    }
    return SetSearch;
}());

var UnsetSearch = /** @class */ (function () {
    function UnsetSearch() {
        this.type = UNSET_SEARCH;
    }
    return UnsetSearch;
}());



/***/ }),

/***/ "./src/app/redux/actions/ui.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/redux/actions/ui.actions.ts ***!
  \*********************************************/
/*! exports provided: SET_LOADING, UNSET_LOADING, SetLoadingAction, UnsetLoadingAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSET_LOADING", function() { return UNSET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLoadingAction", function() { return SetLoadingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsetLoadingAction", function() { return UnsetLoadingAction; });
var SET_LOADING = '[LOADING] Loading ...';
var UNSET_LOADING = '[LOADING] Finish ...';
var SetLoadingAction = /** @class */ (function () {
    function SetLoadingAction() {
        this.type = SET_LOADING;
    }
    return SetLoadingAction;
}());

var UnsetLoadingAction = /** @class */ (function () {
    function UnsetLoadingAction() {
        this.type = UNSET_LOADING;
    }
    return UnsetLoadingAction;
}());



/***/ }),

/***/ "./src/app/redux/actions/user.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/redux/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: LOGIN_USER, LOGOUT_USER, LoginUserAction, LogoutUserAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserAction", function() { return LoginUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutUserAction", function() { return LogoutUserAction; });
var LOGIN_USER = '[LOGIN] Login User ...';
var LOGOUT_USER = '[LOGOUT] Logout User ...';
var LoginUserAction = /** @class */ (function () {
    function LoginUserAction(user) {
        this.user = user;
        this.type = LOGIN_USER;
    }
    return LoginUserAction;
}());

var LogoutUserAction = /** @class */ (function () {
    function LogoutUserAction() {
        this.type = LOGOUT_USER;
    }
    return LogoutUserAction;
}());



/***/ }),

/***/ "./src/app/redux/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/redux/app.reducer.ts ***!
  \**************************************/
/*! exports provided: AppReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReducer", function() { return AppReducer; });
/* harmony import */ var _reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/ui.reducer */ "./src/app/redux/reducers/ui.reducer.ts");
/* harmony import */ var _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/user.reducer */ "./src/app/redux/reducers/user.reducer.ts");
/* harmony import */ var _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/counter.reducer */ "./src/app/redux/reducers/counter.reducer.ts");
/* harmony import */ var _reducers_search_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/search.reducer */ "./src/app/redux/reducers/search.reducer.ts");




var AppReducer = {
    ui: _reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_0__["UiReducer"],
    user: _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__["UserReducer"],
    counter: _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_2__["CounterReducer"],
    search: _reducers_search_reducer__WEBPACK_IMPORTED_MODULE_3__["SearchReducer"]
};


/***/ }),

/***/ "./src/app/redux/reducers/counter.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/redux/reducers/counter.reducer.ts ***!
  \***************************************************/
/*! exports provided: CounterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterReducer", function() { return CounterReducer; });
/* harmony import */ var _actions_counter_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/counter.action */ "./src/app/redux/actions/counter.action.ts");

var initialState = {
    counter: 20
};
function CounterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_counter_action__WEBPACK_IMPORTED_MODULE_0__["SET_COUNTER"]:
            return {
                counter: state.counter + action.counter
            };
        case _actions_counter_action__WEBPACK_IMPORTED_MODULE_0__["UNSET_COUNTER"]:
            return {
                counter: 20
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/reducers/search.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/redux/reducers/search.reducer.ts ***!
  \**************************************************/
/*! exports provided: SearchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchReducer", function() { return SearchReducer; });
/* harmony import */ var _actions_search_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/search.action */ "./src/app/redux/actions/search.action.ts");

var initialState = {
    search: ''
};
function SearchReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_search_action__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH"]:
            return {
                search: action.search
            };
        case _actions_search_action__WEBPACK_IMPORTED_MODULE_0__["UNSET_SEARCH"]:
            return {
                search: ''
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/reducers/ui.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/redux/reducers/ui.reducer.ts ***!
  \**********************************************/
/*! exports provided: UiReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiReducer", function() { return UiReducer; });
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui.actions */ "./src/app/redux/actions/ui.actions.ts");

var initialState = {
    loading: false
};
function UiReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]:
            return {
                loading: true
            };
        case _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__["UNSET_LOADING"]:
            return {
                loading: false
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/reducers/user.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/redux/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: UserReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReducer", function() { return UserReducer; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/redux/actions/user.actions.ts");

var initialState = {
    user: undefined
};
function UserReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER"]:
            return {
                user: action.user
            };
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]:
            return {
                user: undefined
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_authService) {
        this._authService = _authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this._authService.isAuth();
    };
    AuthGuardService.prototype.canLoad = function () {
        return this._authService.isAuth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/user.actions */ "./src/app/redux/actions/user.actions.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions/ui.actions */ "./src/app/redux/actions/ui.actions.ts");
/* harmony import */ var _redux_actions_counter_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/counter.action */ "./src/app/redux/actions/counter.action.ts");
/* harmony import */ var _redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/gnomes.actions */ "./src/app/redux/actions/gnomes.actions.ts");
/* harmony import */ var _redux_actions_search_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/search.action */ "./src/app/redux/actions/search.action.ts");













var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, snackBar, store, afDB) {
        this.afAuth = afAuth;
        this.router = router;
        this.snackBar = snackBar;
        this.store = store;
        this.afDB = afDB;
    }
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user && user.uid !== null) {
                _this.afDB.doc(user.uid + "/user").valueChanges()
                    .subscribe(function (userFB) {
                    _this.store.dispatch(new _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["LoginUserAction"](userFB));
                });
            }
        });
    };
    AuthService.prototype.createUser = function (name, email, password) {
        var _this = this;
        this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_9__["SetLoadingAction"]());
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
            var user = {
                uid: res.user.uid,
                email: res.user.email,
                name: name
            };
            _this.afDB.doc(user.uid + "/user")
                .set(user)
                .then(function () { return _this.router.navigate(['/']); })
                .catch(function (err) { return console.error(err); });
            _this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_9__["UnsetLoadingAction"]());
            _this.openSnackBar(res.user.email, 'Created successfully');
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_9__["UnsetLoadingAction"]());
            _this.openSnackBar(err.message, err.code);
        });
    };
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_9__["SetLoadingAction"]());
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
            _this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_9__["UnsetLoadingAction"]());
            _this.openSnackBar(res.user.email, 'Logged');
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.store.dispatch(new _redux_actions_ui_actions__WEBPACK_IMPORTED_MODULE_9__["UnsetLoadingAction"]());
            _this.openSnackBar(err.message, err.code);
        });
    };
    AuthService.prototype.logoutUser = function () {
        this.store.dispatch(new _redux_actions_counter_action__WEBPACK_IMPORTED_MODULE_10__["UnsetCounter"]());
        this.store.dispatch(new _redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_11__["UnsetGnomeSelected"]());
        this.store.dispatch(new _redux_actions_gnomes_actions__WEBPACK_IMPORTED_MODULE_11__["UnsetGnomes"]());
        this.store.dispatch(new _redux_actions_search_action__WEBPACK_IMPORTED_MODULE_12__["UnsetSearch"]());
        this.store.dispatch(new _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["LogoutUserAction"]());
        this.router.navigate(['/login']);
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fbUser) {
            if (fbUser === null) {
                _this.router.navigate(['/login']);
            }
            return fbUser != null;
        }));
    };
    AuthService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDPQXMSDJGz8FAbP43Oh_aqoMdgAyKRJtk',
        authDomain: 'brastlewark-d39c5.firebaseapp.com',
        databaseURL: 'https://brastlewark-d39c5.firebaseio.com',
        projectId: 'brastlewark-d39c5',
        storageBucket: 'brastlewark-d39c5.appspot.com',
        messagingSenderId: '862451052029'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Proyectos\barcelona\diciembre\assessment\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map