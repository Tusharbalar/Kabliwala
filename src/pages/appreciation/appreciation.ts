import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { HomePage } from '../homepage/homepage';

@Component({
  selector: 'appreciation',
  templateUrl: 'appreciation.html'
})

export class AppreciationPage {

  public title: string = "New Appreciation";

  constructor(public appCtrl: App) {

  }

  goToHome() {
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

}
