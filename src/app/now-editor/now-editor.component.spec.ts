import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowEditorComponent } from './now-editor.component';

describe('NowEditorComponent', () => {
  let component: NowEditorComponent;
  let fixture: ComponentFixture<NowEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
