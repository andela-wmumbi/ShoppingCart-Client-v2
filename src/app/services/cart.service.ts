import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class CartService implements OnInit {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/cart`)
      .map((res: Response) => res.json())
      .catch(error => Observable.throw(error.json()));
  }
}
