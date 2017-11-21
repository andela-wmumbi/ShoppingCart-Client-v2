import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemdetailsService } from '../services/itemdetails.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {
  itemId: number;
  item: any = [];
  constructor(
    private route: ActivatedRoute,
    private itemservice: ItemdetailsService,
  ) {
    this.itemId = +this.route.snapshot.params['id'];
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
}
