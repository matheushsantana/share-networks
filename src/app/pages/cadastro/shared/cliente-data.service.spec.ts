import { TestBed } from '@angular/core/testing';

import { ClienteDataService } from './cliente-data.service';

describe('ClienteDataService', () => {
  let service: ClienteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
