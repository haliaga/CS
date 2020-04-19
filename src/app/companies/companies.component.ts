import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { COMPANIES } from '../mock_companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  company: Company = {
    id: 1,
    name: 'Adidas',
    carboncredit:7
  };

  companies = COMPANIES;
  selectedCompany: Company;

  constructor() { }

  ngOnInit() {
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
}
