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
var Resource_1 = require("./Support/Resource");
var Observable_1 = require("rxjs/Observable");
var AuthService_1 = require("./Services/AuthService");
var Config_1 = require("./Config");
var Api = (function () {
    function Api(http, auth) {
        this.http = http;
        this.auth = auth;
        this.users = this.resource("users");
    }
    Api.prototype.resource = function (url) {
        return new Resource_1.Resource(Config_1.config.baseUrl + url, this.http, this.auth);
    };
    Api.prototype.upload = function (url, file) {
        return Observable_1.Observable.create(function (subscriber) {
            var data = new FormData();
            var xhr = new XMLHttpRequest();
            data.append("file", file);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        subscriber.next(JSON.parse(xhr.response));
                        subscriber.complete();
                    }
                    else {
                        subscriber.error(xhr.response);
                    }
                }
            };
            xhr.upload.onprogress = function (event) {
                subscriber.next(event);
            };
            xhr.open('POST', url, true);
            xhr.send(data);
        });
    };
    return Api;
}());
Api = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __param(1, core_1.Inject(AuthService_1.AuthService)),
    __metadata("design:paramtypes", [http_1.Http,
        AuthService_1.AuthService])
], Api);
exports.Api = Api;
//# sourceMappingURL=Api.js.map