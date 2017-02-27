import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ComplaintPage } from '../pages/complaint/complaint';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { SurveyPage } from '../pages/survey/survey'; 
import { CustomNavbar } from '../custom-component/navbar.component.ts';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
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
    AboutPage,
    ComplaintPage,
    SurveyPage,
    SuggestionPage,
    CustomNavbar
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
