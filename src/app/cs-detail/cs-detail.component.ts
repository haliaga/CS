import { Component, OnInit,Input } from '@angular/core';
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
  @Input() company: Company;
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
    const thisServ_ = this.csService.updateCompany(this.company);
    thisServ_.subscribe(company => this.company = company);
  }
  goBack(): void {
    const thisLoc_ = this.location;
    thisLoc_.back();
  }

  save(): void {
    const thisServ_ = this.csService.updateCompany(this.company);
    thisServ_.subscribe(() => this.goBack());
  }

}
