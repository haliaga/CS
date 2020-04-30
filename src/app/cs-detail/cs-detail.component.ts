import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CsService } from '../cs.service';
import { Company } from '../Company';
import { Chart} from 'node_modules/chart.js';
import { NowdateService} from '../nowdate.service';
import { GaugeService } from '../gauge.service';

@Component({
  selector: 'app-cs-detail',
  templateUrl: './cs-detail.component.html',
  styleUrls: ['./cs-detail.component.css']
})

export class CsDetailComponent implements OnInit {
  gauge:string="electricity";
  company: Company;
  companies:Company[];
  nowDate:string;

  constructor(
    private route: ActivatedRoute,
    private csService: CsService,
    private location: Location,
    private dataNowDate: NowdateService,
    private dataGauge: GaugeService
  ) { }

  ngOnInit(): void {
    this.dataNowDate.currentNowDate.subscribe(message=>this.nowDate=message)
    this.dataGauge.currentGauge.subscribe(message=>this.gauge=message);
    this.getCompany();
    this.getCompanies("Qantas");
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.csService.getCompany(id).subscribe(company => {this.company = company; this.initCarbonChart(company)});
  }

  getCompanies(name:string): void {
    this.csService.getHistoricalValuesForCompanyName(name)
      .subscribe(companies => {this.companies = companies;this.initHistChart(this.companies,this.gauge)});
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.csService.updateCompany(this.company)
      .subscribe(() => this.goBack());
  }

  initCarbonChart(company:Company)
  {
    const labels_ = ['Electricity', 'Gas', 'Paper','Petrol','Organic Trash','Flights'];
    const data_ = [company.electricity,company.gas,company.paper,company.petrol,company.organictrash,company.flights];
    this.initChart("carbonChart","",labels_,data_);

  }

  initHistChart(series:Company[],gauge:string)
  {
    const labels_ = [];
    const data_ = [];
    for(let i = 0; i< series.length;++i){
        labels_.push(series[i].now);
        switch(gauge){
          case "electricity":
            data_.push(series[i].electricity);
            break;
          case "flights":
            data_.push(series[i].flights);
            break;
          case "gas":
            data_.push(series[i].gas);
            break;
          case "organictrash":
            data_.push(series[i].organictrash);
            break;
          case "paper":
            data_.push(series[i].paper);
            break;
          case "petrol":
            data_.push(series[i].petrol);
            break;
        }
    }
    this.initChart("histChart",this.gauge,labels_,data_);
  }

  initChart(chartName_:string,title_:string,labels_:string[],data_:Number[]):void{
    var myChart = new Chart(chartName_, {
      type: 'bar',
      data: {
          labels: labels_,
          datasets: [{
              label: title_,
              data: data_,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(54, 162, 135, 0.2)',
                  'rgba(77, 142, 235, 0.2)',
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
                'rgba(77, 142, 235, 0.2)',
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
