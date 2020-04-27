import { Component, OnInit,Input } from '@angular/core';
import { Company } from '../Company';
import { CsService } from '../cs.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  @Input() now:string="20200101";
  companies : Company[];
  constructor(private csService: CsService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.csService.getCompaniesByNowDate(this.now)
      .subscribe(companies => this.companies = companies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.csService.addCompany({ name } as Company)
      .subscribe(company => {
        this.companies.push(company);
      });
  }

  delete(company: Company): void {
    this.companies = this.companies.filter(h => h !== company);
    this.csService.deleteCompany(company).subscribe();
  }
}
