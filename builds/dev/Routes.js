"use strict";
var router_1 = require("@angular/router");
var HomepageController_1 = require("./Controllers/HomepageController");
// import {AuthGuard} from "./Services/AuthGuard";
var LoginController_1 = require("./Controllers/LoginController");
exports.routes = router_1.RouterModule.forRoot([
    {
        path: "",
        // canActivate: [AuthGuard],
        component: HomepageController_1.HomepageController,
    }, {
        path: "login",
        component: LoginController_1.LoginController,
    },
]);
//# sourceMappingURL=Routes.js.map