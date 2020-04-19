import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CsService } from '../cs.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  companies : Company[];
  constructor(private csService: CsService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.csService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }
}
