import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { HomePage } from '../pages/homepage/homepage';

@Component({
  selector: 'nl-navbar',
  template: `
    <ion-navbar color="primary">
      <ion-toolbar>
        <ion-title>
          <span>{{title | uppercase}}</span>
        </ion-title>
      </ion-toolbar>
    </ion-navbar>
  `,
  styles: [`

  `]
})

export class CustomNavbar {

  @Input() title: string;

  constructor(public appCtrl: App) {

  }

  goToHome() {
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

}
