import { Injectable } from '@angular/core';
import { BehaviorSubject} from'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class NowdateService {
  private nowDateSource = new BehaviorSubject<string>("20201212");
  currentNowDate = this.nowDateSource.asObservable();

  constructor() { }

  changeNowDate(newNowDate:string){
    this.nowDateSource.next(newNowDate);
  }
}
