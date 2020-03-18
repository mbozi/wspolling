import { Component, OnInit } from '@angular/core';
import { PollingService } from 'src/app/shared/polling.service';
import { Pollster } from 'src/app/shared/pollster.model';

@Component({
  selector: 'app-pollster-list',
  templateUrl: './pollster-list.component.html',
  styleUrls: ['./pollster-list.component.css']
})
export class PollsterListComponent implements OnInit {

    constructor(public service: PollingService) { }

  ngOnInit(): void {
     this.service.GetPollsters();
  }

}
