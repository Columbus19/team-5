import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page
{

  constructor(
    public event: Events
  ) { }

  single_notification() {
    this.event.publish('notification', 'This is a test notification', '/tabs/tab2');
  }

}
