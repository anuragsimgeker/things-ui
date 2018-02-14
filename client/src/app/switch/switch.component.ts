import { Component, OnInit, Input } from '@angular/core';
import { Thing } from '../thing';
import { SwitchService } from '../switch.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() thing: Thing;

  constructor(private switchService: SwitchService) {}

  ngOnInit() {}

  onToggle(change: MatSlideToggleChange) {
    this.thing.values['switch'] = (change.checked === true) ? 'turning on' : 'turning off';
    this.switchService.on(this.thing.id, change.checked).subscribe();
  }

}
