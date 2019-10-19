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
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 100,
            top: 0,
            bottom: 0
          }
        }
      }
    });
    this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 100,
            top: 0,
            bottom: 0
          }
        }
      }
    });
  }
}
