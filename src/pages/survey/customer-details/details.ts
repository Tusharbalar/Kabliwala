import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'customer-details',
  templateUrl: 'details.html'
})

export class CustomerDetails implements OnInit{

  public title: string = "Customer Details";
  private navData;
  private customerName;
  private customersEmail;
  private customersContactNo;

  private data;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {

  }

  ngOnInit() {
    this.navData = this.navParams.get("data");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.data = {
      customerName: this.customerName,
      customersEmail: this.customersEmail,
      customersContactNo: this.customersContactNo,
      results: this.navData
    }
    console.log("DSADAS", this.data)
  }

}
