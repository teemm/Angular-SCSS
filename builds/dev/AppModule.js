"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var HomepageController_1 = require("./Controllers/HomepageController");
var AuthService_1 = require("./Services/AuthService");
var HeaderComponent_1 = require("./Components/HeaderComponent");
var App_1 = require("./App");
var Api_1 = require("./Api");
var Routes_1 = require("./Routes");
var AuthGuard_1 = require("./Services/AuthGuard");
var LoginController_1 = require("./Controllers/LoginController");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            Routes_1.routes,
        ],
        declarations: [
            App_1.App,
            HomepageController_1.HomepageController,
            LoginController_1.LoginController,
            HeaderComponent_1.HeaderComponent,
        ],
        providers: [
            Api_1.Api,
            AuthGuard_1.AuthGuard,
            AuthService_1.AuthService
        ],
        bootstrap: [App_1.App]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=AppModule.js.map