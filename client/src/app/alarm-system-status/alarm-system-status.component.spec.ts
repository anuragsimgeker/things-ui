import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmSystemStatusComponent } from './alarm-system-status.component';

describe('AlarmSystemStatusComponent', () => {
  let component: AlarmSystemStatusComponent;
  let fixture: ComponentFixture<AlarmSystemStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmSystemStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmSystemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
