import {Component} from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: '../../views/components/header.html'
})
export class HeaderComponent {

    public navigation: any[] = [
        {link: ['/'], name: "homepage"},
    ];

    public collapsed: boolean = false;

    constructor() {

    }

    toggleCollapse() {
        this.collapsed = !this.collapsed;
    }

}