import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ComplaintPage } from '../complaint/complaint';
import { SuggestionPage } from '../suggestion/suggestion';
import { SurveyPage } from '../survey/survey'; 

// import service
import { SurveyService } from '../../service/survey.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'homepage',
  templateUrl: 'homepage.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,
              public surveyService: SurveyService,
              public storage: Storage,
              public appCtrl: App) {

  }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      console.log("Storage is ready to use")
    });
    this.getSurveyQuestion();
    this.getSurveyOption();
  }

  private getSurveyQuestion() {
    this.surveyService.getQuestion().subscribe((res) => {
      console.log("res", res);
      this.storage.set('questions', JSON.stringify(res));
    }, (err) => {
      console.log("Err", err);
    });
  }

  private getSurveyOption() {
    this.surveyService.getOptions().subscribe((res) => {
      console.log("res", res);
      this.storage.set('options', JSON.stringify(res));
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
