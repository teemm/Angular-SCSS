import {Inject, Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {config} from "../Config";

@Injectable()
export class AuthService {

    public user: any = null;

    public authenticated: EventEmitter<any> = new EventEmitter();

    public providers: any[] = [
        {name: "google", className: 'btn-danger'},
        {name: "facebook", className: 'btn-primary'},
    ];

    constructor(@Inject(Router) public router: Router,
                @Inject(Http) public http: Http) {
        try {
            let json = localStorage.getItem("user");
            this.user = JSON.parse(json);
        } catch (e) {
            this.user = null;
        }
    }

    public check() {
        return this.user !== null;
    }

    public attempt(form: any) {
        this.http.post(config.baseUrl + "auth/login", form)
            .map(res => res.json())
            .subscribe((response: any)=> {
                    this.login(response);
                }, (response: any)=> {
                    console.log(response);
                }
            );
    }

    public attemptWithOauth(social: any) {
        var features = "toolbar=yes,top=500,left=500,width=640,height=640";
        window.open(config.baseUrl + "oauth/" + social.name, "_blank", features);
        window.addEventListener('message', (event) => {
            if (event.data.user) {
                this.login(event.data.user);
            }
        });
    }

    public login(user: any) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.authenticated.emit(this.user);
        this.router.navigate(["/"]);
    }

    public logout() {
        this.user = null;
        localStorage.removeItem("user");
        this.authenticated.emit(this.user);
        this.router.navigate(["/login"]);
    }

    public getToken() {
        return this.user ? this.user['token'] : null;
    }
}
