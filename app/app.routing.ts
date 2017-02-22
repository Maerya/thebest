import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar.component'

const routes: Routes = [
    { path: 'calendar', component: CalendarComponent },
    { path: '', component: AppComponent},
    { path: '**', component: AppComponent }
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent, CalendarComponent];
