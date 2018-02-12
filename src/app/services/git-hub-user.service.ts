import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class GitHubUserService {

  constructor(private http: Http) { }

  getGitHubUsers() : Observable<Object[]>{
    return this.http.get('https://api.github.com/users')
      .map(this.extractData)
      //.do(data => console.log('getUsers: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
