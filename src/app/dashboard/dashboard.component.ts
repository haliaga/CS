import { Component, OnInit,Input } from '@angular/core';
import { Company } from '../Company';
import { CsService } from '../cs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() now:string ="20200101";

  companies: Company[] = [];
  constructor(private csService:CsService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.csService.getCompaniesByNowDate(this.now)
      .subscribe(companies => this.companies = companies.slice(1, 5));
  }
}
