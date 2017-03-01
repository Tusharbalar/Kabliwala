import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CustomHttpService } from './custom.header.service';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SurveyService {

  private baseUrl: string = "http://kabliwalas.cloud.cms500.com";

  constructor(private http: CustomHttpService,
              public storage: Storage) { }

  getQuestion() {
    return this.http.get(this.baseUrl + "/survey/question")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getOptions() {
    return this.http.get(this.baseUrl + "/survey/options")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getQuestionFromStorage() {
    return this.storage.get("questions").then((questions) => {
      return JSON.parse(questions);
    });
  }

  save(data) {
    return this.http.post(this.baseUrl + "/survey/result", data)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status === 204 || res.status === 400) { return res; }
    let body = res.json();
    return body || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      // const body = error.json() || '';
      // const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''}`;
      if (error.status === 0) {
        errMsg = `${error.status} - "Internal server error"`;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}