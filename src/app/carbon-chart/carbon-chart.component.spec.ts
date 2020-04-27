import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonChartComponent } from './carbon-chart.component';

describe('CarbonChartComponent', () => {
  let component: CarbonChartComponent;
  let fixture: ComponentFixture<CarbonChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
