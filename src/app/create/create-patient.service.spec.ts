import { TestBed } from '@angular/core/testing';

import { CreatePatientService } from './create-patient.service';

describe('CreatePatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatePatientService = TestBed.get(CreatePatientService);
    expect(service).toBeTruthy();
  });
});
