import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  requestFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  refreshScreen() {
    if (window) {
      window.location.reload();
    }
  }
}
