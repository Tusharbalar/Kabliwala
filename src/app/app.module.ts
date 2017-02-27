import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/homepage/homepage';
import { ComplaintPage } from '../pages/complaint/complaint';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { SurveyPage } from '../pages/survey/survey'; 
import { CustomNavbar } from '../custom-component/navbar.component.ts';

//import service
import { SurveyService } from '../service/survey.service';
import { CustomHttpService } from '../service/custom.header.service';
import { RequestOptions, HttpModule, XHRBackend } from '@angular/http';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComplaintPage,
    SurveyPage,
    SuggestionPage,
    CustomNavbar
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComplaintPage,
    SurveyPage,
    SuggestionPage,
    CustomNavbar
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SurveyService, Storage,
  {
    provide: CustomHttpService,
    useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
      return new CustomHttpService(backend, defaultOptions);
    },
    deps: [XHRBackend, RequestOptions]
  }]
})
export class AppModule {}
