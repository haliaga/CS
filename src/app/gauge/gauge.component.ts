import { Component, OnInit } from '@angular/core';
import { GaugeService} from '../gauge.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  gauge:string="electricity";
  
  constructor(private data:GaugeService) { }

  ngOnInit(): void {
    this.updateGauge(this.gauge);
    this.data.currentGauge.subscribe(message=>this.gauge=message);
  }

  updateGauge(newGauge: string): void {
    this.data.changeGauge(newGauge);
  }

}
