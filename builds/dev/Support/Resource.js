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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var AuthService_1 = require("../Services/AuthService");
require("rxjs/Rx");
var Resource = (function () {
    function Resource(url, http, auth) {
        this.url = url;
        this.http = http;
        this.auth = auth;
    }
    ;
    Resource.prototype.buildHeaders = function () {
        var headers = new http_1.Headers;
        headers.append('Content-Type', 'application/json');
        var token = this.auth.getToken();
        if (token) {
            headers.append('Authorization', "bearer " + token);
        }
        return headers;
    };
    Resource.prototype.buildSearch = function (params) {
        var search = new http_1.URLSearchParams();
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] != null && params[key] != 'undefined') {
                if (params[key] instanceof Array) {
                    for (var innerKey in params[key]) {
                        if (params[key].hasOwnProperty(innerKey)) {
                            search.append(key + '[]', params[key][innerKey]);
                        }
                    }
                }
                else {
                    search.set(key, params[key]);
                }
            }
        }
        return search;
    };
    Resource.prototype.get = function (params) {
        if (params === void 0) { params = {}; }
        var options = {}, url = this.url;
        options["headers"] = this.buildHeaders();
        options["search"] = this.buildSearch(params);
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    Resource.prototype.find = function (id, params) {
        if (params === void 0) { params = {}; }
        var options = {}, url = this.url + "/" + id;
        options["headers"] = this.buildHeaders();
        options["search"] = this.buildSearch(params);
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    Resource.prototype.store = function (params) {
        if (params === void 0) { params = {}; }
        var options = {}, url = this.url;
        options["headers"] = this.buildHeaders();
        return this.http.post(url, params, options).map(function (res) { return res.json(); });
    };
    Resource.prototype.update = function (id, params) {
        if (params === void 0) { params = {}; }
        var options = {}, url = this.url + "/" + id;
        options["headers"] = this.buildHeaders();
        return this.http.put(url, params, options).map(function (res) { return res.json(); });
    };
    Resource.prototype.destroy = function (id) {
        var options = {}, url = this.url + "/" + id;
        options["headers"] = this.buildHeaders();
        return this.http.delete(url, options);
    };
    Resource.prototype.put = function (params) {
        if (params === void 0) { params = {}; }
        var options = {}, url = this.url;
        options["headers"] = this.buildHeaders();
        return this.http.put(url, params, options);
    };
    return Resource;
}());
Resource = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [String, http_1.Http,
        AuthService_1.AuthService])
], Resource);
exports.Resource = Resource;
//# sourceMappingURL=Resource.js.map