import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ComplaintPage } from '../complaint/complaint';
import { SuggestionPage } from '../suggestion/suggestion';
import { SurveyPage } from '../survey/survey'; 

@Component({
  selector: 'homepage',
  templateUrl: 'homepage.html'
})

export class HomePage {

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
