import { Component, OnInit,Input } from '@angular/core';
import { Company } from '../Company';
import { CsService } from '../cs.service';
import { NowdateService} from '../nowdate.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
  companies : Company[];
  nowDate:string;
  constructor(private csService: CsService,private data:NowdateService) { }

  ngOnInit() {
    this.data.currentNowDate.subscribe(message=>this.nowDate=message)
    this.getCompanies();
  }

  getCompanies(): void {
    this.csService.getCompaniesByNowDate(this.nowDate)
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
