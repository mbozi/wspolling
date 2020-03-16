import { Component, OnInit } from '@angular/core';
import { PollingService } from '../shared/polling.service';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {

  constructor(private service: PollingService) { }

  ngOnInit(): void {
  }

}
