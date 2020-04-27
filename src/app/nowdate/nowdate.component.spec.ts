import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowdateComponent } from './nowdate.component';

describe('NowdateComponent', () => {
  let component: NowdateComponent;
  let fixture: ComponentFixture<NowdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
