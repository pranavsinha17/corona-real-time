function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-me/about-me.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-me/about-me.component.ts ***!
    \************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _material_elevation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../material-elevation.directive */
    "./src/app/material-elevation.directive.ts");

    var AboutMeComponent =
    /*#__PURE__*/
    function () {
      function AboutMeComponent() {
        _classCallCheck(this, AboutMeComponent);
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      decls: 38,
      vars: 0,
      consts: [[1, "container-fluid", "bg-1", "text-center"], [1, "margin"], ["appMaterialElevation", "", "src", "assets/img/myphoto.jpg", "alt", "Bird", "width", "350", "height", "350", 1, "img-responsive", "img-circle", "margin", 2, "display", "inline"], [1, "container-fluid", "bg-2", "text-center"], [1, "container-fluid", "bg-3", "text-center"], [1, "row"], [1, "col-sm-4"], ["appMaterialElevation", "", "src", "assets/img/dil.jpg", "alt", "Image", 1, "img-responsive", "margin", 2, "width", "100%", "height", "300px"], ["appMaterialElevation", "", "src", "assets/img/lpu.jpg", "alt", "Image", 1, "img-responsive", "margin", 2, "width", "100%", "height", "300px"], ["appMaterialElevation", "", "src", "assets/img/pinkcity.jpg", "alt", "Image", 1, "img-responsive", "margin", 2, "width", "100%", "height", "300px"], [1, "container-fluid", "bg-4", "text-center", 2, "background-color", "#1abc9c"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Who Am I?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I'm a developer, a coder and a friendly human being");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What Am I?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quite Complicated Stuff \u263A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Where To Find Me?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dil Me \u263A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LPU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I am in the soil of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pink City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Pink City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " is in my soul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "footer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Please Stay At Home And Stay Safe.Thank You.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_material_elevation_directive__WEBPACK_IMPORTED_MODULE_1__["MaterialElevationDirective"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n  }\r\n  p[_ngcontent-%COMP%] {font-size: 16px;}\r\n  .margin[_ngcontent-%COMP%] {margin-bottom: 45px;}\r\n  .bg-1[_ngcontent-%COMP%] { \r\n    background-color: #1abc9c; \r\n    color: #ffffff;\r\n  }\r\n  .bg-2[_ngcontent-%COMP%] { \r\n    background-color: #474e5d; \r\n    color: #ffffff;\r\n  }\r\n  .bg-3[_ngcontent-%COMP%] { \r\n    background-color: #ffffff; \r\n    color: #555555;\r\n  }\r\n  .bg-4[_ngcontent-%COMP%] { \r\n    background-color: #2f2f2f; \r\n    color: #fff;\r\n  }\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n  }\r\n  .navbar[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n  }\r\n  .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #1abc9c !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBLEdBQUcsZUFBZSxDQUFDO0VBQ25CLFNBQVMsbUJBQW1CLENBQUM7RUFDN0I7SUFDRSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QixFQUFFLGNBQWM7SUFDekMsY0FBYztFQUNoQjtFQUNBO0lBQ0UseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx5QkFBeUIsRUFBRSxlQUFlO0lBQzFDLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250OiAyMHB4IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICNmNWY2Zjc7XHJcbiAgfVxyXG4gIHAge2ZvbnQtc2l6ZTogMTZweDt9XHJcbiAgLm1hcmdpbiB7bWFyZ2luLWJvdHRvbTogNDVweDt9XHJcbiAgLmJnLTEgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7IC8qIEdyZWVuICovXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmJnLTIgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7IC8qIERhcmsgQmx1ZSAqL1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5iZy0zIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSAqL1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgfVxyXG4gIC5iZy00IHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmOyAvKiBCbGFjayBHcmF5ICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG4gIH1cclxuICAubmF2YmFyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2ICBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMWFiYzljICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _state_wise_stat_state_wise_stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state-wise-stat/state-wise-stat.component */
    "./src/app/state-wise-stat/state-wise-stat.component.ts");
    /* harmony import */


    var _india_stats_india_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./india-stats/india-stats.component */
    "./src/app/india-stats/india-stats.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _faq_component_faq_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./faq-component/faq-component.component */
    "./src/app/faq-component/faq-component.component.ts");

    var routes = [{
      path: "state-wise-search",
      component: _state_wise_stat_state_wise_stat_component__WEBPACK_IMPORTED_MODULE_2__["StateWiseStatComponent"]
    }, {
      path: "home",
      component: _india_stats_india_stats_component__WEBPACK_IMPORTED_MODULE_3__["IndiaStatsComponent"]
    }, {
      path: "about-me",
      component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"]
    }, {
      path: "faq",
      component: _faq_component_faq_component_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponentComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'CoronaStatApp';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 19,
      vars: 0,
      consts: [[1, "navbar", "navbar-inverse", "text-align"], [1, "container-fluid"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", "routerLink", "home"], ["routerLinkActive", "active", "routerLink", "state-wise-search"], ["routerLinkActive", "active", "routerLink", "faq"], ["routerLinkActive", "active", "routerLink", "about-me"], [1, "nav", "navbar-nav", "navbar-right"], [2, "color", "white"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "State-Wise Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Helpline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " with \u2665 @pranavsinha17 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _india_stats_india_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./india-stats/india-stats.component */
    "./src/app/india-stats/india-stats.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _state_wise_stat_state_wise_stat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./state-wise-stat/state-wise-stat.component */
    "./src/app/state-wise-stat/state-wise-stat.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _faq_component_faq_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./faq-component/faq-component.component */
    "./src/app/faq-component/faq-component.component.ts");
    /* harmony import */


    var _material_elevation_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./material-elevation.directive */
    "./src/app/material-elevation.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _india_stats_india_stats_component__WEBPACK_IMPORTED_MODULE_4__["IndiaStatsComponent"], _state_wise_stat_state_wise_stat_component__WEBPACK_IMPORTED_MODULE_6__["StateWiseStatComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"], _faq_component_faq_component_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponentComponent"], _material_elevation_directive__WEBPACK_IMPORTED_MODULE_11__["MaterialElevationDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _india_stats_india_stats_component__WEBPACK_IMPORTED_MODULE_4__["IndiaStatsComponent"], _state_wise_stat_state_wise_stat_component__WEBPACK_IMPORTED_MODULE_6__["StateWiseStatComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"], _faq_component_faq_component_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponentComponent"], _material_elevation_directive__WEBPACK_IMPORTED_MODULE_11__["MaterialElevationDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/faq-component/faq-component.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/faq-component/faq-component.component.ts ***!
    \**********************************************************/

  /*! exports provided: FaqComponentComponent */

  /***/
  function srcAppFaqComponentFaqComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponentComponent", function () {
      return FaqComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _faq_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../faq-service.service */
    "./src/app/faq-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FaqComponentComponent_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lst_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lst_r3.loc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lst_r3.number);
      }
    }

    var FaqComponentComponent =
    /*#__PURE__*/
    function () {
      function FaqComponentComponent(service) {
        _classCallCheck(this, FaqComponentComponent);

        this.service = service;
        this.contact = [];
      }

      _createClass(FaqComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.service.getContact().subscribe(function (res) {
            var data = res["data"];
            var contacts = data["contacts"];
            var primary = contacts["primary"];
            _this.primary_number = primary.number;
            _this.primary_toll_free_number = primary["number-tollfree"];
            _this.primary_email = primary.email;
            console.log(_this.primary_email);
            var regional = contacts["regional"];
            _this.contact = regional;
            console.log(_this.contact);
            var text = ["❝Wear a cloth face cover❞", "❝Practice social distancing❞", "❝Avoid touching your eyes, nose and mouth❞", "❝Cover your coughs and sneezes❞", "❝Call a medical professional as soon as COVID-19 symptoms start, if you are at higher risk❞", "❝People who are pregnant should also be monitored since they are known to be at risk with severe viral illness; however, to date data on COVID-19 has not shown increased risk.❞", "❝Cover your coughs and sneezes. Use a tissue to cover your nose and mouth, and throw used tissues in a lined trash can. If a tissue isn’t available, cough or sneeze into your elbow — not your hands. Wash your hands immediately.❞"];
            var counter = 0;
            var elem = document.getElementById("changeText");
            var inst = setInterval(change, 3000);

            function change() {
              elem.innerHTML = text[counter];
              counter++;

              if (counter >= text.length) {
                counter = 0; // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
              }
            }
          });
        }
      }]);

      return FaqComponentComponent;
    }();

    FaqComponentComponent.ɵfac = function FaqComponentComponent_Factory(t) {
      return new (t || FaqComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_faq_service_service__WEBPACK_IMPORTED_MODULE_1__["FaqServiceService"]));
    };

    FaqComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaqComponentComponent,
      selectors: [["app-faq-component"]],
      decls: 11,
      vars: 1,
      consts: [["id", "changeText", 2, "text-align", "center", "size", "20px", "border-radius", "25px", "padding", "20px", "font-weight", "bold"], ["align", "center", "border", "1"], [4, "ngFor", "ngForOf"]],
      template: function FaqComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2663 Listen to the guidelines \u2663 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Helpline Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FaqComponentComponent_tr_10_Template, 5, 2, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contact);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["h1[_ngcontent-%COMP%] { color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 27.5px; font-weight: bold; letter-spacing: -1px; line-height: 1; text-align: center; }\r\nh2[_ngcontent-%COMP%] { color: #111; font-family: 'Open Sans', sans-serif; font-size: 30px; font-weight: 300; line-height: 32px; margin: 0 0 72px; text-align: center; }\r\ntable[_ngcontent-%COMP%] { \r\n    width: 100%; \r\n    border-collapse: collapse; \r\n  }\r\n\r\ntr[_ngcontent-%COMP%]:nth-of-type(odd) { \r\n    background: #eee; \r\n  }\r\nth[_ngcontent-%COMP%] { \r\n    background: #333; \r\n    color: white; \r\n    font-weight: bold; \r\n  }\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] { \r\n    padding: 6px; \r\n    border: 1px solid #ccc; \r\n    text-align: left; \r\n  }\r\n@media \r\nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\r\n\r\n\t\r\n\ttable[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] { \r\n\t\tdisplay: block; \r\n\t}\r\n\t\r\n\t\r\n\tthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] { \r\n\t\tposition: absolute;\r\n\t\ttop: -9999px;\r\n\t\tleft: -9999px;\r\n\t}\r\n\t\r\n\ttr[_ngcontent-%COMP%] { border: 1px solid #ccc; }\r\n\t\r\n\ttd[_ngcontent-%COMP%] { \r\n\t\t\r\n\t\tborder: none;\r\n\t\tborder-bottom: 1px solid #eee; \r\n\t\tposition: relative;\r\n\t\tpadding-left: 50%; \r\n\t}\r\n\t\r\n\ttd[_ngcontent-%COMP%]:before { \r\n\t\t\r\n\t\tposition: absolute;\r\n\t\t\r\n\t\ttop: 6px;\r\n\t\tleft: 6px;\r\n\t\twidth: 45%; \r\n\t\tpadding-right: 10px; \r\n\t\twhite-space: nowrap;\r\n\t}\r\n\t\r\n\t\r\n\ttd[_ngcontent-%COMP%]:nth-of-type(1):before { content: \"State\"; font-weight: bold; }\r\n\ttd[_ngcontent-%COMP%]:nth-of-type(2):before { content: \"Helpline Number\"; font-weight: bold;}\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxLWNvbXBvbmVudC9mYXEtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxXQUFXLEVBQUUseUNBQXlDLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO0FBQzdKLEtBQUssV0FBVyxFQUFFLG9DQUFvQyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRTtBQUdwSjtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7QUFDQSxtQkFBbUI7QUFDbkI7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtBQUNBOzs7Q0FJRCw4Q0FBOEM7Q0FDOUM7RUFDQyxjQUFjO0NBQ2Y7O0NBRUEsbUVBQW1FO0NBQ25FO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0NBRUEsS0FBSyxzQkFBc0IsRUFBRTs7Q0FFN0I7RUFDQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7Q0FFQTs7RUFFQztDQUNELDJCQUEyQixnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRTtDQUNoRSwyQkFBMkIsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUM7O0FBRTFFIiwiZmlsZSI6InNyYy9hcHAvZmFxLWNvbXBvbmVudC9mYXEtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7IGNvbG9yOiAjMTExOyBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAyNy41cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBsZXR0ZXItc3BhY2luZzogLTFweDsgbGluZS1oZWlnaHQ6IDE7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG5oMiB7IGNvbG9yOiAjMTExOyBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMzBweDsgZm9udC13ZWlnaHQ6IDMwMDsgbGluZS1oZWlnaHQ6IDMycHg7IG1hcmdpbjogMCAwIDcycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG5cclxuXHJcbnRhYmxlIHsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcclxuICB9XHJcbiAgLyogWmVicmEgc3RyaXBpbmcgKi9cclxuICB0cjpudGgtb2YtdHlwZShvZGQpIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcclxuICB9XHJcbiAgdGggeyBcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICB9XHJcbiAgdGQsIHRoIHsgXHJcbiAgICBwYWRkaW5nOiA2cHg7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICB9XHJcbiAgQG1lZGlhIFxyXG5vbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxyXG4obWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSAge1xyXG5cclxuXHQvKiBGb3JjZSB0YWJsZSB0byBub3QgYmUgbGlrZSB0YWJsZXMgYW55bW9yZSAqL1xyXG5cdHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIgeyBcclxuXHRcdGRpc3BsYXk6IGJsb2NrOyBcclxuXHR9XHJcblx0XHJcblx0LyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cclxuXHR0aGVhZCB0ciB7IFxyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtOTk5OXB4O1xyXG5cdFx0bGVmdDogLTk5OTlweDtcclxuXHR9XHJcblx0XHJcblx0dHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XHJcblx0XHJcblx0dGQgeyBcclxuXHRcdC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctbGVmdDogNTAlOyBcclxuXHR9XHJcblx0XHJcblx0dGQ6YmVmb3JlIHsgXHJcblx0XHQvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0LyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cclxuXHRcdHRvcDogNnB4O1xyXG5cdFx0bGVmdDogNnB4O1xyXG5cdFx0d2lkdGg6IDQ1JTsgXHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4OyBcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0fVxyXG5cdFxyXG5cdC8qXHJcblx0TGFiZWwgdGhlIGRhdGFcclxuXHQqL1xyXG5cdHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiU3RhdGVcIjsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuXHR0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUgeyBjb250ZW50OiBcIkhlbHBsaW5lIE51bWJlclwiOyBmb250LXdlaWdodDogYm9sZDt9XHJcblx0XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faq-component',
          templateUrl: './faq-component.component.html',
          styleUrls: ['./faq-component.component.css']
        }]
      }], function () {
        return [{
          type: _faq_service_service__WEBPACK_IMPORTED_MODULE_1__["FaqServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/faq-service.service.ts":
  /*!****************************************!*\
    !*** ./src/app/faq-service.service.ts ***!
    \****************************************/

  /*! exports provided: FaqServiceService */

  /***/
  function srcAppFaqServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqServiceService", function () {
      return FaqServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FaqServiceService =
    /*#__PURE__*/
    function () {
      function FaqServiceService(http) {
        _classCallCheck(this, FaqServiceService);

        this.http = http;
        this.url = "https://api.rootnet.in/covid19-in/contacts";
      }

      _createClass(FaqServiceService, [{
        key: "getContact",
        value: function getContact() {
          return this.http.get("".concat(this.url));
        }
      }]);

      return FaqServiceService;
    }();

    FaqServiceService.ɵfac = function FaqServiceService_Factory(t) {
      return new (t || FaqServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FaqServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FaqServiceService,
      factory: FaqServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/india-stat-service.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/india-stat-service.service.ts ***!
    \***********************************************/

  /*! exports provided: IndiaStatServiceService */

  /***/
  function srcAppIndiaStatServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndiaStatServiceService", function () {
      return IndiaStatServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var IndiaStatServiceService =
    /*#__PURE__*/
    function () {
      function IndiaStatServiceService(http) {
        _classCallCheck(this, IndiaStatServiceService);

        this.http = http;
        this.url = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";
      }

      _createClass(IndiaStatServiceService, [{
        key: "getData",
        value: function getData() {
          return this.http.get("".concat(this.url));
        }
      }]);

      return IndiaStatServiceService;
    }();

    IndiaStatServiceService.ɵfac = function IndiaStatServiceService_Factory(t) {
      return new (t || IndiaStatServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    IndiaStatServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IndiaStatServiceService,
      factory: IndiaStatServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndiaStatServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/india-stats/india-stats.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/india-stats/india-stats.component.ts ***!
    \******************************************************/

  /*! exports provided: IndiaStatsComponent */

  /***/
  function srcAppIndiaStatsIndiaStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndiaStatsComponent", function () {
      return IndiaStatsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _india_stat_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../india-stat-service.service */
    "./src/app/india-stat-service.service.ts");
    /* harmony import */


    var _state_wise_stat_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../state-wise-stat-service.service */
    "./src/app/state-wise-stat-service.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _material_elevation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../material-elevation.directive */
    "./src/app/material-elevation.directive.ts");

    var IndiaStatsComponent =
    /*#__PURE__*/
    function () {
      function IndiaStatsComponent(service, service2) {
        _classCallCheck(this, IndiaStatsComponent);

        this.service = service;
        this.service2 = service2;
        this.dayBeforeLatestHistory = [];
        this.latestHistory = [];
        this.totalToday = 0;
      }

      _createClass(IndiaStatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.service.getData().subscribe(function (res) {
            var data = res["data"];
            var total = data["total"];
            _this2.statList = total;
            console.log(_this2.statList);
          });
          this.service2.getStateWiseData().subscribe(function (res) {
            var data = res["data"];
            var history = data["history"];
            var cnt = 0;

            for (var i = 0; i < history.length; i++) {
              cnt++;
            }

            _this2.latestHistory = history[cnt - 1];
            _this2.dayBeforeLatestHistory = history[cnt - 2];
            _this2.latestHistory = _this2.latestHistory["statewise"];
            _this2.dayBeforeLatestHistory = _this2.dayBeforeLatestHistory["statewise"];
            console.log(_this2.latestHistory);
            console.log(_this2.dayBeforeLatestHistory);

            for (var _i = 0; _i < _this2.latestHistory.length; _i++) {
              _this2.totalToday += _this2.latestHistory[_i].confirmed - _this2.dayBeforeLatestHistory[_i].confirmed;
            }

            console.log(_this2.totalToday);
          });
        }
      }]);

      return IndiaStatsComponent;
    }();

    IndiaStatsComponent.ɵfac = function IndiaStatsComponent_Factory(t) {
      return new (t || IndiaStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_india_stat_service_service__WEBPACK_IMPORTED_MODULE_1__["IndiaStatServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_wise_stat_service_service__WEBPACK_IMPORTED_MODULE_2__["StateWiseStatServiceService"]));
    };

    IndiaStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndiaStatsComponent,
      selectors: [["app-india-stats"]],
      decls: 46,
      vars: 5,
      consts: [[2, "text-align", "center"], [1, "container-fluid"], [1, "row"], [1, "col-sm-3"], ["appMaterialElevation", "", 1, "example-card", 2, "background-color", "rgb(245, 245, 71)", "border-radius", "25px", "padding", "20px"], ["mat-card-image", "", "src", "https://png.pngtree.com/png-clipart/20190920/original/pngtree-yellow-gradient-plus-sign-png-image_4670221.jpg", "alt", "Photo of a Shiba Inu"], ["appMaterialElevation", "", 1, "example-card", 2, "background-color", "rgb(87, 241, 87)", "border-radius", "25px", "padding", "20px"], ["mat-card-image", "", "src", "https://png.pngtree.com/png-clipart/20190613/original/pngtree-green-vector-stethoscope-with-green-leafs-png-image_3574130.jpg", "alt", "Photo of a Shiba Inu"], ["appMaterialElevation", "", 1, "example-card", 2, "background-color", "rgb(248, 60, 60)", "border-radius", "25px", "padding", "20px"], ["mat-card-image", "", "src", "https://png.pngtree.com/png-clipart/20191120/original/pngtree-red-heart-outline-png-image_5054043.jpg", "alt", "Photo of a Shiba Inu"], ["appMaterialElevation", "", 1, "example-card", 2, "background-color", "rgb(113, 93, 247)", "border-radius", "25px", "padding", "20px"], ["mat-card-image", "", "src", "https://png.pngtree.com/png-clipart/20200226/original/pngtree-purple-corona-virus-3d-element-png-image_5325418.jpg", "alt", "Photo of a Shiba Inu"], ["role", "navigation", 1, "navbar", "navbar-default", "navbar-fixed-bottom", 2, "height", "20px", "background-color", "black"], [1, "container"], [2, "color", "antiquewhite"]],
      template: function IndiaStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Real Time Corona Tracker-India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Active Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nav", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statList.confirmed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statList.recovered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statList.deaths);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statList.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cases in 24 hrs : ", ctx.totalToday, "");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _material_elevation_directive__WEBPACK_IMPORTED_MODULE_4__["MaterialElevationDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
      styles: [".red[_ngcontent-%COMP%]{\r\n    color:red;\r\n    }\r\n    .black[_ngcontent-%COMP%]{\r\n        color:black;\r\n    }\r\n    .example-card[_ngcontent-%COMP%] {\r\n        max-width: 350px;\r\n        margin-top: 20px;\r\n      }\r\n    .example-card-1[_ngcontent-%COMP%] {\r\n        max-width: 1200px;\r\n        margin-top: 20px;\r\n      }\r\n    .example-header-image[_ngcontent-%COMP%] {\r\n        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n        background-size: cover;\r\n      }\r\n    h1[_ngcontent-%COMP%] { color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 27px; font-weight: bold; letter-spacing: -1px; line-height: 1; text-align: center; }\r\n    h2[_ngcontent-%COMP%] { color: #111; font-family: 'Open Sans', sans-serif; font-size: 20px; font-weight: 300; line-height: 32px; margin: 0 0 72px; text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaWEtc3RhdHMvaW5kaWEtc3RhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVDtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO01BQ2xCO0lBQ0E7UUFDRSxpQkFBaUI7UUFDakIsZ0JBQWdCO01BQ2xCO0lBRUE7UUFDRSxtRkFBbUY7UUFDbkYsc0JBQXNCO01BQ3hCO0lBQ0EsS0FBSyxXQUFXLEVBQUUseUNBQXlDLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtJQUNqSyxLQUFLLFdBQVcsRUFBRSxvQ0FBb0MsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9pbmRpYS1zdGF0cy9pbmRpYS1zdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZHtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIH1cclxuICAgIC5ibGFja3tcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIC5leGFtcGxlLWNhcmQge1xyXG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuZXhhbXBsZS1jYXJkLTEge1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBoMSB7IGNvbG9yOiAjMTExOyBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAyN3B4OyBmb250LXdlaWdodDogYm9sZDsgbGV0dGVyLXNwYWNpbmc6IC0xcHg7IGxpbmUtaGVpZ2h0OiAxOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuaDIgeyBjb2xvcjogIzExMTsgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiAzMDA7IGxpbmUtaGVpZ2h0OiAzMnB4OyBtYXJnaW46IDAgMCA3MnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndiaStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-india-stats',
          templateUrl: './india-stats.component.html',
          styleUrls: ['./india-stats.component.css']
        }]
      }], function () {
        return [{
          type: _india_stat_service_service__WEBPACK_IMPORTED_MODULE_1__["IndiaStatServiceService"]
        }, {
          type: _state_wise_stat_service_service__WEBPACK_IMPORTED_MODULE_2__["StateWiseStatServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-elevation.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/material-elevation.directive.ts ***!
    \*************************************************/

  /*! exports provided: MaterialElevationDirective */

  /***/
  function srcAppMaterialElevationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialElevationDirective", function () {
      return MaterialElevationDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MaterialElevationDirective =
    /*#__PURE__*/
    function () {
      function MaterialElevationDirective(element, renderer) {
        _classCallCheck(this, MaterialElevationDirective);

        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 20;
        this.setElevation(this.defaultElevation);
      }

      _createClass(MaterialElevationDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(_changes) {
          this.setElevation(this.defaultElevation);
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.setElevation(this.raisedElevation);
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.setElevation(this.defaultElevation);
        }
      }, {
        key: "setElevation",
        value: function setElevation(amount) {
          var _this3 = this;

          // remove all elevation classes
          var classesToRemove = Array.from(this.element.nativeElement.classList).filter(function (c) {
            return c.startsWith('mat-elevation-z');
          });
          classesToRemove.forEach(function (c) {
            _this3.renderer.removeClass(_this3.element.nativeElement, c);
          }); // add the given elevation class

          var newClass = "mat-elevation-z".concat(amount);
          this.renderer.addClass(this.element.nativeElement, newClass);
        }
      }]);

      return MaterialElevationDirective;
    }();

    MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) {
      return new (t || MaterialElevationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    MaterialElevationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MaterialElevationDirective,
      selectors: [["", "appMaterialElevation", ""]],
      hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        defaultElevation: "defaultElevation",
        raisedElevation: "raisedElevation"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialElevationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appMaterialElevation]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        defaultElevation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        raisedElevation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/state-wise-stat-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/state-wise-stat-service.service.ts ***!
    \****************************************************/

  /*! exports provided: StateWiseStatServiceService */

  /***/
  function srcAppStateWiseStatServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateWiseStatServiceService", function () {
      return StateWiseStatServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StateWiseStatServiceService =
    /*#__PURE__*/
    function () {
      function StateWiseStatServiceService(http) {
        _classCallCheck(this, StateWiseStatServiceService);

        this.http = http;
        this.url = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history";
      }

      _createClass(StateWiseStatServiceService, [{
        key: "getStateWiseData",
        value: function getStateWiseData() {
          return this.http.get("".concat(this.url));
        }
      }]);

      return StateWiseStatServiceService;
    }();

    StateWiseStatServiceService.ɵfac = function StateWiseStatServiceService_Factory(t) {
      return new (t || StateWiseStatServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    StateWiseStatServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StateWiseStatServiceService,
      factory: StateWiseStatServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateWiseStatServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/state-wise-stat/state-wise-stat.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/state-wise-stat/state-wise-stat.component.ts ***!
    \**************************************************************/

  /*! exports provided: StateWiseStatComponent */

  /***/
  function srcAppStateWiseStatStateWiseStatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateWiseStatComponent", function () {
      return StateWiseStatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _state_wise_stat_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state-wise-stat-service.service */
    "./src/app/state-wise-stat-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StateWiseStatComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lst_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lst_r1.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lst_r1.confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lst_r1.recovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lst_r1.deaths);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lst_r1.active);
      }
    }

    var StateWiseStatComponent =
    /*#__PURE__*/
    function () {
      function StateWiseStatComponent(service) {
        _classCallCheck(this, StateWiseStatComponent);

        this.service = service;
        this.stateStat = [];
      }

      _createClass(StateWiseStatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.service.getStateWiseData().subscribe(function (res) {
            var data = res["data"];
            var history = data["history"];
            var cnt = 0;

            for (var i = 0; i < history.length; i++) {
              cnt++;
            }

            var latestHistory = history[cnt - 1];
            _this4.dayBeforeLatestHistory = history[cnt - 2];
            _this4.stateStat = latestHistory["statewise"];
            console.log(_this4.stateStat);
          });
        }
      }]);

      return StateWiseStatComponent;
    }();

    StateWiseStatComponent.ɵfac = function StateWiseStatComponent_Factory(t) {
      return new (t || StateWiseStatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_wise_stat_service_service__WEBPACK_IMPORTED_MODULE_1__["StateWiseStatServiceService"]));
    };

    StateWiseStatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateWiseStatComponent,
      selectors: [["app-state-wise-stat"]],
      decls: 15,
      vars: 1,
      consts: [["align", "center", "border", "1"], [4, "ngFor", "ngForOf"]],
      template: function StateWiseStatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirmed Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Active Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StateWiseStatComponent_tr_14_Template, 11, 5, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateStat);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["table[_ngcontent-%COMP%] { \r\n    width: 100%; \r\n    border-collapse: collapse; \r\n  }\r\n  \r\n  tr[_ngcontent-%COMP%]:nth-of-type(odd) { \r\n    background: #eee; \r\n  }\r\n  th[_ngcontent-%COMP%] { \r\n    background: #333; \r\n    color: white; \r\n    font-weight: bold; \r\n  }\r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] { \r\n    padding: 6px; \r\n    border: 1px solid #ccc; \r\n    text-align: left; \r\n  }\r\n  @media \r\nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\r\n\r\n\t\r\n\ttable[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] { \r\n\t\tdisplay: block; \r\n\t}\r\n\t\r\n\t\r\n\tthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] { \r\n\t\tposition: absolute;\r\n\t\ttop: -9999px;\r\n\t\tleft: -9999px;\r\n\t}\r\n\t\r\n\ttr[_ngcontent-%COMP%] { border: 1px solid #ccc;}\r\n\t\r\n\ttd[_ngcontent-%COMP%] { \r\n\t\t\r\n\t\tborder: none;\r\n\t\tborder-bottom: 1px solid #eee; \r\n\t\tposition: relative;\r\n\t\tpadding-left: 50%; \r\n\t}\r\n\t\r\n\ttd[_ngcontent-%COMP%]:before { \r\n\t\t\r\n\t\tposition: absolute;\r\n\t\t\r\n\t\ttop: 6px;\r\n\t\tleft: 6px;\r\n\t\twidth: 45%; \r\n\t\tpadding-right: 10px; \r\n\t\twhite-space: nowrap;\r\n\t}\r\n\t\r\n\t\r\n\ttd[_ngcontent-%COMP%]:nth-of-type(1):before { content: \"State\"; font-weight: bold; }\r\n\ttd[_ngcontent-%COMP%]:nth-of-type(2):before { content: \"Confirmed Cases\"; font-weight: bold;}\r\n\ttd[_ngcontent-%COMP%]:nth-of-type(3):before { content: \"Recovered\"; font-weight: bold;}\r\n\ttd[_ngcontent-%COMP%]:nth-of-type(4):before { content: \"Deaths\"; font-weight: bold;}\r\n    td[_ngcontent-%COMP%]:nth-of-type(5):before { content: \"Active Cases\"; font-weight: bold;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGUtd2lzZS1zdGF0L3N0YXRlLXdpc2Utc3RhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtFQUMzQjtFQUNBLG1CQUFtQjtFQUNuQjtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7OztDQUlELDhDQUE4QztDQUM5QztFQUNDLGNBQWM7Q0FDZjs7Q0FFQSxtRUFBbUU7Q0FDbkU7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7Q0FFQSxLQUFLLHNCQUFzQixDQUFDOztDQUU1QjtFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCOztDQUVBOztFQUVDO0NBQ0QsMkJBQTJCLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFO0NBQ2hFLDJCQUEyQiwwQkFBMEIsRUFBRSxpQkFBaUIsQ0FBQztDQUN6RSwyQkFBMkIsb0JBQW9CLEVBQUUsaUJBQWlCLENBQUM7Q0FDbkUsMkJBQTJCLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO0lBQzdELDJCQUEyQix1QkFBdUIsRUFBRSxpQkFBaUIsQ0FBQztBQUMxRSIsImZpbGUiOiJzcmMvYXBwL3N0YXRlLXdpc2Utc3RhdC9zdGF0ZS13aXNlLXN0YXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcclxuICB9XHJcbiAgLyogWmVicmEgc3RyaXBpbmcgKi9cclxuICB0cjpudGgtb2YtdHlwZShvZGQpIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcclxuICB9XHJcbiAgdGggeyBcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICB9XHJcbiAgdGQsIHRoIHsgXHJcbiAgICBwYWRkaW5nOiA2cHg7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICB9XHJcbiAgQG1lZGlhIFxyXG5vbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxyXG4obWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSAge1xyXG5cclxuXHQvKiBGb3JjZSB0YWJsZSB0byBub3QgYmUgbGlrZSB0YWJsZXMgYW55bW9yZSAqL1xyXG5cdHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIgeyBcclxuXHRcdGRpc3BsYXk6IGJsb2NrOyBcclxuXHR9XHJcblx0XHJcblx0LyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cclxuXHR0aGVhZCB0ciB7IFxyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtOTk5OXB4O1xyXG5cdFx0bGVmdDogLTk5OTlweDtcclxuXHR9XHJcblx0XHJcblx0dHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO31cclxuXHRcclxuXHR0ZCB7IFxyXG5cdFx0LyogQmVoYXZlICBsaWtlIGEgXCJyb3dcIiAqL1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA1MCU7IFxyXG5cdH1cclxuXHRcclxuXHR0ZDpiZWZvcmUgeyBcclxuXHRcdC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xyXG5cdFx0dG9wOiA2cHg7XHJcblx0XHRsZWZ0OiA2cHg7XHJcblx0XHR3aWR0aDogNDUlOyBcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7IFxyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHR9XHJcblx0XHJcblx0LypcclxuXHRMYWJlbCB0aGUgZGF0YVxyXG5cdCovXHJcblx0dGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHsgY29udGVudDogXCJTdGF0ZVwiOyBmb250LXdlaWdodDogYm9sZDsgfVxyXG5cdHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQ29uZmlybWVkIENhc2VzXCI7IGZvbnQtd2VpZ2h0OiBib2xkO31cclxuXHR0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUgeyBjb250ZW50OiBcIlJlY292ZXJlZFwiOyBmb250LXdlaWdodDogYm9sZDt9XHJcblx0dGQ6bnRoLW9mLXR5cGUoNCk6YmVmb3JlIHsgY29udGVudDogXCJEZWF0aHNcIjsgZm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoNSk6YmVmb3JlIHsgY29udGVudDogXCJBY3RpdmUgQ2FzZXNcIjsgZm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateWiseStatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-state-wise-stat',
          templateUrl: './state-wise-stat.component.html',
          styleUrls: ['./state-wise-stat.component.css']
        }]
      }], function () {
        return [{
          type: _state_wise_stat_service_service__WEBPACK_IMPORTED_MODULE_1__["StateWiseStatServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\BLAZE\angularproject\CoronaStatApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map