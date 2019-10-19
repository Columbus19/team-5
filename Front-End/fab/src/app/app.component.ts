import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private event: Events,
    private router: Router,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
    this.subscribeToNavigation();
    this.subscribeToNotifications();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  subscribeToNavigation()
  {
    this.event.subscribe('navigate', path => {
      this.router.navigateByUrl(path);
    });
  }

  subscribeToNotifications()
  {
    this.event.subscribe('notification', text => {
      // Schedule a single notification
      this.localNotifications.schedule({
        id: 1,
        text: text,
        sound: '',
        trigger: { at: new Date(new Date().getTime() + 3600) },
        data: { path: '/tabs/tab2' }
      });
    });
  }
}
