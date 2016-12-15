import {Http, URLSearchParams, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {AuthService} from "../Services/AuthService";
import "rxjs/Rx";

@Injectable()
export class Resource {

    constructor(protected url: string,
                protected http: Http,
                protected auth: AuthService) {
    };

    protected buildHeaders() {
        var headers = new Headers;
        headers.append('Content-Type', 'application/json');
        let token = this.auth.getToken();
        if (token) {
            headers.append('Authorization', "bearer " + token);
        }
        return headers;
    }

    protected buildSearch(params: any) {

        var search = new URLSearchParams();

        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] != null && params[key] != 'undefined') {
                if (params[key] instanceof Array) {
                    for (var innerKey in params[key]) {
                        if (params[key].hasOwnProperty(innerKey)) {
                            search.append(key + '[]', params[key][innerKey]);
                        }
                    }
                } else {
                    search.set(key, params[key]);
                }
            }
        }

        return search;
    }

    get(params: any = {}) {
        var options: any = {}, url = this.url;
        options["headers"] = this.buildHeaders();
        options["search"] = this.buildSearch(params);
        return this.http.get(url, options).map(res => res.json());
    }

    find(id: number, params: any = {}) {
        var options: any = {}, url = this.url + "/" + id;
        options["headers"] = this.buildHeaders();
        options["search"] = this.buildSearch(params);
        return this.http.get(url, options).map(res => res.json());
    }

    store(params: any = {}) {
        var options: any = {}, url = this.url;
        options["headers"] = this.buildHeaders();
        return this.http.post(url, params, options).map(res => res.json());
    }

    update(id: number, params: any = {}) {
        var options: any = {}, url = this.url + "/" + id;
        options["headers"] = this.buildHeaders();
        return this.http.put(url, params, options).map(res => res.json());
    }

    destroy(id: number) {
        var options: any = {}, url = this.url + "/" + id;
        options["headers"] = this.buildHeaders();
        return this.http.delete(url, options);
    }

    put(params: any = {}) {
        var options: any = {}, url = this.url;
        options["headers"] = this.buildHeaders();
        return this.http.put(url, params, options);
    }
}

