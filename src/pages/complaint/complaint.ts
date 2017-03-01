import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { AppreciationPage } from '../appreciation/appreciation';

@Component({
  selector: 'complaint',
  templateUrl: 'complaint.html'
})

export class ComplaintPage extends AppreciationPage {

  public title: string = "New Complaint";

  constructor(public appCtrl: App) {
    super(appCtrl);
  }

}
