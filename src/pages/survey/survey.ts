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
  sel_count = 0;

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
      this.questions.forEach((val, index) => {
        if (val.questionTypeId == "1") {
          this.count++;
        }
      });
    });
  }

  onSubmit() {
    this.sel_count = 0;
    this.finalArr = [];
    this.buildArray();
  }

  buildArray() {
    this.fillStarts.forEach((val, index) => {
      if (isNaN(val)) {
        this.finalArr.push({
          questionId: this.questions[index].id,
          comments: val
        });
      } else {
        this.sel_count++;
        this.finalArr.push({
          questionId: this.questions[index].id,
          optionId: val
        });
      }
    });
    this.showErrMsg();
  }

  showErrMsg() {
    if (this.count != this.sel_count) {
      this.nl.showToast("Please rate all questions");
    } else {
      this.openCustomerDetailsModal();
    }
  }

  openCustomerDetailsModal() {
    let profileModal = this.modalCtrl.create(CustomerDetails, { data: this.finalArr });
    profileModal.onDidDismiss((res) => {
      this.finalArr = [];
      console.log("DSADASD", this.finalArr)
    });
    profileModal.present();
  }

}
