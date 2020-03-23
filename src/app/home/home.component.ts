import { Component, OnInit } from '@angular/core';
import { PollingService } from '../shared/polling.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: PollingService) { }

  ngOnInit(): void {
    this.service.GetPolls();
    this.service.GetPollsters();
  }

}
