import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollingComponent } from './polling/polling.component';
import { PollsterListComponent } from './polling/pollster-list/pollster-list.component';
import { PollListComponent } from './polling/poll-list/poll-list.component';
import { PollingService } from './shared/polling.service';

@NgModule({
  declarations: [
    AppComponent,
    PollingComponent,
    PollsterListComponent,
    PollListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PollingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
