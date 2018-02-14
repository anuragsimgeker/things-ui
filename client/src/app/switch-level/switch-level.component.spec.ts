import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLevelComponent } from './switch-level.component';

describe('SwitchLevelComponent', () => {
  let component: SwitchLevelComponent;
  let fixture: ComponentFixture<SwitchLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
