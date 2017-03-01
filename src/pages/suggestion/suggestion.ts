import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { AppreciationPage } from '../appreciation/appreciation';

@Component({
  selector: 'suggestion',
  templateUrl: 'suggestion.html'
})

export class SuggestionPage extends AppreciationPage {

  public title: string = "New Suggestion";

  constructor(public appCtrl: App) {
    super(appCtrl);
  }

}
