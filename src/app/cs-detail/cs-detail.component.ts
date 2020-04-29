import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CsService } from '../cs.service';
import { Company } from '../Company';
import {Chart} from 'node_modules/chart.js';
import { NowdateService} from '../nowdate.service';

@Component({
  selector: 'app-cs-detail',
  templateUrl: './cs-detail.component.html',
  styleUrls: ['./cs-detail.component.css']
})

export class CsDetailComponent implements OnInit {
  company: Company;
  companies:Company[];
  nowDate:string;

  constructor(
    private route: ActivatedRoute,
    private csService: CsService,
    private location: Location,
    private data:NowdateService
  ) { }

  ngOnInit(): void {
    this.getCompany();
    this.getCompanies();
  }

  getCompanies(): void {
    this.csService.getCompaniesByNowDate(this.nowDate)
      .subscribe(companies => this.companies = companies);
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.csService.getCompany(id).subscribe(company => {this.company = company; this.initCarbonChart(company)});
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.csService.updateCompany(this.company)
      .subscribe(() => this.goBack());
  }

  initCarbonChart(company:Company):void{
    var myChart = new Chart("carbonChart", {
      type: 'bar',
      data: {
          labels: ['Electricity', 'Gas', 'Paper','Petrol','Organic Trash','Flights'],
          datasets: [{
              label: 'Carbon Footprint Parameters',
              data: [company.electricity,company.gas,company.paper,company.petrol,company.organictrash,company.flights],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(54, 162, 135, 0.2)',
                  'rgba(77, 142, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 135, 0.2)',
                'rgba(77, 142, 235, 0.2)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }
}
