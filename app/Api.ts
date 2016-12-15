import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {Resource} from "./Support/Resource";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import {AuthService} from "./Services/AuthService";
import {config} from "./Config";

@Injectable()
export class Api {

    public users: Resource;

    constructor(@Inject(Http) public http: Http,
                @Inject(AuthService) public auth: AuthService) {

        this.users = this.resource("users");

    }

    resource(url: string) {
        return new Resource(config.baseUrl + url, this.http, this.auth);
    }

    upload(url: any, file: any) {

        return Observable.create((subscriber: Subscriber<any>) => {

            let data: FormData = new FormData();
            let xhr: XMLHttpRequest = new XMLHttpRequest();

            data.append("file", file);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        subscriber.next(JSON.parse(xhr.response));
                        subscriber.complete();
                    } else {
                        subscriber.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event: any) => {
                subscriber.next(event);
            };

            xhr.open('POST', url, true);
            xhr.send(data);
        });
    }
}
