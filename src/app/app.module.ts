import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/homepage/homepage';
import { ComplaintPage } from '../pages/complaint/complaint';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { SurveyPage } from '../pages/survey/survey';
import { ModalNavbarComponent } from '../custom-component/modal.navbar.component';
import { CustomNavbar } from '../custom-component/navbar.component.ts';

import { CustomerDetails } from '../pages/survey/customer-details/details';
import { Ionic2RatingModule } from 'ionic2-rating';

//import service
import { SurveyService } from '../service/survey.service';
import { CustomHttpService } from '../service/custom.header.service';
import { CustomService } from '../service/custom.service';
import { RequestOptions, HttpModule, XHRBackend } from '@angular/http';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComplaintPage,
    SurveyPage,
    SuggestionPage,
    CustomNavbar,
    CustomerDetails,
    ModalNavbarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComplaintPage,
    SurveyPage,
    SuggestionPage,
    CustomNavbar,
    CustomerDetails,
    ModalNavbarComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SurveyService, Storage, CustomService,
  {
    provide: CustomHttpService,
    useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
      return new CustomHttpService(backend, defaultOptions);
    },
    deps: [XHRBackend, RequestOptions]
  }]
})
export class AppModule {}
