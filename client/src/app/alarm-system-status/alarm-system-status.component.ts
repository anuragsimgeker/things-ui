import { Component, OnInit, Input } from '@angular/core';
import { Thing } from '../thing';
import { AlarmSystemService } from '../alarm-system.service';

@Component({
  selector: 'app-alarm-system-status',
  templateUrl: './alarm-system-status.component.html',
  styleUrls: ['./alarm-system-status.component.scss']
})
export class AlarmSystemStatusComponent implements OnInit {

  @Input() thing: Thing;

  constructor(private alarmSystemService: AlarmSystemService) { }

  ngOnInit() {
  }

  setAlarm(status: string) {
    this.thing.values['alarmSystemStatus'] = status;
    this.alarmSystemService.setAlarm(status).subscribe();
  }

}
