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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var Api_1 = require("../Api");
var AuthService_1 = require("../Services/AuthService");
var LoginController = (function () {
    function LoginController(api, auth) {
        this.api = api;
        this.auth = auth;
        this.form = {};
        this.error = {};
    }
    LoginController.prototype.ngOnInit = function () {
    };
    return LoginController;
}());
LoginController = __decorate([
    core_1.Component({
        templateUrl: '../../views/pages/login.html',
    }),
    __param(0, core_1.Inject(Api_1.Api)),
    __param(1, core_1.Inject(AuthService_1.AuthService)),
    __metadata("design:paramtypes", [Api_1.Api,
        AuthService_1.AuthService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=LoginController.js.map