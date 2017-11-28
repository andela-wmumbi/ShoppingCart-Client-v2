import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private apiUrl: string = environment.apiUrl;
  form: FormGroup;
  cart: any = [];
  itemId: number;
  itemDetails: any = [];
  itemQuantities: any = [];
  constructor(
    private http: Http,
    private router: Router,
    private cartservice: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      itemId: '',
    });
  }

  ngOnInit() {
    this.getItemDetails();
  }

  // getItems() {
  //   this.cartservice
  //     .getItems()
  //     .toPromise()
  //     .then(res => this.cart = res)
  //     .then((res) => {
  //       console.log(res);
  //       this.getItemDetails();
  //     });
  // }

  getItemDetails() {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    let that = this;
    const vals = Object.keys(cart).map(function (key) {
      that.itemQuantities.push(cart[key]);
    });
    this.cartservice
      .getItemDetails(Object.keys(cart))
      .toPromise()
      .then(res => this.itemDetails = res);
  }

  deleteItem(id: number) {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    console.log(cart);
    // this.cartservice
    //   .deleteItem(id)
    //   .toPromise()
    //   .then(res => this.cart = res)
    //   .then(() => {
    //     this.router.navigate(['/cartview']);
    //   });
  }
}
