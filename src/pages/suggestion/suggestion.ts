import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'suggestion',
  templateUrl: 'suggestion.html'
})

export class SuggestionPage {

  public title: string = "New Suggestion";

  constructor(public navCtrl: NavController) {

  }

}
