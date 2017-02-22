import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponent } from './calendar.component';

@Component({
    selector: 'my-nav',
    templateUrl: './app/navbar/navbar.component.html',
    styleUrls: ['./app/styles.css'],
})

export class NavbarComponent {

    constructor(
        private router: Router) {
    }

    gotoDetail(calendar: CalendarComponent): void {
        let link = ['/calendar'];
        this.router.navigate(link);
    }

}