import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollingComponent } from './polling/polling.component';
import { PollsterListComponent } from './polling/pollster-list/pollster-list.component';
import { PollListComponent } from './polling/poll-list/poll-list.component';
import { PollingService } from './shared/polling.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            PollingComponent,
            PollsterListComponent,
            PollListComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [PollingService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map