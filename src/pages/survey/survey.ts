import { Component } from '@angular/core';
import { NavController, ModalController, App } from 'ionic-angular';
import { HomePage } from '../homepage/homepage';

// import service
import { SurveyService } from '../../service/survey.service';
import { CustomService } from '../../service/custom.service';

// import modal
import { CustomerDetails } from './customer-details/details';

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
  count = 0;

  constructor(public navCtrl: NavController,
              public nl: CustomService,
              public appCtrl: App,
              public modalCtrl: ModalController,
              public surveyService: SurveyService) { }

  ionViewWillEnter() {
    this.getQuestions();
  }

  goToHome() {
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  getQuestions() {
    this.surveyService.getQuestionFromStorage().then((questions) => {
      this.questions = questions;
      console.log(this.questions);
      this.questions.forEach((val, index) => {
        if (val.questionTypeId == "1") {
          this.count++;
        }
      });
    });
  }

  onSubmit() {
    let test = 0;
    this.finalArr = [];
    this.fillStarts.forEach((val, index) => {
      if (isNaN(val)) {
        this.finalArr.push({
          questionId: this.questions[index].id,
          comments: val
        });
      } else {
        test++;
        this.finalArr.push({
          questionId: this.questions[index].id,
          optionId: val
        });
      }
    });
    console.log("AAAA", this.count, test)
    if (this.count != test) {
      this.nl.showToast("Please rate all questions");
    } else {
      let profileModal = this.modalCtrl.create(CustomerDetails, { data: this.finalArr });
      profileModal.onDidDismiss((res) => {
        this.finalArr = [];
        console.log("DSADASD", this.finalArr)
      });
      profileModal.present();
    }
  }

}
