import { Component, OnInit } from '@angular/core';
import { PollingService } from 'src/app/shared/polling.service';
import { Poll } from 'src/app/shared/poll.model';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
  selectedPoll: Poll;

  constructor(public service: PollingService) { }

  ngOnInit(): void {
    this.service.GetPolls();
 }

 get selectedPollMod(){
   return this.selectedPoll;
 }

 set selectedPollMod(value){
   this.selectedPoll = value;
 }

}
