import { Component, OnInit, Input } from '@angular/core';
import { MatSlideToggleChange, MatSliderChange } from '@angular/material';
import { Thing } from '../thing';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-switch-level',
  templateUrl: './switch-level.component.html',
  styleUrls: ['./switch-level.component.scss']
})
export class SwitchLevelComponent implements OnInit {

  @Input() thing: Thing;

  constructor(private switchService: SwitchService) {}

  ngOnInit() {}

  onToggle(change: MatSlideToggleChange) {
    this.thing.values['switch'] = (change.checked === true) ? 'turning on' : 'turning off';
    this.switchService.on(this.thing.id, change.checked).subscribe();
  }

  setLevel(change: MatSliderChange) {
    this.thing.values['level'] = change.value;
    this.switchService.setLevel(this.thing.id, change.value).subscribe();
  }

}
