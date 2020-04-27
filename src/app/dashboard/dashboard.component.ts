import { Component, OnInit,Input } from '@angular/core';
import { Company } from '../Company';
import { CsService } from '../cs.service';
import { NowdateService} from '../nowdate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  companies: Company[] = [];
  nowDate:string;
  constructor(private csService: CsService,private data:NowdateService) { }

  ngOnInit() {
    this.data.currentNowDate.subscribe(message=>this.nowDate=message)
    this.getCompanies();
  }

  getCompanies(): void {
    this.csService.getCompaniesByNowDate(this.nowDate)
      .subscribe(companies => this.companies = companies.slice(1, 5));
  }
}
