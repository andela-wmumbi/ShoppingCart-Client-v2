import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemsService {
  items: any = {};
  private apiUrl: string = environment.apiUrl;
  constructor(private http: Http) { }

  getItems(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/items`)
      .map((res: Response) => res.json())
      .catch(error => Observable.throw(error.json()));
  }

  addItem(data): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/items`, data)
      .map((res: Response) => res.json())
      .catch(error => Observable.throw(error.json()));
  }
}
