import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CsService } from '../cs.service';
import { Company } from '../Company';

@Component({
  selector: 'app-cs-detail',
  templateUrl: './cs-detail.component.html',
  styleUrls: ['./cs-detail.component.css']
})

export class CsDetailComponent implements OnInit {
  company: Company;
  constructor(
    private route: ActivatedRoute,
    private csService: CsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.csService.getCompany(id)
      .subscribe(company => this.company = company);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.csService.updateCompany(this.company)
      .subscribe(() => this.goBack());
  }

}
