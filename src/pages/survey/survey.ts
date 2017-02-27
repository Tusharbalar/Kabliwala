import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'survey',
  templateUrl: 'survey.html'
})

export class SurveyPage {

  public title: string = "Survey Page";

  constructor(public navCtrl: NavController) {

  }

}
