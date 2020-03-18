import { Injectable } from '@angular/core';
import { Pollster } from './pollster.model';
import { Poll } from './poll.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollingService {
  rootURL = "http://api.worksync.net/api"
  SelectedPollster: Pollster
  ListPollsters: Pollster[];
  ListPolls: Poll[];
  constructor(private http: HttpClient) { }

  GetPollsters(){
    this.http.get(this.rootURL + '/pollster')
        .toPromise()
        .then( res => this.ListPollsters = res as Pollster[] )
  }

  GetPolls(){
    this.http.get(this.rootURL + '/poll')
        .toPromise()
        .then( res => this.ListPolls = res as Poll[] )
  }

}