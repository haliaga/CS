import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CsService } from '../cs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  now:string;
  getNowDate($event):void{
    this.now=$event;
  }

  companies: Company[] = [];
  constructor(private csService:CsService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.csService.getCompanies()
      .subscribe(companies => this.companies = companies.slice(1, 5));
  }
}
