import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-debt',
  templateUrl: './credit-debt.page.html',
  styleUrls: ['./credit-debt.page.scss'],
})
export class CreditDebtPage implements OnInit {
  @ViewChild("doughnutCanvas", { static: true }) doughnutCanvas: ElementRef;
  @ViewChild("doughnutCanvas2", { static: true }) doughnutCanvas2: ElementRef;
  @ViewChild("doughnutCanvas3", { static: true }) doughnutCanvas3: ElementRef;
  @ViewChild("doughnutCanvas4", { static: true }) doughnutCanvas4: ElementRef;

  private doughnutChart: Chart;
  private doughnutChart2: Chart;
  private doughnutChart3: Chart;
  private doughnutChart4: Chart;

  constructor(public router: Router) { }

  home_page() {
    this.router.navigateByUrl('/income');
  }

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
            label: function (tooltipItem, data) {
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
    this.doughnutChart3 = new Chart(this.doughnutCanvas3.nativeElement, {
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
            label: function (tooltipItem, data) {
              return "$" + data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem.index];
            }
          }
        }
      }
    });
    this.doughnutChart4 = new Chart(this.doughnutCanvas4.nativeElement, {
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
