(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carrito/carrito.component */ "./src/app/components/carrito/carrito.component.ts");
/* harmony import */ var _components_comparaciones_comparaciones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/comparaciones/comparaciones.component */ "./src/app/components/comparaciones/comparaciones.component.ts");
/* harmony import */ var _components_armado_armado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/armado/armado.component */ "./src/app/components/armado/armado.component.ts");
/* harmony import */ var _components_armado_procesador_procesador_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/armado/procesador/procesador.component */ "./src/app/components/armado/procesador/procesador.component.ts");
/* harmony import */ var _components_armado_motherboard_motherboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/armado/motherboard/motherboard.component */ "./src/app/components/armado/motherboard/motherboard.component.ts");
/* harmony import */ var _components_armado_ram_ram_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/armado/ram/ram.component */ "./src/app/components/armado/ram/ram.component.ts");
/* harmony import */ var _components_armado_hdd_hdd_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/armado/hdd/hdd.component */ "./src/app/components/armado/hdd/hdd.component.ts");
/* harmony import */ var _components_armado_gddr_gddr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/armado/gddr/gddr.component */ "./src/app/components/armado/gddr/gddr.component.ts");
/* harmony import */ var _components_armado_case_case_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/armado/case/case.component */ "./src/app/components/armado/case/case.component.ts");
/* harmony import */ var _components_armado_power_power_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/armado/power/power.component */ "./src/app/components/armado/power/power.component.ts");
/* harmony import */ var _components_armado_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/armado/resumen/resumen.component */ "./src/app/components/armado/resumen/resumen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full', },
    { path: 'registro', component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_3__["RegistroComponent"], pathMatch: 'full', },
    { path: 'cart', component: _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_5__["CarritoComponent"], pathMatch: 'full' },
    { path: 'compa', component: _components_comparaciones_comparaciones_component__WEBPACK_IMPORTED_MODULE_6__["ComparacionesComponent"], pathMatch: 'full' },
    { path: 'armado', component: _components_armado_armado_component__WEBPACK_IMPORTED_MODULE_7__["ArmadoComponent"], pathMatch: 'full' },
    { path: 'procesador/:marca', component: _components_armado_procesador_procesador_component__WEBPACK_IMPORTED_MODULE_8__["ProcesadorComponent"] },
    { path: 'motherboard/:modelo', component: _components_armado_motherboard_motherboard_component__WEBPACK_IMPORTED_MODULE_9__["MotherboardComponent"] },
    { path: 'ram', component: _components_armado_ram_ram_component__WEBPACK_IMPORTED_MODULE_10__["RamComponent"] },
    { path: 'hdd', component: _components_armado_hdd_hdd_component__WEBPACK_IMPORTED_MODULE_11__["HddComponent"] },
    { path: 'gddr', component: _components_armado_gddr_gddr_component__WEBPACK_IMPORTED_MODULE_12__["GddrComponent"] },
    { path: 'case', component: _components_armado_case_case_component__WEBPACK_IMPORTED_MODULE_13__["CaseComponent"] },
    { path: 'power', component: _components_armado_power_power_component__WEBPACK_IMPORTED_MODULE_14__["PowerComponent"] },
    { path: 'resumen', component: _components_armado_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_15__["ResumenComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n  padding-top: 25px;\r\n  padding-bottom: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sabe';
    }
    AppComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/components/registro/registro.component.ts");
/* harmony import */ var _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/carrito/carrito.component */ "./src/app/components/carrito/carrito.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _components_comparaciones_comparaciones_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/comparaciones/comparaciones.component */ "./src/app/components/comparaciones/comparaciones.component.ts");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _components_armado_armado_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/armado/armado.component */ "./src/app/components/armado/armado.component.ts");
/* harmony import */ var _components_armado_procesador_procesador_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/armado/procesador/procesador.component */ "./src/app/components/armado/procesador/procesador.component.ts");
/* harmony import */ var _components_armado_motherboard_motherboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/armado/motherboard/motherboard.component */ "./src/app/components/armado/motherboard/motherboard.component.ts");
/* harmony import */ var _components_armado_ram_ram_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/armado/ram/ram.component */ "./src/app/components/armado/ram/ram.component.ts");
/* harmony import */ var _components_armado_hdd_hdd_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/armado/hdd/hdd.component */ "./src/app/components/armado/hdd/hdd.component.ts");
/* harmony import */ var _components_armado_gddr_gddr_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/armado/gddr/gddr.component */ "./src/app/components/armado/gddr/gddr.component.ts");
/* harmony import */ var _components_armado_case_case_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/armado/case/case.component */ "./src/app/components/armado/case/case.component.ts");
/* harmony import */ var _components_armado_power_power_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/armado/power/power.component */ "./src/app/components/armado/power/power.component.ts");
/* harmony import */ var _components_armado_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/armado/resumen/resumen.component */ "./src/app/components/armado/resumen/resumen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_19__["DeviceDetectorModule"].forRoot(),
                ngx_paypal__WEBPACK_IMPORTED_MODULE_21__["NgxPayPalModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_17__["RegistroComponent"],
                _components_carrito_carrito_component__WEBPACK_IMPORTED_MODULE_18__["CarritoComponent"],
                _components_comparaciones_comparaciones_component__WEBPACK_IMPORTED_MODULE_20__["ComparacionesComponent"],
                _components_armado_armado_component__WEBPACK_IMPORTED_MODULE_22__["ArmadoComponent"],
                _components_armado_procesador_procesador_component__WEBPACK_IMPORTED_MODULE_23__["ProcesadorComponent"],
                _components_armado_motherboard_motherboard_component__WEBPACK_IMPORTED_MODULE_24__["MotherboardComponent"],
                _components_armado_ram_ram_component__WEBPACK_IMPORTED_MODULE_25__["RamComponent"],
                _components_armado_hdd_hdd_component__WEBPACK_IMPORTED_MODULE_26__["HddComponent"],
                _components_armado_gddr_gddr_component__WEBPACK_IMPORTED_MODULE_27__["GddrComponent"],
                _components_armado_case_case_component__WEBPACK_IMPORTED_MODULE_28__["CaseComponent"],
                _components_armado_power_power_component__WEBPACK_IMPORTED_MODULE_29__["PowerComponent"],
                _components_armado_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_30__["ResumenComponent"],
            ],
            providers: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"], { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["StorageBucket"], useValue: "gs://ecga-ef38d.appspot.com/" },
                _common_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/common/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ;
    ApiService.prototype.getItemML = function (id) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrlML + 'sites/MLM/search?q=' + id + '&category=MLM1648').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            //console.log( 'Get Item Response:', res );
        }));
    };
    ApiService.prototype.getItemE = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS")
            .set("Access-Control-Allow-Origin", "*")
            .set('Content-Encoding', 'gzip')
            .set('Content-Type', 'text/plain;charset=UTF-8')
            .set('Server', 'Apache-Coyote/1.1')
            .set('X-EBAY-SOA-LOCALE-LIST', 'en-US_US')
            .set("X-EBAY-SOA-OPERATION-NAME", "findItemsByKeywords")
            .set('X-EBAY-SOA-REQUEST-ID', '16e70003-08b0-a9cb-2aa6-7ea6fff81bd4')
            .set('X-EBAY-SOA-RESPONSE-DATA-FORMAT', 'JSON')
            .set('X-EBAY-SOA-SERVICE-METRICS', '290818700')
            .set('X-EBAY-SOA-SERVICE-NAME', '{http://www.ebay.com/marketplace/search/v1/services}FindingService')
            .set('X-EBAY-SOA-SERVICE-VERSION', '1.13.0');
        /* Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD, OPTIONS
        Access-Control-Allow-Origin: *
        Content-Encoding: gzip
        Content-Type: text/plain;charset=UTF-8
        Date: Fri, 15 Nov 2019 16:58:10 GMT
        Server: Apache-Coyote/1.1
        Transfer-Encoding: chunked
        X-EBAY-SOA-LOCALE-LIST: en-US_US
        X-EBAY-SOA-MESSAGE-PROTOCOL: NONE
        X-EBAY-SOA-OPERATION-NAME: findItemsByKeywords
        X-EBAY-SOA-REQUEST-ID: 16e70003-08b0-a9cb-2aa6-7ea6fff81bd4
        X-EBAY-SOA-RESPONSE-DATA-FORMAT: JSON
        X-EBAY-SOA-SERVICE-METRICS: 290818700
        X-EBAY-SOA-SERVICE-NAME: {http://www.ebay.com/marketplace/search/v1/services}FindingService
        X-EBAY-SOA-SERVICE-VERSION: 1.13.0
        
        " --header Access-Control-Allow-Methods: GET, PUT, POST, DELETE, HEAD, OPTIONS --header Access-Control-Allow-Origin: *  --header Content-Encoding: gzip  --header Content-Type: text/plain;charset=UTF-8  --header Server: Apache-Coyote/1.1  --header X-EBAY-SOA-LOCALE-LIST: en-US_US;es-ES,es;q=0.9,en;q=0.8,ru;q=0.7  --header X-EBAY-SOA-OPERATION-NAME: findItemsByKeywords  --header X-EBAY-SOA-REQUEST-ID: 16e70003-08b0-a9cb-2aa6-7ea6fff81bd4"
        */
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrlE + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            //console.log( 'Get Item Response:', res );
        }));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/common/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/common/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afsAuth, afs) {
        this.afsAuth = afsAuth;
        this.afs = afs;
    }
    AuthService.prototype.ngOnInit = function () { };
    /* ---------------------------------------------------------------------------------------------------------------- */
    AuthService.prototype.registerUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) {
                resolve(userData),
                    _this.updateUserData(userData.user);
            }).catch(function (err) { return console.log(reject(err)); });
        });
    };
    /* ---------------------------------------------------------------------------------------------------------------- */
    AuthService.prototype.loginEmailUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    /* ---------------------------------------------------------------------------------------------------------------- */
    AuthService.prototype.loginFacebookUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider())
            .then(function (credential) { return _this.updateUserData(credential.user); });
    };
    AuthService.prototype.loginGoogleUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider())
            .then(function (credential) { return _this.updateUserData(credential.user); });
    };
    /* ---------------------------------------------------------------------------------------------------------------- */
    AuthService.prototype.logoutUser = function () {
        return this.afsAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            User_id: user.uid,
            email: user.email,
            name: user.displayName,
            photoUrl: user.photoURL
        };
        return userRef.set(data, { merge: true });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/data-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/common/data-api.service.ts ***!
  \********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataApiService = /** @class */ (function () {
    function DataApiService(afs) {
        this.afs = afs;
        this.productsCollection = afs.collection('products');
        this.UserCollection = afs.collection('users');
    }
    DataApiService.prototype.addUser = function (user) {
        this.UserCollection.add(user);
    };
    DataApiService.prototype.updateUser = function (user) {
        var idUser = user.User_id;
        this.userDoc = this.afs.doc("users/" + idUser);
        this.userDoc.update(user);
    };
    DataApiService.prototype.deleteUser = function (idUser) {
        this.userDoc = this.afs.doc("users/" + idUser);
        this.userDoc.delete();
    };
    DataApiService.prototype.obtenerColeccionDeDocumento = function (nombreColeccion, idDocumento) {
        this.itemsCollection = this.afs.collection(nombreColeccion + "/" + idDocumento);
        return this.itemsCollection.snapshotChanges();
    };
    DataApiService.prototype.getAllproducts = function (tipo, id) {
        this.productsCollection = this.afs.collection(tipo + "/" + id + "/" + id);
        return this.products = this.productsCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.Product_id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DataApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "./src/app/components/armado/armado.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/armado/armado.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n  <div class=\"navbar\">\r\n    <div class=\"container-logo\"> \r\n      <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n      <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n  </div>\r\n      \r\n<div class=\"logo\" *ngIf=\"logged\">\r\n<div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n  <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n</div>\r\n<li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n\r\n</div>  \r\n\r\n<div class=\"container-crud\" >\r\n    <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n    <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n    <ng-template #elseBlock>\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n    </ng-template>\r\n    <ng-template #thenBlock>\r\n    </ng-template>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n</body>\r\n\r\n<!-- \r\n------\r\n<div class=\"container-mid\">\r\n    <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n</div>\r\n<div class=\"container-mid-inv\">\r\n    <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n</div>\r\n\r\n\r\n------------------------------ -->\r\n\r\n<section id=\"resultsML\" class=\"conainer-mid\">\r\n\r\n<div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n  <div class=\"container\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n              <div class=\"container-categorias \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                <div class=\"container-inside\">\r\n                  <div style=\"color: white;\">Marca del Procesador</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"container-items\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <img width=\"150\"style=\"padding:20px;margin-top:50%;\" src=\"../assets/intel.png\"[routerLink]=\"['/procesador/intel']\" routerLinkActive=\"active\" >\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <img width=\"150\"style=\"padding:20px;margin-top:60%;\" src=\"../assets/amd.png\" [routerLink]=\"['/procesador/amd']\" routerLinkActive=\"active\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                <div class=\"container-inside-list\">\r\n                  <div style=\"color: white;\">Procesador</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Tarjeta Madre</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Memoria Ram</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Almacenamiento</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Gabinete</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Fuente de Poder</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Resumen</div>\r\n                      </div>\r\n                    </div>\r\n          </div>\r\n            <div class=\"col-md-5\" >\r\n                <div *ngFor=\"let info of infoE\" >\r\n                    <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\">\r\n                      <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                        <div class=\"card-body text-center\">\r\n                          <div class=\"fondo-img\">\r\n\r\n                              <a href=\"{{info.viewItemURL[0]}}\">\r\n                                  <img class=\"img-fluid\" src=\"{{info.galleryURL}}\">\r\n                                </a>\r\n                        </div>\r\n                      <div style=\"height: 120px ;width: 400px;\">\r\n                          <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                            {{info.title}}\r\n                          </p>\r\n                          <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                              ${{info.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                            </p>\r\n                            <p></p>\r\n                          </div>\r\n                            <div style=\"height: 100px;width: 410px;\">\r\n                                <button pButton type=\"button\" label=\"Comparar\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddVSE(info.galleryURL ,info.title ,info.sellingStatus[0].currentPrice[0].__value__*19.2)\"></button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n<!-- ------------------------------------------ -->\r\n            <div class=\"col-md-5\" >\r\n                <div *ngFor=\"let info of infoML\">\r\n                    <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n                      <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                        <div class=\"card-body text-center\">\r\n                          <div class=\"fondo-img\">\r\n                          <a href=\"{{info.permalink}}\">\r\n                            <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                          </a>\r\n                        </div>\r\n                      <div style=\"height: 120px ;width: 400px;\">\r\n                          <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                            {{info.title}}\r\n                          </p>\r\n                          <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                              ${{info.price}} MXN\r\n                            </p>\r\n                          </div>\r\n                            <div style=\"height: 100px;width: 410px;\">\r\n                                <button pButton type=\"button\" label=\"Comparar\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddVSML(info.thumbnail, info.title, info.price, info.attributes[3].name, info.attributes[3].value_name)\"></button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n  </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  </section>\r\n  \r\n\r\n<!-- \r\n-------------------------------- -->"

/***/ }),

/***/ "./src/app/components/armado/armado.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/armado/armado.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_user {\n  width: 450px;\n  height: 350px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: #3e3e3f; }\n\n.card-body {\n  width: 450px;\n  height: 350px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: #3e3e3f; }\n\n.fondo-img {\n  width: 410px;\n  height: 150px;\n  background-color: #3e3e3f; }\n\n.img-fluid {\n  width: 150px; }\n\n.container-proyectos {\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-top: 0%; }\n\n.logo {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-right: 45%; }\n\n.container-crud {\n  margin-left: 78%;\n  margin-top: -5%; }\n\n.container-logo {\n  margin-right: 10%;\n  margin-top: -1%; }\n\n.back-nav {\n  background: linear-gradient(to right, #9448e0 0%, #33c6ff 100%);\n  font-size: 12px; }\n\n.avatar {\n  padding: 2em 0.5em;\n  text-align: center;\n  width: 150px;\n  height: 150px; }\n\n.avatar img {\n    width: 100px;\n    border-radius: 50%;\n    overflow: hidden; }\n\n.container-mid {\n  height: 150px;\n  width: 60%; }\n\n.back {\n  min-height: 82vh; }\n\n.container-inside {\n  margin-top: 10%;\n  width: 19em;\n  height: 4em;\n  background: linear-gradient(to right, #ff0080 0%, #ebeded 100%); }\n\n.container-categorias {\n  background: linear-gradient(to right, #cc0066 0%, #ffffff 100%);\n  width: 20em;\n  height: 5em; }\n\n.container-categorias-list {\n  background: linear-gradient(to right, #7622ca 0%, #00b0f5 100%);\n  width: 20em;\n  height: 5em;\n  margin-top: -20%; }\n\n.container-inside-list {\n  margin-top: 10%;\n  width: 19em;\n  height: 4em;\n  background: linear-gradient(to right, #9448e0 0%, #33c6ff 100%); }\n\n.container-items {\n  width: 20em;\n  height: 20em;\n  background: #575758; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcm1hZG8vQzpcXFVzZXJzXFxMRU5PVk9cXERlc2t0b3BcXGVjZ2EgZmluYWxcXEVDR0Evc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFybWFkb1xcYXJtYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLHNCQUFxQixFQUN0Qjs7QUFDRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZ0VBQStEO0VBQy9ELGdCQUFlLEVBQ2hCOztBQUlEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osY0FBYSxFQU1kOztBQVZEO0lBTUksYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFDakI7O0FBRUg7RUFDRSxjQUFhO0VBQ2IsV0FBVSxFQUNYOztBQUdEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsWUFBVztFQUNYLGdFQUErRCxFQUNoRTs7QUFHRDtFQUNFLGdFQUErRDtFQUMvRCxZQUFXO0VBQ1gsWUFBVyxFQUNaOztBQUNEO0VBQ0ksZ0VBQStEO0VBQy9ELFlBQVc7RUFDWCxZQUFXO0VBQ1gsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixZQUFXO0VBQ1gsWUFBVztFQUNYLGdFQUErRCxFQUNsRTs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcm1hZG8vYXJtYWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTFzdDogI2VjYWY4MTtcclxuJGNvbG9yLTJuZDogIzYwYjhkNDtcclxuXHJcbi5jYXJkX3VzZXIge1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDQ4ZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXItY29sb3I6ICMzZTNlM2Y7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0NDhlMDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzNlM2UzZjtcclxufVxyXG4uZm9uZG8taW1nIHtcclxuICB3aWR0aDogNDEwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNmO1xyXG59XHJcbi5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4uY29udGFpbmVyLXByb3llY3RvcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbn1cclxuLmxvZ28ge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1JTtcclxufVxyXG4uY29udGFpbmVyLWNydWQge1xyXG4gIG1hcmdpbi1sZWZ0OiA3OCU7XHJcbiAgbWFyZ2luLXRvcDogLTUlO1xyXG59XHJcbi5jb250YWluZXItbG9nbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogLTElO1xyXG59XHJcbi5iYWNrLW5hdiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTQ0OGUwIDAlLCAjMzNjNmZmIDEwMCUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubmF2YmFyIHtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgcGFkZGluZzogMmVtIDAuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuLmNvbnRhaW5lci1taWQge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG4uY29udGFpbmVyLW1pZC1pbnYge1xyXG59XHJcbi5iYWNrIHtcclxuICBtaW4taGVpZ2h0OiA4MnZoO1xyXG59XHJcbi5jb250YWluZXItaW5zaWRlIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDE5ZW07XHJcbiAgaGVpZ2h0OiA0ZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYwMDgwIDAlLCAjZWJlZGVkIDEwMCUpO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lci1jYXRlZ29yaWFzIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjYzAwNjYgMCUsICNmZmZmZmYgMTAwJSk7XHJcbiAgd2lkdGg6IDIwZW07XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbn1cclxuLmNvbnRhaW5lci1jYXRlZ29yaWFzLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzYyMmNhIDAlLCAjMDBiMGY1IDEwMCUpO1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICAgIG1hcmdpbi10b3A6IC0yMCU7XHJcbn1cclxuLmNvbnRhaW5lci1pbnNpZGUtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogMTllbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTQ0OGUwIDAlLCAjMzNjNmZmIDEwMCUpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWl0ZW1ze1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbiAgICBoZWlnaHQ6IDIwZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTc1NzU4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/armado/armado.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/armado/armado.component.ts ***!
  \*******************************************************/
/*! exports provided: ArmadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmadoComponent", function() { return ArmadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ArmadoComponent = /** @class */ (function () {
    function ArmadoComponent(http, deviceService, router, apiService, authService, afs) {
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    ArmadoComponent.prototype.onSubmit = function (id) {
        var _this = this;
        this.item = this.searchForm.value.query;
        if (this.item != '') {
            this.apiService.getItemML(this.item).subscribe(function (res) {
                _this.infoML = res.results;
            });
            this.apiService.getItemE(this.item).subscribe(function (res) {
                //console.log(res.findItemsByKeywordsResponse[0].searchResult[0].item);
                _this.infoE = res.findItemsByKeywordsResponse[0].searchResult[0].item;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    ArmadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    ArmadoComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    ArmadoComponent.prototype.OnAddVSML = function (imagen, titulo, precio, modeloN, modelo) {
        alert("Se agrego al comparador");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: imagen,
            model: modeloN + " : " + modelo
        };
        this.afs.doc("vs/" + this.ipAddress).collection(this.ipAddress).add(newProject);
    };
    ArmadoComponent.prototype.OnAddVSE = function (imagen, titulo, precio, modeloN) {
        alert("Se agrego al comparador");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: imagen,
        };
        this.afs.doc("vs/" + this.ipAddress).collection(this.ipAddress).add(newProject);
    };
    ArmadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armado',
            template: __webpack_require__(/*! ./armado.component.html */ "./src/app/components/armado/armado.component.html"),
            styles: [__webpack_require__(/*! ./armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], ArmadoComponent);
    return ArmadoComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/case/case.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/armado/case/case.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n        <div class=\"navbar\">\r\n          <div class=\"container-logo\"> \r\n            <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n            <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n        </div>\r\n            \r\n      <div class=\"logo\" *ngIf=\"logged\">\r\n      <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n        <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n      </div>\r\n      <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n      \r\n      </div>  \r\n      \r\n      <div class=\"container-crud\" >\r\n          <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n          <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n          <ng-template #elseBlock>\r\n            <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n          </ng-template>\r\n          <ng-template #thenBlock>\r\n          </ng-template>\r\n      </div>\r\n      \r\n      </div>\r\n      \r\n      \r\n      </body>\r\n      \r\n      <!-- \r\n      ------\r\n      <div class=\"container-mid\">\r\n          <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n      </div>\r\n      <div class=\"container-mid-inv\">\r\n          <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n      </div>\r\n      \r\n      \r\n      ------------------------------ -->\r\n      \r\n      <section id=\"resultsML\" class=\"conainer-mid\">\r\n      \r\n      <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n        <div class=\"container\">\r\n          <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Marca del Procesador</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Procesador</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Tarjeta Madre</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/ram']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Memoria Ram</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list\" [routerLink]=\"['/hdd']\" routerLinkActive=\"active\" >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Almacenamiento</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/gddr']\" routerLinkActive=\"active\"  >\r\n                          <div class=\"container-inside-list\">\r\n                            <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias\" [routerLink]=\"['/case']\" routerLinkActive=\"active\" style=\"margin-top: -20.5%;\"   >\r\n                          <div class=\"container-inside\">\r\n                            <div style=\"color: white;\">Gabinete</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias-list \" [routerLink]=\"['/power']\" routerLinkActive=\"active\"  >\r\n                          <div class=\"container-inside-list\">\r\n                            <div style=\"color: white;\">Fuente de Poder</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias-list \" [routerLink]=\"['/resumen']\" routerLinkActive=\"active\"  >\r\n                            <div class=\"container-inside-list\">\r\n                              <div style=\"color: white;\">Resumen</div>\r\n                            </div>\r\n                          </div>\r\n                </div>\r\n      <!-- ------------------------------------------ -->\r\n      <div class=\"row col-md-11\" style=\"padding-left:5%;\">\r\n        <table class=\"table table-hover\" style=\"margin-left: 20%;\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" style=\"color: white;\">Marca</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n              </tr>\r\n            </thead>\r\n            <td><div class=\"dropdown\">\r\n                <select #selectMarca    id=\"selectMarca\"  (change)=\"cambiarMarca(selectMarca.value)\"  class=\"ml-3 custom-select\">\r\n                    <option value=\"0\">Seleccione</option>\r\n                    <option value=\"Corsair\"> Corsair</option>\r\n                    <option value=\"Cooler master\"> Cooler Master</option>\r\n                    <option value=\"EAGLE WARRIOR\"> EAGLE WARRIOR</option>\r\n                    <option value=\"NZXT\"> NZXT</option>\r\n                    <option value=\"ThermalTake\"> ThermalTake</option>\r\n                    <option value=\"ROG\"> ROG</option>\r\n                    <option value=\"Aero Cool\"> Aero Cool</option>\r\n                    <option value=\"Gygabite\"> Gygabite</option>\r\n                    <option value=\"Asus\"> Asus</option>\r\n                    <option value=\"Deep Cool\"> Deep Cool</option>\r\n                    <option value=\"Game Factor\"> Game Factor</option>\r\n                    </select>\r\n              </div></td>\r\n        </table>\r\n        <!-- --------------------------------------------------- -->\r\n          <div class=\"col-md-6\" *ngFor=\"let info of infoML\" style=\" margin-bottom: 2%;margin-top: 3%;\">\r\n                <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n                  <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                    <div class=\"card-body text-center\">\r\n                      <div class=\"fondo-img\">\r\n                      <a href=\"{{info.permalink}}\">\r\n                        <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                      </a>\r\n                    </div>\r\n                  <div style=\"height: 120px ;width: 400px;\">\r\n                      <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                        {{info.title}}\r\n                      </p>\r\n                      <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                          ${{info.price}} MXN\r\n                        </p>\r\n                      </div>\r\n                        <div style=\"height: 100px;width: 410px;\">\r\n                            <button pButton type=\"button\" label=\"Elegir\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddBUILD(info.attributes[0].value_name, info.attributes[3].value_name, info.thumbnail, info.title, info.price)\"></button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        </section>\r\n        \r\n      \r\n      <!-- \r\n      -------------------------------- -->"

/***/ }),

/***/ "./src/app/components/armado/case/case.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/armado/case/case.component.ts ***!
  \**********************************************************/
/*! exports provided: CaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseComponent", function() { return CaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CaseComponent = /** @class */ (function () {
    function CaseComponent(activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.valorCapacidad = "";
        this.valorMiembro = "";
        this.valorMarca = "";
        this.valorTipo = "";
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    CaseComponent.prototype.onSubmit = function (marca, modelo) {
        var _this = this;
        if (marca != '') {
            this.apiService.getItemML(marca + modelo).subscribe(function (res) {
                _this.infoML = res.results;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    CaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    CaseComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    CaseComponent.prototype.OnAddBUILD = function (nombre, modelo, img, titulo, precio) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: nombre + " " + modelo,
        };
        this.afs.doc("build/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.router.navigate(['/power']);
    };
    CaseComponent.prototype.cambiarCapacidad = function (value) {
        var _this = this;
        this.valorCapacidad = value;
        this.valorMiembro = this.valorMarca + " " + this.valorTipo + " " + this.valorCapacidad;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    CaseComponent.prototype.cambiarMarca = function (value) {
        var _this = this;
        this.valorMarca = value;
        this.valorMiembro = "Gabinete " + this.valorMarca + " " + this.valorTipo + " " + this.valorCapacidad;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    CaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-case',
            template: __webpack_require__(/*! ./case.component.html */ "./src/app/components/armado/case/case.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], CaseComponent);
    return CaseComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/gddr/gddr.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/armado/gddr/gddr.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n        <div class=\"navbar\">\r\n          <div class=\"container-logo\"> \r\n            <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n            <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n        </div>\r\n            \r\n      <div class=\"logo\" *ngIf=\"logged\">\r\n      <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n        <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n      </div>\r\n      <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n      \r\n      </div>  \r\n      \r\n      <div class=\"container-crud\" >\r\n          <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n          <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n          <ng-template #elseBlock>\r\n            <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n          </ng-template>\r\n          <ng-template #thenBlock>\r\n          </ng-template>\r\n      </div>\r\n      \r\n      </div>\r\n      \r\n      \r\n      </body>\r\n      \r\n      <!-- \r\n      ------\r\n      <div class=\"container-mid\">\r\n          <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n      </div>\r\n      <div class=\"container-mid-inv\">\r\n          <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n      </div>\r\n      \r\n      \r\n      ------------------------------ -->\r\n      \r\n      <section id=\"resultsML\" class=\"conainer-mid\">\r\n      \r\n      <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n        <div class=\"container\">\r\n          <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Marca del Procesador</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Procesador</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Tarjeta Madre</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/ram']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Memoria Ram</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list\" [routerLink]=\"['/hdd']\" routerLinkActive=\"active\"   >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Almacenamiento</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias \" [routerLink]=\"['/gddr']\" routerLinkActive=\"active\" style=\"margin-top: -20.5%;\" >\r\n                          <div class=\"container-inside\">\r\n                            <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias-list \" [routerLink]=\"['/case']\" routerLinkActive=\"active\"  >\r\n                          <div class=\"container-inside-list\">\r\n                            <div style=\"color: white;\">Gabinete</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias-list \" [routerLink]=\"['/power']\" routerLinkActive=\"active\"  >\r\n                          <div class=\"container-inside-list\">\r\n                            <div style=\"color: white;\">Fuente de Poder</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias-list \" [routerLink]=\"['/resumen']\" routerLinkActive=\"active\"  >\r\n                            <div class=\"container-inside-list\">\r\n                              <div style=\"color: white;\">Resumen</div>\r\n                            </div>\r\n                          </div>\r\n                </div>\r\n      <!-- ------------------------------------------ -->\r\n      <div class=\"row col-md-11\" style=\"padding-left:5%;\">\r\n        <table class=\"table table-hover\" style=\"margin-left: 20%;\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" style=\"color: white;\">Marca</th>\r\n                <th scope=\"col\" style=\"color: white;\">Modelo</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n              </tr>\r\n            </thead>\r\n            <td><div class=\"dropdown\">\r\n                <select #selectMarca    id=\"selectMarca\"  (change)=\"cambiarMarca(selectMarca.value)\"  class=\"ml-3 custom-select\">\r\n                    <option value=\"0\">Seleccione</option>\r\n                    <option value=\"ATI\" >ATI </option>\r\n                    <option value=\"NVIDIA\" >NVIDIA </option>\r\n                </select>\r\n              </div></td>\r\n              <div *ngIf=\"ATI; then thenBlock else elseBlock\"></div>\r\n                <ng-template #elseBlock>\r\n                        \r\n                </ng-template>\r\n                <ng-template #thenBlock>\r\n                    <td><div class=\"dropdown\">\r\n                            <select #selectPrioridad    id=\"selectPrioridad\"  (change)=\"cambiarTipo(selectPrioridad.value)\"  class=\"ml-3 custom-select\">\r\n                                <option value=\"\">Seleccione</option>\r\n                                <option value=\"7000\" >7000 </option>\r\n                                <option value=\"7500 AIW\" >7500 AIW </option>\r\n                                <option value=\"8500\" >8500 </option>\r\n                                <option value=\"8500 AIW\" >8500 AIW </option>\r\n                                <option value=\"8500 LE\" >8500 LE </option>\r\n                                <option value=\"9000\" >9000 </option>\r\n                                <option value=\"9000 Pro\" >9000 Pro </option>\r\n                                <option value=\"9100\" >9100 </option>\r\n                                <option value=\"9200\" >9200 </option>\r\n                                <option value=\"9200 B3\" >9200 B3 </option>\r\n                                <option value=\"9200 LE\" >9200 LE </option>\r\n                                <option value=\"9200 SE\" >9200 SE </option>\r\n                                <option value=\"9250\" >9250 </option>\r\n                                <option value=\"9250 VIVO\" >9250 VIVO </option>\r\n                                <option value=\"9500 Non-Pro\" >9500 Non-Pro </option>\r\n                                <option value=\"9500 Pro\" >9500 Pro </option>\r\n                                <option value=\"9550\" >9550 </option>\r\n                                <option value=\"9550 GE\" >9550 GE </option>\r\n                                <option value=\"9550 SE\" >9550 SE </option>\r\n                                <option value=\"9550 VIVO\" >9550 VIVO </option>\r\n                                <option value=\"9550 XT\" >9550 XT </option>\r\n                                <option value=\"9600\" >9600 </option>\r\n                                <option value=\"9600 AIW\" >9600 AIW </option>\r\n                                <option value=\"9600 AIW XT\" >9600 AIW XT </option>\r\n                                <option value=\"9600 EZ\" >9600 EZ </option>\r\n                                <option value=\"9600 LE\" >9600 LE </option>\r\n                                <option value=\"9600 Non-Pro\" >9600 Non-Pro </option>\r\n                                <option value=\"9600 Pro\" >9600 Pro </option>\r\n                                <option value=\"9600 Pro AIW\" >9600 Pro AIW </option>\r\n                                <option value=\"9600 Pro Mobility\" >9600 Pro Mobility </option>\r\n                                <option value=\"9600 Pro VIVO\" >9600 Pro VIVO </option>\r\n                                <option value=\"9600 SE\" >9600 SE </option>\r\n                                <option value=\"9600 SE VIVO\" >9600 SE VIVO </option>\r\n                                <option value=\"9600 TX\" >9600 TX </option>\r\n                                <option value=\"9600 VIVO\" >9600 VIVO </option>\r\n                                <option value=\"9600 XT\" >9600 XT </option>\r\n                                <option value=\"9600 XT VIVO\" >9600 XT VIVO </option>\r\n                                <option value=\"9700 AIW\" >9700 AIW </option>\r\n                                <option value=\"9700 Non-Pro\" >9700 Non-Pro </option>\r\n                                <option value=\"9700 Pro\" >9700 Pro </option>\r\n                                <option value=\"9700 Pro AIW\" >9700 Pro AIW </option>\r\n                                <option value=\"9700 TX\" >9700 TX </option>\r\n                                <option value=\"9800 LE\" >9800 LE </option>\r\n                                <option value=\"9800 Non-Pro\" >9800 Non-Pro </option>\r\n                                <option value=\"9800 Pro\" >9800 Pro </option>\r\n                                <option value=\"9800 Pro AIW\" >9800 Pro AIW </option>\r\n                                <option value=\"9800 Pro M\" >9800 Pro M </option>\r\n                                <option value=\"9800 Pro MAC\" >9800 Pro MAC </option>\r\n                                <option value=\"9800 Pro VIVO\" >9800 Pro VIVO </option>\r\n                                <option value=\"9800 SE\" >9800 SE </option>\r\n                                <option value=\"9800 SE AIW\" >9800 SE AIW </option>\r\n                                <option value=\"9800 XL\" >9800 XL </option>\r\n                                <option value=\"9800 XT\" >9800 XT </option>\r\n                                <option value=\"9800 XXL\" >9800 XXL </option>\r\n                                <option value=\"AIW 2006\" >AIW 2006 </option>\r\n                                <option value=\"FireGL 5100\" >FireGL 5100 </option>\r\n                                <option value=\"FireGL 7100\" >FireGL 7100 </option>\r\n                                <option value=\"FireGL 8800\" >FireGL 8800 </option>\r\n                                <option value=\"FireGL T2\" >FireGL T2 </option>\r\n                                <option value=\"FireGL V3200\" >FireGL V3200 </option>\r\n                                <option value=\"FireGL V5600\" >FireGL V5600 </option>\r\n                                <option value=\"FireGL V7200\" >FireGL V7200 </option>\r\n                                <option value=\"FireGL V7300\" >FireGL V7300 </option>\r\n                                <option value=\"FireGL V8650\" >FireGL V8650 </option>\r\n                                <option value=\"FireGL X1\" >FireGL X1 </option>\r\n                                <option value=\"FireGL X2\" >FireGL X2 </option>\r\n                                <option value=\"FireGL X3\" >FireGL X3 </option>\r\n                                <option value=\"HD 2400\" >HD 2400 </option>\r\n                                <option value=\"HD 2400 Pro\" >HD 2400 Pro </option>\r\n                                <option value=\"HD 2400 XT\" >HD 2400 XT </option>\r\n                                <option value=\"HD 2400 XT Mobility\" >HD 2400 XT Mobility </option>\r\n                                <option value=\"HD 2600 Mobility\" >HD 2600 Mobility </option>\r\n                                <option value=\"HD 2600 Pro\" >HD 2600 Pro </option>\r\n                                <option value=\"HD 2600 XT\" >HD 2600 XT </option>\r\n                                <option value=\"HD 2600 XT AGP\" >HD 2600 XT AGP </option>\r\n                                <option value=\"HD 2600 XT Mobility\" >HD 2600 XT Mobility </option>\r\n                                <option value=\"HD 2900 GT\" >HD 2900 GT </option>\r\n                                <option value=\"HD 2900 Pro\" >HD 2900 Pro </option>\r\n                                <option value=\"HD 2900 XT\" >HD 2900 XT </option>\r\n                                <option value=\"HD 3400\" >HD 3400 </option>\r\n                                <option value=\"HD 3450\" >HD 3450 </option>\r\n                                <option value=\"HD 3470 Mobility\" >HD 3470 Mobility </option>\r\n                                <option value=\"HD 3650\" >HD 3650 </option>\r\n                                <option value=\"HD 3650 Mobility\" >HD 3650 Mobility </option>\r\n                                <option value=\"HD 3690\" >HD 3690 </option>\r\n                                <option value=\"HD 3850\" >HD 3850 </option>\r\n                                <option value=\"HD 3850 AGP\" >HD 3850 AGP </option>\r\n                                <option value=\"HD 3850 X2\" >HD 3850 X2 </option>\r\n                                <option value=\"HD 3870\" >HD 3870 </option>\r\n                                <option value=\"HD 3870 X2\" >HD 3870 X2 </option>\r\n                                <option value=\"HD 3870 X2 Mobility\" >HD 3870 X2 Mobility </option>\r\n                                <option value=\"HD 4350\" >HD 4350 </option>\r\n                                <option value=\"HD 4550\" >HD 4550 </option>\r\n                                <option value=\"HD 4570 Mobility\" >HD 4570 Mobility </option>\r\n                                <option value=\"HD 4650\" >HD 4650 </option>\r\n                                <option value=\"HD 4650 AGP\" >HD 4650 AGP </option>\r\n                                <option value=\"HD 4650 Mobility\" >HD 4650 Mobility </option>\r\n                                <option value=\"HD 4670\" >HD 4670 </option>\r\n                                <option value=\"HD 4670 Mobility\" >HD 4670 Mobility </option>\r\n                                <option value=\"HD 4730\" >HD 4730 </option>\r\n                                <option value=\"HD 4770\" >HD 4770 </option>\r\n                                <option value=\"HD 4830\" >HD 4830 </option>\r\n                                <option value=\"HD 4850\" >HD 4850 </option>\r\n                                <option value=\"HD 4850 Mobility\" >HD 4850 Mobility </option>\r\n                                <option value=\"HD 4850 X2\" >HD 4850 X2 </option>\r\n                                <option value=\"HD 4860\" >HD 4860 </option>\r\n                                <option value=\"HD 4870\" >HD 4870 </option>\r\n                                <option value=\"HD 4870 Mobility\" >HD 4870 Mobility </option>\r\n                                <option value=\"HD 4870 X2 Master\" >HD 4870 X2 Master </option>\r\n                                <option value=\"HD 4870 X2 Slave\" >HD 4870 X2 Slave </option>\r\n                                <option value=\"HD 4890\" >HD 4890 </option>\r\n                                <option value=\"X1300 Non-Pro\" >X1300 Non-Pro </option>\r\n                                <option value=\"X1300 Pro\" >X1300 Pro </option>\r\n                                <option value=\"X1550\" >X1550 </option>\r\n                                <option value=\"X1600 Pro\" >X1600 Pro </option>\r\n                                <option value=\"X1600 XT\" >X1600 XT </option>\r\n                                <option value=\"X1650 Pro\" >X1650 Pro </option>\r\n                                <option value=\"X1650 XT\" >X1650 XT </option>\r\n                                <option value=\"X1800 Crossfire\" >X1800 Crossfire </option>\r\n                                <option value=\"X1800 GTO\" >X1800 GTO </option>\r\n                                <option value=\"X1800 XL\" >X1800 XL </option>\r\n                                <option value=\"X1800 XT\" >X1800 XT </option>\r\n                                <option value=\"X1800 XT PE\" >X1800 XT PE </option>\r\n                                <option value=\"X1900 AIW\" >X1900 AIW </option>\r\n                                <option value=\"X1900 Crossfire\" >X1900 Crossfire </option>\r\n                                <option value=\"X1900 GT\" >X1900 GT </option>\r\n                                <option value=\"X1900 XT\" >X1900 XT </option>\r\n                                <option value=\"X1900 XTX\" >X1900 XTX </option>\r\n                                <option value=\"X1950 CrossFire\" >X1950 CrossFire </option>\r\n                                <option value=\"X1950 GT\" >X1950 GT </option>\r\n                                <option value=\"X1950 Pro\" >X1950 Pro </option>\r\n                                <option value=\"X1950 XT\" >X1950 XT </option>\r\n                                <option value=\"X1950 XTX\" >X1950 XTX </option>\r\n                                <option value=\"X300 Mobility\" >X300 Mobility </option>\r\n                                <option value=\"X300 SE\" >X300 SE </option>\r\n                                <option value=\"X550\" >X550 </option>\r\n                                <option value=\"X600\" >X600 </option>\r\n                                <option value=\"X600 AIW\" >X600 AIW </option>\r\n                                <option value=\"X600 Pro\" >X600 Pro </option>\r\n                                <option value=\"X600 XT\" >X600 XT </option>\r\n                                <option value=\"X700\" >X700 </option>\r\n                                <option value=\"X700 Non-Pro\" >X700 Non-Pro </option>\r\n                                <option value=\"X700 Pro\" >X700 Pro </option>\r\n                                <option value=\"X700 Pro AGP\" >X700 Pro AGP </option>\r\n                                <option value=\"X700 SE\" >X700 SE </option>\r\n                                <option value=\"X700 XT\" >X700 XT </option>\r\n                                <option value=\"X800\" >X800 </option>\r\n                                <option value=\"X800 AIW\" >X800 AIW </option>\r\n                                <option value=\"X800 GT\" >X800 GT </option>\r\n                                <option value=\"X800 GTO\" >X800 GTO </option>\r\n                                <option value=\"X800 GTO VIVO\" >X800 GTO VIVO </option>\r\n                                <option value=\"X800 GTO²\" >X800 GTO² </option>\r\n                                <option value=\"X800 Non-Pro\" >X800 Non-Pro </option>\r\n                                <option value=\"X800 Non-Pro VIVO\" >X800 Non-Pro VIVO </option>\r\n                                <option value=\"X800 Pro\" >X800 Pro </option>\r\n                                <option value=\"X800 Pro VIVO\" >X800 Pro VIVO </option>\r\n                                <option value=\"X800 Pro VIVO 16P\" >X800 Pro VIVO 16P </option>\r\n                                <option value=\"X800 SE\" >X800 SE </option>\r\n                                <option value=\"X800 VE AIW\" >X800 VE AIW </option>\r\n                                <option value=\"X800 XL\" >X800 XL </option>\r\n                                <option value=\"X800 XL AIW\" >X800 XL AIW </option>\r\n                                <option value=\"X800 XL VIVO\" >X800 XL VIVO </option>\r\n                                <option value=\"X800 XT\" >X800 XT </option>\r\n                                <option value=\"X800 XT AIW\" >X800 XT AIW </option>\r\n                                <option value=\"X800 XT PE\" >X800 XT PE </option>\r\n                                <option value=\"X850 Crossfire\" >X850 Crossfire </option>\r\n                                <option value=\"X850 Pro\" >X850 Pro </option>\r\n                                <option value=\"X850 Pro VIVO\" >X850 Pro VIVO </option>\r\n                                <option value=\"X850 XT\" >X850 XT </option>\r\n                                <option value=\"X850 XT Non-VIVO\" >X850 XT Non-VIVO </option>\r\n                                <option value=\"X850 XT PE\" >X850 XT PE </option>\r\n                            </select>\r\n                    </div></td>\r\n                </ng-template>\r\n\r\n                <div *ngIf=\"NVIDIA; then thenBlockNV else elseBlockNV\"></div>\r\n                <ng-template #elseBlockNV>\r\n                        \r\n                </ng-template>\r\n                <ng-template #thenBlockNV>\r\n                    <td><div class=\"dropdown\">\r\n                        <select #selectMarca    id=\"selectMarca\"  (change)=\"cambiarMarca(selectMarca.value)\"  class=\"ml-3 custom-select\">\r\n                            <option value=\"0\">Seleccione</option>\r\n                            <option value=\"6150 Go\" >6150 Go </option>\r\n                            <option value=\"6200\" >6200 </option>\r\n                            <option value=\"6200 Go\" >6200 Go </option>\r\n                            <option value=\"6200 LE\" >6200 LE </option>\r\n                            <option value=\"6200 SE\" >6200 SE </option>\r\n                            <option value=\"6200 TC\" >6200 TC </option>\r\n                            <option value=\"6400 Go\" >6400 Go </option>\r\n                            <option value=\"6600\" >6600 </option>\r\n                            <option value=\"6600 Go\" >6600 Go </option>\r\n                            <option value=\"6600 GT\" >6600 GT </option>\r\n                            <option value=\"6600 LE\" >6600 LE </option>\r\n                            <option value=\"6700 XL\" >6700 XL </option>\r\n                            <option value=\"6800\" >6800 </option>\r\n                            <option value=\"6800 Go\" >6800 Go </option>\r\n                            <option value=\"6800 GS\" >6800 GS </option>\r\n                            <option value=\"6800 GT\" >6800 GT </option>\r\n                            <option value=\"6800 LE\" >6800 LE </option>\r\n                            <option value=\"6800 Ultra\" >6800 Ultra </option>\r\n                            <option value=\"6800 XT\" >6800 XT </option>\r\n                            <option value=\"7050 PV\" >7050 PV </option>\r\n                            <option value=\"7100 GS\" >7100 GS </option>\r\n                            <option value=\"7200 Go\" >7200 Go </option>\r\n                            <option value=\"7200 GS\" >7200 GS </option>\r\n                            <option value=\"7300 Go\" >7300 Go </option>\r\n                            <option value=\"7300 GS\" >7300 GS </option>\r\n                            <option value=\"7300 GT\" >7300 GT </option>\r\n                            <option value=\"7300 LE\" >7300 LE </option>\r\n                            <option value=\"7300 SE\" >7300 SE </option>\r\n                            <option value=\"7400 Go\" >7400 Go </option>\r\n                            <option value=\"7500 GT\" >7500 GT </option>\r\n                            <option value=\"7500 LE\" >7500 LE </option>\r\n                            <option value=\"7600 Go\" >7600 Go </option>\r\n                            <option value=\"7600 GS\" >7600 GS </option>\r\n                            <option value=\"7600 GT\" >7600 GT </option>\r\n                            <option value=\"7650 GS\" >7650 GS </option>\r\n                            <option value=\"7700 Go\" >7700 Go </option>\r\n                            <option value=\"7800 GS\" >7800 GS </option>\r\n                            <option value=\"7800 GT\" >7800 GT </option>\r\n                            <option value=\"7800 GTX\" >7800 GTX </option>\r\n                            <option value=\"7900 GS\" >7900 GS </option>\r\n                            <option value=\"7900 GS Go\" >7900 GS Go </option>\r\n                            <option value=\"7900 GSX Go\" >7900 GSX Go </option>\r\n                            <option value=\"7900 GT\" >7900 GT </option>\r\n                            <option value=\"7900 GTO\" >7900 GTO </option>\r\n                            <option value=\"7900 GTX\" >7900 GTX </option>\r\n                            <option value=\"7900 GTX Go\" >7900 GTX Go </option>\r\n                            <option value=\"7950 GT\" >7950 GT </option>\r\n                            <option value=\"7950 GTX\" >7950 GTX </option>\r\n                            <option value=\"7950 GTX Go\" >7950 GTX Go </option>\r\n                            <option value=\"7950 GX2\" >7950 GX2 </option>\r\n                            <option value=\"8300 GS\" >8300 GS </option>\r\n                            <option value=\"8400 GS\" >8400 GS </option>\r\n                            <option value=\"8400M G\" >8400M G </option>\r\n                            <option value=\"8400M GS\" >8400M GS </option>\r\n                            <option value=\"8500 GT\" >8500 GT </option>\r\n                            <option value=\"8600\" >8600 </option>\r\n                            <option value=\"8600 GS\" >8600 GS </option>\r\n                            <option value=\"8600 GT\" >8600 GT </option>\r\n                            <option value=\"8600 GTS\" >8600 GTS </option>\r\n                            <option value=\"8600M GS\" >8600M GS </option>\r\n                            <option value=\"8600M GT\" >8600M GT </option>\r\n                            <option value=\"8700M GT\" >8700M GT </option>\r\n                            <option value=\"8800 GS\" >8800 GS </option>\r\n                            <option value=\"8800 GT\" >8800 GT </option>\r\n                            <option value=\"8800 GTS\" >8800 GTS </option>\r\n                            <option value=\"8800 GTX\" >8800 GTX </option>\r\n                            <option value=\"8800 Ultra\" >8800 Ultra </option>\r\n                            <option value=\"8800M GTS\" >8800M GTS </option>\r\n                            <option value=\"8800M GTX\" >8800M GTX </option>\r\n                            <option value=\"9300M G\" >9300M G </option>\r\n                            <option value=\"9300M GS\" >9300M GS </option>\r\n                            <option value=\"9400 GT\" >9400 GT </option>\r\n                            <option value=\"9500 GS\" >9500 GS </option>\r\n                            <option value=\"9500 GT\" >9500 GT </option>\r\n                            <option value=\"9500M GS\" >9500M GS </option>\r\n                            <option value=\"9600 GSO\" >9600 GSO </option>\r\n                            <option value=\"9600 GT\" >9600 GT </option>\r\n                            <option value=\"9600M GS\" >9600M GS </option>\r\n                            <option value=\"9600M GT\" >9600M GT </option>\r\n                            <option value=\"9650M GT\" >9650M GT </option>\r\n                            <option value=\"9700M GT\" >9700M GT </option>\r\n                            <option value=\"9800 GT\" >9800 GT </option>\r\n                            <option value=\"9800 GTX\" >9800 GTX </option>\r\n                            <option value=\"9800 GTX+\" >9800 GTX+ </option>\r\n                            <option value=\"9800 GX2\" >9800 GX2 </option>\r\n                            <option value=\"9800GT\" >9800GT </option>\r\n                            <option value=\"9800M GT\" >9800M GT </option>\r\n                            <option value=\"9800M GTS\" >9800M GTS </option>\r\n                            <option value=\"Asus\" >Asus </option>\r\n                            <option value=\"G 205\" >G 205 </option>\r\n                            <option value=\"G 210\" >G 210 </option>\r\n                            <option value=\"G 310\" >G 310 </option>\r\n                            <option value=\"Grid K1\" >Grid K1 </option>\r\n                            <option value=\"GT 1030\" >GT 1030 </option>\r\n                            <option value=\"GT 120\" >GT 120 </option>\r\n                            <option value=\"GT 130\" >GT 130 </option>\r\n                            <option value=\"GT 130M\" >GT 130M </option>\r\n                            <option value=\"GT 220\" >GT 220 </option>\r\n                            <option value=\"GT 230\" >GT 230 </option>\r\n                            <option value=\"GT 240\" >GT 240 </option>\r\n                            <option value=\"GT 240M\" >GT 240M </option>\r\n                            <option value=\"GT 320\" >GT 320 </option>\r\n                            <option value=\"GT 330\" >GT 330 </option>\r\n                            <option value=\"GT 430\" >GT 430 </option>\r\n                            <option value=\"GT 440\" >GT 440 </option>\r\n                            <option value=\"GT 520\" >GT 520 </option>\r\n                            <option value=\"GT 530\" >GT 530 </option>\r\n                            <option value=\"GT 610\" >GT 610 </option>\r\n                            <option value=\"GT 620\" >GT 620 </option>\r\n                            <option value=\"GT 630\" >GT 630 </option>\r\n                            <option value=\"GT 640\" >GT 640 </option>\r\n                            <option value=\"GT 710\" >GT 710 </option>\r\n                            <option value=\"GT 720\" >GT 720 </option>\r\n                            <option value=\"GT 730\" >GT 730 </option>\r\n                            <option value=\"GT 740\" >GT 740 </option>\r\n                            <option value=\"GTS 240\" >GTS 240 </option>\r\n                            <option value=\"GTS 250\" >GTS 250 </option>\r\n                            <option value=\"GTS 250M\" >GTS 250M </option>\r\n                            <option value=\"GTS 360M\" >GTS 360M </option>\r\n                            <option value=\"GTS 450\" >GTS 450 </option>\r\n                            <option value=\"GTX 1050\" >GTX 1050 </option>\r\n                            <option value=\"GTX 1050 Ti\" >GTX 1050 Ti </option>\r\n                            <option value=\"GTX 1060\" >GTX 1060 </option>\r\n                            <option value=\"GTX 1060 3GB\" >GTX 1060 3GB </option>\r\n                            <option value=\"GTX 1070\" >GTX 1070 </option>\r\n                            <option value=\"GTX 1070 Mobile\" >GTX 1070 Mobile </option>\r\n                            <option value=\"GTX 1070 Ti\" >GTX 1070 Ti </option>\r\n                            <option value=\"GTX 1080\" >GTX 1080 </option>\r\n                            <option value=\"GTX 1080 Mobile\" >GTX 1080 Mobile </option>\r\n                            <option value=\"GTX 1080 Ti\" >GTX 1080 Ti </option>\r\n                            <option value=\"GTX 1650\" >GTX 1650 </option>\r\n                            <option value=\"GTX 1650 Super\" >GTX 1650 Super </option>\r\n                            <option value=\"GTX 1660\" >GTX 1660 </option>\r\n                            <option value=\"GTX 1660 Super\" >GTX 1660 Super </option>\r\n                            <option value=\"GTX 1660 Ti\" >GTX 1660 Ti </option>\r\n                            <option value=\"GTX 1660 Ti Mobile\" >GTX 1660 Ti Mobile </option>\r\n                            <option value=\"GTX 2070\" >GTX 2070 </option>\r\n                            <option value=\"GTX 260\" >GTX 260 </option>\r\n                            <option value=\"GTX 260M\" >GTX 260M </option>\r\n                            <option value=\"GTX 275\" >GTX 275 </option>\r\n                            <option value=\"GTX 280\" >GTX 280 </option>\r\n                            <option value=\"GTX 280M\" >GTX 280M </option>\r\n                            <option value=\"GTX 285\" >GTX 285 </option>\r\n                            <option value=\"GTX 295\" >GTX 295 </option>\r\n                            <option value=\"GTX 460\" >GTX 460 </option>\r\n                            <option value=\"GTX 460 SE\" >GTX 460 SE </option>\r\n                            <option value=\"GTX 460 v2\" >GTX 460 v2 </option>\r\n                            <option value=\"GTX 460M\" >GTX 460M </option>\r\n                            <option value=\"GTX 465\" >GTX 465 </option>\r\n                            <option value=\"GTX 470\" >GTX 470 </option>\r\n                            <option value=\"GTX 480\" >GTX 480 </option>\r\n                            <option value=\"GTX 480M\" >GTX 480M </option>\r\n                            <option value=\"GTX 485M\" >GTX 485M </option>\r\n                            <option value=\"GTX 550 Ti\" >GTX 550 Ti </option>\r\n                            <option value=\"GTX 555\" >GTX 555 </option>\r\n                            <option value=\"GTX 560\" >GTX 560 </option>\r\n                            <option value=\"GTX 560 SE\" >GTX 560 SE </option>\r\n                            <option value=\"GTX 560 Ti\" >GTX 560 Ti </option>\r\n                            <option value=\"GTX 560 Ti 448\" >GTX 560 Ti 448 </option>\r\n                            <option value=\"GTX 560M\" >GTX 560M </option>\r\n                            <option value=\"GTX 570\" >GTX 570 </option>\r\n                            <option value=\"GTX 570M\" >GTX 570M </option>\r\n                            <option value=\"GTX 580\" >GTX 580 </option>\r\n                            <option value=\"GTX 580M\" >GTX 580M </option>\r\n                            <option value=\"GTX 590\" >GTX 590 </option>\r\n                            <option value=\"GTX 650\" >GTX 650 </option>\r\n                            <option value=\"GTX 650 Ti\" >GTX 650 Ti </option>\r\n                            <option value=\"GTX 650 Ti Boost\" >GTX 650 Ti Boost </option>\r\n                            <option value=\"GTX 660\" >GTX 660 </option>\r\n                            <option value=\"GTX 660 Ti\" >GTX 660 Ti </option>\r\n                            <option value=\"GTX 6600\" >GTX 6600 </option>\r\n                            <option value=\"GTX 660M\" >GTX 660M </option>\r\n                            <option value=\"GTX 670\" >GTX 670 </option>\r\n                            <option value=\"GTX 670M\" >GTX 670M </option>\r\n                            <option value=\"GTX 675M\" >GTX 675M </option>\r\n                            <option value=\"GTX 675MX\" >GTX 675MX </option>\r\n                            <option value=\"GTX 680\" >GTX 680 </option>\r\n                            <option value=\"GTX 680M\" >GTX 680M </option>\r\n                            <option value=\"GTX 690\" >GTX 690 </option>\r\n                            <option value=\"GTX 750\" >GTX 750 </option>\r\n                            <option value=\"GTX 750 Ti\" >GTX 750 Ti </option>\r\n                            <option value=\"GTX 760\" >GTX 760 </option>\r\n                            <option value=\"GTX 760 Ti OEM\" >GTX 760 Ti OEM </option>\r\n                            <option value=\"GTX 760M\" >GTX 760M </option>\r\n                            <option value=\"GTX 765M\" >GTX 765M </option>\r\n                            <option value=\"GTX 770\" >GTX 770 </option>\r\n                            <option value=\"GTX 770M\" >GTX 770M </option>\r\n                            <option value=\"GTX 780\" >GTX 780 </option>\r\n                            <option value=\"GTX 780 Ti\" >GTX 780 Ti </option>\r\n                            <option value=\"GTX 780M\" >GTX 780M </option>\r\n                            <option value=\"GTX 870M\" >GTX 870M </option>\r\n                            <option value=\"GTX 880M\" >GTX 880M </option>\r\n                            <option value=\"GTX 950\" >GTX 950 </option>\r\n                            <option value=\"GTX 960\" >GTX 960 </option>\r\n                            <option value=\"GTX 965M\" >GTX 965M </option>\r\n                            <option value=\"GTX 970\" >GTX 970 </option>\r\n                            <option value=\"GTX 970M\" >GTX 970M </option>\r\n                            <option value=\"GTX 980\" >GTX 980 </option>\r\n                            <option value=\"GTX 980 Ti\" >GTX 980 Ti </option>\r\n                            <option value=\"GTX 980M\" >GTX 980M </option>\r\n                            <option value=\"GTX TITAN\" >GTX TITAN </option>\r\n                            <option value=\"GTX Titan Black\" >GTX Titan Black </option>\r\n                            <option value=\"GTX Titan X\" >GTX Titan X </option>\r\n                            <option value=\"GTX TITAN Z\" >GTX TITAN Z </option>\r\n                            <option value=\"GTX765M\" >GTX765M </option>\r\n                            <option value=\"ION2\" >ION2 </option>\r\n                            <option value=\"NVIDIA 7400 go\" >NVIDIA 7400 go </option>\r\n                            <option value=\"Quadro 1000M\" >Quadro 1000M </option>\r\n                            <option value=\"Quadro 2000\" >Quadro 2000 </option>\r\n                            <option value=\"Quadro 2000M\" >Quadro 2000M </option>\r\n                            <option value=\"Quadro 4000\" >Quadro 4000 </option>\r\n                            <option value=\"Quadro 600\" >Quadro 600 </option>\r\n                            <option value=\"Quadro CX\" >Quadro CX </option>\r\n                            <option value=\"Quadro FX 1500M\" >Quadro FX 1500M </option>\r\n                            <option value=\"Quadro FX 1600M\" >Quadro FX 1600M </option>\r\n                            <option value=\"Quadro FX 1700\" >Quadro FX 1700 </option>\r\n                            <option value=\"Quadro FX 1800\" >Quadro FX 1800 </option>\r\n                            <option value=\"Quadro FX 1800M\" >Quadro FX 1800M </option>\r\n                            <option value=\"Quadro FX 2500M\" >Quadro FX 2500M </option>\r\n                            <option value=\"Quadro FX 2700M\" >Quadro FX 2700M </option>\r\n                            <option value=\"Quadro FX 2800M\" >Quadro FX 2800M </option>\r\n                            <option value=\"Quadro FX 3450\" >Quadro FX 3450 </option>\r\n                            <option value=\"Quadro FX 3500\" >Quadro FX 3500 </option>\r\n                            <option value=\"Quadro FX 3500M\" >Quadro FX 3500M </option>\r\n                            <option value=\"Quadro FX 350M\" >Quadro FX 350M </option>\r\n                            <option value=\"Quadro FX 3600M\" >Quadro FX 3600M </option>\r\n                            <option value=\"Quadro FX 370\" >Quadro FX 370 </option>\r\n                            <option value=\"Quadro FX 3700M\" >Quadro FX 3700M </option>\r\n                            <option value=\"Quadro FX 3800\" >Quadro FX 3800 </option>\r\n                            <option value=\"Quadro FX 4500\" >Quadro FX 4500 </option>\r\n                            <option value=\"Quadro FX 4600\" >Quadro FX 4600 </option>\r\n                            <option value=\"Quadro FX 5200M\" >Quadro FX 5200M </option>\r\n                            <option value=\"Quadro FX 5500\" >Quadro FX 5500 </option>\r\n                            <option value=\"Quadro FX 560\" >Quadro FX 560 </option>\r\n                            <option value=\"Quadro FX 5600\" >Quadro FX 5600 </option>\r\n                            <option value=\"Quadro FX 570\" >Quadro FX 570 </option>\r\n                            <option value=\"Quadro FX 580\" >Quadro FX 580 </option>\r\n                            <option value=\"Quadro FX 770M\" >Quadro FX 770M </option>\r\n                            <option value=\"Quadro FX 880M\" >Quadro FX 880M </option>\r\n                            <option value=\"Quadro FX3700\" >Quadro FX3700 </option>\r\n                            <option value=\"Quadro GP100\" >Quadro GP100 </option>\r\n                            <option value=\"Quadro GV100\" >Quadro GV100 </option>\r\n                            <option value=\"Quadro K1000M\" >Quadro K1000M </option>\r\n                            <option value=\"Quadro K1100M\" >Quadro K1100M </option>\r\n                            <option value=\"Quadro K2000\" >Quadro K2000 </option>\r\n                            <option value=\"Quadro K2000M\" >Quadro K2000M </option>\r\n                            <option value=\"Quadro K2100M\" >Quadro K2100M </option>\r\n                            <option value=\"Quadro K3000M\" >Quadro K3000M </option>\r\n                            <option value=\"Quadro K4000\" >Quadro K4000 </option>\r\n                            <option value=\"Quadro K5000\" >Quadro K5000 </option>\r\n                            <option value=\"Quadro K5100M\" >Quadro K5100M </option>\r\n                            <option value=\"Quadro K5200\" >Quadro K5200 </option>\r\n                            <option value=\"Quadro K600\" >Quadro K600 </option>\r\n                            <option value=\"Quadro K6000\" >Quadro K6000 </option>\r\n                            <option value=\"Quadro M1200\" >Quadro M1200 </option>\r\n                            <option value=\"Quadro M2200\" >Quadro M2200 </option>\r\n                            <option value=\"Quadro NVS 110M\" >Quadro NVS 110M </option>\r\n                            <option value=\"Quadro NVS 120M\" >Quadro NVS 120M </option>\r\n                            <option value=\"Quadro NVS 285\" >Quadro NVS 285 </option>\r\n                            <option value=\"Quadro NVS 295\" >Quadro NVS 295 </option>\r\n                            <option value=\"Quadro NVS 420\" >Quadro NVS 420 </option>\r\n                            <option value=\"Quadro NVS 440\" >Quadro NVS 440 </option>\r\n                            <option value=\"Quadro P5000\" >Quadro P5000 </option>\r\n                            <option value=\"Quadro RTX 6000\" >Quadro RTX 6000 </option>\r\n                            <option value=\"RTX 2060\" >RTX 2060 </option>\r\n                            <option value=\"RTX 2060 Mobile\" >RTX 2060 Mobile </option>\r\n                            <option value=\"RTX 2060 Super\" >RTX 2060 Super </option>\r\n                            <option value=\"RTX 2070\" >RTX 2070 </option>\r\n                            <option value=\"RTX 2070 Mobile\" >RTX 2070 Mobile </option>\r\n                            <option value=\"RTX 2070 Super\" >RTX 2070 Super </option>\r\n                            <option value=\"RTX 2080\" >RTX 2080 </option>\r\n                            <option value=\"RTX 2080 Super\" >RTX 2080 Super </option>\r\n                            <option value=\"RTX 2080 Ti\" >RTX 2080 Ti </option>\r\n                            <option value=\"Super Jetstream\" >Super Jetstream </option>\r\n                            <option value=\"Tesla C870\" >Tesla C870 </option>\r\n                            <option value=\"Tesla K20c\" >Tesla K20c </option>\r\n                            <option value=\"Tesla K20m\" >Tesla K20m </option>\r\n                            <option value=\"Tesla K40m\" >Tesla K40m </option>\r\n                            <option value=\"Tesla V100\" >Tesla V100 </option>\r\n                            <option value=\"Titan RTX\" >Titan RTX </option>\r\n                            <option value=\"Titan V\" >Titan V </option>\r\n                            <option value=\"Titan X Pascal\" >Titan X Pascal </option>\r\n                            <option value=\"Titan Xp\" >Titan Xp </option>\r\n                        </select>\r\n                    </div></td>\r\n                </ng-template>\r\n              \r\n        </table>\r\n        <!-- --------------------------------------------------- -->\r\n          <div class=\"col-md-6\" *ngFor=\"let info of infoML\" style=\" margin-bottom: 2%;margin-top: 3%;\">\r\n                <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n                  <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                    <div class=\"card-body text-center\">\r\n                      <div class=\"fondo-img\">\r\n                      <a href=\"{{info.permalink}}\">\r\n                        <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                      </a>\r\n                    </div>\r\n                  <div style=\"height: 120px ;width: 400px;\">\r\n                      <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                        {{info.title}}\r\n                      </p>\r\n                      <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                          ${{info.price}} MXN\r\n                        </p>\r\n                      </div>\r\n                        <div style=\"height: 100px;width: 410px;\">\r\n                            <button pButton type=\"button\" label=\"Elegir\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddBUILD(info.attributes[0].value_name, info.attributes[3].value_name, info.thumbnail, info.title, info.price)\"></button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        </section>\r\n        \r\n      \r\n      <!-- \r\n      -------------------------------- -->"

/***/ }),

/***/ "./src/app/components/armado/gddr/gddr.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/armado/gddr/gddr.component.ts ***!
  \**********************************************************/
/*! exports provided: GddrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GddrComponent", function() { return GddrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GddrComponent = /** @class */ (function () {
    function GddrComponent(activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.ATI = false;
        this.NVIDIA = false;
        this.valorCapacidad = "";
        this.valorMiembro = "";
        this.valorMarca = "";
        this.valorTipo = "";
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    GddrComponent.prototype.onSubmit = function (marca, modelo) {
        var _this = this;
        if (marca != '') {
            this.apiService.getItemML(marca + modelo).subscribe(function (res) {
                _this.infoML = res.results;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    GddrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    GddrComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    GddrComponent.prototype.OnAddBUILD = function (nombre, modelo, img, titulo, precio) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: nombre + " " + modelo,
        };
        this.afs.doc("build/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.router.navigate(['/case']);
    };
    GddrComponent.prototype.cambiarMarca = function (value) {
        var _this = this;
        this.valorMarca = value;
        if (value == "ATI") {
            this.ATI = true;
            this.NVIDIA = false;
        }
        else {
            this.ATI = false;
            this.NVIDIA = true;
        }
        this.valorMiembro = this.valorMarca + " " + this.valorTipo;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    GddrComponent.prototype.cambiarTipo = function (value) {
        var _this = this;
        this.valorTipo = value;
        this.valorMiembro = this.valorMarca + " " + this.valorTipo;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    GddrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gddr',
            template: __webpack_require__(/*! ./gddr.component.html */ "./src/app/components/armado/gddr/gddr.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], GddrComponent);
    return GddrComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/hdd/hdd.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/armado/hdd/hdd.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n    <div class=\"navbar\">\r\n      <div class=\"container-logo\"> \r\n        <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n        <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n    </div>\r\n        \r\n  <div class=\"logo\" *ngIf=\"logged\">\r\n  <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n    <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n  </div>\r\n  <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n  \r\n  </div>  \r\n  \r\n  <div class=\"container-crud\" >\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n      <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n      <ng-template #elseBlock>\r\n        <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n      </ng-template>\r\n      <ng-template #thenBlock>\r\n      </ng-template>\r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  </body>\r\n  \r\n  <!-- \r\n  ------\r\n  <div class=\"container-mid\">\r\n      <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n  </div>\r\n  <div class=\"container-mid-inv\">\r\n      <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n  </div>\r\n  \r\n  \r\n  ------------------------------ -->\r\n  \r\n  <section id=\"resultsML\" class=\"conainer-mid\">\r\n  \r\n  <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n    <div class=\"container\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Marca del Procesador</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Procesador</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Tarjeta Madre</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/ram']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Memoria Ram</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias\" [routerLink]=\"['/hdd']\" routerLinkActive=\"active\" style=\"margin-top: -20.5%;\"  >\r\n                    <div class=\"container-inside\">\r\n                      <div style=\"color: white;\">Almacenamiento</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/gddr']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/case']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Gabinete</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/power']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Fuente de Poder</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/resumen']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Resumen</div>\r\n                        </div>\r\n                      </div>\r\n            </div>\r\n  <!-- ------------------------------------------ -->\r\n  <div class=\"row col-md-11\" style=\"padding-left:5%;\">\r\n    <table class=\"table table-hover\" style=\"margin-left: 20%;\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\" style=\"color: white;\">Marca</th>\r\n            <th scope=\"col\" style=\"color: white;\">Tipo</th>\r\n            <th scope=\"col\" style=\"color: white;\">Capacidad</th>  \r\n            <th scope=\"col\">&nbsp;</th>\r\n            <th scope=\"col\">&nbsp;</th>\r\n          </tr>\r\n        </thead>\r\n        <td><div class=\"dropdown\">\r\n            <select #selectMarca    id=\"selectMarca\"  (change)=\"cambiarMarca(selectMarca.value)\"  class=\"ml-3 custom-select\">\r\n                <option value=\"0\">Seleccione</option>\r\n                <option value=\"Western Digital\">Western Digital </option>\r\n              <option value=\"ADATA\">ADATA</option>\r\n              <option value=\"Samsung\">Samsung</option>\r\n              <option value=\"Toshiba\">Toshiba</option>\r\n                </select>\r\n          </div></td>\r\n          <td><div class=\"dropdown\">\r\n              <select #selectPrioridad    id=\"selectPrioridad\"  (change)=\"cambiarTipo(selectPrioridad.value)\"  class=\"ml-3 custom-select\">\r\n                  <option value=\"0\">Seleccione</option>\r\n                  <option value=\"HDD\">HDD </option>\r\n                <option value=\"SSD\">SSD</option>\r\n                <option value=\"NVM-e\">NVM-e</option>\r\n                <option value=\"M.2\">M.2</option>\r\n                  </select>\r\n            </div></td>\r\n          <td><div class=\"dropdown\">\r\n              <select #selectProyectos  id=\"selectProyectos\"  (change)=\"cambiarCapacidad(selectProyectos.value)\"   class=\"ml-3 custom-select\">\r\n                <option value=\"0\">Seleccione</option>\r\n                <option value=\"64gb\">64gb</option>\r\n                <option value=\"128gb\">128gb</option>\r\n                <option value=\"256gb\">256gb</option>\r\n                <option value=\"512gb\">512gb</option>\r\n                <option value=\"1tb\">1tb</option>\r\n                <option value=\"2tb\">2tb</option>\r\n                <option value=\"3tb\">3tb</option>\r\n                  </select>\r\n            </div></td>\r\n    </table>\r\n    <!-- --------------------------------------------------- -->\r\n      <div class=\"col-md-6\" *ngFor=\"let info of infoML\" style=\" margin-bottom: 2%;margin-top: 3%;\">\r\n            <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n              <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                <div class=\"card-body text-center\">\r\n                  <div class=\"fondo-img\">\r\n                  <a href=\"{{info.permalink}}\">\r\n                    <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                  </a>\r\n                </div>\r\n              <div style=\"height: 120px ;width: 400px;\">\r\n                  <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                    {{info.title}}\r\n                  </p>\r\n                  <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                      ${{info.price}} MXN\r\n                    </p>\r\n                  </div>\r\n                    <div style=\"height: 100px;width: 410px;\">\r\n                        <button pButton type=\"button\" label=\"Elegir\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddBUILD(info.attributes[0].value_name, info.attributes[3].value_name, info.thumbnail, info.title, info.price)\"></button>\r\n                          </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    </section>\r\n    \r\n  \r\n  <!-- \r\n  -------------------------------- -->"

/***/ }),

/***/ "./src/app/components/armado/hdd/hdd.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/armado/hdd/hdd.component.ts ***!
  \********************************************************/
/*! exports provided: HddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HddComponent", function() { return HddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HddComponent = /** @class */ (function () {
    function HddComponent(activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.valorCapacidad = "";
        this.valorMiembro = "";
        this.valorMarca = "";
        this.valorTipo = "";
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    HddComponent.prototype.onSubmit = function (marca, modelo) {
        var _this = this;
        if (marca != '') {
            this.apiService.getItemML(marca + modelo).subscribe(function (res) {
                _this.infoML = res.results;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    HddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    HddComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    HddComponent.prototype.OnAddBUILD = function (nombre, modelo, img, titulo, precio) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: nombre + " " + modelo,
        };
        this.afs.doc("build/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.router.navigate(['/gddr']);
    };
    HddComponent.prototype.cambiarCapacidad = function (value) {
        var _this = this;
        this.valorCapacidad = value;
        this.valorMiembro = this.valorMarca + " " + this.valorTipo + " " + this.valorCapacidad;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    HddComponent.prototype.cambiarMarca = function (value) {
        var _this = this;
        this.valorMarca = value;
        this.valorMiembro = this.valorMarca + " " + this.valorTipo + " " + this.valorCapacidad;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    HddComponent.prototype.cambiarTipo = function (value) {
        var _this = this;
        this.valorTipo = value;
        this.valorMiembro = this.valorMarca + " " + this.valorTipo + " " + this.valorCapacidad;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    HddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hdd',
            template: __webpack_require__(/*! ./hdd.component.html */ "./src/app/components/armado/hdd/hdd.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], HddComponent);
    return HddComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/motherboard/motherboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/armado/motherboard/motherboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n    <div class=\"navbar\">\r\n      <div class=\"container-logo\"> \r\n        <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n        <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n    </div>\r\n        \r\n  <div class=\"logo\" *ngIf=\"logged\">\r\n  <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n    <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n  </div>\r\n  <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n  \r\n  </div>  \r\n  \r\n  <div class=\"container-crud\" >\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n      <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n      <ng-template #elseBlock>\r\n        <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n      </ng-template>\r\n      <ng-template #thenBlock>\r\n      </ng-template>\r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  </body>\r\n  \r\n  <!-- \r\n  ------\r\n  <div class=\"container-mid\">\r\n      <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n  </div>\r\n  <div class=\"container-mid-inv\">\r\n      <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n  </div>\r\n  \r\n  \r\n  ------------------------------ -->\r\n  \r\n  <section id=\"resultsML\" class=\"conainer-mid\">\r\n  \r\n  <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n    <div class=\"container\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Marca del Procesador</div>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Procesador</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  style=\"margin-top: -20.5%;\">\r\n                      <div class=\"container-inside\">\r\n                        <div style=\"color: white;\">Tarjeta Madre</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Memoria Ram</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Almacenamiento</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Gabinete</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Fuente de Poder</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                          <div class=\"container-inside-list\">\r\n                            <div style=\"color: white;\">Resumen</div>\r\n                          </div>\r\n                        </div>\r\n              </div>  \r\n<!-- ----------------------------------------- -->\r\n<div class=\"row col-md-11\" style=\"padding-left:5%;\">\r\n              <div class=\"col-md-6\" *ngFor=\"let info of infoML\" style=\" margin-bottom: 2%;margin-top: 3%;\">\r\n                    <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n                      <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                        <div class=\"card-body text-center\">\r\n                          <div class=\"fondo-img\">\r\n                          <a href=\"{{info.permalink}}\">\r\n                            <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                          </a>\r\n                        </div>\r\n                      <div style=\"height: 120px ;width: 400px;\">\r\n                          <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                            {{info.title}}\r\n                          </p>\r\n                          <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                              ${{info.price}} MXN\r\n                            </p>\r\n                          </div>\r\n                            <div style=\"height: 100px;width: 410px;\">\r\n                                <button pButton type=\"button\" label=\"Elegir\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddBUILD(info.attributes[0].value_name, info.attributes[3].value_name, info.thumbnail, info.title, info.price)\"></button>\r\n                          </div>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n            </div>\r\n    </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n    </section>"

/***/ }),

/***/ "./src/app/components/armado/motherboard/motherboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/armado/motherboard/motherboard.component.ts ***!
  \************************************************************************/
/*! exports provided: MotherboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherboardComponent", function() { return MotherboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MotherboardComponent = /** @class */ (function () {
    function MotherboardComponent(activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    MotherboardComponent.prototype.onSubmit = function (id) {
        var _this = this;
        if (id != '') {
            this.apiService.getItemML(id).subscribe(function (res) {
                _this.infoML = res.results;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    MotherboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marca = this.activatedRoute.snapshot.paramMap.get("modelo");
        this.onSubmit("motherboard" + this.marca);
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    MotherboardComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    MotherboardComponent.prototype.OnAddBUILD = function (nombre, modelo, img, titulo, precio) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: nombre + " " + modelo,
        };
        this.afs.doc("build/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.router.navigate(['/ram']);
    };
    MotherboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-motherboard',
            template: __webpack_require__(/*! ./motherboard.component.html */ "./src/app/components/armado/motherboard/motherboard.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], MotherboardComponent);
    return MotherboardComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/power/power.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/armado/power/power.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n        <div class=\"navbar\">\r\n          <div class=\"container-logo\"> \r\n            <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n            <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n        </div>\r\n            \r\n      <div class=\"logo\" *ngIf=\"logged\">\r\n      <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n        <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n      </div>\r\n      <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n      \r\n      </div>  \r\n      \r\n      <div class=\"container-crud\" >\r\n          <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n          <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n          <ng-template #elseBlock>\r\n            <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n          </ng-template>\r\n          <ng-template #thenBlock>\r\n          </ng-template>\r\n      </div>\r\n      \r\n      </div>\r\n      \r\n      \r\n      </body>\r\n      \r\n      <!-- \r\n      ------\r\n      <div class=\"container-mid\">\r\n          <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n      </div>\r\n      <div class=\"container-mid-inv\">\r\n          <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n      </div>\r\n      \r\n      \r\n      ------------------------------ -->\r\n      \r\n      <section id=\"resultsML\" class=\"conainer-mid\">\r\n      \r\n      <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n        <div class=\"container\">\r\n          <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Marca del Procesador</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Procesador</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Tarjeta Madre</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/ram']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Memoria Ram</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/hdd']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Almacenamiento</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"container-categorias-list \" [routerLink]=\"['/gddr']\" routerLinkActive=\"active\"  >\r\n                          <div class=\"container-inside-list\">\r\n                            <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias-list \" [routerLink]=\"['/case']\" routerLinkActive=\"active\"  >\r\n                          <div class=\"container-inside-list\">\r\n                            <div style=\"color: white;\">Gabinete</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias \" [routerLink]=\"['/power']\" routerLinkActive=\"active\" style=\"margin-top: -20.5%;\"  >\r\n                          <div class=\"container-inside\">\r\n                            <div style=\"color: white;\">Fuente de Poder</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"container-categorias-list \" [routerLink]=\"['/resumen']\" routerLinkActive=\"active\"  >\r\n                            <div class=\"container-inside-list\">\r\n                              <div style=\"color: white;\">Resumen</div>\r\n                            </div>\r\n                          </div>\r\n                </div>\r\n      <!-- ------------------------------------------ -->\r\n      <div class=\"row col-md-11\" style=\"padding-left:5%;\">\r\n        <table class=\"table table-hover\" style=\"margin-left: 20%;\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\" style=\"color: white;\">Marca</th>\r\n                <th scope=\"col\" style=\"color: white;\">WATTS</th>  \r\n                <th scope=\"col\">&nbsp;</th>\r\n                <th scope=\"col\">&nbsp;</th>\r\n              </tr>\r\n            </thead>\r\n            <td><div class=\"dropdown\">\r\n                <select #selectPrioridad    id=\"selectPrioridad\"  (change)=\"cambiarMarca(selectPrioridad.value)\"  class=\"ml-3 custom-select\">\r\n                    <option value=\"0\">Seleccione</option>\r\n                    <option value=\"NZXT\">NZXT </option>\r\n                    <option value=\"Ackteck\">Ackteck </option>\r\n                    <option value=\"AeroCool\">AeroCool </option>\r\n                    <option value=\"EVGA\">EVGA </option>\r\n                    <option value=\"Corsair\">Corsair </option>\r\n                    <option value=\"Gygabite\">Gygabite </option>\r\n                    <option value=\"Cooler master\">Cooler master </option>\r\n                    <option value=\"EAGLE WARRIOR\">EAGLE WARRIOR </option>\r\n                    <option value=\"Vorago\">Vorago </option>\r\n                    <option value=\"Asus\">Asus </option>\r\n                    </select>\r\n              </div></td>\r\n              <td><div class=\"dropdown\">\r\n                  <select #selectProyectos  id=\"selectProyectos\"  (change)=\"cambiarCapacidad(selectProyectos.value)\"   class=\"ml-3 custom-select\">\r\n                      <option value=\"0\">Seleccione</option>\r\n                      <option value=\"400\">400 </option>\r\n                      <option value=\"500\">500</option>\r\n                      <option value=\"600\">600 </option>\r\n                      <option value=\"700\">700 </option>\r\n                      <option value=\"800\">800 </option>\r\n                      <option value=\"900\">900 </option>\r\n                      <option value=\"1000\">1000 </option>\r\n                      \r\n                      </select>\r\n                </div></td>\r\n        </table>\r\n        <!-- --------------------------------------------------- -->\r\n          <div class=\"col-md-6\" *ngFor=\"let info of infoML\" style=\" margin-bottom: 2%;margin-top: 3%;\">\r\n                <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n                  <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                    <div class=\"card-body text-center\">\r\n                      <div class=\"fondo-img\">\r\n                      <a href=\"{{info.permalink}}\">\r\n                        <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                      </a>\r\n                    </div>\r\n                  <div style=\"height: 120px ;width: 400px;\">\r\n                      <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                        {{info.title}}\r\n                      </p>\r\n                      <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                          ${{info.price}} MXN\r\n                        </p>\r\n                      </div>\r\n                        <div style=\"height: 100px;width: 410px;\">\r\n                            <button pButton type=\"button\" label=\"Elegir\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddBUILD(info.attributes[0].value_name, info.attributes[3].value_name, info.thumbnail, info.title, info.price)\"></button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        </section>\r\n        \r\n      \r\n      <!-- \r\n      -------------------------------- -->"

/***/ }),

/***/ "./src/app/components/armado/power/power.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/armado/power/power.component.ts ***!
  \************************************************************/
/*! exports provided: PowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerComponent", function() { return PowerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PowerComponent = /** @class */ (function () {
    function PowerComponent(activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.valorCapacidad = "";
        this.valorMiembro = "";
        this.valorMarca = "";
        this.valorTipo = "";
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    PowerComponent.prototype.onSubmit = function (marca, modelo) {
        var _this = this;
        if (marca != '') {
            this.apiService.getItemML(marca + modelo).subscribe(function (res) {
                _this.infoML = res.results;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    PowerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    PowerComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    PowerComponent.prototype.OnAddBUILD = function (nombre, modelo, img, titulo, precio) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: nombre + " " + modelo,
        };
        this.afs.doc("build/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.router.navigate(['/resumen']);
    };
    PowerComponent.prototype.cambiarCapacidad = function (value) {
        var _this = this;
        this.valorCapacidad = value;
        this.valorMiembro = "Fuente de poder " + this.valorMarca + " " + this.valorTipo + " " + this.valorCapacidad + " watts";
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    PowerComponent.prototype.cambiarMarca = function (value) {
        this.valorMarca = value;
    };
    PowerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-power',
            template: __webpack_require__(/*! ./power.component.html */ "./src/app/components/armado/power/power.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], PowerComponent);
    return PowerComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/procesador/procesador.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/armado/procesador/procesador.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n    <div class=\"navbar\">\r\n      <div class=\"container-logo\"> \r\n        <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n        <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n    </div>\r\n        \r\n  <div class=\"logo\" *ngIf=\"logged\">\r\n  <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n    <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n  </div>\r\n  <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n  \r\n  </div>  \r\n  \r\n  <div class=\"container-crud\" >\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n      <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n      <ng-template #elseBlock>\r\n        <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n      </ng-template>\r\n      <ng-template #thenBlock>\r\n      </ng-template>\r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  </body>\r\n  \r\n  <!-- \r\n  ------\r\n  <div class=\"container-mid\">\r\n      <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n  </div>\r\n  <div class=\"container-mid-inv\">\r\n      <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n  </div>\r\n  \r\n  \r\n  ------------------------------ -->\r\n  \r\n  <section id=\"resultsML\" class=\"conainer-mid\">\r\n  \r\n  <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n    <div class=\"container\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n                <div class=\"container-categorias-list\" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Marca del Procesador</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias\" [routerLink]=\"['/armado']\" routerLinkActive=\"active\" style=\"margin-top: -20.5%;\" >\r\n                  <div class=\"container-inside\">\r\n                    <div style=\"color: white;\">Procesador</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Tarjeta Madre</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Memoria Ram</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Almacenamiento</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Gabinete</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Fuente de Poder</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Resumen</div>\r\n                        </div>\r\n                      </div>\r\n            </div>\r\n  <!-- ------------------------------------------ -->\r\n  <div class=\"row col-md-11\" style=\"padding-left:5%;\">\r\n      <div class=\"col-md-6\" *ngFor=\"let info of infoML\" style=\" margin-bottom: 2%;margin-top: 3%;\">\r\n            <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n              <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                <div class=\"card-body text-center\">\r\n                  <div class=\"fondo-img\">\r\n                  <a href=\"{{info.permalink}}\">\r\n                    <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                  </a>\r\n                </div>\r\n              <div style=\"height: 120px ;width: 400px;\">\r\n                  <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                    {{info.title}}\r\n                  </p>\r\n                  <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                      ${{info.price}} MXN\r\n                    </p>\r\n                  </div>\r\n                    <div style=\"height: 100px;width: 410px;\">\r\n                        <button pButton type=\"button\" label=\"Elegir\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddBUILD(info.attributes[0].value_name, info.attributes[3].value_name, info.thumbnail, info.title, info.price)\"></button>\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    </section>\r\n    \r\n  \r\n  <!-- \r\n  -------------------------------- -->"

/***/ }),

/***/ "./src/app/components/armado/procesador/procesador.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/armado/procesador/procesador.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProcesadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcesadorComponent", function() { return ProcesadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProcesadorComponent = /** @class */ (function () {
    function ProcesadorComponent(activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    ProcesadorComponent.prototype.onSubmit = function (id) {
        var _this = this;
        if (id != '') {
            this.apiService.getItemML(id).subscribe(function (res) {
                _this.infoML = res.results;
                console.log(_this.infoML);
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    ProcesadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marca = this.activatedRoute.snapshot.paramMap.get("marca");
        this.onSubmit(this.marca);
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    ProcesadorComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    ProcesadorComponent.prototype.OnAddBUILD = function (nombre, modelo, img, titulo, precio) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: nombre + " " + modelo,
        };
        this.afs.doc("build/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.router.navigate(['/motherboard/asus ' + this.marca + ' ' + nombre]);
    };
    ProcesadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procesador',
            template: __webpack_require__(/*! ./procesador.component.html */ "./src/app/components/armado/procesador/procesador.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], ProcesadorComponent);
    return ProcesadorComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/ram/ram.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/armado/ram/ram.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n    <div class=\"navbar\">\r\n      <div class=\"container-logo\"> \r\n        <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n        <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n    </div>\r\n        \r\n  <div class=\"logo\" *ngIf=\"logged\">\r\n  <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n    <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n  </div>\r\n  <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n  \r\n  </div>  \r\n  \r\n  <div class=\"container-crud\" >\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n      <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n      <ng-template #elseBlock>\r\n        <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n      </ng-template>\r\n      <ng-template #thenBlock>\r\n      </ng-template>\r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  </body>\r\n  \r\n  <!-- \r\n  ------\r\n  <div class=\"container-mid\">\r\n      <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n  </div>\r\n  <div class=\"container-mid-inv\">\r\n      <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n  </div>\r\n  \r\n  \r\n  ------------------------------ -->\r\n  \r\n  <section id=\"resultsML\" class=\"conainer-mid\">\r\n  \r\n  <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n    <div class=\"container\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 container\" style=\"margin-left: -15%;\">\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Marca del Procesador</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                  <div class=\"container-inside-list\">\r\n                    <div style=\"color: white;\">Procesador</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container-categorias-list \" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Tarjeta Madre</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias \" [routerLink]=\"['/ram']\" routerLinkActive=\"active\" style=\"margin-top: -20.5%;\"  >\r\n                    <div class=\"container-inside\">\r\n                      <div style=\"color: white;\">Memoria Ram</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/hdd']\" routerLinkActive=\"active\"  >\r\n                    <div class=\"container-inside-list\">\r\n                      <div style=\"color: white;\">Almacenamiento</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"container-categorias-list \" [routerLink]=\"['/gddr']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Tarjeta Grafica</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/case']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Gabinete</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/power']\" routerLinkActive=\"active\"  >\r\n                      <div class=\"container-inside-list\">\r\n                        <div style=\"color: white;\">Fuente de Poder</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-categorias-list \" [routerLink]=\"['/resumen']\" routerLinkActive=\"active\"  >\r\n                        <div class=\"container-inside-list\">\r\n                          <div style=\"color: white;\">Resumen</div>\r\n                        </div>\r\n                      </div>\r\n            </div>\r\n  <!-- ------------------------------------------ -->\r\n  <div class=\"row col-md-11\" style=\"padding-left:5%;\">\r\n    <table class=\"table table-hover\" style=\"margin-left: 20%;\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\" style=\"color: white;\">Marca</th>\r\n            <th scope=\"col\" style=\"color: white;\">Capacidad</th>  \r\n            <th scope=\"col\">&nbsp;</th>\r\n            <th scope=\"col\">&nbsp;</th>\r\n          </tr>\r\n        </thead>\r\n        <td><div class=\"dropdown\">\r\n            <select #selectPrioridad    id=\"selectPrioridad\"  (change)=\"cambiarMarca(selectPrioridad.value)\"  class=\"ml-3 custom-select\">\r\n                <option value=\"0\">Seleccione</option>\r\n                <option value=\"Corsair\">Corsair </option>\r\n              <option value=\"Kingston\">Kingston</option>\r\n              <option value=\"ADATA\">ADATA</option>\r\n              <option value=\"G-Skill\">G-Skill</option>\r\n                </select>\r\n          </div></td>\r\n          <td><div class=\"dropdown\">\r\n              <select #selectProyectos  id=\"selectProyectos\"  (change)=\"cambiarCapacidad(selectProyectos.value)\"   class=\"ml-3 custom-select\">\r\n                  <option value=\"0\">Seleccione</option>\r\n                  <option value=\"4gb\">4gb</option>\r\n              <option value=\"8gb\">8gb</option>\r\n              <option value=\"16gb\">16gb</option>\r\n              <option value=\"32gb\">32gb</option>\r\n                  </select>\r\n            </div></td>\r\n    </table>\r\n    <!-- --------------------------------------------------- -->\r\n      <div class=\"col-md-6\" *ngFor=\"let info of infoML\" style=\" margin-bottom: 2%;margin-top: 3%;\">\r\n            <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\r\n              <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                <div class=\"card-body text-center\">\r\n                  <div class=\"fondo-img\">\r\n                  <a href=\"{{info.permalink}}\">\r\n                    <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                  </a>\r\n                </div>\r\n              <div style=\"height: 120px ;width: 400px;\">\r\n                  <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                    {{info.title}}\r\n                  </p>\r\n                  <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                      ${{info.price}} MXN\r\n                    </p>\r\n                  </div>\r\n                    <div style=\"height: 100px;width: 410px;\">\r\n                        <button pButton type=\"button\" label=\"Elegir\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddBUILD(info.attributes[0].value_name, info.attributes[3].value_name, info.thumbnail, info.title, info.price)\"></button>\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    </section>\r\n    \r\n  \r\n  <!-- \r\n  -------------------------------- -->"

/***/ }),

/***/ "./src/app/components/armado/ram/ram.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/armado/ram/ram.component.ts ***!
  \********************************************************/
/*! exports provided: RamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RamComponent", function() { return RamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RamComponent = /** @class */ (function () {
    function RamComponent(activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.valorProyecto = "";
        this.valorMiembro = "";
        this.valorPrioridad = "";
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    RamComponent.prototype.onSubmit = function (marca, modelo) {
        var _this = this;
        if (marca != '') {
            this.apiService.getItemML(marca + modelo).subscribe(function (res) {
                _this.infoML = res.results;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    RamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    RamComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    RamComponent.prototype.OnAddBUILD = function (nombre, modelo, img, titulo, precio) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: nombre + " " + modelo,
        };
        this.afs.doc("build/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.router.navigate(['/hdd']);
    };
    RamComponent.prototype.cambiarCapacidad = function (value) {
        var _this = this;
        this.valorProyecto = value;
        this.valorMiembro = "ram " + this.valorPrioridad + " " + this.valorProyecto;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    RamComponent.prototype.cambiarMarca = function (value) {
        var _this = this;
        this.valorPrioridad = value;
        this.valorMiembro = "ram " + this.valorPrioridad + " " + this.valorProyecto;
        this.apiService.getItemML(this.valorMiembro).subscribe(function (users) {
            _this.infoML = users.results;
        });
    };
    RamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ram',
            template: __webpack_require__(/*! ./ram.component.html */ "./src/app/components/armado/ram/ram.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], RamComponent);
    return RamComponent;
}());



/***/ }),

/***/ "./src/app/components/armado/resumen/resumen.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/armado/resumen/resumen.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n    <div class=\"navbar\">\r\n      <div class=\"container-logo\"> \r\n        <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n        <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n    </div>\r\n        \r\n  <div class=\"logo\" *ngIf=\"logged\">\r\n  <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n    <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n  </div>\r\n  <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n  \r\n  </div>  \r\n  \r\n  <div class=\"container-crud\" >\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n      <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n      <ng-template #elseBlock>\r\n        <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n      </ng-template>\r\n      <ng-template #thenBlock>\r\n      </ng-template>\r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  </body>\r\n  \r\n  <!-- \r\n  ------\r\n  <div class=\"container-mid\">\r\n      <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n  </div>\r\n  <div class=\"container-mid-inv\">\r\n      <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n  </div>\r\n  \r\n  \r\n  ------------------------------ -->\r\n  \r\n<section id=\"resultsML\" class=\"conainer-mid\">\r\n  \r\n    <div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n        <div class=\"container\">\r\n          <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                  <div class=\"container-mid\">\r\n                      <img width=\"200\"style=\"padding:20px; margin-left:25%;margin-top:2%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n                  </div>\r\n                  <div class=\"container-mid-inv\">\r\n                      <img width=\"150\"style=\"padding:20px; margin-left:20%; \" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n                  <button type=\"submit\" class=\"btn btn-primary container-fluid\" style=\"background-color: #9448e0; border-color:#9448e0;\" (click)=\"onSubmit()\">Comparativa</button>\r\n\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-md-6\" >\r\n                      <div *ngFor=\"let info of projects;\">\r\n                          <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\" >\r\n                            <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                  <img class=\"img-fluid\" src=\"{{info.img}}\">\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{info.titulo}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{info.precio}} MXN\r\n                                  </p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(info.img, info.titulo, info.precio, info.model, info.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n        </div>\r\n                  </div>\r\n                  <!-- ------------------------------------------ -->\r\n\r\n                  <div class=\"col-md-6\">\r\n                      <div *ngFor=\"let infoa of infoProcess; let i = index\" >\r\n                          <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<1\">\r\n                            <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                    <a href=\"{{infoa.viewItemURL[0]}}\">\r\n                                        <img class=\"img-fluid\" src=\"{{infoa.galleryURL}}\">\r\n                                      </a>\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{infoa.title}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{infoa.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                                  </p>\r\n                                  <p></p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(infoa.img, infoa.titulo, infoa.precio, infoa.model, infoa.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngFor=\"let infob of infoMotherboard; let i = index\" >\r\n                          <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<1\">\r\n                            <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                    <a href=\"{{infob.viewItemURL[0]}}\">\r\n                                        <img class=\"img-fluid\" src=\"{{infob.galleryURL}}\">\r\n                                      </a>\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{infob.title}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{infob.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                                  </p>\r\n                                  <p></p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(infob.img, infob.titulo, infob.precio, infob.model, infob.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div *ngFor=\"let infoc of infoRam; let i = index\" >\r\n                          <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<1\">\r\n                            <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                    <a href=\"{{infoc.viewItemURL[0]}}\">\r\n                                        <img class=\"img-fluid\" src=\"{{infoc.galleryURL}}\">\r\n                                      </a>\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{infoc.title}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{infoc.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                                  </p>\r\n                                  <p></p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(infoc.img, infoc.titulo, infoc.precio, infoc.model, infoc.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div *ngFor=\"let infoc of infoHDD; let i = index\" >\r\n                          <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<1\">\r\n                            <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                    <a href=\"{{infoc.viewItemURL[0]}}\">\r\n                                        <img class=\"img-fluid\" src=\"{{infoc.galleryURL}}\">\r\n                                      </a>\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{infoc.title}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{infoc.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                                  </p>\r\n                                  <p></p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(infoc.img, infoc.titulo, infoc.precio, infoc.model, infoc.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div *ngFor=\"let infod of infoGddr; let i = index\" >\r\n                          <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<1\">\r\n                            <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                    <a href=\"{{infod.viewItemURL[0]}}\">\r\n                                        <img class=\"img-fluid\" src=\"{{infod.galleryURL}}\">\r\n                                      </a>\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{infod.title}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{infod.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                                  </p>\r\n                                  <p></p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(infod.img, infod.titulo, infod.precio, infod.model, infod.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div *ngFor=\"let infoe of infoCase; let i = index\" >\r\n                          <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<1\">\r\n                            <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                    <a href=\"{{infoe.viewItemURL[0]}}\">\r\n                                        <img class=\"img-fluid\" src=\"{{infoe.galleryURL}}\">\r\n                                      </a>\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{infoe.title}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{infoe.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                                  </p>\r\n                                  <p></p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(infoe.img, infoe.titulo, infoe.precio, infoe.model, infoe.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div *ngFor=\"let infof of infoPower; let i = index\" >\r\n                          <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<1\">\r\n                            <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                              <div class=\"card-body text-center\">\r\n                                <div class=\"fondo-img\">\r\n                                    <a href=\"{{infof.viewItemURL[0]}}\">\r\n                                        <img class=\"img-fluid\" src=\"{{infof.galleryURL}}\">\r\n                                      </a>\r\n                              </div>\r\n                            <div style=\"height: 120px ;width: 400px;\">\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                  {{infof.title}}\r\n                                </p>\r\n                                <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                    ${{infof.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                                  </p>\r\n                                  <p></p>\r\n                                </div>\r\n                                  <div style=\"height: 100px;width: 410px;\">\r\n                                      <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(infof.img, infof.titulo, infof.precio, infof.model, infof.Product_id)\" ></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                  </div>\r\n    <!-- ------------------------------------------ -->\r\n\r\n              </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n        </section>\r\n        "

/***/ }),

/***/ "./src/app/components/armado/resumen/resumen.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/armado/resumen/resumen.component.ts ***!
  \****************************************************************/
/*! exports provided: ResumenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenComponent", function() { return ResumenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_common_data_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/data-api.service */ "./src/app/common/data-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ResumenComponent = /** @class */ (function () {
    function ResumenComponent(dataApi, activatedRoute, http, deviceService, router, apiService, authService, afs) {
        this.dataApi = dataApi;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.contador = 0;
        this.elementos = 0;
        this.arreglo = new Array();
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    ResumenComponent.prototype.onSubmit = function () {
        var _this = this;
        this.apiService.getItemE(this.projects[0].modelo).subscribe(function (res) {
            _this.infoProcess = res.findItemsByKeywordsResponse[0].searchResult[0].item;
        });
        this.apiService.getItemE(this.projects[1].modelo).subscribe(function (res) {
            _this.infoMotherboard = res.findItemsByKeywordsResponse[0].searchResult[0].item;
        });
        this.apiService.getItemE(this.projects[2].modelo).subscribe(function (res) {
            _this.infoRam = res.findItemsByKeywordsResponse[0].searchResult[0].item;
        });
        this.apiService.getItemE(this.projects[3].modelo).subscribe(function (res) {
            _this.infoHDD = res.findItemsByKeywordsResponse[0].searchResult[0].item;
        });
        this.apiService.getItemE(this.projects[4].modelo).subscribe(function (res) {
            _this.infoGddr = res.findItemsByKeywordsResponse[0].searchResult[0].item;
        });
        this.apiService.getItemE(this.projects[5].modelo).subscribe(function (res) {
            _this.infoCase = res.findItemsByKeywordsResponse[0].searchResult[0].item;
        });
        this.apiService.getItemE(this.projects[6].modelo).subscribe(function (res) {
            _this.infoPower = res.findItemsByKeywordsResponse[0].searchResult[0].item;
        });
    };
    ResumenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
            _this.dataApi.getAllproducts("build", _this.ipAddress).subscribe(function (projects) {
                _this.projects = projects;
            });
        });
    };
    ResumenComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    ResumenComponent.prototype.OnAddCart = function (img, titulo, precio, modelo, docID) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
            modelo: modelo,
        };
        this.afs.doc("cart/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.afs.doc("build/" + this.ipAddress + "/").collection("" + this.ipAddress).doc(docID).delete().then(function () { }).catch(function (err) { console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResumenComponent.prototype, "arreglo", void 0);
    ResumenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resumen',
            template: __webpack_require__(/*! ./resumen.component.html */ "./src/app/components/armado/resumen/resumen.component.html"),
            styles: [__webpack_require__(/*! ../armado.component.scss */ "./src/app/components/armado/armado.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_common_data_api_service__WEBPACK_IMPORTED_MODULE_8__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], ResumenComponent);
    return ResumenComponent;
}());



/***/ }),

/***/ "./src/app/components/carrito/carrito.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/carrito/carrito.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body >\r\n    <div class=\"navbar\">\r\n        <div class=\"container-logo\"> \r\n            <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n            <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n        </div>\r\n    <div class=\"logo\" *ngIf=\"logged\">\r\n            <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n                <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n            </div>\r\n            <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n            \r\n            </div>  \r\n    <div class=\"container-crud\">\r\n        <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n        <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n        <ng-template #elseBlock>\r\n            <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n        </ng-template>\r\n        <ng-template #thenBlock>\r\n        </ng-template>\r\n        </div>\r\n</div>\r\n</body>\r\n\r\n<div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n    <div class=\"border-paypal\">\r\n        <div class=\"container-paypal\"> \r\n            <div class=\"app-title\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div><span>Subtotal:</span></div>\r\n                        <div><span>Envio:</span></div>\r\n                        <div><span>Articulos: </span></div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div><span>${{total}}</span></div>\r\n                        <div><span>Gratis</span></div>\r\n                        <div><span>{{contador}}</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"app-title\">\r\n                    <span>-------------------</span>\r\n            </div>\r\n            <div class=\"app-title\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                            <div><span>Total:</span></div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div><span>${{total}}</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\r\n        </div>\r\n    </div>\r\n    <div *ngFor=\"let info of projects\">\r\n    <div class=\"background\">\r\n        <div class=\"container\">\r\n            <div class=\"screen\">\r\n            <div class=\"screen-body\">\r\n                <div class=\"screen-body-item left\">\r\n                <div class=\"app-title\">\r\n                    <img src=\"{{info.img}}\" width=\"200\" style=\"border-radius: 15px; border:1px solid #9448e0;box-shadow:0 0 0 1px #9448e0;\">\r\n                </div>\r\n                </div>\r\n                <div class=\"screen-body-item\">\r\n                <div class=\"app-form\">\r\n                    <div class=\"app-title\">\r\n                        <span>{{info.titulo}}</span>\r\n                    </div>\r\n                    <div class=\"app-title\" style=\"color: white;\">\r\n                        <span>{{info.modelo}}</span>\r\n                    </div>\r\n                    <div class=\"app-title\" style=\"color: white;\">\r\n                        <span>${{info.precio}} MXN</span>\r\n                    </div>\r\n                    <div class=\"app-form-group buttons\">\r\n                            <button class=\"app-form-button\" (click)=\"OnDelCart(info.Product_id)\">Eliminar del carrito</button>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/carrito/carrito.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/carrito/carrito.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_user {\n  width: 450px;\n  height: 350px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: white; }\n\n.card-body {\n  width: 450px;\n  height: 350px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: white; }\n\n.fondo-img {\n  width: 410px;\n  height: 150px;\n  background-color: white; }\n\n.img-fluid {\n  width: 150px; }\n\n.container-proyectos {\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-top: 0%; }\n\n.logo {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-right: 45%; }\n\n.container-crud {\n  margin-left: 78%;\n  margin-top: -5%; }\n\n.container-logo {\n  margin-right: 10%;\n  margin-top: -1%; }\n\n.back-nav {\n  background: linear-gradient(to right, #9448e0 0%, #33C6FF 100%);\n  font-size: 12px; }\n\n.avatar {\n  padding: 2em 0.5em;\n  text-align: center;\n  width: 150px;\n  height: 150px; }\n\n.avatar img {\n    width: 100px;\n    border-radius: 50%;\n    overflow: hidden; }\n\n.container-mid {\n  height: 150px;\n  width: 60%; }\n\n.container-cart {\n  width: 960px;\n  height: 90px;\n  margin-left: 5%;\n  margin-top: 5%;\n  background-color: red;\n  border-color: black; }\n\n*, *:before, *:after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nbody {\n  background: linear-gradient(to right, #9448e0 0%, #33C6FF 100%);\n  font-size: 12px; }\n\nbody, button, input {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  letter-spacing: 1.4px; }\n\n.background {\n  display: flex;\n  min-height: 380px; }\n\n.container {\n  margin-left: 0%;\n  padding: 40px;\n  height: 317.4px;\n  width: 1120px; }\n\n.screen {\n  position: relative;\n  background: #3e3e3e;\n  border-radius: 15px;\n  border: 0.2px solid #9448e0;\n  box-shadow: 0 0 0 4px #9448e0; }\n\n.screen:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 20px;\n  right: 20px;\n  bottom: 0;\n  border-radius: 15px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n  z-index: -1; }\n\n.screen-header {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  background: #4d4d4f;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px; }\n\n.screen-header-left {\n  margin-right: auto; }\n\n.screen-header-button {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  margin-right: 3px;\n  border-radius: 8px;\n  background: white; }\n\n.screen-header-button.close {\n  background: #ed1c6f; }\n\n.screen-header-button.maximize {\n  background: #e8e925; }\n\n.screen-header-button.minimize {\n  background: #74c54f; }\n\n.screen-header-right {\n  display: flex; }\n\n.screen-header-ellipsis {\n  width: 3px;\n  height: 3px;\n  margin-left: 2px;\n  border-radius: 8px;\n  background: #999; }\n\n.screen-body {\n  display: flex; }\n\n.screen-body-item {\n  flex: 1;\n  padding: 50px; }\n\n.screen-body-item.left {\n  display: flex;\n  flex-direction: column; }\n\n.app-title {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  color: #9448e0;\n  font-size: 26px; }\n\n.app-title:after {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: -10px;\n  width: 25px;\n  height: 4px;\n  background: #9448e0; }\n\n.app-contact {\n  margin-top: auto;\n  font-size: 8px;\n  color: #888; }\n\n.app-form-group {\n  margin-bottom: 15px; }\n\n.app-form-group.message {\n  margin-top: 40px; }\n\n.app-form-group.buttons {\n  margin-bottom: 0;\n  text-align: right; }\n\n.app-form-control {\n  width: 100%;\n  padding: 10px 0;\n  background: none;\n  border: none;\n  border-bottom: 1px solid #666;\n  color: #ddd;\n  font-size: 14px;\n  text-transform: uppercase;\n  outline: none;\n  transition: border-color .2s; }\n\n.app-form-control::-webkit-input-placeholder {\n  color: #666; }\n\n.app-form-control::-moz-placeholder {\n  color: #666; }\n\n.app-form-control::-ms-input-placeholder {\n  color: #666; }\n\n.app-form-control::placeholder {\n  color: #666; }\n\n.app-form-control:focus {\n  border-bottom-color: #ddd; }\n\n.app-form-button {\n  background: none;\n  border: none;\n  color: #9448e0;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none; }\n\n.app-form-button:hover {\n  color: #b9134f; }\n\n.credits {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  color: #ffa4bd;\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 16px;\n  font-weight: normal; }\n\n.credits-link {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  font-weight: bold;\n  text-decoration: none; }\n\n.dribbble {\n  width: 20px;\n  height: 20px;\n  margin: 0 5px; }\n\n@media screen and (max-width: 520px) {\n  .screen-body {\n    flex-direction: column; }\n  .screen-body-item.left {\n    margin-bottom: 30px; }\n  .app-title {\n    flex-direction: row; }\n  .app-title span {\n    margin-right: 12px; }\n  .app-title:after {\n    display: none; } }\n\n@media screen and (max-width: 600px) {\n  .screen-body {\n    padding: 40px; }\n  .screen-body-item {\n    padding: 0; } }\n\n.back {\n  min-height: 76.5vh; }\n\n.border-paypal {\n  position: fixed;\n  display: flex;\n  margin-left: 75%;\n  margin-top: 5%;\n  background: #3e3e3e;\n  border-radius: 15px;\n  border: 0.2px solid #9448e0;\n  box-shadow: 0 0 0 4px #9448e0;\n  height: 400px;\n  width: 300px; }\n\n.container-paypal {\n  position: absolute;\n  margin-top: 20%;\n  margin-left: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJyaXRvL0M6XFxVc2Vyc1xcTEVOT1ZPXFxEZXNrdG9wXFxlY2dhIGZpbmFsXFxFQ0dBL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJyaXRvXFxjYXJyaXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYiwwQkFBMEI7RUFDMUIsb0JBQW1CO0VBQ25CLG9CQUFnQyxFQUNuQzs7QUFDRDtFQUNJLGFBQVc7RUFDWCxjQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG9CQUFtQjtFQUNuQixvQkFBZ0MsRUFDbkM7O0FBQ0Q7RUFDSSxhQUFXO0VBQ1gsY0FBWTtFQUNaLHdCQUFvQyxFQUN2Qzs7QUFDRDtFQUNJLGFBQVcsRUFDZDs7QUFDRDtFQUNDLGdCQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZDs7QUFDRDtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsbUJBQWlCLEVBQ2xCOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFjLEVBQ2pCOztBQUNEO0VBQ0ksa0JBQWlCO0VBQ2pCLGdCQUFjLEVBQ2pCOztBQUNEO0VBQ0UsZ0VBQStEO0VBQy9ELGdCQUFlLEVBRWxCOztBQUtDO0VBQ0UsbUJBQWlCO0VBQ2pCLG1CQUFpQjtFQUNqQixhQUFZO0VBQ1osY0FBYSxFQU1oQjs7QUFWQztJQU1NLGFBQVc7SUFDWCxtQkFBaUI7SUFDakIsaUJBQWUsRUFDbEI7O0FBRUw7RUFDSSxjQUFhO0VBQ2IsV0FBVSxFQUNYOztBQU1EO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFDWixnQkFBYztFQUNkLGVBQWE7RUFDYixzQkFBcUI7RUFDckIsb0JBQW1CLEVBQ3RCOztBQUtEO0VBQ0UsdUJBQXNCO0VBQ3RCLG9DQUFtQztFQUNuQyxtQ0FBa0MsRUFDbkM7O0FBRUQ7RUFDRSxnRUFBK0Q7RUFDL0QsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxzQ0FBcUM7RUFDckMsaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLGNBQWE7RUFDYixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGNBQWE7RUFDYixnQkFBZTtFQUNmLGNBQWEsRUFFZDs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLDRCQUEwQjtFQUMxQiw4QkFBNEIsRUFDN0I7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sV0FBVTtFQUNWLFlBQVc7RUFDWCxVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJDQUF5QztFQUN6QyxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsNkJBQTRCO0VBQzVCLDhCQUE2QixFQUM5Qjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFFBQU87RUFDUCxjQUFhLEVBRWQ7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQUVEO0VBRUUsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsY0FBYTtFQUNiLFlBQVc7RUFDWCxZQUFXO0VBQ1gsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWiw4QkFBNkI7RUFDN0IsWUFBVztFQUNYLGdCQUFlO0VBQ2YsMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYiw2QkFBNEIsRUFDN0I7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRkQ7RUFDRSxZQUFXLEVBQ1o7O0FBRkQ7RUFDRSxZQUFXLEVBQ1o7O0FBRkQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsY0FBYSxFQUNkOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCw0Q0FBMkM7RUFDM0MsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRTtJQUNFLHVCQUFzQixFQUN2QjtFQUVEO0lBQ0Usb0JBQW1CLEVBQ3BCO0VBRUQ7SUFDRSxvQkFBbUIsRUFDcEI7RUFFRDtJQUNFLG1CQUFrQixFQUNuQjtFQUVEO0lBQ0UsY0FBYSxFQUNkLEVBQUE7O0FBR0g7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUVEO0lBQ0UsV0FBVSxFQUNYLEVBQUE7O0FBRUg7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGNBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsNEJBQTBCO0VBQzFCLDhCQUE0QjtFQUM1QixjQUFhO0VBQ2IsYUFBWSxFQUNiOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsaUJBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnJpdG8vY2Fycml0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci0xc3Q6I2VjYWY4MTtcclxuJGNvbG9yLTJuZDogIzYwYjhkNDtcclxuXHJcbi5jYXJkX3VzZXJ7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NDhlMCA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIHdpZHRoOjQ1MHB4O1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NDhlMCA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLmZvbmRvLWltZ3tcclxuICAgIHdpZHRoOjQxMHB4O1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbi5pbWctZmx1aWR7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG4uY29udGFpbmVyLXByb3llY3Rvc3tcclxuXHRtYXJnaW4tbGVmdDowJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDAlO1xyXG5cdG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQ1JTtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1jcnVke1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzglO1xyXG4gICAgICBtYXJnaW4tdG9wOi01JTtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1sb2dve1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgbWFyZ2luLXRvcDotMSU7XHJcbiAgfVxyXG4gIC5iYWNrLW5hdntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzk0NDhlMCAwJSwgIzMzQzZGRiAxMDAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICBcclxufVxyXG4gIC5uYXZiYXJ7XHJcblxyXG4gIH1cclxuXHJcbiAgLmF2YXRhcntcclxuICAgIHBhZGRpbmc6MmVtIDAuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIH1cclxufVxyXG4uY29udGFpbmVyLW1pZHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAuY29udGFpbmVyLW1pZC1pbnZ7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNvbnRhaW5lci1jYXJ0e1xyXG4gICAgd2lkdGg6IDk2MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG4uY29udGFpbmVyLXByb2R1Y3Rze1xyXG5cclxufVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTQ0OGUwIDAlLCAjMzNDNkZGIDEwMCUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuYm9keSwgYnV0dG9uLCBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMzgwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGhlaWdodDogMzE3LjRweDtcclxuICB3aWR0aDogMTEyMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uc2NyZWVuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogIzNlM2UzZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjowLjJweCBzb2xpZCAjOTQ0OGUwO1xyXG4gIGJveC1zaGFkb3c6MCAwIDAgNHB4ICM5NDQ4ZTA7XHJcbn1cclxuXHJcbi5zY3JlZW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIC40KTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNjcmVlbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzRkNGQ0ZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2NyZWVuLWhlYWRlci1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zY3JlZW4taGVhZGVyLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc2NyZWVuLWhlYWRlci1idXR0b24uY2xvc2Uge1xyXG4gIGJhY2tncm91bmQ6ICNlZDFjNmY7XHJcbn1cclxuXHJcbi5zY3JlZW4taGVhZGVyLWJ1dHRvbi5tYXhpbWl6ZSB7XHJcbiAgYmFja2dyb3VuZDogI2U4ZTkyNTtcclxufVxyXG5cclxuLnNjcmVlbi1oZWFkZXItYnV0dG9uLm1pbmltaXplIHtcclxuICBiYWNrZ3JvdW5kOiAjNzRjNTRmO1xyXG59XHJcblxyXG4uc2NyZWVuLWhlYWRlci1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNjcmVlbi1oZWFkZXItZWxsaXBzaXMge1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogIzk5OTtcclxufVxyXG5cclxuLnNjcmVlbi1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2NyZWVuLWJvZHktaXRlbSB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG5cclxufVxyXG5cclxuLnNjcmVlbi1ib2R5LWl0ZW0ubGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXBwLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjOTQ0OGUwO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLmFwcC10aXRsZTphZnRlciB7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogIzk0NDhlMDtcclxufVxyXG5cclxuLmFwcC1jb250YWN0IHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4uYXBwLWZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1ncm91cC5tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYXBwLWZvcm0tZ3JvdXAuYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFwcC1mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnM7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uYXBwLWZvcm0tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzk0NDhlMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjYjkxMzRmO1xyXG59XHJcblxyXG4uY3JlZGl0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmE0YmQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmNyZWRpdHMtbGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmRyaWJiYmxlIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuc2NyZWVuLWJvZHkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5zY3JlZW4tYm9keS1pdGVtLmxlZnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5hcHAtdGl0bGUgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuYXBwLXRpdGxlOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zY3JlZW4tYm9keSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1ib2R5LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuLmJhY2t7XHJcbiAgbWluLWhlaWdodDogNzYuNXZoO1xyXG59XHJcbi5ib3JkZXItcGF5cGFse1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBiYWNrZ3JvdW5kOiAjM2UzZTNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyOjAuMnB4IHNvbGlkICM5NDQ4ZTA7XHJcbiAgYm94LXNoYWRvdzowIDAgMCA0cHggIzk0NDhlMDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4uY29udGFpbmVyLXBheXBhbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OjE1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/carrito/carrito.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/carrito/carrito.component.ts ***!
  \*********************************************************/
/*! exports provided: CarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoComponent", function() { return CarritoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_common_data_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/data-api.service */ "./src/app/common/data-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarritoComponent = /** @class */ (function () {
    function CarritoComponent(dataApi, http, router, apiService, authService, afs) {
        this.dataApi = dataApi;
        this.http = http;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.total = 0;
        this.contador = 0;
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    CarritoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initConfig();
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
            _this.dataApi.getAllproducts("cart", _this.ipAddress).subscribe(function (projects) {
                _this.projects = projects;
                _this.total = 0;
                _this.contador = 0;
                _this.projects.forEach(function (element) {
                    _this.total = _this.total + element.precio;
                    _this.contador = _this.contador + 1;
                });
            });
        });
    };
    CarritoComponent.prototype.OnDelCart = function (docID) {
        this.afs
            .doc("cart/" + this.ipAddress + "/")
            .collection("" + this.ipAddress)
            .doc(docID)
            .delete()
            .then(function () {
            alert("Se elimino el producto del comparador");
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    CarritoComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    CarritoComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: 'MXN',
            clientId: 'AYXegRob-hOQkqsOsfTxkiIwKgtnR5lgXo45MXPKzjl0uwI98fmLYY0pqjrYEizSv1LwMwYc-i271LLB',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [{
                        amount: {
                            currency_code: 'MXN',
                            value: "" + _this.total,
                            breakdown: {
                                item_total: {
                                    currency_code: 'MXN',
                                    value: "" + _this.total
                                }
                            }
                        },
                        items: [{
                                name: 'ECGA Compra Computacion',
                                quantity: "1",
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: 'MXN',
                                    value: "" + _this.total,
                                },
                            }]
                    }]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: function (data, actions) {
                actions.order.get().then(function (details) {
                });
            },
            onClientAuthorization: function (data) {
                _this.showSuccess = true;
            },
            onCancel: function (data, actions) {
                _this.showCancel = true;
            },
            onError: function (err) {
                _this.showError = true;
            },
            onClick: function (data, actions) {
                _this.resetStatus();
            }
        };
    };
    CarritoComponent.prototype.resetStatus = function () {
    };
    CarritoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrito',
            template: __webpack_require__(/*! ./carrito.component.html */ "./src/app/components/carrito/carrito.component.html"),
            styles: [__webpack_require__(/*! ./carrito.component.scss */ "./src/app/components/carrito/carrito.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_common_data_api_service__WEBPACK_IMPORTED_MODULE_6__["DataApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], CarritoComponent);
    return CarritoComponent;
}());



/***/ }),

/***/ "./src/app/components/comparaciones/comparaciones.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/comparaciones/comparaciones.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body class=\"back-nav\">\r\n  <div class=\"navbar\">\r\n\r\n      <div class=\"container-logo\"> \r\n          <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n          <h3 style=\"color: rgb(255, 255, 255); margin-left:25%;\">Inicio</h3>\r\n      </div>\r\n      \r\n      <div class=\"logo\" *ngIf=\"logged\">\r\n          <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n            <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n          </div>\r\n          <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n          \r\n        </div>  \r\n<div class=\"container-crud\">\r\n    <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n    <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n    <ng-template #elseBlock>\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n    </ng-template>\r\n    <ng-template #thenBlock>\r\n    </ng-template>\r\n  </div>\r\n\r\n</div>\r\n</body>\r\n\r\n<div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-6 col-md-4 \" *ngFor=\"let info of projects\">\r\n            <div class=\"card_user\" data-aos=\"fade-down\" data-aos-duration=\"2000\">\r\n              <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                <div class=\"card-body text-center\">\r\n                  <div class=\"fondo-img\">\r\n                    <a>\r\n                      <img class=\"img-fluid\" src=\"{{info.img}}\">\r\n                    </a>\r\n                </div>\r\n                <div style=\"height: 180px ;width: 400px;\">\r\n                    <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                    {{info.titulo}}\r\n                    </p>\r\n                    <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                        ${{info.precio}} MXN\r\n                    </p>\r\n                    <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                      {{info.model}}\r\n                    </p>\r\n                </div>\r\n                    <div style=\"height: 100px;width: 410px;\">\r\n                            <button pButton type=\"button\" label=\"Agregar al carrito\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddCart(info.img, info.titulo, info.precio, info.model, info.Product_id)\" ></button>\r\n                            <button pButton type=\"button\" label=\"Eliminar del comparador\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;margin-left:20px;\" (click)=\"OnDelVS(info.Product_id)\"></button>\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/comparaciones/comparaciones.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/comparaciones/comparaciones.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_user {\n  width: 450px;\n  height: 400px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: #3e3e3f; }\n\n.card-body {\n  width: 450px;\n  height: 400px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: #3e3e3f; }\n\n.fondo-img {\n  width: 410px;\n  height: 150px;\n  background-color: #3e3e3f; }\n\n.img-fluid {\n  width: 150px; }\n\n.container-proyectos {\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-top: 0%; }\n\n.logo {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-left: 0%; }\n\n.container-crud {\n  margin-left: 78%;\n  margin-top: -5%; }\n\n.container-logo {\n  margin-right: 10%;\n  margin-top: 0%; }\n\n.back-nav {\n  background: linear-gradient(to right, #9448e0 0%, #33C6FF 100%);\n  font-size: 12px; }\n\n.avatar {\n  padding: 2em 0.5em;\n  text-align: center;\n  width: 150px;\n  height: 150px; }\n\n.avatar img {\n    width: 100px;\n    border-radius: 50%;\n    overflow: hidden; }\n\n.container-mid {\n  height: 150px;\n  width: 60%; }\n\n.back {\n  min-height: 76.5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYXJhY2lvbmVzL0M6XFxVc2Vyc1xcTEVOT1ZPXFxEZXNrdG9wXFxlY2dhIGZpbmFsXFxFQ0dBL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21wYXJhY2lvbmVzXFxjb21wYXJhY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYiwwQkFBMEI7RUFDMUIsb0JBQW1CO0VBQ25CLHNCQUFxQixFQUN4Qjs7QUFDRDtFQUNJLGFBQVc7RUFDWCxjQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG9CQUFtQjtFQUNuQixzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxhQUFXO0VBQ1gsY0FBWTtFQUNaLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGFBQVcsRUFDZDs7QUFDRDtFQUNDLGdCQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZDs7QUFDRDtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsaUJBQWUsRUFDaEI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWMsRUFDakI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsZUFDSixFQUFDOztBQUNEO0VBQ0UsZ0VBQStEO0VBQy9ELGdCQUFlLEVBRWxCOztBQUtDO0VBQ0UsbUJBQWlCO0VBQ2pCLG1CQUFpQjtFQUNqQixhQUFZO0VBQ1osY0FBYSxFQU1oQjs7QUFWQztJQU1NLGFBQVc7SUFDWCxtQkFBaUI7SUFDakIsaUJBQWUsRUFDbEI7O0FBRUw7RUFDSSxjQUFhO0VBQ2IsV0FBVSxFQUNYOztBQUlEO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYXJhY2lvbmVzL2NvbXBhcmFjaW9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItMXN0OiNlY2FmODE7XHJcbiRjb2xvci0ybmQ6ICM2MGI4ZDQ7XHJcblxyXG4uY2FyZF91c2Vye1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDQ4ZTAgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNlM2UzZjtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gICAgd2lkdGg6NDUwcHg7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ0OGUwIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMzZTNlM2Y7O1xyXG59XHJcbi5mb25kby1pbWd7XHJcbiAgICB3aWR0aDo0MTBweDtcclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTNlM2Y7O1xyXG59XHJcbi5pbWctZmx1aWR7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG4uY29udGFpbmVyLXByb3llY3Rvc3tcclxuXHRtYXJnaW4tbGVmdDowJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDAlO1xyXG5cdG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXItY3J1ZHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDc4JTtcclxuICAgICAgbWFyZ2luLXRvcDotNSU7XHJcbiAgfVxyXG4gIC5jb250YWluZXItbG9nb3tcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6ICAgMCVcclxuICB9XHJcbiAgLmJhY2stbmF2e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTQ0OGUwIDAlLCAjMzNDNkZGIDEwMCUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIFxyXG59XHJcbiAgLm5hdmJhcntcclxuXHJcbiAgfVxyXG5cclxuICAuYXZhdGFye1xyXG4gICAgcGFkZGluZzoyZW0gMC41ZW07XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgfVxyXG59XHJcbi5jb250YWluZXItbWlke1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXItbWlkLWludntcclxuICAgICAgXHJcbiAgfVxyXG4gIC5iYWNre1xyXG4gICAgbWluLWhlaWdodDogNzYuNXZoO1xyXG4gIH1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/comparaciones/comparaciones.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/comparaciones/comparaciones.component.ts ***!
  \*********************************************************************/
/*! exports provided: ComparacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparacionesComponent", function() { return ComparacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_data_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/data-api.service */ "./src/app/common/data-api.service.ts");
/* harmony import */ var src_app_common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComparacionesComponent = /** @class */ (function () {
    function ComparacionesComponent(router, http, dataApi, afs, authService) {
        this.router = router;
        this.http = http;
        this.dataApi = dataApi;
        this.afs = afs;
        this.authService = authService;
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    ComparacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
            _this.dataApi.getAllproducts("vs", _this.ipAddress).subscribe(function (projects) {
                _this.projects = projects;
            });
        });
    };
    ComparacionesComponent.prototype.OnDelVS = function (docID) {
        this.afs
            .doc("vs/" + this.ipAddress + "/")
            .collection("" + this.ipAddress)
            .doc(docID)
            .delete()
            .then(function () {
            alert("Se elimino el producto del comparador");
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ComparacionesComponent.prototype.OnAddCart = function (img, titulo, precio, modelo, docID) {
        alert("Se agrego al Carrito");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: img,
        };
        this.afs.doc("cart/" + this.ipAddress).collection(this.ipAddress).add(newProject);
        this.afs.doc("vs/" + this.ipAddress + "/").collection("" + this.ipAddress).doc(docID).delete().then(function () { }).catch(function (err) { console.log(err); });
    };
    ComparacionesComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    ComparacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comparaciones',
            template: __webpack_require__(/*! ./comparaciones.component.html */ "./src/app/components/comparaciones/comparaciones.component.html"),
            styles: [__webpack_require__(/*! ./comparaciones.component.scss */ "./src/app/components/comparaciones/comparaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_common_data_api_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            src_app_common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ComparacionesComponent);
    return ComparacionesComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tbackground: #f6f5f7;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\theight: 100vh;\r\n\tmargin: -20px 0 50px;\r\n}\r\n\r\nh1 {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n}\r\n\r\nh2 {\r\n\ttext-align: center;\r\n}\r\n\r\np {\r\n\tfont-size: 14px;\r\n\tfont-weight: 100;\r\n\tline-height: 20px;\r\n\tletter-spacing: 0.5px;\r\n\tmargin: 20px 0 30px;\r\n}\r\n\r\nspan {\r\n\tfont-size: 12px;\r\n}\r\n\r\na {\r\n\tcolor: #333;\r\n\tfont-size: 14px;\r\n\ttext-decoration: none;\r\n\tmargin: 15px 0;\r\n}\r\n\r\nbutton {\r\n\tborder-radius: 20px;\r\n\tborder: 1px solid #9448e0;\r\n\tbackground-color: #9448e0;\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\tpadding: 12px 45px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\ttransition: transform 80ms ease-in;\r\n}\r\n\r\nbutton:active {\r\n\ttransform: scale(0.95);\r\n}\r\n\r\nbutton:focus {\r\n\toutline: none;\r\n}\r\n\r\nform {\r\n\tbackground-color: #FFFFFF;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 50px;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\ninput {\r\n\tbackground-color: #eee;\r\n\tborder: none;\r\n\tpadding: 12px 15px;\r\n\tmargin: 8px 0;\r\n\twidth: 100%;\r\n}\r\n\r\n.container {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \r\n\t\t\t0 10px 10px rgba(0,0,0,0.22);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 768px;\r\n\tmax-width: 100%;\r\n\tmin-height: 480px;\r\n}\r\n\r\n.form-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\ttransition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\tz-index: 2;\r\n}\r\n\r\n.container.right-panel-active .sign-in-container {\r\n\ttransform: translateX(100%);\r\n}\r\n\r\n.sign-up-container {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n.container.right-panel-active .sign-up-container {\r\n\ttransform: translateX(100%);\r\n\topacity: 1;\r\n\tz-index: 5;\r\n\t-webkit-animation: show 0.6s;\r\n\t        animation: show 0.6s;\r\n}\r\n\r\n@-webkit-keyframes show {\r\n\t0%, 49.99% {\r\n\t\topacity: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t\r\n\t50%, 100% {\r\n\t\topacity: 1;\r\n\t\tz-index: 5;\r\n\t}\r\n}\r\n\r\n@keyframes show {\r\n\t0%, 49.99% {\r\n\t\topacity: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t\r\n\t50%, 100% {\r\n\t\topacity: 1;\r\n\t\tz-index: 5;\r\n\t}\r\n}\r\n\r\n.overlay-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\ttransition: transform 0.6s ease-in-out;\r\n\tz-index: 100;\r\n}\r\n\r\n.container.right-panel-active .overlay-container{\r\n\ttransform: translateX(-100%);\r\n}\r\n\r\n.overlay {\r\n\tbackground: #9448e0;\r\n\tbackground: linear-gradient(to right, #FF4B2B, #FF416C);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: 0 0;\r\n\tcolor: #FFFFFF;\r\n\tposition: relative;\r\n\tleft: -100%;\r\n\theight: 100%;\r\n\twidth: 200%;\r\n  \ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active .overlay {\r\n  \ttransform: translateX(50%);\r\n}\r\n\r\n.overlay-panel {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 40px;\r\n\ttext-align: center;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n\tbackground-color:#9448e0;\r\n}\r\n\r\n.overlay-left {\r\n\ttransform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active .overlay-left {\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.overlay-right {\r\n\tright: 0;\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active .overlay-right {\r\n\ttransform: translateX(20%);\r\n}\r\n\r\n.social-container {\r\n\tmargin: 20px 0;\r\n}\r\n\r\n.social-container a {\r\n\tborder: 1px solid #DDDDDD;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 0 5px;\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\r\n\r\nbutton.ghost {\r\n\tbackground-color: transparent;\r\n\tborder-color: #FFFFFF;\r\n}\r\n\r\nfooter {\r\n    background-color: #222;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    bottom: 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    z-index: 999;\r\n}\r\n\r\nfooter p {\r\n    margin: 10px 0;\r\n}\r\n\r\nfooter i {\r\n    color: red;\r\n}\r\n\r\nfooter a {\r\n    color: #3c97bf;\r\n    text-decoration: none;\r\n}\r\n\r\n.container-logo{\r\n\tmargin-right: 10%;\r\n\tmargin-top:-1%;\r\n\tposition:absolute;\r\n}\r\n\r\n.container-fluid-2 {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \r\n\t\t\t0 10px 10px rgba(0,0,0,0.22);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 768px;\r\n\tmax-width: 160px;\r\n\tmin-height: 160px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwRUFBMEU7O0FBRTFFO0NBQ0MsdUJBQXVCO0NBQ3ZCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCx3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixzQ0FBc0M7Q0FDdEMsY0FBYztDQUNkLHFCQUFxQjtDQUNyQjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1Y7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQiwwQkFBMEI7Q0FDMUIsbUNBQW1DO0NBQ25DOztBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyx1QkFBdUI7Q0FDdkIsb0JBQW9CO0dBQ2xCO2dDQUM2QjtDQUMvQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxhQUFhO0NBQ2IsaUNBQWlDO0NBQ2pDOztBQUVEO0NBQ0MsUUFBUTtDQUNSLFdBQVc7Q0FDWCxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyw0QkFBNEI7Q0FDNUI7O0FBRUQ7Q0FDQyxRQUFRO0NBQ1IsV0FBVztDQUNYLFdBQVc7Q0FDWCxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyw0QkFBNEI7Q0FDNUIsV0FBVztDQUNYLFdBQVc7Q0FDWCw2QkFBcUI7U0FBckIscUJBQXFCO0NBQ3JCOztBQUVEO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsV0FBVztFQUNYOztDQUVEO0VBQ0MsV0FBVztFQUNYLFdBQVc7RUFDWDtDQUNEOztBQVZEO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsV0FBVztFQUNYOztDQUVEO0VBQ0MsV0FBVztFQUNYLFdBQVc7RUFDWDtDQUNEOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxVQUFVO0NBQ1YsV0FBVztDQUNYLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsdUNBQXVDO0NBQ3ZDLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLDZCQUE2QjtDQUM3Qjs7QUFFRDtDQUNDLG9CQUFvQjtDQUVwQix3REFBd0Q7Q0FDeEQsNkJBQTZCO0NBQzdCLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osYUFBYTtDQUNiLFlBQVk7R0FDVix5QkFBeUI7Q0FDM0IsdUNBQXVDO0NBQ3ZDOztBQUVEO0dBQ0csMkJBQTJCO0NBQzdCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLE9BQU87Q0FDUCxhQUFhO0NBQ2IsV0FBVztDQUNYLHlCQUF5QjtDQUN6Qix1Q0FBdUM7Q0FDdkMseUJBQXlCO0NBQ3pCOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0MseUJBQXlCO0NBQ3pCOztBQUVEO0NBQ0MsU0FBUztDQUNULHlCQUF5QjtDQUN6Qjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGFBQWE7Q0FDYixZQUFZO0NBQ1o7O0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUIsc0JBQXNCO0NBQ3RCOztBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QixvQkFBb0I7R0FDbEI7Z0NBQzZCO0NBQy9CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw4MDAnKTtcclxuXHJcbioge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICNmNmY1Zjc7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdG1hcmdpbjogLTIwcHggMCA1MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk0NDhlMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ0OGUwO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuZm9ybSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwYWRkaW5nOiAwIDUwcHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHBhZGRpbmc6IDEycHggMTVweDtcclxuXHRtYXJnaW46IDhweCAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgXHRib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCBcclxuXHRcdFx0MCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogNzY4cHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6IDQ4MHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2lnbi1pbi1jb250YWluZXIge1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDUwJTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLnNpZ24tdXAtY29udGFpbmVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi11cC1jb250YWluZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHotaW5kZXg6IDU7XHJcblx0YW5pbWF0aW9uOiBzaG93IDAuNnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcblx0MCUsIDQ5Ljk5JSB7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0XHJcblx0NTAlLCAxMDAlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHR6LWluZGV4OiA1O1xyXG5cdH1cclxufVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG5cdHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVye1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuXHRiYWNrZ3JvdW5kOiAjOTQ0OGUwO1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IC0xMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMjAwJTtcclxuICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xyXG4gIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXBhbmVsIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMCA0MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0b3A6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6Izk0NDhlMDtcclxufVxyXG5cclxuLm92ZXJsYXktbGVmdCB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sZWZ0IHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXJpZ2h0IHtcclxuXHRyaWdodDogMDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LXJpZ2h0IHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxufVxyXG5cclxuLnNvY2lhbC1jb250YWluZXIge1xyXG5cdG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciBhIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjREREREREO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbjogMCA1cHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcbmJ1dHRvbi5naG9zdCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG5mb290ZXIgaSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgICBjb2xvcjogIzNjOTdiZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1sb2dve1xyXG5cdG1hcmdpbi1yaWdodDogMTAlO1xyXG5cdG1hcmdpbi10b3A6LTElO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQtMiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFx0Ym94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgXHJcblx0XHRcdDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6IDc2OHB4O1xyXG5cdG1heC13aWR0aDogMTYwcHg7XHJcblx0bWluLWhlaWdodDogMTYwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section>\r\n    \r\n  <div class=\"container-fluid\" id=\"container\">\r\n    <div class=\"form-container sign-in-container\">\r\n        <div class=\"container-logo\"> \r\n          <div class=\"container-fluid-2\">\r\n            <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n            <h3 style=\"color: black; margin-left:25%;\">Inicio</h3>\r\n          </div>\r\n        </div>\r\n        \r\n      <form>\r\n        <h1>Ingresa</h1>\r\n        <div class=\"social-container\">\r\n          <a class=\"social\"><i class=\"fab fa-facebook-f\" (click)=\"onLoginFacebook()\"></i></a>\r\n          <a class=\"social\"><i class=\"fab fa-google-plus-g\" (click)=\"onLoginGoogle()\"></i></a>\r\n        </div>\r\n        <span>O usa tu cuenta</span>\r\n        <input type=\"email\" placeholder=\"Email\" />\r\n        <input type=\"password\" placeholder=\"Contraseña\" />\r\n        <button (click)=\"onClickSU()\">Ingresa</button>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"overlay-container\">\r\n      <div class=\"overlay\">\r\n        <div class=\"overlay-panel overlay-right\">\r\n          <h1>¡Hola!</h1>\r\n          <p>¡Ingresa tus datos personales y UNETE!</p>\r\n          <button class=\"ghost\"\r\n            [routerLink]=\"['/registro']\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            registrate\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/auth.service */ "./src/app/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (email, password) {
        var _this = this;
        this.authService.loginEmailUser(email, password)
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return console.log('err', err.message); });
    };
    LoginComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return console.log('err', err.message); });
    };
    LoginComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return console.log('err', err.message); });
    };
    LoginComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    LoginComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/registro/registro.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/registro/registro.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tbackground: #9448e0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\theight: 100vh;\r\n\tmargin: -20px 0 50px;\r\n}\r\n\r\nh1 {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n}\r\n\r\nh2 {\r\n\ttext-align: center;\r\n}\r\n\r\np {\r\n\tfont-size: 14px;\r\n\tfont-weight: 100;\r\n\tline-height: 20px;\r\n\tletter-spacing: 0.5px;\r\n\tmargin: 20px 0 30px;\r\n}\r\n\r\nspan {\r\n\tfont-size: 12px;\r\n}\r\n\r\na {\r\n\tcolor: #333;\r\n\tfont-size: 14px;\r\n\ttext-decoration: none;\r\n\tmargin: 15px 0;\r\n}\r\n\r\nbutton {\r\n\tborder-radius: 20px;\r\n\tborder: 1px solid #9448e0;\r\n\tbackground-color: #9448e0;\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\tpadding: 12px 45px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\ttransition: transform 80ms ease-in;\r\n}\r\n\r\nbutton:active {\r\n\ttransform: scale(0.95);\r\n}\r\n\r\nbutton:focus {\r\n\toutline: none;\r\n}\r\n\r\nbutton.ghost {\r\n\tbackground-color: transparent;\r\n\tborder-color: #FFFFFF;\r\n}\r\n\r\nform {\r\n\tbackground-color: #FFFFFF;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 50px;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\ninput {\r\n\tbackground-color: #eee;\r\n\tborder: none;\r\n\tpadding: 12px 15px;\r\n\tmargin: 8px 0;\r\n\twidth: 100%;\r\n}\r\n\r\n.container {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \r\n\t\t\t0 10px 10px rgba(0,0,0,0.22);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 768px;\r\n\tmax-width: 100%;\r\n\tmin-height: 480px;\r\n}\r\n\r\n.form-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\ttransition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n\tleft: 50%;\r\n\twidth: 50%;\r\n\tz-index: 2;\r\n}\r\n\r\n.container.right-panel-active .sign-in-container {\r\n\ttransform: translateX(100%);\r\n}\r\n\r\n.sign-up-container {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n.container.right-panel-active .sign-up-container {\r\n\ttransform: translateX(100%);\r\n\topacity: 1;\r\n\tz-index: 5;\r\n\t-webkit-animation: show 0.6s;\r\n\t        animation: show 0.6s;\r\n}\r\n\r\n@-webkit-keyframes show {\r\n\t0%, 49.99% {\r\n\t\topacity: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t\r\n\t50%, 100% {\r\n\t\topacity: 1;\r\n\t\tz-index: 5;\r\n\t}\r\n}\r\n\r\n@keyframes show {\r\n\t0%, 49.99% {\r\n\t\topacity: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t\r\n\t50%, 100% {\r\n\t\topacity: 1;\r\n\t\tz-index: 5;\r\n\t}\r\n}\r\n\r\n.overlay-container {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0%;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\ttransition: transform 0.6s ease-in-out;\r\n\tz-index: 100;\r\n}\r\n\r\n.container.right-panel-active .overlay-container{\r\n\ttransform: translateX(-100%);\r\n}\r\n\r\n.overlay {\r\n\tbackground: #9448e0;\r\n\tbackground: linear-gradient(to right, #FF4B2B, #FF416C);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: 0 0;\r\n\tcolor: #FFFFFF;\r\n\tposition: relative;\r\n\tleft: -100%;\r\n\theight: 100%;\r\n\twidth: 200%;\r\n  \ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active .overlay {\r\n  \ttransform: translateX(50%);\r\n}\r\n\r\n.overlay-panel {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 40px;\r\n\ttext-align: center;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n\tbackground-color: #9448e0;\r\n}\r\n\r\n.overlay-left {\r\n\ttransform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active .overlay-left {\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.overlay-right {\r\n\tright: 0;\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active .overlay-right {\r\n\ttransform: translateX(20%);\r\n}\r\n\r\n.social-container {\r\n\tmargin: 20px 0;\r\n}\r\n\r\n.social-container a {\r\n\tborder: 1px solid #DDDDDD;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 0 5px;\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\r\n\r\nfooter {\r\n    background-color: #222;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    bottom: 0;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    z-index: 999;\r\n}\r\n\r\nfooter p {\r\n    margin: 10px 0;\r\n}\r\n\r\nfooter i {\r\n    color: red;\r\n}\r\n\r\nfooter a {\r\n    color: #3c97bf;\r\n    text-decoration: none;\r\n}\r\n\r\n.container-logo{\r\n\tmargin-right: 10%;\r\n\tmargin-top:-1%;\r\n\tposition:absolute;\r\n}\r\n\r\n.container-fluid-2 {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \r\n\t\t\t0 10px 10px rgba(0,0,0,0.22);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 768px;\r\n\tmax-width: 160px;\r\n\tmin-height: 160px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwRUFBMEU7O0FBRTFFO0NBQ0MsdUJBQXVCO0NBQ3ZCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCx3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixzQ0FBc0M7Q0FDdEMsY0FBYztDQUNkLHFCQUFxQjtDQUNyQjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1Y7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQiwwQkFBMEI7Q0FDMUIsbUNBQW1DO0NBQ25DOztBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsOEJBQThCO0NBQzlCLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLDBCQUEwQjtDQUMxQixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsWUFBWTtDQUNaOztBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtHQUNsQjtnQ0FDNkI7Q0FDL0IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsYUFBYTtDQUNiLGlDQUFpQztDQUNqQzs7QUFFRDtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0MsUUFBUTtDQUNSLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsV0FBVztDQUNYOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsNkJBQXFCO1NBQXJCLHFCQUFxQjtDQUNyQjs7QUFFRDtDQUNDO0VBQ0MsV0FBVztFQUNYLFdBQVc7RUFDWDs7Q0FFRDtFQUNDLFdBQVc7RUFDWCxXQUFXO0VBQ1g7Q0FDRDs7QUFWRDtDQUNDO0VBQ0MsV0FBVztFQUNYLFdBQVc7RUFDWDs7Q0FFRDtFQUNDLFdBQVc7RUFDWCxXQUFXO0VBQ1g7Q0FDRDs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsU0FBUztDQUNULFdBQVc7Q0FDWCxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVDQUF1QztDQUN2QyxhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0I7O0FBRUQ7Q0FDQyxvQkFBb0I7Q0FFcEIsd0RBQXdEO0NBQ3hELDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGFBQWE7Q0FDYixZQUFZO0dBQ1YseUJBQXlCO0NBQzNCLHVDQUF1QztDQUN2Qzs7QUFFRDtHQUNHLDJCQUEyQjtDQUM3Qjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsYUFBYTtDQUNiLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsdUNBQXVDO0NBQ3ZDLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLDRCQUE0QjtDQUM1Qjs7QUFFRDtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFFRDtDQUNDLFNBQVM7Q0FDVCx5QkFBeUI7Q0FDekI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0I7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsWUFBWTtDQUNaOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QixvQkFBb0I7R0FDbEI7Z0NBQzZCO0NBQy9CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw4MDAnKTtcclxuXHJcbioge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICM5NDQ4ZTA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdG1hcmdpbjogLTIwcHggMCA1MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk0NDhlMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ0OGUwO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmdob3N0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMCA1MHB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblx0bWFyZ2luOiA4cHggMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFx0Ym94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgXHJcblx0XHRcdDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6IDc2OHB4O1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiA0ODBweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZ24taW4tY29udGFpbmVyIHtcclxuXHRsZWZ0OiA1MCU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLnNpZ24tdXAtY29udGFpbmVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0b3BhY2l0eTogMDtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi11cC1jb250YWluZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHotaW5kZXg6IDU7XHJcblx0YW5pbWF0aW9uOiBzaG93IDAuNnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcblx0MCUsIDQ5Ljk5JSB7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHR9XHJcblx0XHJcblx0NTAlLCAxMDAlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHR6LWluZGV4OiA1O1xyXG5cdH1cclxufVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDAlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0ei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXJ7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG5cdGJhY2tncm91bmQ6ICM5NDQ4ZTA7XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bGVmdDogLTEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAyMDAlO1xyXG4gIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheSB7XHJcbiAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxufVxyXG5cclxuLm92ZXJsYXktcGFuZWwge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwYWRkaW5nOiAwIDQwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRvcDogMDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzk0NDhlMDtcclxufVxyXG5cclxuLm92ZXJsYXktbGVmdCB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sZWZ0IHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXJpZ2h0IHtcclxuXHRyaWdodDogMDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LXJpZ2h0IHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxufVxyXG5cclxuLnNvY2lhbC1jb250YWluZXIge1xyXG5cdG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciBhIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjREREREREO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbjogMCA1cHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuZm9vdGVyIGkge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gICAgY29sb3I6ICMzYzk3YmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lci1sb2dve1xyXG5cdG1hcmdpbi1yaWdodDogMTAlO1xyXG5cdG1hcmdpbi10b3A6LTElO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQtMiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFx0Ym94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgXHJcblx0XHRcdDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6IDc2OHB4O1xyXG5cdG1heC13aWR0aDogMTYwcHg7XHJcblx0bWluLWhlaWdodDogMTYwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/registro/registro.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/registro/registro.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\" id=\"container\">\r\n\t\t<div class=\"form-container sign-in-container\">\r\n\t\t\t\t<div class=\"container-logo\"> \r\n\t\t\t\t\t\t<div class=\"container-fluid-2\">\r\n\t\t\t\t\t\t  <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\" [routerLink]=\"['']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t\t  <h3 style=\"color: black; margin-left:25%;\">Inicio</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t<form #formRegister=\"ngForm\" (ngSubmit)=\"registerUser(email,password,name)\">\r\n\t\t\t\t\t<h1>Crea tu cuenta</h1>\r\n\t\t\t\t\t<div class=\"social-container\">  \r\n\t\t\t\t\t\t<a class=\"social\"><i class=\"fab fa-facebook-f\" (click)=\"onLoginFacebook()\"></i></a>\r\n\t\t\t\t\t\t<a class=\"social\"><i class=\"fab fa-google-plus-g\" (click)=\"onLoginGoogle()\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span>O usa tu correo para registrate</span>\r\n\t\t\t\t\t<input [(ngModel)]=\"name\" type=\"text\" placeholder=\"Nombre\" />\r\n\t\t\t\t\t<input [(ngModel)]=\"email\" name=\"email\" type=\"email\" placeholder=\"Email\" />\r\n\t\t\t\t\t<input [(ngModel)]=\"password\" name=\"password\" type=\"password\" placeholder=\"Contraseña\" />\r\n\t\t\t\t\t<button type=\"submit \">Registrate</button>\r\n\t\t\t\t</form>\r\n\t\t  </div>\r\n\t<div class=\"overlay-container\">\r\n\t\t<div class=\"overlay\">\r\n\t\t\t<div class=\"overlay-panel overlay-right\">\r\n\t\t\t\t<h1>¡Bienvenido!</h1>\r\n\t\t\t\t<p>Para permanecer con nosotros porfavor ingresa tu informacion personal</p>\r\n\t\t\t\t<button class=\"ghost\" id=\"signIn\" [routerLink]=\"['/login']\" routerLinkActive=\"active\">Ingresa</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- <footer>\r\n\t<p>\r\n\t\tCreated with <i class=\"fa fa-heart\"></i> by\r\n\t\t<a target=\"_blank\" href=\"https://florin-pop.com\">Florin Pop</a>\r\n\t\t- Read how I created this and how you can join the challenge\r\n\t\t<a target=\"_blank\" href=\"https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/\">here</a>.\r\n\t</p>\r\n</footer> -->"

/***/ }),

/***/ "./src/app/components/registro/registro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/auth.service */ "./src/app/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = "";
        this.password = "";
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.registerUser = function (email, password) {
        var _this = this;
        this.authService.registerUser(email, password).then(function (res) {
            _this.authService.isAuth().subscribe(function (user) {
                _this.authService.updateUserData(user);
                _this.onLoginRedirect();
            });
        }).catch(function (err) { return console.log('err', err.message); });
    };
    RegistroComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return console.log('err', err.message); });
    };
    RegistroComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return console.log('err', err.message); });
    };
    RegistroComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    RegistroComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['/home']);
    };
    RegistroComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/components/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/components/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body class=\"back-nav\">\r\n    <div class=\"navbar\">\r\n  \r\n        <div class=\"container-logo\"> \r\n            <img width=\"150\"style=\"padding:20px; margin-bottom:-10%;\" src=\"../assets/ebay logos/ecga.png\">\r\n        </div>\r\n        \r\n<div class=\"logo\" *ngIf=\"logged\">\r\n  <div class=\"avatar\" *ngIf=\"user.photoUrl\">\r\n    <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img [src]=\"user.photoUrl\" /></li>\r\n  </div>\r\n  <li class=\"icon-dashboard btn\" (click)=\"onLogout()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span style=\"color: rgb(255, 255, 255);margin-bottom:-15%;margin-left:23%;\">Desconectar</span></li>\r\n  \r\n</div>  \r\n\r\n  <div class=\"container-crud\" >\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-shopping-cart fa-w-20 fa-2x\" [routerLink]=\"['/cart']\" routerLinkActive=\"active\"></i></a>\r\n      <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fab fa-staylinked fa-w-20 fa-2x\" [routerLink]=\"['/armado']\" routerLinkActive=\"active\"></i></a>\r\n      \r\n      <div *ngIf=\"logged; then thenBlock else elseBlock\"></div>\r\n      <ng-template #elseBlock>\r\n        <a class=\"social\" style=\"padding:20px; color: #9448e0;\"><i class=\"fas fa-users fa-w-20 fa-3x\" [routerLink]=\"['/login']\" routerLinkActive=\"active\"></i></a>\r\n      </ng-template>\r\n      <ng-template #thenBlock>\r\n      </ng-template>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"container\" style=\"padding: 10px\">\r\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-row form-group\">\r\n      <div class=\"col\">\r\n        <div><input formControlName=\"query\" type=\"text\" class=\"form-control\" placeholder=\"Search\"></div>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"background-color: #9448e0; border-color:#9448e0;\">Search</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n</body>\r\n\r\n<button type=\"submit\" class=\"btn btn-primary container-fluid\" style=\"background-color: #9448e0; border-color:#9448e0;\"  [routerLink]=\"['/compa']\" routerLinkActive=\"active\">Comparativa</button>\r\n<!-- \r\n------------------------------------ -->\r\n\r\n<section id=\"resultsML\" class=\"conainer-mid\">\r\n  \r\n<div class=\"back\" style=\"background-color: #3e3e3f;\">\r\n    <div class=\"container\">\r\n      <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n              <div class=\"container-mid\">\r\n                  <img width=\"150\"style=\"padding:20px; margin-left:25%;\" src=\"../assets/ebay logos/developersprogrammember_vert.png\">\r\n              </div>\r\n              <div class=\"container-mid-inv\">\r\n                  <img width=\"200\"style=\"padding:20px; margin-left:20%; margin-top:10%;\" src=\"../assets/ebay logos/mercado-libre.jpg\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div *ngFor=\"let info of infoE; let i = index\" >\r\n                      <div class=\"card_user\" data-aos=\"fade-right\" data-aos-duration=\"3000\" *ngIf=\"i<10\">\r\n                        <div class=\"card\"  style=\"border-color: #3e3e3f;   border-radius: 25px;\" >\r\n                          <div class=\"card-body text-center\">\r\n                            <div class=\"fondo-img\">\r\n\r\n                                <a href=\"{{info.viewItemURL[0]}}\">\r\n                                    <img class=\"img-fluid\" src=\"{{info.galleryURL}}\">\r\n                                  </a>\r\n                          </div>\r\n                        <div style=\"height: 120px ;width: 400px;\">\r\n                            <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                              {{info.title}}\r\n                            </p>\r\n                            <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                ${{info.sellingStatus[0].currentPrice[0].__value__*19.2}} MXN\r\n                              </p>\r\n                              <p></p>\r\n                            </div>\r\n                              <div style=\"height: 100px;width: 410px;\">\r\n                                  <button pButton type=\"button\" label=\"Comparar\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddVSE(info.galleryURL ,info.title ,info.sellingStatus[0].currentPrice[0].__value__*19.2)\"></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n<!-- ------------------------------------------ -->\r\n              <div class=\"col-md-6\" >\r\n                  <div *ngFor=\"let info of infoML; let i = index\">\r\n                      <div class=\"card_user\" data-aos=\"fade-left\" data-aos-duration=\"2000\" *ngIf=\"i<10\">\r\n                        <div class=\"card\" style=\"border-color: #3e3e3f;   border-radius: 25px;\">\r\n                          <div class=\"card-body text-center\">\r\n                            <div class=\"fondo-img\">\r\n                            <a href=\"{{info.permalink}}\">\r\n                              <img class=\"img-fluid\" src=\"{{info.thumbnail}}\">\r\n                            </a>\r\n                          </div>\r\n                        <div style=\"height: 120px ;width: 400px;\">\r\n                            <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                              {{info.title}}\r\n                            </p>\r\n                            <p class=\"card-text\" style=\"color: rgb(255, 255, 255);\">\r\n                                ${{info.price}} MXN\r\n                              </p>\r\n                            </div>\r\n                              <div style=\"height: 100px;width: 410px;\">\r\n                                  <button pButton type=\"button\" label=\"Comparar\" class=\"ui-button-rounded\" style=\"background-color: #33C6FF; border-color:black;\" (click)=\"OnAddVSML(info.thumbnail, info.title, info.price, info.attributes[3].name, info.attributes[3].value_name)\"></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n    </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n    </section>\r\n    \r\n\r\n<!-- \r\n-------------------------------- -->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_user {\n  width: 450px;\n  height: 350px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: #3e3e3f; }\n\n.card-body {\n  width: 450px;\n  height: 350px;\n  background-color: #9448e0;\n  border-radius: 25px;\n  border-color: #3e3e3f; }\n\n.fondo-img {\n  width: 410px;\n  height: 150px;\n  background-color: #3e3e3f; }\n\n.img-fluid {\n  width: 150px; }\n\n.container-proyectos {\n  margin-left: 0%;\n  margin-right: 0%;\n  margin-top: 0%; }\n\n.logo {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  padding-right: 45%; }\n\n.container-crud {\n  margin-left: 78%;\n  margin-top: -5%; }\n\n.container-logo {\n  margin-right: 10%;\n  margin-top: -1%; }\n\n.back-nav {\n  background: linear-gradient(to right, #9448e0 0%, #33C6FF 100%);\n  font-size: 12px; }\n\n.avatar {\n  padding: 2em 0.5em;\n  text-align: center;\n  width: 150px;\n  height: 150px; }\n\n.avatar img {\n    width: 100px;\n    border-radius: 50%;\n    overflow: hidden; }\n\n.container-mid {\n  height: 150px;\n  width: 60%; }\n\n.back {\n  min-height: 76.5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXExFTk9WT1xcRGVza3RvcFxcZWNnYSBmaW5hbFxcRUNHQS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG9CQUFtQjtFQUNuQixzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxhQUFXO0VBQ1gsY0FBWTtFQUNaLDBCQUEwQjtFQUMxQixvQkFBbUI7RUFDbkIsc0JBQXFCLEVBQ3hCOztBQUNEO0VBQ0ksYUFBVztFQUNYLGNBQVk7RUFDWiwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxhQUFXLEVBQ2Q7O0FBQ0Q7RUFDQyxnQkFBYztFQUNkLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Q7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLG1CQUFpQixFQUNsQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBYyxFQUNqQjs7QUFDRDtFQUNJLGtCQUFpQjtFQUNqQixnQkFBYyxFQUNqQjs7QUFDRDtFQUNFLGdFQUErRDtFQUMvRCxnQkFBZSxFQUVsQjs7QUFLQztFQUNFLG1CQUFpQjtFQUNqQixtQkFBaUI7RUFDakIsYUFBWTtFQUNaLGNBQWEsRUFNaEI7O0FBVkM7SUFNTSxhQUFXO0lBQ1gsbUJBQWlCO0lBQ2pCLGlCQUFlLEVBQ2xCOztBQUVMO0VBQ0ksY0FBYTtFQUNiLFdBQVUsRUFDYjs7QUFJRDtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci0xc3Q6I2VjYWY4MTtcclxuJGNvbG9yLTJuZDogIzYwYjhkNDtcclxuXHJcbi5jYXJkX3VzZXJ7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NDhlMCA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2UzZTNmO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICB3aWR0aDo0NTBweDtcclxuICAgIGhlaWdodDozNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDQ4ZTAgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNlM2UzZjtcclxufVxyXG4uZm9uZG8taW1ne1xyXG4gICAgd2lkdGg6NDEwcHg7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNmO1xyXG59XHJcbi5pbWctZmx1aWR7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG4uY29udGFpbmVyLXByb3llY3Rvc3tcclxuXHRtYXJnaW4tbGVmdDowJTtcclxuXHRtYXJnaW4tcmlnaHQ6IDAlO1xyXG5cdG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQ1JTtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1jcnVke1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzglO1xyXG4gICAgICBtYXJnaW4tdG9wOi01JTtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1sb2dve1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgbWFyZ2luLXRvcDotMSU7XHJcbiAgfVxyXG4gIC5iYWNrLW5hdntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzk0NDhlMCAwJSwgIzMzQzZGRiAxMDAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICBcclxufVxyXG4gIC5uYXZiYXJ7XHJcblxyXG4gIH1cclxuXHJcbiAgLmF2YXRhcntcclxuICAgIHBhZGRpbmc6MmVtIDAuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIH1cclxufVxyXG4uY29udGFpbmVyLW1pZHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5jb250YWluZXItbWlkLWludntcclxuICAgIFxyXG59XHJcbi5iYWNre1xyXG4gICAgbWluLWhlaWdodDogNzYuNXZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, deviceService, router, apiService, authService, afs) {
        this.http = http;
        this.deviceService = deviceService;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.afs = afs;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
        };
    }
    HomeComponent.prototype.onSubmit = function (id) {
        var _this = this;
        this.item = this.searchForm.value.query;
        if (this.item != '') {
            this.apiService.getItemML(this.item).subscribe(function (res) {
                _this.infoML = res.results;
            });
            this.apiService.getItemE(this.item).subscribe(function (res) {
                //console.log(res.findItemsByKeywordsResponse[0].searchResult[0].item);
                _this.infoE = res.findItemsByKeywordsResponse[0].searchResult[0].item;
            });
        }
        else {
            alert("Ingrese un elemento para buscar");
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.user.User_id = user.uid;
                _this.logged = true;
            }
            else {
                _this.logged = false;
            }
        });
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            _this.ipAddress = data.ip;
        });
    };
    HomeComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['/home']);
    };
    HomeComponent.prototype.OnAddVSML = function (imagen, titulo, precio, modeloN, modelo) {
        alert("Se agrego al comparador");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: imagen,
            model: modeloN + " : " + modelo
        };
        this.afs.doc("vs/" + this.ipAddress).collection(this.ipAddress).add(newProject);
    };
    HomeComponent.prototype.OnAddVSE = function (imagen, titulo, precio, modeloN) {
        alert("Se agrego al comparador");
        var newProject = {
            titulo: titulo,
            precio: precio,
            img: imagen,
        };
        this.afs.doc("vs/" + this.ipAddress).collection(this.ipAddress).add(newProject);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _common_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
    ], HomeComponent);
    return HomeComponent;
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
    production: true,
    baseUrlML: " https://api.mercadolibre.com/",
    baseUrlE: "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=dylanlow-ECGA2314-PRD-538876c40-e0a31d8c&RESPONSE-DATA-FORMAT=JSON&keywords=",
    firebase: {
        apiKey: "AIzaSyAYJ5QNZHzpilOqnV1fBcpG5egJU5uexRI",
        authDomain: "ecga-d9be8.firebaseapp.com",
        databaseURL: "https://ecga-d9be8.firebaseio.com",
        projectId: "ecga-d9be8",
        storageBucket: "ecga-d9be8.appspot.com",
        messagingSenderId: "846228575282",
        appId: "1:846228575282:web:97e3f876b9657305add82b"
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

module.exports = __webpack_require__(/*! C:\Users\LENOVO\Desktop\ecga final\ECGA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map