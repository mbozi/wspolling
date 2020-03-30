import { Component, OnInit } from '@angular/core';
import { PollingService } from 'src/app/shared/polling.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {default as _rollupMoment} from 'moment';
import { FormControl } from '@angular/forms';

//const moment = _rollupMoment 

@Component({
  selector: 'app-pollster-list',
  templateUrl: './pollster-list.component.html',
  styleUrls: ['./pollster-list.component.css'],
  providers: [],
})
export class PollsterListComponent implements OnInit {
  selectedPollster: number;
  //startdate = new FormControl(moment([2017, 0, 1]));
  constructor(public service: PollingService) { }

  ngOnInit(): void {
     
  }

}
