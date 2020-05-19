import { TestBed } from '@angular/core/testing';

import { EditorHolderService } from './editor-holder.service';

describe('EditorHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorHolderService = TestBed.get(EditorHolderService);
    expect(service).toBeTruthy();
  });
});
