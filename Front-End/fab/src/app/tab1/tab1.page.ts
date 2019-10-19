import { IncomePage } from './../income/income.page';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild("doughnutCanvas", { static: true }) doughnutCanvas: ElementRef;
  @ViewChild("doughnutCanvas2", { static: true }) doughnutCanvas2: ElementRef;

  private doughnutChart: Chart;
  private doughnutChart2: Chart;

  constructor() {}

  ngOnInit() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Income", "Debt"],
        datasets: [
          {
            data: [8, 2],
            backgroundColor: [
              "rgba(35, 117, 35, 1.0)",
              "rgba(188, 31, 38, 1.0)"
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Expenses",
          position: 'top'
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return "$" + data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem.index];
            }
          }
        }
      }
    });
    this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Debt", "Payments"],
        datasets: [
          {
            data: [8, 2],
            backgroundColor: [
              "rgba(188, 31, 38, 1.0)",
              "rgba(35, 117, 35, 1.0)"
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Credit Debt",
          position: 'top'
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return "$" + data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem.index];
            }
          }
        }
      }
    });
  }
}
