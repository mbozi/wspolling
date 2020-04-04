import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { PollingService } from '../../shared/polling.service';
import { Poll } from 'src/app/shared/poll.model';
import { PollFilterPipe } from '../../shared/poll-filter/poll-filter.pipe'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(public service: PollingService) { }

  ngOnInit(): void {


    var timeFormat = 'DD/MM/YYYY';

/* CHART DATA */

    var FPolls: Poll[] = this.service.FilteredPolls;
    var minDate: Date = new Date(2017,6,1)
    var maxDate: Date = new Date(2019,11,1)
    if (!this.service.FilterStartDate){
      minDate=new Date(this.service.FilterStartDate)
    }

    var CONdata = {
      label: 'CON',
      data: FPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.CON }}),
      borderColor: 'blue',
      fill: false
    };
    
    var LABdata = {
      label: 'LAB',
      data: FPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.LAB }}),
      borderColor: 'red',
      fill: false,
    };

    var BRXdata = {
      label: 'BRX',
      data: FPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.BRX }}),
      borderColor: 'black',
      fill: false,
    };

    var LDMdata = {
      label: 'LIB',
      data: FPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.LDM }}),
      borderColor: 'orange',
      fill: false,
    };
    


    
/* CHART OPTIONS */

var chartOPTIONS = {
  responsive: true,
  title: {
    display: true,
    text: 'Polls Graph from {{this.service.FilterStartDate}} to {{this.service.FilterEndDate}}'
  },

  scales: {
    yAxes:[{
      ticks: {
        min: 0, 
    },
    scaleLabel: {
      display:     true,
      labelString: 'value'
  }

    }],
    xAxes: [{
        type: 'time',
        distribution: 'linear',
        time:       {
          unit: 'month',
          format: timeFormat,
          tooltipFormat: 'll'
      },
        ticks: {
          
          min: minDate,
          max: maxDate,
          tooltipFormat: 'll'
        },
        scaleLabel: {
          display:     true,
          labelString: 'Date'
      }
        
    }]
}

}


/* CHART DECLARATION */


var chartDATA = [CONdata, LABdata, BRXdata, LDMdata] ;
var ctx = document.getElementById('myChart');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: chartDATA
        },
      options: chartOPTIONS
    });

    this.service.FilterChangedEvent.subscribe( value => {
      if (value === true) {
        myChart.options.title.text='Polls Graph from ' + this.service.FilterStartDate + ' to ' + this.service.FilterEndDate;
        this.service.FilterChangedEvent.next(false);
      }
    });

  }



}