import { Events, ToastController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
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

  constructor(
    public event: Events,
    public toastController: ToastController,
    public router: Router //Router to link to the other pages using the app-routing.module.ts file
  ) { }

  //Notification trigger
  single_notification() {
    this.event.publish('notification', 'We noticed you have missed 2 payments. Contact us for help.', '/tabs/tab2');
  }

  //Loads the income page
  income_page(){
    this.router.navigateByUrl('/income');
  }

  //Loads the credit debt page
  credit_debt_page(){
    this.router.navigateByUrl('/credit-debt');
  }

  ngOnInit() {
    //Declaring a doughnut chart and applying the settings and data
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Income", "Debt"], //Labels for the legend
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
          text: "Expenses", //Graph title
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
            //Function to have the data on hove add '$' to the string
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

  async toastBackgroundInformation() {
    const toast = await this.toastController.create({
      header: 'How did we calculate this value?',
      message: 'Here goes a description on how we calculated a value. This message will enable clients to learn (or be reminded of) the factors that go into their payments.',
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }
}
