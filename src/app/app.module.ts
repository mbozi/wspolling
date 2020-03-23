import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollingComponent } from './polling/polling.component';
import { PollsterListComponent } from './polling/pollster-list/pollster-list.component';
import { PollListComponent } from './polling/poll-list/poll-list.component';
import { PollingService } from './shared/polling.service';
import { FormsModule } from '@angular/forms';
import { PollFilterPipe } from './polling/poll-list/poll-filter.pipe';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PollingComponent,
    PollsterListComponent,
    PollListComponent,
    PollFilterPipe,
    HomeComponent,
    GraphComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PollingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
