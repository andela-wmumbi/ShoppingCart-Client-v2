import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemsService {
  items: any = {};
  private apiBaseUrl: string = environment.apiBaseUrl;
  constructor(private http: Http) { }

  getItems() {
    return this.http.get(`${this.apiBaseUrl}/items`)
      .map((res: Response) => res.json())
      .catch(error => Observable.throw(error.json()));
  }
}
