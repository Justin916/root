import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHolderComponent } from './editor-holder.component';

describe('EditorHolderComponent', () => {
  let component: EditorHolderComponent;
  let fixture: ComponentFixture<EditorHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
