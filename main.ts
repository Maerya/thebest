import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar.component';
import { NavbarComponent } from './navbar.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

bootstrap(AppComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

bootstrap(CalendarComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

bootstrap(NavbarComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));