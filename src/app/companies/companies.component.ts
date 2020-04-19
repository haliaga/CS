import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CsService } from '../cs.service';
import { MsgService } from '../msg.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  company: Company;
  companies : Company[];
  selectedCompany: Company;

  constructor(private csService: CsService, private msgService: MsgService) { }

  ngOnInit() {
    this.getCompanies();
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
    this.msgService.add('MsgService: selected company name = '+company.name+' carbon credits: '+company.carboncredit);
  }

  getCompanies(): void {
    this.csService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }
}
