import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import service
import { SurveyService } from '../../service/survey.service';
import * as _ from 'underscore';

@Component({
  selector: 'survey',
  templateUrl: 'survey.html'
})

export class SurveyPage {

  public title: string = "Survey Page";
  public questions;

  // for fill starts
  fillStarts = [];
  finalArr = [];

  constructor(public navCtrl: NavController,
              public surveyService: SurveyService) { }

  ionViewWillEnter() {
    this.getQuestions();
  }

  getQuestions() {
    this.surveyService.getQuestionFromStorage().then((questions) => {
      this.questions = questions;
    });
  }

  onSubmit() {
    this.fillStarts.forEach((val, index) => {
      if (_.isNumber(val)) {
        this.finalArr.push({
          questionId: this.questions[index].id,
          optionId: val
        });
      } else {
        this.finalArr.push({
          questionId: this.questions[index].id,
          comments: val
        });
      }
    });
    this.submitSurvey(this.finalArr);
  }

  submitSurvey(data) {
    this.surveyService.save(data).subscribe((res) => {
      this.onSuccess(res);
    }, (err) => {
      this.onError(err);
    });
  }

  onSuccess(res) {
    console.log("res", res);
  }

  onError(err) {
    console.log("err", err);
  }

}
