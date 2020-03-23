import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollingService } from './shared/polling.service'
import { PollingComponent } from './polling/polling.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Tables', component: PollingComponent},
  {path: 'Graphs', component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PollingService]
})
export class AppRoutingModule { }


