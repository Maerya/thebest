"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var calendar_component_1 = require('./calendar.component');
var routes = [
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: '', component: app_component_1.AppComponent },
    { path: '**', component: app_component_1.AppComponent }
];
core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(routes)],
    exports: [router_1.RouterModule]
});
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routedComponents = [app_component_1.AppComponent, calendar_component_1.CalendarComponent];
//# sourceMappingURL=app.routing.js.map