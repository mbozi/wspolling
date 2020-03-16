import { Injectable } from '@angular/core';
import { Pollster } from './pollster.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollingService {
  rootURL = "http://api.worksync.net/api"
  SelectedPollster: Pollster
  ListPollsters: Pollster[];
  constructor(private http: HttpClient) { }

  GetPollsters(){
    this.http.get(this.rootURL+'/Pollster')
    .toPromise().then(res => this.ListPollsters= res as Pollster[])
  }
}
