import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollingComponent } from './polling/polling.component';
import { PollsterListComponent } from './shared/pollster-list/pollster-list.component';
import { PollListComponent } from './polling/poll-list/poll-list.component';
import { PollingService } from './shared/polling.service';
import { FormsModule } from '@angular/forms';
import { PollFilterPipe } from './shared/poll-filter/poll-filter.pipe';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './charting/graph/graph.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ChartingComponent } from './charting/charting.component';

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
    ChartingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMomentDateModule
  ],
  providers: [
    PollingService,
    PollFilterPipe
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
