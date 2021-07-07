(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _components_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components/components.module */ 6472);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _components_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() {
        this.skills = [
            { name: 'HTML5', image: 'html5.svg' },
            { name: 'CSS3', image: 'css3.svg' },
            { name: 'JavaScript', image: 'javascript.svg' },
            { name: 'Node.JS', image: 'nodejs.svg' },
            { name: 'Express.JS', image: 'expressjs.svg' },
            { name: 'Angular', image: 'angular.svg' },
            { name: 'TypeScript', image: 'typescript.svg' },
            { name: 'Python', image: 'python.svg' },
            { name: 'Flask', image: 'flask.svg' },
            { name: 'GIT', image: 'git.svg' },
            { name: 'Ionic', image: 'ionic.svg' },
            { name: 'Bash', image: 'bash.svg' },
            { name: 'Mongo_DB', image: 'mongodb.png' },
            { name: 'Adobe_XD', image: 'adobexd.svg' },
            { name: 'Figma', image: 'figma.svg' },
        ];
    }
    getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return 'Good morning';
        }
        else if (hour >= 12 && hour < 18) {
            return 'Good afternoon';
        }
        else if (hour >= 18 && hour <= 23) {
            return 'Good evening';
        }
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".skills {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n  gap: 20px;\n}\n\n.skills .skill .image-container {\n  display: grid;\n  place-items: center;\n  height: 70px;\n  width: 70px;\n  border-radius: 100px;\n  border: 2px solid #FFFFFF;\n  border-width: 1px;\n  position: relative;\n  margin-bottom: 10px !important;\n}\n\n.skills .skill img {\n  height: 40px;\n  z-index: -1;\n}\n\n.skills .skill .image-container.push-up img {\n  transform: translateY(-5px);\n}\n\n.skills .skill img.javascript,\n.skills .skill img.typescript,\n.skills .skill img.adobe {\n  height: 40px;\n}\n\n.skills .skill .skill-name {\n  font-size: small;\n  font-weight: bolder !important;\n  font-family: \"Roboto Mono for Powerline\", sans-serif;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vVkFSSUFCTEVTLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxjQ0VRO0VERlIsU0NFUTtBREpWOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQ05PO0VET1AsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsMkJBQUE7QUFIRjs7QUFNQTs7O0VBR0UsWUFBQTtBQUhGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQzNCc0I7RUQ0QnRCLHlCQUFBO0FBSkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vVkFSSUFCTEVTLnNjc3NcIjtcblxuLy8gVGhlIHNraWxscyBjb250YWluZXJcbi5za2lsbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICBnYXA6ICRQQURESU5HO1xufVxuXG4vLyBJbWFnZSBjb250YWluZXIgb2YgYSBza2lsbFxuLnNraWxscyAuc2tpbGwgLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6ICRCT1JERVI7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnNraWxscyAuc2tpbGwgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnNraWxscyAuc2tpbGwgLmltYWdlLWNvbnRhaW5lci5wdXNoLXVwIGltZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cblxuLnNraWxscyAuc2tpbGwgaW1nLmphdmFzY3JpcHQsXG4uc2tpbGxzIC5za2lsbCBpbWcudHlwZXNjcmlwdCxcbi5za2lsbHMgLnNraWxsIGltZy5hZG9iZSB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLy8gVGhlIG5hbWUgb2YgdGhlIHNraWxsXG4uc2tpbGxzIC5za2lsbCAuc2tpbGwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICRIRUFERVJfRk9OVF9GQU1JTFk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iLCIvLy8vLy8vIENPTE9SU1xuJFRFWFRfQ09MT1I6ICNGRkZGRkY7XG4kVEhFTUVfQ09MT1I6IG9yYW5nZXJlZDtcbiRCQUNLR1JPVU5EX0NPTE9SOiAjMDAwMDAwO1xuJEJBQ0tHUk9VTkRfQ09MT1JfTElHSFQ6IHRyYW5zcGFyZW50aXplKCRURVhUX0NPTE9SLCAuNSk7XG5cblxuLy8vLy8vLy8gU0hBUEVTIEFORCBTSVpFU1xuJFBBRERJTkc6IDIwcHg7XG4kREVTS1RPUF9TSURFX01BUkdJTjogMjAwcHg7XG4kQk9SREVSOiAycHggc29saWQgJFRFWFRfQ09MT1I7XG5cblxuLy8vLy8vLyBUWVBPR1JBUEhZXG4kUEFSQUdSQVBIX0ZPTlRfRkFNSUxZOiAnUm9ib3RvIE1vbm8gZm9yIFBvd2VybGluZScsIHNhbnMtc2VyaWY7XG4kSEVBREVSX0ZPTlRfRkFNSUxZOiAkUEFSQUdSQVBIX0ZPTlRfRkFNSUxZO1xuJExPR09UWVBFX0ZPTlRfRkFNSUxZOiAnUHJvRm9udCBmb3IgUG93ZXJsaW5lJywgJFBBUkFHUkFQSF9GT05UX0ZBTUlMWTtcbiJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <!-- Container of the page content -->\n  <div class=\"page-content\">\n    <!-- Animated background -->\n    <app-animated-background></app-animated-background>\n\n    <!-- The header of the page -->\n    <app-header></app-header>\n\n    <!-- The actual content of the page -->\n    <div class=\"section\">\n      <div class=\"person-avatar\"></div>\n      <div class=\"header-title\"><b>where</b>?.design<br>.meets.<b>coding</b><br>(passion)</div>\n      <div class=\"paragraph\">{{ this.getGreeting() }}! I’m a self—taught UI/UX designer <br>and fullstack software engineer based in South Africa.</div>\n\n      <!-- Call to action button -->\n      <button>\n        <ion-icon name=\"arrow-down-circle\"></ion-icon>\n        <span>Libby Lebyane's Resume</span>\n      </button>\n    </div>\n\n    <div class=\"section\" [style.margin-top]=\"'250px'\">\n      <div class=\"header-title secondary\"><b>be.</b>minimal.<br><b>philosophy()</b></div>\n\n      <div class=\"sub-header-title\">Simplicity is the ultimate sophostication.</div>\n\n      <div class=\"paragraph\">It takes a whole lot of work to make something simple,\n        <br>to truly understand the underlying challanges and come up with\n        <br>elegant solutions. It’s not just minimalism or the absense of clutter.\n        <br>It involves digging through the depth of complexity. Understand the product\n        <br>to get rid of the parts that are not essential. <br><br> <b>&mdash; Steve Jobs</b></div>\n    </div>\n\n    <div class=\"section\" [style.margin-top]=\"'250px'\">\n      <div class=\"header-title secondary\"><b>me?.</b>core.<br><b>skills()</b></div>\n      <div class=\"paragraph\" [style.transform]=\"'translateY(-30px)'\">As a self—taught UI/UX and Software Engineer.</div>\n\n      <div class=\"skills\">\n        <div class=\"skill\" *ngFor=\"let skill of this.skills\">\n          <div\n              [class]=\"skill.name === 'HTML5' || skill.name === 'CSS3' ? 'image-container push-up' : 'image-container'\">\n                <img [src]=\"['/assets/images/', skill.image].join('')\" [class]=\"skill.name.toLocaleLowerCase()\">\n          </div>\n          <span class=\"skill-name\">{{ skill.name }}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"section\" [style.margin-top]=\"'250px'\">\n      <div class=\"header-title secondary\"><b>me?.</b>projects.<br><b>recent()</b></div>\n      <div class=\"paragraph\" [style.transform]=\"'translateY(-30px)'\">As a self—taught UI/UX and Software Engineer.</div>\n    </div>\n  </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map