import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ComplaintPage } from '../complaint/complaint';
import { SuggestionPage } from '../suggestion/suggestion';
import { SurveyPage } from '../survey/survey'; 

// import service
import { SurveyService } from '../../service/survey.service';

@Component({
  selector: 'homepage',
  templateUrl: 'homepage.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,
              public surveyService: SurveyService,
              public appCtrl: App) {

  }

  ionViewWillEnter() {
    this.surveyService.getQuestion().subscribe((res) => {
      console.log("res", res);
    }, (err) => {
      console.log("Err", err);
    });
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
