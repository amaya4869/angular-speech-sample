import { TestBed } from '@angular/core/testing';

import { SpeechGeneratorService } from './speech-generator.service';

describe('SpeechGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeechGeneratorService = TestBed.get(SpeechGeneratorService);
    expect(service).toBeTruthy();
  });
});
