import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemdetailsService } from '../services/itemdetails.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {
  form: FormGroup;
  itemId: number;
  item: any = [];
  data: {};
  cart: any = [];
  snackBarConfig: any;
  constructor(
    private route: ActivatedRoute,
    private itemservice: ItemdetailsService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.itemId = +this.route.snapshot.params['id'];
    this.form = this.formBuilder.group({
      quantity: []
    });
    this.data = { id: '', quantity: '' };
  }

  ngOnInit() {
    this.getItem(this.itemId);
  }

  getItem(id: number) {
    this.itemservice
      .getItem(id)
      .toPromise()
      .then(res => this.item = res);
  }

  addItem(form) {
    this.data['id'] = this.itemId;
    this.data['quantity'] = form.value.quantity;
    this.itemservice
      .addItem(this.data)
      .toPromise()
      .then(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}
