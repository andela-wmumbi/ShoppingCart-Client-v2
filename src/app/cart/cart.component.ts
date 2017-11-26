import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private apiUrl: string = environment.apiUrl;
  item: any = [];
  constructor(
    private http: Http,
    private cartservice: CartService,
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.cartservice
      .getItems()
      .toPromise()
      .then(res => this.item = res)
      .then(() => {
          this.getItemDetails();
        });
  }

  getItemDetails() {
    const itemKeys = this.item.keys();
    console.log(itemKeys);
  }


}
