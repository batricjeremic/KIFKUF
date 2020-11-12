import { TestBed } from '@angular/core/testing';

import { ExcelReadingService } from './excel-reading.service';

describe('ExcelReadingService', () => {
  let service: ExcelReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
