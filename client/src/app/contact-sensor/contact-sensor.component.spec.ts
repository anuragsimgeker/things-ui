import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSensorComponent } from './contact-sensor.component';

describe('ContactSensorComponent', () => {
  let component: ContactSensorComponent;
  let fixture: ComponentFixture<ContactSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
