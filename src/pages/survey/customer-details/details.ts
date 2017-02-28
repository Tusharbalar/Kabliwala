import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'customer-details',
  templateUrl: 'details.html'
})

export class CustomerDetails implements OnInit{

  public title: string = "Customer Details";

  constructor(private viewCtrl: ViewController) {

  }

  ngOnInit() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
