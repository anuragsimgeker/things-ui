import { Component, OnInit, Input } from '@angular/core';
import { Thing } from '../thing';

@Component({
  selector: 'app-motion-sensor',
  templateUrl: './motion-sensor.component.html',
  styleUrls: ['./motion-sensor.component.scss']
})
export class MotionSensorComponent implements OnInit {

  @Input() thing: Thing;

  constructor() { }

  ngOnInit() {
  }

}
