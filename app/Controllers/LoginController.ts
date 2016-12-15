import {Component, OnInit, Inject} from "@angular/core";
import {Api} from "../Api";
import {AuthService} from "../Services/AuthService";


@Component({
    templateUrl: '../../views/pages/login.html',
})

export class LoginController implements OnInit {

    public form: any = {};

    public error: any = {};

    constructor(@Inject(Api) public api: Api,
                @Inject(AuthService) public auth: AuthService) {

    }

    ngOnInit(): any {

    }
}