import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../../homepage/homepage';
import { FormGroup, FormControl } from '@angular/forms';
import { SurveyService } from '../../../service/survey.service';

@Component({
  selector: 'customer-details',
  templateUrl: 'details.html'
})

export class CustomerDetails implements OnInit{

  public title: string = "Customer Details";
  private navData;
  details: FormGroup;

  private data;

  constructor(private viewCtrl: ViewController,
              public appCtrl: App,
              public surveyService: SurveyService,
              private navParams: NavParams) {

  }

  ngOnInit() {
    this.navData = this.navParams.get("data");
    this.details = new FormGroup({
      customerName: new FormControl(''),
      customersEmail: new FormControl(''),
      customersContactNo: new FormControl('')
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.details.value["results"] = this.navData;
    console.log("DSADAS", this.details.value);
    this.submitSurvey(this.details);
  }

  goToHome() {
    this.dismiss();
    this.appCtrl.getRootNav().setRoot(HomePage);
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
