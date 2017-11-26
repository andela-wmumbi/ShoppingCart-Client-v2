import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: Http,

  ) { }

  addUser(user: Object): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/users`, user)
      .map((res) => { console.log(res.json()); })
      .catch(error => this.handleError(error));
  }

  handleError(error): any {
  }
}
