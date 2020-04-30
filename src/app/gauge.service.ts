import { Injectable } from '@angular/core';
import { BehaviorSubject} from'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class GaugeService {
  private gaugeSource = new BehaviorSubject<string>("electricity");
  currentGauge = this.gaugeSource.asObservable();

  constructor() { }

  changeGauge(newGauge:string){
    this.gaugeSource.next(newGauge);
  }
}
