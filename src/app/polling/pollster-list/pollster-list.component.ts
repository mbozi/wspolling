import { Component, OnInit } from '@angular/core';
import { PollingService } from 'src/app/shared/polling.service';

@Component({
  selector: 'app-pollster-list',
  templateUrl: './pollster-list.component.html',
  styleUrls: ['./pollster-list.component.css']
})
export class PollsterListComponent implements OnInit {
  selectedPollster: number;

  constructor(public service: PollingService) { }

  ngOnInit(): void {
     
  }

}
