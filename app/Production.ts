import "rxjs/Rx";
import {enableProdMode} from "@angular/core";
import {platformBrowser} from "@angular/platform-browser";
import {AppModuleNgFactory} from "../builds/aot/app/AppModule.ngfactory";

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);