import { Component, OnInit } from '@angular/core';
import { NowdateService} from '../nowdate.service';
@Component({
  selector: 'app-nowdate',
  templateUrl: './nowdate.component.html',
  styleUrls: ['./nowdate.component.css']
})
export class NowdateComponent implements OnInit {
  nowDate:string="20200101";
  constructor(private data:NowdateService) { }
  ngOnInit(): void {
    this.updateNowDate(this.nowDate);
    this.data.currentNowDate.subscribe(message=>this.nowDate=message);
  }

  updateNowDate(newNowDate: string): void {
    this.data.changeNowDate(newNowDate);
  }

}
