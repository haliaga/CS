import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CsService } from '../cs.service';
import { Company } from '../Company';
import {Chart} from 'node_modules/chart.js';

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
    this.csService.getCompany(id).subscribe(company => {this.company = company; this.initChart(company)});
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.csService.updateCompany(this.company)
      .subscribe(() => this.goBack());
  }

  initChart(company:Company): void {
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
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 159, 64, 1)'
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
