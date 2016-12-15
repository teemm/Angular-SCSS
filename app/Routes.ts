import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomepageController} from "./Controllers/HomepageController";
// import {AuthGuard} from "./Services/AuthGuard";
import {LoginController} from "./Controllers/LoginController";

export const routes: ModuleWithProviders = RouterModule.forRoot(<Routes>[
    {
        path: "",
        // canActivate: [AuthGuard],
        component: HomepageController,
    }, {
        path: "login",
        component: LoginController,
    },
]);