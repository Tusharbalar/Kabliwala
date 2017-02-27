import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComplaintPage } from '../complaint/complaint';
import { SuggestionPage } from '../suggestion/suggestion';
import { SurveyPage } from '../survey/survey'; 

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  constructor(public navCtrl: NavController,
              public appCtrl: App) {

  }

  goToComplaint() {
    this.appCtrl.getRootNav().setRoot(ComplaintPage);
  }

  goToSuggestion() {
    this.appCtrl.getRootNav().setRoot(SuggestionPage);
  }

  goToSurvey() {
    this.appCtrl.getRootNav().setRoot(SurveyPage);
  }

}
