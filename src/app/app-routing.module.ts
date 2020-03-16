import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollingService } from './shared/polling.service'


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PollingService]
})
export class AppRoutingModule { }


