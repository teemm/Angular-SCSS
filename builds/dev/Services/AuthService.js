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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Config_1 = require("../Config");
var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.user = null;
        this.authenticated = new core_1.EventEmitter();
        this.providers = [
            { name: "google", className: 'btn-danger' },
            { name: "facebook", className: 'btn-primary' },
        ];
        try {
            var json = localStorage.getItem("user");
            this.user = JSON.parse(json);
        }
        catch (e) {
            this.user = null;
        }
    }
    AuthService.prototype.check = function () {
        return this.user !== null;
    };
    AuthService.prototype.attempt = function (form) {
        var _this = this;
        this.http.post(Config_1.config.baseUrl + "auth/login", form)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.login(response);
        }, function (response) {
            console.log(response);
        });
    };
    AuthService.prototype.attemptWithOauth = function (social) {
        var _this = this;
        var features = "toolbar=yes,top=500,left=500,width=640,height=640";
        window.open(Config_1.config.baseUrl + "oauth/" + social.name, "_blank", features);
        window.addEventListener('message', function (event) {
            if (event.data.user) {
                _this.login(event.data.user);
            }
        });
    };
    AuthService.prototype.login = function (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.authenticated.emit(this.user);
        this.router.navigate(["/"]);
    };
    AuthService.prototype.logout = function () {
        this.user = null;
        localStorage.removeItem("user");
        this.authenticated.emit(this.user);
        this.router.navigate(["/login"]);
    };
    AuthService.prototype.getToken = function () {
        return this.user ? this.user['token'] : null;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(router_1.Router)),
    __param(1, core_1.Inject(http_1.Http)),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map