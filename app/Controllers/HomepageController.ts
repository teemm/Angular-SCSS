import {Component, OnInit} from "@angular/core";

@Component({
    templateUrl: '../../views/pages/homepage.html',
})
export class HomepageController implements OnInit {

    public message: string;

    ngOnInit(): any {
        this.message = "Welcome";
    }

}