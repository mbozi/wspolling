import { Injectable } from '@angular/core';
import { Pollster } from './pollster.model';
import { Poll } from './poll.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollingService {
  
  rootURL = "http://api.worksync.net/api"

  FilterPollster: number;

  ListPollsters: Pollster[];
  DropDownList: Pollster[];
  
  ListPolls: Poll[];
  FilteredPolls: Poll[];
  
  constructor(private http: HttpClient) {
    this.FilterPollster=0;
   }

  GetPollsters(){
    let obs = this.http.get(this.rootURL + '/pollster');
    obs.subscribe((res) => this.PollstersReceived(res))

  }

  PollstersReceived(res){
    this.ListPollsters = res as Pollster[];
    this.DropDownList = this.ListPollsters;
    this.DropDownList.unshift(new Pollster ({ID: 0, pName: 'All Pollsters'}));
  }
  

  GetPolls(){
    let obs = this.http.get(this.rootURL + '/poll');
    obs.subscribe((res) => this.PollsReceived(res))
  }

  PollsReceived(res){
    this.ListPolls = res as Poll[];
  }


  get PollsterFilter(){
    return this.FilterPollster
  }

  set PollsterFilter(value){
    this.FilterPollster = value;
  }


}