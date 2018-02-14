import { Component, OnInit, Input } from '@angular/core';
import { Thing } from '../thing';

@Component({
  selector: 'app-contact-sensor',
  templateUrl: './contact-sensor.component.html',
  styleUrls: ['./contact-sensor.component.scss']
})
export class ContactSensorComponent implements OnInit {

  @Input() thing: Thing;

  constructor() { }

  ngOnInit() {
  }

}
