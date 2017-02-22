import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar.component'

import { AppRoutingModule, routedComponents } from './app.routing';


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule],
    declarations: [AppComponent, CalendarComponent, routedComponents],
    bootstrap: [AppComponent],
})

export class AppModule { }