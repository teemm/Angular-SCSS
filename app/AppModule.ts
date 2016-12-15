import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HomepageController} from "./Controllers/HomepageController";
import {AuthService} from "./Services/AuthService";
import {HeaderComponent} from "./Components/HeaderComponent";
import {App} from "./App";
import {Api} from "./Api";
import {routes} from "./Routes";
import {AuthGuard} from "./Services/AuthGuard";
import {LoginController} from "./Controllers/LoginController";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes,
    ],
    declarations: [
        App,
        HomepageController,
        LoginController,
        HeaderComponent,
    ],
    providers: [
        Api,
        AuthGuard,
        AuthService
    ],

    bootstrap: [App]
})
export class AppModule {
}
