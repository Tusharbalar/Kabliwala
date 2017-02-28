import { Component, Input } from '@angular/core';
import { Events, ViewController } from 'ionic-angular';

@Component({
  selector: 'nl-modal-navbar',
  template: `
    <ion-navbar color="primary">
      <ion-toolbar>
        <ion-buttons start>
          <button ion-button class="navBtnRight" (click)="dismiss()">
            <span color="light" showWhen="ios">Cancel</span>
            <ion-icon color="light" name="md-close" class="csBigIcon" showWhen="android,windows"></ion-icon>
          </button>
        </ion-buttons>
        <ion-title >
          <span>{{title | uppercase}}</span>
        </ion-title>
      </ion-toolbar>
    </ion-navbar>
  `
})

export class ModalNavbarComponent {

  @Input() title: string;
  @Input() complaint = {};

  constructor(public events: Events, private viewCtrl: ViewController) {

  }

  public dismiss(): void {
    this.viewCtrl.dismiss(this.complaint);
  }

}
