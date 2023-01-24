import { TestBed } from '@angular/core/testing';

import { BlogcardService } from './blogcard.service';

describe('BlogcardService', () => {
  let service: BlogcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
