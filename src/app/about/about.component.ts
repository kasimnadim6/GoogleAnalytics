import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../services/google-analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public googleAnalyticsSvc: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  sendClickEventData() {
    this.googleAnalyticsSvc.eventEmitter('simple_button_click', 'about', 'click_action', 'click', 10);
  }
}
