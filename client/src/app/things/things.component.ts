import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material';

import { Thing } from '../thing';
import { SocketService } from '../socket.service';
import { ThingService } from '../thing.service';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.scss']
})
export class ThingsComponent implements OnInit {

  things: Thing[];

  gridColumns: number;

  constructor(private breakpointObserver: BreakpointObserver, private socketService: SocketService, private thingService: ThingService,
      private router: Router, private snackBar: MatSnackBar) {
    this.gridColumns = 6;
    this.observeLayoutChanges();
  }

  ngOnInit() {
    this.getThings();
    this.socketService.listenForSmartThingsEvents().subscribe(this.onReceivedEvent.bind(this));
  }

  getThings(): void {
    document.getElementById('loading').classList.remove('hide');
    this.thingService.getThings()
      .subscribe(things => {
        document.getElementById('loading').classList.add('hide');
        this.things = things;
      }, error => {
        document.getElementById('loading').classList.add('hide');
        if (error.status === 401) {  // Unauthorized, navigate to welcome screen
          this.router.navigateByUrl('/welcome');
        }
      });

  }

  onReceivedEvent(e): void {
    const thing = this.things.find((_thing) => {
      return _thing.id === e.deviceId;
    });

    thing.values[e.name] = e.value;

    this.showSnackBarMessage(e);
  }

  showSnackBarMessage(e): void {
    let message;

    switch (e.name) {
      case 'alarmSystemStatus':
        switch (e.value) {
          case 'away':
            e.value = 'Armed (Away)';
            break;
          case 'stay':
            e.value = 'Armed (Home)';
            break;
          case 'off':
            e.value = 'Disarmed';
            break;
        }
        message = `${e.displayName} is ${e.value}`;
        break;
      default:
        message = `${e.displayName} ${e.name} is ${e.value}`;
        break;
    }

    this.snackBar.open(message, '', { duration: 2000 });
  }

  observeLayoutChanges(): void {
    this.breakpointObserver.observe([ Breakpoints.HandsetLandscape ])
      .subscribe(result => result.matches && (this.gridColumns = 4));

    this.breakpointObserver.observe([ Breakpoints.TabletLandscape ])
      .subscribe(result => result.matches && (this.gridColumns = 4));

    this.breakpointObserver.observe([ Breakpoints.HandsetPortrait ])
      .subscribe(result => result.matches && (this.gridColumns = 2));

    this.breakpointObserver.observe([ Breakpoints.TabletPortrait ])
      .subscribe(result => result.matches && (this.gridColumns = 3));

    this.breakpointObserver.observe([ Breakpoints.WebLandscape ])
      .subscribe(result => result.matches && (this.gridColumns = 6));

    this.breakpointObserver.observe([ Breakpoints.WebPortrait ])
      .subscribe(result => result.matches && (this.gridColumns = 4));
  }
}
