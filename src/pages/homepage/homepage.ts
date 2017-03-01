import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ComplaintPage } from '../complaint/complaint';
import { SuggestionPage } from '../suggestion/suggestion';
import { SurveyPage } from '../survey/survey'; 

// import service
import { SurveyService } from '../../service/survey.service';
import { Storage } from '@ionic/storage';
import { CustomService } from '../../service/custom.service';

@Component({
  selector: 'homepage',
  templateUrl: 'homepage.html'
})

export class HomePage {

  questions;

  constructor(public navCtrl: NavController,
              public surveyService: SurveyService,
              public storage: Storage,
              private nl: CustomService,
              public appCtrl: App) {

  }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get("questions").then((questions) => {
        console.log("AAAA", questions);
        this.questions = questions;
        if (questions == null) {
          this.getSurveyQuestion();
        }
      });
    });
    // this.getSurveyOption();
  }

  private getSurveyQuestion() {
    this.nl.showLoader();
    this.surveyService.getQuestion().subscribe((res) => {
      console.log("res", res);
      this.nl.hideLoader();
      this.questions = JSON.stringify(res);
      this.storage.set('questions', JSON.stringify(res));
    }, (err) => {
      console.log("Err", err);
      this.onError(err);
    });
  }

  // private getSurveyOption() {
  //   this.surveyService.getOptions().subscribe((res) => {
  //     console.log("res", res);
  //     this.storage.set('options', JSON.stringify(res));
  //   }, (err) => {
  //     console.log("Err", err);
  //     this.onError(err);
  //   });
  // }

  onError(err) {
    this.nl.hideLoader();
    this.nl.onError(err);
  }

  goToComplaint() {
    this.appCtrl.getRootNav().setRoot(ComplaintPage);
  }

  goToSuggestion() {
    this.appCtrl.getRootNav().setRoot(SuggestionPage);
  }

  goToSurvey() {
    console.log("SSSS", this.questions)
    this.appCtrl.getRootNav().setRoot(SurveyPage);
  }

}
