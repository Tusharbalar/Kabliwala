import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'complaint',
  templateUrl: 'complaint.html'
})

export class ComplaintPage {

  public title: string = "New Complaint";

  constructor(public navCtrl: NavController) {

  }

}
