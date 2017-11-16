import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any = {};
  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.itemsService.getItems()
      .toPromise()
      .then(res => this.items = res);

    console.log(this.items);
  }
}
