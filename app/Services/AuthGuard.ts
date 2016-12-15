import {Inject, Injectable} from "@angular/core";
import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./AuthService";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(@Inject(AuthService) private auth: AuthService,
                @Inject(Router) private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.auth.check()) {
            this.router.navigate(["/login"]);
        }

        return this.auth.check();
    }
}