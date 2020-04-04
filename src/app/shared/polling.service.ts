import { Injectable } from '@angular/core';
import { Pollster } from './pollster.model';
import { Poll } from './poll.model'
import { HttpClient } from '@angular/common/http';
import { PollFilterPipe } from './poll-filter/poll-filter.pipe';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollingService {
  
  rootURL = "http://api.worksync.net/api"

  FilterPollster: number;
  FilterStartDate: Date;
  FilterEndDate: Date;

  ListPollsters: Pollster[];
  DropDownList: Pollster[];
  
  ListPolls: Poll[];
  FilteredPolls: Poll[];

  FilterChangedEvent: BehaviorSubject<boolean> = new BehaviorSubject(false);

  
  constructor(private http: HttpClient, private PollFilter: PollFilterPipe) {
    this.FilterPollster=0;
   }


   
  GetPollsters(){
    let obs = this.http.get(this.rootURL + '/pollster');
    obs.subscribe((res) => this.PollstersReceived(res))

  }

  PollstersReceived(res: any){
    this.FilterStartDate= new Date(2019,2,13)
    this.FilterEndDate= new Date(2019,11,13)
    this.ListPollsters = res as Pollster[];
    this.DropDownList = this.ListPollsters;
    this.DropDownList.unshift(new Pollster ({ID: 0, pName: 'All Pollsters'}));
  }
  

  GetPolls(){
    let obs = this.http.get(this.rootURL + '/poll');
    obs.subscribe((res) => this.PollsReceived(res))
  }

  PollsReceived(res: any){
    this.ListPolls = res as Poll[];
    this.ApplyFilter();
  }


  get PollsterFilter(){
    return this.FilterPollster
  }

  set PollsterFilter(value){
    this.FilterPollster = value;
    this.ApplyFilter();
  }

  get StartDateFilter(){
    return this.FilterStartDate
  }

  set StartDateFilter(value:any){
    this.FilterStartDate = new Date(value);
    this.ApplyFilter();
  }

  get EndDateFilter(){
    return this.FilterEndDate
  }

  set EndDateFilter(value:any){
    this.FilterEndDate = new Date(value);
    this.ApplyFilter();
  }

ApplyFilter(){
  this.FilteredPolls=this.PollFilter.transform(this.ListPolls, this.FilterPollster, this.FilterStartDate, this.FilterEndDate);
  this.FilterChangedEvent.next(true);
}



}