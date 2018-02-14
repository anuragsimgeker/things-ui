import { Component, OnInit, Input } from '@angular/core';
import { Thing } from '../thing';
import { LockService } from '../lock.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss']
})
export class LockComponent implements OnInit {

  @Input() thing: Thing;

  constructor(private lockService: LockService) {}

  ngOnInit() {}

  onToggle(lock: boolean) {
    this.thing.values['lock'] = (lock ? 'Locking' : 'Unlocking');
    this.lockService.lock(this.thing.id, lock).subscribe();
  }

}
