import { Component } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { NavbarComponent } from './navbar.component';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/styles.css'],
})



export class AppComponent {
    title = 'My First Angular 2 App'
}