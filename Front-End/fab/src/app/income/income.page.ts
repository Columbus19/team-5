import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {
  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;

  private barGraph: Chart;

  constructor(public router: Router) { }

  home_page(){
    this.router.navigateByUrl('/tabs');
  }
  ngOnInit() {
    this.barGraph = new Chart(this.barCanvas.nativeElement, {
      type: "horizontalBar",
      data: {
        labels: ["Food", "Utilities", "Rent", "Insurance", "Gas"],
        datasets: [
          {
            data: [20, 120, 200, 30, 40],
            backgroundColor: [
              "rgba(38, 108, 237, 1.0)",
              "rgba(183, 38, 237, 1.0)",
              "rgba(237, 194, 38, 1.0)",
              "rgba(38, 237, 194, 1.0)",
              "rgba(137, 121, 38, 1.0)"
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Chase Savings Account",
          position: 'top'
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return "$" + data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem.index];
            }
          }
        },
        scales: {
          xAxes: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 6,
            minBarLength: 2,
            gridLines: {
              color: "black",
              offsetGridLines: true,
              borderDash: [2,5]
            },
            ticks: {
              min: 0,
              max: 250
            }
          }],
          yAxes: [{
            gridLines: {
              color: "black",
              display: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  }

}
