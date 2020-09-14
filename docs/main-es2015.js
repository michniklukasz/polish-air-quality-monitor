(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sensor-data/sensor-data.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sensor-data/sensor-data.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isActive\" class=\"box\">\r\n    <div class=\"text\" *ngIf=\"currentValue !== undefined\">\r\n        <div class=\"data\">\r\n            <p>{{sensor.param.paramName}}:</p> \r\n            <p><b>{{currentValue}}</b> [µg/m<sup>3</sup>]</p>\r\n        </div>\r\n        <div class=\"hazard\"\r\n             *ngIf=\"currentPercentageValue > 60\">\r\n            <b>{{currentPercentageValue}}%</b>\r\n            <i class=\"material-icons\">\r\n              <!-- shows when value is highter than 60% -->\r\n            warning\r\n            </i>\r\n        </div>\r\n            \r\n    </div> \r\n    <div class=\"bar\">\r\n        <span [style.width.%]=\"barWidth\"\r\n                [style.background]=\"barColor\">\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/station-details/station-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/station-details/station-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- when component data is loaded -->\r\n<div class=\"spinner-wrapper\"\r\n    *ngIf=\"spinner.visibleSpinner\">\r\n  <app-spinner></app-spinner>\r\n</div>\r\n<!-- component main content -->\r\n<div class=\"wrapper\"\r\n    *ngIf=\"spinner.visibleContent\">\r\n    <!-- positioned absolute -->\r\n    <button class=\"back-btn\">\r\n        <i class=\"material-icons\"\r\n        (click)=\"backToMain()\">\r\n        keyboard_backspace\r\n        </i>\r\n    </button>\r\n    <!-- ------------------- -->\r\n    <div class=\"header\"\r\n    *ngIf=\"selectedStation$ !== undefined\">\r\n        <h1>{{selectedStation$.city.name}}</h1>\r\n        <h2 *ngIf=\"selectedStation$.addressStreet !== null\">{{selectedStation$.addressStreet}}</h2>\r\n    </div>\r\n    <div class=\"index\"\r\n        *ngIf=\"overallQualityIndex !== undefined\">\r\n        <p>Polski indeks jakości powietrza:</p>\r\n        <div class=\"index-value\">\r\n            <b>{{overallQualityIndex.indexLevelName}}</b>\r\n            <i class=\"material-icons\"\r\n            [style.background]=\"overallQualityIndexColor\">\r\n                {{faceIcon}}</i>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"selectedStationSensors !== undefined\" \r\n         class=\"sensor-data-container\">\r\n            <app-sensor-data\r\n                *ngFor=\"let sensor of selectedStationSensors\"\r\n                [sensor]=\"sensor\" \r\n                [stationId]=\"selectedStation$.id\">\r\n            </app-sensor-data>\r\n    </div>\r\n    <footer>\r\n        <p>\r\n            \"Dane w tabeli wyświetlają się, jeżeli na stacji prowadzone są pomiary automatyczne (1-godzinne wyniki pomiarów) \r\n            przynajmniej jednego z następujących zanieczyszczeń: pył PM10, pył PM2,5, ozon (O3), dwutlenek azotu (NO2),\r\n            dwutlenek siarki (SO2), benzen (C6H6), tlenek węgla (CO).\" - <b>powietrze.gios.gov.pl</b>\r\n        </p>\r\n    </footer>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/station-selection/station-selection.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/station-selection/station-selection.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- when component data is loaded -->\r\n<div class=\"spinner-wrapper\"\r\n    *ngIf=\"spinner.visibleSpinner\">\r\n  <app-spinner></app-spinner>\r\n</div>\r\n<!-- component main content -->\r\n<div class=\"content\"\r\n    *ngIf=\"spinner.visibleContent\">\r\n  <div class=\"top-bar\">\r\n    <h1>AIRe</h1>\r\n    <i class=\"material-icons\">\r\n        favorite\r\n    </i>\r\n  </div>\r\n  <div class=\"banner\">\r\n    <h2>Poznaj jakość powietrza w Twoim otoczeniu.</h2>\r\n    <p>(Aplikacja może wymagać znajomojości Twojej lokalizacji)</p>\r\n    <app-user-auto-localization [stations]=\"stations\"></app-user-auto-localization>\r\n    <img src=\"assets/images/air_image.jpg\" alt='image'>\r\n  </div>\r\n  <div class=\"selection\">\r\n    <div class=\"manual\">\r\n      <div class=\"bar\">\r\n        <i class=\"material-icons\">search</i>\r\n        <h4>WYBIERZ SAMODZIELNIE</h4>\r\n      </div>\r\n      <div class=\"form\">\r\n        <div class=\"input-fields\">\r\n          <div class=\"input-field\">\r\n            <label for=\"voivodeship\">województwo:</label>\r\n            <input id=\"voivodeship\" \r\n                  name=\"voivodeship\"\r\n                  [(ngModel)]=\"voivodeshipTerm\"\r\n                   value=\"{{selectedVoivodeship}}\"\r\n                   placeholder=\"{{selectedVoivodeship ? selectedVoivodeship : 'wyszukaj województwo...'}}\"\r\n                   type=\"text\" \r\n                   (keydown.backspace)=\"deleteSelectedVoivodeship()\" required>\r\n            <span *ngIf=\"this.selectedVoivodeship !== undefined\"\r\n                  (click)=\"deleteSelectedVoivodeship()\">\r\n                  <i class=\"material-icons\">close</i>\r\n            </span>\r\n          </div>\r\n          <div class=\"input-field\"\r\n              *ngIf=\"selectedVoivodeship !==undefined\">\r\n            <label for=\"city\">miasto:</label>\r\n            <input type=\"text\"\r\n                  id=\"city\" \r\n                  value = \"{{selectedCity}}\"\r\n                  placeholder=\"{{ selectedCity ? selectedCity : 'wyszukaj miasto...'}}\"\r\n                  [(ngModel)]=\"cityTerm\">\r\n            <span *ngIf=\"this.selectedCity !== undefined\"\r\n                  (click)=\"deleteSelectedCity()\">\r\n                  <i class=\"material-icons\">close</i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-selections\">\r\n          <div class=\"form-selection\" \r\n              *ngIf=\"selectedVoivodeship === undefined\">\r\n            <h4>WOJEWÓDZTWA</h4>\r\n            <ul>\r\n                <li class=\"selection-tab\"\r\n                    *ngFor=\"let voivodeship of voivodeships | VoivodeshipFilterPipe: voivodeshipTerm\"\r\n                    (click)=\"getSelectedVoivodeship(voivodeship)\">\r\n                    <i class=\"material-icons\">touch_app</i>\r\n                    <span>{{voivodeship}}</span>\r\n                </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"form-selection\"\r\n              *ngIf=\"selectedVoivodeship !==undefined && selectedCity === undefined\">\r\n            <h4>MIASTA</h4>\r\n            <ul>\r\n              <li class=\"selection-tab\"\r\n                  *ngFor=\"let city of cities | CityFilterPipe: cityTerm\" \r\n                  (click)=\"getSelectedCity(city)\">\r\n                  <i class=\"material-icons\">touch_app</i>\r\n                  <span>{{city}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"form-selection\"\r\n              *ngIf=\"selectedVoivodeship !== undefined && selectedCity !== undefined\">\r\n            <h2>{{selectedCity}}</h2>\r\n            <ul>\r\n              <li  class=\"selection-tab\"\r\n                  *ngFor=\"let station of stationsInCity\"\r\n                  (click)=\"goToSelectedStation(station)\">\r\n                  <i class=\"material-icons\">touch_app</i>\r\n                  <span>{{station.addressStreet}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _station_selection_station_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station-selection/station-selection.component */ "./src/app/station-selection/station-selection.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _station_details_station_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./station-details/station-details.component */ "./src/app/station-details/station-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sensor_data_sensor_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sensor-data/sensor-data.component */ "./src/app/sensor-data/sensor-data.component.ts");
/* harmony import */ var _user_auto_localization_user_auto_localization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-auto-localization/user-auto-localization.component */ "./src/app/user-auto-localization/user-auto-localization.component.ts");
/* harmony import */ var _station_selection_voivodeship_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./station-selection/voivodeship-filter.pipe */ "./src/app/station-selection/voivodeship-filter.pipe.ts");
/* harmony import */ var _station_selection_city_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./station-selection/city-filter.pipe */ "./src/app/station-selection/city-filter.pipe.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _station_selection_station_selection_component__WEBPACK_IMPORTED_MODULE_6__["StationSelectionComponent"],
            _station_details_station_details_component__WEBPACK_IMPORTED_MODULE_8__["StationDetailsComponent"],
            _sensor_data_sensor_data_component__WEBPACK_IMPORTED_MODULE_10__["SensorDataComponent"],
            _user_auto_localization_user_auto_localization_component__WEBPACK_IMPORTED_MODULE_11__["UserAutoLocalizationComponent"],
            _station_selection_city_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["CityFilterPipe"],
            _station_selection_voivodeship_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["VoivodeshipFilterPipe"],
            _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _station_selection_station_selection_component__WEBPACK_IMPORTED_MODULE_6__["StationSelectionComponent"] },
                { path: 'station', component: _station_details_station_details_component__WEBPACK_IMPORTED_MODULE_8__["StationDetailsComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/hand-held-data.ts":
/*!***********************************!*\
  !*** ./src/app/hand-held-data.ts ***!
  \***********************************/
/*! exports provided: voivodeships */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voivodeships", function() { return voivodeships; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const voivodeships = [
    'dolnośląskie',
    'kujawsko-pomorskie',
    'lubelskie',
    'lubuskie',
    'łódzkie',
    'małopolskie',
    'mazowieckie',
    'opolskie',
    'podkarpackie',
    'podlaskie',
    'pomorskie',
    'śląskie',
    'świętokrzyskie',
    'warmińsko-mazurskie',
    'wielkopolskie',
    'zachodniopomorskie'
];


/***/ }),

/***/ "./src/app/localization.service.ts":
/*!*****************************************!*\
  !*** ./src/app/localization.service.ts ***!
  \*****************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalizationService = class LocalizationService {
    // selectedStation$: Station;
    constructor() { }
    getUserLocalization() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(GeoPos => {
                resolve({ gegrLat: GeoPos.coords.latitude, gegrLon: GeoPos.coords.longitude });
            }, error => {
                // Here u infor user about users localization rejection
                window.alert('Nie można wykonać operacji, ponieważ nie zezwolono na dostęp do lokalizacji urządzenia.');
                reject(error);
            });
        });
    }
    calculateDistance(userLoc, stations) {
        return stations.map(station => {
            const calcDelta = Math.sqrt(Math.pow(Math.abs(parseFloat(station.gegrLat) - userLoc.gegrLat), 2)
                + Math.pow(Math.abs(parseFloat(station.gegrLon) - userLoc.gegrLon), 2));
            return { id: station.id, delta: calcDelta };
        });
    }
    sortStationsByDistance(unsortedStationss) {
        return unsortedStationss.sort((a, b) => a.delta - b.delta);
    }
    createArrayOfFiveClosestStations(allStations, sortedByDistance) {
        const fiveStationIds = sortedByDistance.slice(0, 4).map(element => element.id);
        return fiveStationIds.map((id) => {
            return allStations.filter(station => station.id === id);
        }).flat();
    }
    auto(stations) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userLocalization;
            let unsortedStationss;
            let sortedByDistance;
            userLocalization = yield this.getUserLocalization();
            unsortedStationss = this.calculateDistance(userLocalization, stations);
            sortedByDistance = this.sortStationsByDistance(unsortedStationss);
            return this.createArrayOfFiveClosestStations(stations, sortedByDistance);
        });
    }
};
LocalizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalizationService);



/***/ }),

/***/ "./src/app/sensor-data/sensor-data.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sensor-data/sensor-data.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 0.5rem;\r\n    border-radius: 1rem;\r\n    /* For Neumorphism Effect */\r\n    background-color:#E0E5EC;\r\n    box-shadow: inset 9px 9px 16px rgb(163,177,198,0.6), \r\n               inset -9px -9px 16px    rgba(255,255,255, 0.5);\r\n    /* For Neumorphism Effect */\r\n}\r\n.text {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    padding: 0.5rem;\r\n}\r\n.data {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.data p {\r\n    line-height: 1rem;\r\n    min-height: 1rem;\r\n    margin: 0;\r\n}\r\n.data sup {\r\n    line-height: 0;\r\n}\r\n.hazard {\r\n    color: #7e0023;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.hazard b {\r\n    height: 2rem;\r\n    line-height: 2rem;\r\n}\r\n.bar {\r\n    height: 1rem;\r\n    margin: 0 0.5rem 0.5rem;\r\n    border-radius: 0.5rem;\r\n    /* For Neumorphism Effect */\r\n    background-color:#E0E5EC;\r\n    box-shadow: inset 9px 9px 16px rgb(163,177,198,0.6), \r\n               inset -9px -9px 16px    rgba(255,255,255, 0.5);\r\n    /* For Neumorphism Effect */\r\n    overflow: hidden;\r\n   }\r\n.bar span {\r\n    display: inline-block;\r\n    height: 1.5rem;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n@media (min-width: 375px) {\r\n\r\n}\r\n@media (min-width: 500px) {\r\n    .data {\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n    }\r\n    .data p {\r\n        line-height: 2rem;\r\n    }\r\n    .data b {\r\n        margin-left: 0.5rem;\r\n    }\r\n}\r\n@media (min-width: 1024px) {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vuc29yLWRhdGEvc2Vuc29yLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qjs2REFDeUQ7SUFDekQsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCOzZEQUN5RDtJQUN6RCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0dBQ2pCO0FBQ0g7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjtBQUNBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvc2Vuc29yLWRhdGEvc2Vuc29yLWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAvKiBGb3IgTmV1bW9ycGhpc20gRWZmZWN0ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFMEU1RUM7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCA5cHggOXB4IDE2cHggcmdiKDE2MywxNzcsMTk4LDAuNiksIFxyXG4gICAgICAgICAgICAgICBpbnNldCAtOXB4IC05cHggMTZweCAgICByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xyXG4gICAgLyogRm9yIE5ldW1vcnBoaXNtIEVmZmVjdCAqL1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuLmRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmRhdGEgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmRhdGEgc3VwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi5oYXphcmQge1xyXG4gICAgY29sb3I6ICM3ZTAwMjM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uaGF6YXJkIGIge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuLmJhciB7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW46IDAgMC41cmVtIDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIC8qIEZvciBOZXVtb3JwaGlzbSBFZmZlY3QgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6I0UwRTVFQztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDlweCA5cHggMTZweCByZ2IoMTYzLDE3NywxOTgsMC42KSwgXHJcbiAgICAgICAgICAgICAgIGluc2V0IC05cHggLTlweCAxNnB4ICAgIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XHJcbiAgICAvKiBGb3IgTmV1bW9ycGhpc20gRWZmZWN0ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICB9XHJcbi5iYXIgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcblxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmRhdGEge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gICAgLmRhdGEgcCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuZGF0YSBiIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sensor-data/sensor-data.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sensor-data/sensor-data.component.ts ***!
  \******************************************************/
/*! exports provided: SensorDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorDataComponent", function() { return SensorDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stations_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stations-data.service */ "./src/app/stations-data.service.ts");



let SensorDataComponent = class SensorDataComponent {
    constructor(stationsData) {
        this.stationsData = stationsData;
        this.x = 40;
        // health norms of pollutions in air, expressed in ug/m3.
        this.pollutions = {
            'C6H6': 5,
            'NO2': 200,
            'SO2': 500,
            'CO': 10000,
            'PM10': 50,
            'PM2.5': 25,
            'O3': 110
        };
        this.isActive = false;
        this.currentValue = undefined;
    }
    // calculate perentage value..
    calculatePercent(numeral, denominator) {
        const percents = numeral / denominator * 100;
        return Number(percents.toFixed(1));
    }
    // sets color according to currentPercentageValue
    barColors(percents) {
        const x = percents;
        switch (true) {
            case (x <= 10):
                return 'rgb(0, 153, 102)';
            case (x > 10 && x <= 20):
                return 'rgb(255, 222, 51)';
            case (x > 20 && x <= 30):
                return 'rgb(255, 153, 51)';
            case (x > 30 && x <= 40):
                return 'rgb(204, 0, 51)';
            case (x > 40 && x <= 60):
                return 'rgb(102, 0, 153)';
            case (x > 60):
                return 'rgb(126, 0, 35)';
        }
    }
    // sets the value of .bar width
    // if currentPercentageValue > 100% moves back to 100%
    barWidthIfHazadrous(percentageValue) {
        return (percentageValue > 100) ? 100 : percentageValue;
    }
    ngOnInit() {
        return new Promise((resolve, reject) => {
            this.stationsData.getSensorData(this.sensor.id).subscribe(response => {
                this.sensorData = response;
                resolve(true);
            }, () => {
                reject('Próba pobrania danych stacji nie powiodła się.');
            });
        })
            .then(() => {
            if (this.sensorData.values.length > 0) {
                this.isActive = true;
                // sets currentValue only if values from sensor reading are available (see if statement 2 lines above)
                // else currentValue is undefined;
                this.currentValue = this.stationsData.searchForLatesValueInSensorData(this.sensorData);
                if (this.currentValue !== undefined) {
                    this.currentPercentageValue = this.calculatePercent(this.currentValue, this.pollutions[this.sensorData.key]);
                    this.barWidth = this.barWidthIfHazadrous(this.currentPercentageValue);
                    this.barColor = this.barColors(this.currentPercentageValue);
                }
            }
        })
            .catch((error) => {
            console.log(error);
            throw new Error();
        });
    }
};
SensorDataComponent.ctorParameters = () => [
    { type: _stations_data_service__WEBPACK_IMPORTED_MODULE_2__["StationsDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SensorDataComponent.prototype, "sensor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SensorDataComponent.prototype, "stationId", void 0);
SensorDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sensor-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sensor-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sensor-data/sensor-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sensor-data.component.css */ "./src/app/sensor-data/sensor-data.component.css")).default]
    })
], SensorDataComponent);



/***/ }),

/***/ "./src/app/spinner.service.ts":
/*!************************************!*\
  !*** ./src/app/spinner.service.ts ***!
  \************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerService = class SpinnerService {
    constructor() {
        this.visibleSpinner = false;
        this.visibleContent = false;
    }
    showSpinner() {
        this.visibleContent = false;
        this.visibleSpinner = true;
    }
    hideSpinner() {
        setTimeout(() => {
            this.visibleSpinner = false;
            this.visibleContent = true;
        }, 2000);
    }
};
SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpinnerService);



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #E0E5EC;\r\n    z-index: 100;\r\n  }\r\n  .loader {\r\n    position: relative;\r\n    width: 240px;\r\n    margin: 0 auto;\r\n    top: 35%;\r\n    display: flex;\r\n    flex-flow: column;\r\n  }\r\n  .dots-wrapper {\r\n    width: 240px;\r\n    height: 45px;\r\n    margin: 0 auto;\r\n    padding: 0 30px;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n  }\r\n  .dot {\r\n    height: 25px;\r\n    width: 25px;\r\n    margin: 10px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    -webkit-animation-name: bounce;\r\n            animation-name: bounce;\r\n    -webkit-animation-duration: 1.6s;\r\n            animation-duration: 1.6s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out;\r\n  }\r\n  .dot:nth-child(2) {\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n  }\r\n  .dot:nth-child(3) {\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n  }\r\n  .dot:nth-child(4) {\r\n    -webkit-animation-delay: 0.8s;\r\n            animation-delay: 0.8s;\r\n  }\r\n  .message {\r\n    width: 240px;\r\n    min-height: 1.4rem;\r\n    line-height: 0.8rem;\r\n    padding: 0.3rem;\r\n    margin: 2rem auto;\r\n    text-align: center;\r\n  }\r\n  @-webkit-keyframes bounce {\r\n    30% {\r\n      transform: translateY(0px);\r\n      background-color: #bbb;\r\n    }\r\n    50%{\r\n      background-color: crimson;\r\n      transform: translateY(-10px);\r\n    }\r\n    70% {\r\n      background-color: #bbb;\r\n      transform: translateY(0px);\r\n    }\r\n  }\r\n  @keyframes bounce {\r\n    30% {\r\n      transform: translateY(0px);\r\n      background-color: #bbb;\r\n    }\r\n    50%{\r\n      background-color: crimson;\r\n      transform: translateY(-10px);\r\n    }\r\n    70% {\r\n      background-color: #bbb;\r\n      transform: translateY(0px);\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFFBQVE7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFO01BQ0UsMEJBQTBCO01BQzFCLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLDRCQUE0QjtJQUM5QjtJQUNBO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtJQUM1QjtFQUNGO0VBYkE7SUFDRTtNQUNFLDBCQUEwQjtNQUMxQixzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6Qiw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7SUFDNUI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG4gIC5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcbiAgLmRvdHMtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgfVxyXG4gIC5kb3Qge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS42cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5kb3Q6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICB9XHJcbiAgLmRvdDpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICAuZG90Om50aC1jaGlsZCg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgfVxyXG4gIC5tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgMzAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() { }
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: `
    <div class="container">
      <div class="loader">
        <div class="dots-wrapper">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <b class="message">Pobieranie danych...</b>
      </div>
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/station-details/station-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/station-details/station-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.back-btn {\r\n    position: absolute;\r\n    top: 0.2rem;\r\n    right: 0;\r\n}\r\n.back-btn i {\r\n    border-radius: 2rem;\r\n    padding: 0.5rem;\r\n    margin: 0.5rem;\r\n    /* For Neumorphism Effect */\r\n    background-color:#E0E5EC;\r\n    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5);\r\n    /* For Neumorphism Effect */\r\n}\r\n.back-btn i:hover {\r\n    color: #eb2f06;\r\n}\r\n.header {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.header h1 {\r\n    display: inline-block;\r\n    height: 2.4rem;\r\n    line-height: 1.4rem;\r\n    margin-bottom: 0.5rem;\r\n    padding: 0.5rem;\r\n    margin: 0 auto 0.5rem;\r\n}\r\n.header h2 {\r\n    display: inline-block;\r\n    margin: 0 auto 0.5rem;\r\n    padding: 0.5rem;\r\n    min-height: 1rem;\r\n    line-height: 1rem;\r\n}\r\n.index {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.index p {\r\n    text-align: center;\r\n    padding: 0.2rem;\r\n    margin: 0 auto 0.2rem;\r\n}\r\n.index-value {\r\n    display: flex;\r\n    padding: 0.2rem;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    \r\n}\r\n.index-value b {\r\n    height: 2rem;\r\n    line-height: 2rem;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.index i {\r\n    height: 2rem;\r\n    padding: 0;\r\n    margin: 0 0.5rem;\r\n    border-radius: 2rem;\r\n}\r\n.sensor-data-container {\r\n    width: 100%;\r\n    padding: 0.5rem 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nfooter {\r\n    width: 100%;\r\n    min-height: 2rem;\r\n    font-size: 0.5rem;\r\n    margin-top: auto;\r\n}\r\nfooter p {\r\n    font-size: inherit;\r\n    text-align: justify;\r\n    line-height: 0.5rem;\r\n}\r\nfooter b {\r\n    font-size: inherit;\r\n    line-height: 0.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1kZXRhaWxzL3N0YXRpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0FBQ1o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUZBQXVGO0lBQ3ZGLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24tZGV0YWlscy9zdGF0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuMnJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5iYWNrLWJ0biBpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIC8qIEZvciBOZXVtb3JwaGlzbSBFZmZlY3QgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6I0UwRTVFQztcclxuICAgIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2IoMTYzLDE3NywxOTgsMC42KSwgLTlweCAtOXB4IDE2cHggICAgcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcclxuICAgIC8qIEZvciBOZXVtb3JwaGlzbSBFZmZlY3QgKi9cclxufVxyXG4uYmFjay1idG4gaTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ViMmYwNjtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmhlYWRlciBoMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0byAwLjVyZW07XHJcbn1cclxuLmhlYWRlciBoMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuLmluZGV4IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5pbmRleCBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDAuMnJlbTtcclxufVxyXG4uaW5kZXgtdmFsdWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5pbmRleC12YWx1ZSBiIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uaW5kZXggaSB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuLnNlbnNvci1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5mb290ZXIgcCB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcclxufVxyXG5mb290ZXIgYiB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMC41cmVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/station-details/station-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/station-details/station-details.component.ts ***!
  \**************************************************************/
/*! exports provided: StationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationDetailsComponent", function() { return StationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stations_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stations-data.service */ "./src/app/stations-data.service.ts");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner.service */ "./src/app/spinner.service.ts");



// services


let StationDetailsComponent = class StationDetailsComponent {
    constructor(spinner, stationsData, router) {
        this.spinner = spinner;
        this.stationsData = stationsData;
        this.router = router;
        // show spinner when loading component and stations data
        this.spinner.showSpinner();
        // initially as undefined, before promise in ngOnInit starts
        this.selectedStation$ = undefined;
    }
    // set color at overallQualityIndex
    indexColors(QualityIndex) {
        const x = QualityIndex;
        switch (true) {
            case (x === 'Bardzo dobry'):
                return 'rgb(0, 153, 102)';
            case (x === 'Dobry'):
                return 'rgb(255, 222, 51)';
            case (x === 'Umiarkowany'):
                return 'rgb(255, 153, 51)';
            case (x === 'Dostateczny'):
                return 'rgb(204, 0, 51)';
            case (x === 'Zły'):
                return 'rgb(102, 0, 153)';
            case (x === 'Bardzo zły'):
                return 'rgb(126, 0, 35)';
            case (x === 'Brak indeksu'):
                return 'rgb(68, 86, 111)';
            default:
                return 'rgb(68, 86, 111)';
        }
    }
    // index face
    indexFaceIcon(QualityIndex) {
        const x = QualityIndex;
        if (x === 'Bardzo dobry') {
            return 'tag_faces';
        }
        else {
            return 'face';
        }
    }
    backToMain() {
        this.router.navigate(['']);
    }
    ngOnInit() {
        // make api call and data manipulation
        return new Promise((resolve, reject) => {
            this.stationsData.selectedStation$.subscribe(selectedStation => {
                this.selectedStation$ = selectedStation;
                resolve(true);
            }, () => {
                reject('nie znaleziono stacji');
            });
        })
            .then(() => {
            this.stationsData.getStationData(this.selectedStation$.id).subscribe(response => {
                this.selectedStationSensors = response;
            });
            this.stationsData.getStationAQI(this.selectedStation$.id).subscribe(response => {
                this.overallQualityIndex = response;
                this.faceIcon = this.indexFaceIcon(this.overallQualityIndex.indexLevelName);
                this.overallQualityIndexColor = this.indexColors(this.overallQualityIndex.indexLevelName);
            });
        })
            .then(() => {
            // shows component content and hides spinner
            this.spinner.hideSpinner();
        })
            .catch(error => {
            console.log(error);
            console.log(this.overallQualityIndex);
            // moves back user to main page when promise fails
            this.router.navigate(['']);
        });
    }
};
StationDetailsComponent.ctorParameters = () => [
    { type: _spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] },
    { type: _stations_data_service__WEBPACK_IMPORTED_MODULE_3__["StationsDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-station-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./station-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/station-details/station-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./station-details.component.css */ "./src/app/station-details/station-details.component.css")).default]
    })
], StationDetailsComponent);



/***/ }),

/***/ "./src/app/station-selection/city-filter.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/station-selection/city-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: CityFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityFilterPipe", function() { return CityFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CityFilterPipe = class CityFilterPipe {
    transform(cities, cityTerm) {
        return !cities || !cityTerm ? cities : (cities
            .filter(city => city.toLowerCase().startsWith(cityTerm.toLowerCase())));
    }
};
CityFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'CityFilterPipe'
    })
], CityFilterPipe);



/***/ }),

/***/ "./src/app/station-selection/station-selection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/station-selection/station-selection.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n  width: 310px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n.top-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 4rem;\r\n  margin: 0 auto;\r\n  padding: 10px 0;\r\n}\r\n.top-bar h1 {\r\n  display: inline-block;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  margin: auto 0;\r\n  color: #eb2f06;\r\n}\r\n.top-bar i {\r\n  color: #eb2f06;\r\n  width: 2.5rem;\r\n  height: 2rem;\r\n  padding-left: 0.5rem;\r\n  margin: auto 0;\r\n}\r\n.banner {\r\n  width: 310px;\r\n  margin: auto;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 1rem;\r\n  /* For Neumorphism Effect */\r\n  background-color:#E0E5EC;\r\n  box-shadow: inset 9px 9px 16px rgb(163,177,198,0.6), \r\n              inset -9px -9px 16px    rgba(255,255,255, 0.5);\r\n  /* For Neumorphism Effect */\r\n}\r\n.banner h2 {\r\n  width: 100%;\r\n  margin: 0;\r\n  margin-bottom: 0.5rem;\r\n  min-height: 1.4rem;\r\n  line-height:1.4rem;\r\n}\r\n.banner p {\r\n  min-height: 0.8rem;\r\n  line-height: 0.8rem;\r\n  font-size: 0.6rem;\r\n  margin: 0;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n}\r\n.banner img {\r\n  display: none;\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 200px;\r\n  margin: 0.5rem auto;\r\n}\r\n.selection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 310px;\r\n  height: 60%;\r\n  margin: 1rem 0;\r\n  padding: 0;\r\n}\r\napp-user-auto-localization {\r\n  height: 2.4rem;\r\n  margin: auto;\r\n}\r\n.selection .manual {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 1rem;\r\n  /* For Neumorphism Effect */\r\n  background-color:#E0E5EC;\r\n  box-shadow: inset 9px 9px 16px rgb(163,177,198,0.6), \r\n              inset -9px -9px 16px    rgba(255,255,255, 0.5);\r\n  /* For Neumorphism Effect */\r\n}\r\n.manual .bar {\r\n  width: 100%;\r\n  height: 2.6rem;\r\n  padding: 0.3rem 0.5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: solid 0.1rem rgb(163,177,198,0.6);\r\n  cursor: default;\r\n}\r\n.bar h4{\r\n  display: inline-block;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  margin: 0 auto;\r\n}\r\n.bar i {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n.manual .form {\r\n  width: 100%;\r\n  max-height: calc(100% - 2.5rem);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.form .input-fields {\r\n  width: 100%;\r\n  padding: 0.5rem 1rem 0 1rem;\r\n  border-bottom: solid 0.1rem rgb(163,177,198,0.6);\r\n}\r\n.form .form-selections {\r\n  width: 100%;\r\n}\r\n.form-selection {\r\n  width: 100%;\r\n  height: 200px;\r\n  --scrollbarBG: rgba(255,255,255, 0.5);\r\n  --thumbBG: hsl(215, 24%, 35%);\r\n  scrollbar-width: thin;\r\n  scrollbar-color: var(--thumbBG) var(--scrollbarBG);\r\n  overflow: auto;\r\n}\r\n.form-selection::-webkit-scrollbar {\r\n  width: 0.4rem;\r\n}\r\n.form-selection::-webkit-scrollbar-track {\r\n  background: var(--scrollbarBG);\r\n}\r\n.form-selection::-webkit-scrollbar-thumb {\r\n  background-color: var(--thumbBG) ;\r\n  border-radius: 0.3rem;\r\n  border: 0.1rem solid var(--scrollbarBG);\r\n}\r\n.form-selection h4 {\r\n  margin: 0.4rem 0;\r\n}\r\nul {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.selection-tab {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  width: calc(100% - 4rem);\r\n  min-height: 1.4rem;\r\n  padding: 0;\r\n  margin: 0.4rem 2rem;\r\n  border-radius: 1rem;\r\n  /* For Neumorphism Effect */\r\n  background-color:#E0E5EC;\r\n  box-shadow: 9px 9px 16px rgb(163,177,198,0.6), \r\n              -9px -9px 16px    rgba(255,255,255, 0.5);\r\n  /* For Neumorphism Effect */\r\n  cursor: pointer;\r\n}\r\n.selection-tab i {\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  font-size: 1rem;\r\n  padding: 0.2rem;\r\n  margin: 0 0.4rem;\r\n}\r\n.selection-tab span {\r\n  display: inline-block;\r\n  min-height: 0.8rem;\r\n  line-height: 0.8rem;\r\n  padding: 0.3rem;\r\n  margin-right: auto;\r\n}\r\n.selection-tab:hover {\r\n  color: #eb2f06;\r\n  border: solid 1px #eb2f06;\r\n}\r\n.input-field {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  width: calc(100% - 2rem);\r\n  height: 1.4rem;\r\n  margin: 1rem;\r\n  border-radius: 1rem;\r\n  /* For Neumorphism Effect */\r\n  background-color:#E0E5EC;\r\n  box-shadow: 9px 9px 16px rgb(163,177,198,0.6), \r\n              -9px -9px 16px    rgba(255,255,255, 0.5);\r\n  /* For Neumorphism Effect */\r\n}\r\n.input-field input {\r\n  background-color:#E0E5EC;\r\n  font-size: 0.8rem;\r\n  display: inline-block;\r\n  height: 1.4rem;\r\n  line-height: 1.4rem;\r\n  width: 100%;\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 1rem;\r\n  border: 0;\r\n}\r\ninput:valid {\r\n  background-color: #E0E5EC;\r\n}\r\n.input-field span {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  display: inline-block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  padding: 0.2rem;\r\n  border-radius: 0 1rem 1rem 0;\r\n  color:#E0E5EC;\r\n  background-color: #eb2f06;\r\n  cursor: pointer;\r\n}\r\n.input-field span i {\r\n  font-size: 1rem;\r\n}\r\n.input-field label {\r\n  position: absolute;\r\n  top: -0.5rem;\r\n  left: 1rem;\r\n  background-color: hsl(215, 24%, 35%);\r\n  color:#E0E5EC;\r\n  padding: 0.1rem 0.5rem;\r\n  font-size: 0.6rem;\r\n  height: 0.8rem;\r\n  line-height: 0.6rem;\r\n  border-radius: 0.5rem;\r\n}\r\n@media (min-width: 375px) {\r\n  .content {\r\n    width: 340px;\r\n  }\r\n  .banner {\r\n    width: 340px;\r\n    min-height: 300px;\r\n  }\r\n  .selection {\r\n    width: 340px;\r\n    height: 60%;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .content {\r\n    width: 728px;\r\n  }\r\n  .banner {\r\n    width: calc(348px - 1rem);\r\n    height: 80%;\r\n    margin: 1rem 1rem 1rem 0;\r\n  }\r\n  .banner p {\r\n    margin-bottom: 1rem;\r\n  }\r\n  .selection {\r\n    width: 380px;\r\n    height: 80%;\r\n    margin: 1rem 0;\r\n  }\r\n}\r\n@media (min-width: 768px) and  (min-height: 900px) {\r\n  .banner {\r\n    padding: 2rem 1rem;\r\n  }\r\n  .banner img {\r\n    display: inline-block;\r\n    width: 280px;\r\n    height: 280px;\r\n    border-radius: 280px;\r\n  }\r\n  .form-selection {\r\n    height: 400px;\r\n  }\r\n}\r\n@media (min-width: 1024px) {\r\n  .content {\r\n    width: 984px;\r\n  }\r\n  .banner {\r\n    width: calc(484px - 2rem);\r\n    margin: 1rem 2rem 1rem 0;\r\n  }\r\n  .selection {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1zZWxlY3Rpb24vc3RhdGlvbi1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBRWQsYUFBYTtFQUViLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEI7NERBQzBEO0VBQzFELDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qjs0REFDMEQ7RUFDMUQsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdEQUFnRDtFQUNoRCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFFL0IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixrREFBa0Q7RUFDbEQsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEI7c0RBQ29EO0VBQ3BELDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEI7c0RBQ29EO0VBQ3BELDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztFQUNoQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi1zZWxlY3Rpb24vc3RhdGlvbi1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICB3aWR0aDogMzEwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbn1cclxuLnRvcC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4udG9wLWJhciBoMSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBjb2xvcjogI2ViMmYwNjtcclxufVxyXG4udG9wLWJhciBpIHtcclxuICBjb2xvcjogI2ViMmYwNjtcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgd2lkdGg6IDMxMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIC8qIEZvciBOZXVtb3JwaGlzbSBFZmZlY3QgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNFMEU1RUM7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgOXB4IDlweCAxNnB4IHJnYigxNjMsMTc3LDE5OCwwLjYpLCBcclxuICAgICAgICAgICAgICBpbnNldCAtOXB4IC05cHggMTZweCAgICByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xyXG4gIC8qIEZvciBOZXVtb3JwaGlzbSBFZmZlY3QgKi9cclxufVxyXG4uYmFubmVyIGgyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDEuNHJlbTtcclxuICBsaW5lLWhlaWdodDoxLjRyZW07XHJcbn1cclxuLmJhbm5lciBwIHtcclxuICBtaW4taGVpZ2h0OiAwLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuOHJlbTtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJhbm5lciBpbWcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxufVxyXG4uc2VsZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDMxMHB4O1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuYXBwLXVzZXItYXV0by1sb2NhbGl6YXRpb24ge1xyXG4gIGhlaWdodDogMi40cmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2VsZWN0aW9uIC5tYW51YWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAvKiBGb3IgTmV1bW9ycGhpc20gRWZmZWN0ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRTBFNUVDO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDlweCA5cHggMTZweCByZ2IoMTYzLDE3NywxOTgsMC42KSwgXHJcbiAgICAgICAgICAgICAgaW5zZXQgLTlweCAtOXB4IDE2cHggICAgcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcclxuICAvKiBGb3IgTmV1bW9ycGhpc20gRWZmZWN0ICovXHJcbn1cclxuLm1hbnVhbCAuYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIuNnJlbTtcclxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjFyZW0gcmdiKDE2MywxNzcsMTk4LDAuNik7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5iYXIgaDR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYmFyIGkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxufVxyXG4ubWFudWFsIC5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjVyZW0pO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmZvcm0gLmlucHV0LWZpZWxkcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMCAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMXJlbSByZ2IoMTYzLDE3NywxOTgsMC42KTtcclxufVxyXG4uZm9ybSAuZm9ybS1zZWxlY3Rpb25zIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybS1zZWxlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgLS1zY3JvbGxiYXJCRzogcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcclxuICAtLXRodW1iQkc6IGhzbCgyMTUsIDI0JSwgMzUlKTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS10aHVtYkJHKSB2YXIoLS1zY3JvbGxiYXJCRyk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmZvcm0tc2VsZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDAuNHJlbTtcclxufVxyXG4uZm9ybS1zZWxlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXJCRyk7XHJcbn1cclxuLmZvcm0tc2VsZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWJCRykgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1zY3JvbGxiYXJCRyk7XHJcbn1cclxuLmZvcm0tc2VsZWN0aW9uIGg0IHtcclxuICBtYXJnaW46IDAuNHJlbSAwO1xyXG59XHJcbnVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc2VsZWN0aW9uLXRhYiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcclxuICBtaW4taGVpZ2h0OiAxLjRyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAuNHJlbSAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgLyogRm9yIE5ldW1vcnBoaXNtIEVmZmVjdCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0UwRTVFQztcclxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiKDE2MywxNzcsMTk4LDAuNiksIFxyXG4gICAgICAgICAgICAgIC05cHggLTlweCAxNnB4ICAgIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XHJcbiAgLyogRm9yIE5ldW1vcnBoaXNtIEVmZmVjdCAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VsZWN0aW9uLXRhYiBpIHtcclxuICB3aWR0aDogMS40cmVtO1xyXG4gIGhlaWdodDogMS40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgbWFyZ2luOiAwIDAuNHJlbTtcclxufVxyXG4uc2VsZWN0aW9uLXRhYiBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMC44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjhyZW07XHJcbiAgcGFkZGluZzogMC4zcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uc2VsZWN0aW9uLXRhYjpob3ZlciB7XHJcbiAgY29sb3I6ICNlYjJmMDY7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ViMmYwNjtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG4gIGhlaWdodDogMS40cmVtO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIC8qIEZvciBOZXVtb3JwaGlzbSBFZmZlY3QgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNFMEU1RUM7XHJcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYigxNjMsMTc3LDE5OCwwLjYpLCBcclxuICAgICAgICAgICAgICAtOXB4IC05cHggMTZweCAgICByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xyXG4gIC8qIEZvciBOZXVtb3JwaGlzbSBFZmZlY3QgKi9cclxufVxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0UwRTVFQztcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxLjRyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbmlucHV0OnZhbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xyXG59XHJcbi5pbnB1dC1maWVsZCBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMS40cmVtO1xyXG4gIGhlaWdodDogMS40cmVtO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xyXG4gIGNvbG9yOiNFMEU1RUM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViMmYwNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmlucHV0LWZpZWxkIHNwYW4gaSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5pbnB1dC1maWVsZCBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTAuNXJlbTtcclxuICBsZWZ0OiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTUsIDI0JSwgMzUlKTtcclxuICBjb2xvcjojRTBFNUVDO1xyXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgaGVpZ2h0OiAwLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gIH1cclxuICAuYmFubmVyIHtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICAuc2VsZWN0aW9uIHtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogNzI4cHg7XHJcbiAgfVxyXG4gIC5iYW5uZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMzQ4cHggLSAxcmVtKTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luOiAxcmVtIDFyZW0gMXJlbSAwO1xyXG4gIH1cclxuICAuYmFubmVyIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgLnNlbGVjdGlvbiB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAgKG1pbi1oZWlnaHQ6IDkwMHB4KSB7XHJcbiAgLmJhbm5lciB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgfVxyXG4gIC5iYW5uZXIgaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyODBweDtcclxuICB9XHJcbiAgLmZvcm0tc2VsZWN0aW9uIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogOTg0cHg7XHJcbiAgfVxyXG4gIC5iYW5uZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoNDg0cHggLSAycmVtKTtcclxuICAgIG1hcmdpbjogMXJlbSAycmVtIDFyZW0gMDtcclxuICB9XHJcbiAgLnNlbGVjdGlvbiB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/station-selection/station-selection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/station-selection/station-selection.component.ts ***!
  \******************************************************************/
/*! exports provided: StationSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationSelectionComponent", function() { return StationSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stations_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stations-data.service */ "./src/app/stations-data.service.ts");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner.service */ "./src/app/spinner.service.ts");
/* harmony import */ var _hand_held_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hand-held-data */ "./src/app/hand-held-data.ts");



// services


// initialization data

let StationSelectionComponent = class StationSelectionComponent {
    constructor(spinner, stationsData, router) {
        this.spinner = spinner;
        this.stationsData = stationsData;
        this.router = router;
        // -------------------------------------------VOIVODESHIP SELECTION VARIABLES---------------------------
        this.voivodeships = _hand_held_data__WEBPACK_IMPORTED_MODULE_5__["voivodeships"];
        // show spinner when loading component and stations data
        this.spinner.showSpinner();
        // setting initial values
        this.selectedVoivodeship = undefined;
        this.selectedCity = undefined;
        this.cityTerm = '';
        // this.voivodeshipTerm = '';
    }
    // -------------------------------------------VOIVODESHIP SELECTION METHODS-----------------------------------
    filterBySelectedVoivodeship(stations, voivodeship) {
        return stations.filter(station => {
            return station.city.commune.provinceName.toLowerCase() === voivodeship;
        });
    }
    removeDuplicateCitiesInVoivodeship(stations) {
        return stations.map(station => station.city.name).filter((city, idx, cities) => {
            return !idx || city !== cities[idx - 1];
        });
    }
    getSelectedVoivodeship(voivodeship) {
        // sets selected voivodeship by User in input
        this.selectedVoivodeship = voivodeship;
        // return new array with stations in selected voivodeship
        this.stationsInVoivodeship = this.filterBySelectedVoivodeship(this.stations, voivodeship);
        // create new array with city names,
        // if more than one station in city -> removes duplicating city names from array
        this.cities = this.removeDuplicateCitiesInVoivodeship(this.stationsInVoivodeship);
    }
    // removes previous selectedVoivodeship and VoivodeshipTerm
    deleteSelectedVoivodeship() {
        if (this.selectedVoivodeship !== undefined) {
            this.selectedVoivodeship = undefined;
            this.voivodeshipTerm = '';
            // removes also city, when changing voivodeship...
            this.deleteSelectedCity();
            this.cities = [];
        }
    }
    // -------------------------------------------CITY SELECTION-------------------------------------------
    //                COMPONENT METHODS
    // used to find stations in selected city by User;
    findStationsInCity(stations, selectedCity) {
        return stations.filter(station => station.city.name === selectedCity);
    }
    //                VIEW METHODS
    // gets selected city by User
    getSelectedCity(city) {
        this.selectedCity = city;
        this.stationsInCity = this.findStationsInCity(this.stationsInVoivodeship, city);
    }
    // removes previous selectedCity and cityTerm
    deleteSelectedCity() {
        if (this.selectedCity !== undefined) {
            this.selectedCity = undefined;
            this.cityTerm = '';
            this.stationsInCity = [];
        }
    }
    // --------------------------------------------WEB STORAGE API----------------------------------------
    // pass fetched all stations form gios api to Web Storage API
    setItemToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    // gets all stations form Web Storage API
    getStationsFromLocalStorage(key) {
        if (localStorage.getItem(key) !== null) {
            return JSON.parse(localStorage.getItem(key));
        }
    }
    // -----------------------------------------GO TO SELECTED STATION------------------------------------
    goToSelectedStation(station) {
        // Takes selected station and share within components with BehavioralSubject
        this.stationsData.setSelectedStation(station);
        this.router.navigate(['/station']);
    }
    // ----------------------------------------------OnInit-----------------------------------------------
    ngOnInit() {
        // gets all stations list form localStorage if its egsists in storage, else skip futher
        this.stations = this.getStationsFromLocalStorage('stations');
        this.stationsData.getStations()
            .subscribe(data => {
            this.stations = data;
            this.setItemToLocalStorage('stations', data);
            // shows component content and hides spinner
            this.spinner.hideSpinner();
        }, error => {
            console.log(error);
            alert('Wystąpił problem z pobieraniem danych. Sprawdź połączenie z internetem lub odśwież stronę');
            // when problem with fetch data, redirect to connection-error page
            // this.router.navigate(['/connection-error']);
        });
    }
};
StationSelectionComponent.ctorParameters = () => [
    { type: _spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] },
    { type: _stations_data_service__WEBPACK_IMPORTED_MODULE_3__["StationsDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StationSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-station-selection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./station-selection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/station-selection/station-selection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./station-selection.component.css */ "./src/app/station-selection/station-selection.component.css")).default]
    })
], StationSelectionComponent);



/***/ }),

/***/ "./src/app/station-selection/voivodeship-filter.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/station-selection/voivodeship-filter.pipe.ts ***!
  \**************************************************************/
/*! exports provided: VoivodeshipFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoivodeshipFilterPipe", function() { return VoivodeshipFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VoivodeshipFilterPipe = class VoivodeshipFilterPipe {
    transform(voivodeshipArray, searchTerm) {
        return !voivodeshipArray || !searchTerm ? voivodeshipArray : (voivodeshipArray
            .filter(str => str.toLowerCase().startsWith(searchTerm.toLowerCase())));
    }
};
VoivodeshipFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'VoivodeshipFilterPipe'
    })
], VoivodeshipFilterPipe);



/***/ }),

/***/ "./src/app/stations-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/stations-data.service.ts ***!
  \******************************************/
/*! exports provided: StationsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationsDataService", function() { return StationsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let StationsDataService = class StationsDataService {
    constructor(http) {
        this.http = http;
        // ----------------------------------------URL TO GIOS-API DATA----------------------------------------------
        this.STATIONS_URL = 'https://cors-anywhere.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/station/findAll';
        this.STATION_DATA_URL = 'https://cors-anywhere.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/station/sensors/';
        this.SENSOR_DATA_URL = 'https://cors-anywhere.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/data/getData/';
        this.STATION_AQI = 'https://cors-anywhere.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/';
        // ----------------------------------------SETING BEHAVIORAL SUBJECT-----------------------------------------
        this.selectedStationSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.selectedStation$ = this.selectedStationSource.asObservable();
    }
    // -----------------------------------API REQUEST METHODS TO GIOS-API----------------------------------------
    getStations() {
        return this.http.get(this.STATIONS_URL).pipe(
        // Why it works but VS Code shout its an Object...??
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(30000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => data.sort((a, b) => (a.city.name > b.city.name) ? 1 : ((b.city.name > a.city.name) ? -1 : 0))));
    }
    getStationData(stationId) {
        return this.http.get(this.STATION_DATA_URL + stationId);
    }
    getSensorData(sensorId) {
        return this.http.get(this.SENSOR_DATA_URL + sensorId);
    }
    getStationAQI(stationId) {
        return this.http.get(this.STATION_AQI + stationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.stIndexLevel));
    }
    // ----------------------------------------------OTHER METHODS-----------------------------------------------
    // used in stations-data.ts to prevent null readings from station sensor;
    // sometimes sensor reading in latest array of sensorData.values is empty, method prevent displaying null value
    // method search for most recent array with value from sensor reading
    searchForLatesValueInSensorData(sensorData) {
        // reading is an array
        for (const reading of sensorData.values) {
            if (Number.isFinite(reading.value)) {
                return Number(reading.value.toFixed(1));
            }
        }
    }
    // sets behavioral subject value through components
    setSelectedStation(station) {
        this.selectedStationSource.next(station);
    }
};
StationsDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StationsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StationsDataService);



/***/ }),

/***/ "./src/app/user-auto-localization/user-auto-localization.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/user-auto-localization/user-auto-localization.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auto-localization {\r\n  width: 100%;\r\n}\r\nbutton {\r\n  display: flex;\r\n  flex-direction: row;\r\n  color: #eb2f06;\r\n  font-weight: bold;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 2.4rem;\r\n  border-radius: 1rem;\r\n  border: solid 1px #eb2f06;\r\n  /* For Neumorphism Effect */\r\n  background-color:#E0E5EC;\r\n  box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5);\r\n  /* For Neumorphism Effect */\r\n}\r\nbutton:hover {\r\n  background-color:#eb2f06;\r\n  color: #E0E5EC;\r\n}\r\nbutton:active{\r\n  background-color:#eb2f06;\r\n  color: #E0E5EC;\r\n}\r\nbutton i {\r\n  width: 20%;\r\n  padding: 0.2rem 0.4rem;\r\n}\r\nbutton span {\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin: auto 0;\r\n  width: 80%;\r\n  min-height: 0.8rem;\r\n  line-height: 0.8rem;\r\n  padding: 0.2rem;\r\n}\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hdXRvLWxvY2FsaXphdGlvbi91c2VyLWF1dG8tbG9jYWxpemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHVGQUF1RjtFQUN2RiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYXV0by1sb2NhbGl6YXRpb24vdXNlci1hdXRvLWxvY2FsaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG8tbG9jYWxpemF0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBjb2xvcjogI2ViMmYwNjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDIuNHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNlYjJmMDY7XHJcbiAgLyogRm9yIE5ldW1vcnBoaXNtIEVmZmVjdCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0UwRTVFQztcclxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiKDE2MywxNzcsMTk4LDAuNiksIC05cHggLTlweCAxNnB4ICAgIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XHJcbiAgLyogRm9yIE5ldW1vcnBoaXNtIEVmZmVjdCAqL1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZWIyZjA2O1xyXG4gIGNvbG9yOiAjRTBFNUVDO1xyXG59XHJcbmJ1dHRvbjphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZWIyZjA2O1xyXG4gIGNvbG9yOiAjRTBFNUVDO1xyXG59XHJcbmJ1dHRvbiBpIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XHJcbn1cclxuYnV0dG9uIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtaW4taGVpZ2h0OiAwLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuOHJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuICBcclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/user-auto-localization/user-auto-localization.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user-auto-localization/user-auto-localization.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserAutoLocalizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAutoLocalizationComponent", function() { return UserAutoLocalizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _stations_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stations-data.service */ "./src/app/stations-data.service.ts");
/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localization.service */ "./src/app/localization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserAutoLocalizationComponent = class UserAutoLocalizationComponent {
    constructor(stationsData, autoLocalization, router) {
        this.stationsData = stationsData;
        this.autoLocalization = autoLocalization;
        this.router = router;
    }
    onAutoSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.closestStations = yield this.autoLocalization.auto(this.stations);
            this.stationsData.setSelectedStation(this.closestStations[0]);
            this.router.navigate(['/station']);
        });
    }
    ngOnInit() { }
};
UserAutoLocalizationComponent.ctorParameters = () => [
    { type: _stations_data_service__WEBPACK_IMPORTED_MODULE_2__["StationsDataService"] },
    { type: _localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserAutoLocalizationComponent.prototype, "stations", void 0);
UserAutoLocalizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-auto-localization',
        template: `
    <div class="auto-localization">
      <button (click)="onAutoSubmit()">
        <i class="material-icons">my_location</i>
        <span>UŻYJ OBECNEJ LOKALIZACJI</span>
      </button>
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-auto-localization.component.css */ "./src/app/user-auto-localization/user-auto-localization.component.css")).default]
    })
], UserAutoLocalizationComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\nowe kody\simple-air-quality-monitor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map