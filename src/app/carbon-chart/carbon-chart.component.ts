import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-carbon-chart',
  templateUrl: './carbon-chart.component.html',
  styleUrls: ['./carbon-chart.component.css']
})
export class CarbonChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("carbonChart", {
      type: 'bar',
      data: {
          labels: ['Carbon Credit', 'Electricity', 'Gas', 'Paper'],
          datasets: [{
              label: 'Carbon parameters',
              data: [12, 19, 3, 5],
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
