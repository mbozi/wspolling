import { Component, OnInit } from '@angular/core';
import { PollingService } from 'src/app/shared/polling.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../format-datepicker/format-datepicker';

import {default as _rollupMoment} from 'moment';
import { FormControl } from '@angular/forms';

//const moment = _rollupMoment 

@Component({
  selector: 'app-pollster-list',
  templateUrl: './pollster-list.component.html',
  styleUrls: ['./pollster-list.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class PollsterListComponent implements OnInit {
  selectedPollster: number;
  
  constructor(public service: PollingService) { }

  ngOnInit(): void {
     this.service.FilterStartDate= new Date(2019,2,13)
     this.service.FilterEndDate= new Date(2019,11,13)
  }

}
