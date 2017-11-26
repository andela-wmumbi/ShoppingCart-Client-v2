import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemdetailsService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: Http) { }
  getItem(id: number) {
    return this.http
      .get(`${this.apiUrl}/items/${id}`)
      .map((res: Response) => res.json())
      .catch(error => Observable.throw(error.json()));
  }

  addItem(data: Object): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/cart`, data)
      .map((res: Response) => console.log(res.json()))
      .catch(error => Observable.throw(error.json()));
  }
}
