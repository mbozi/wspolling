import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { PollingService } from '../shared/polling.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(public service: PollingService) { }

  ngOnInit(): void {


    var timeFormat = 'DD/MM/YYYY';
    var ltension = 0.25;
    var fpolls = this.service.ListPolls 

/* CHART DATA */

    var minDate = new Date('2017-01-01');
    var CONdata = {
      label: 'CON',
      data: this.service.FilteredPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.CON }}),
      borderColor: 'blue',
      fill: false,
      lineTension: ltension
    };
    
    var LABdata = {
      label: 'LAB',
      data: this.service.FilteredPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.LAB }}),
      borderColor: 'red',
      fill: false,
      lineTension: ltension
    };

    var BRXdata = {
      label: 'BRX',
      data: this.service.FilteredPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.BRX }}),
      borderColor: 'black',
      fill: false,
      lineTension: ltension
    };

    var LDMdata = {
      label: 'LIB',
      data: this.service.FilteredPolls.map((val) => { return {  x: new Date(val.Fieldwork), y: val.LDM }}),
      borderColor: 'orange',
      fill: false,
      lineTension: ltension
    };
    
    var chartDATA = [CONdata, LABdata, BRXdata, LDMdata] ;
    var ctx = document.getElementById('myChart');

    
/* CHART OPTIONS */

var chartOPTIONS = {
  responsive: true,
  title: {
    display: true,
    text: 'UK Opinion Polls Approaching the 2019 General Election'
  },

  scales: {
    yAxes:[{
      ticks: {
        min: 0, 
    },
    scaleLabel: {
      display:     true,
      labelString: 'percentage'
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
          
          min: new Date('2019-06-01'),
          tooltipFormat: 'll'
        },
        scaleLabel: {
          display:     true,
          labelString: 'fieldwork'
      }
        
    }]
}

}


/* CHART DECLARATION */

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: chartDATA
        },
      options: chartOPTIONS
    });

  }

}
