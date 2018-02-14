import { TestBed, inject } from '@angular/core/testing';

import { AlarmSystemService } from './alarm-system.service';

describe('AlarmSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlarmSystemService]
    });
  });

  it('should be created', inject([AlarmSystemService], (service: AlarmSystemService) => {
    expect(service).toBeTruthy();
  }));
});
