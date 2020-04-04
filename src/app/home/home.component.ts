import { Component, OnInit } from '@angular/core';
import { PollingService } from '../shared/polling.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: PollingService) { }

  ngOnInit(): void {
    if (!this.service.ListPolls){
      this.service.GetPolls();
    }
    if (!this.service.ListPollsters){
      this.service.GetPollsters();
    }
  }

}
