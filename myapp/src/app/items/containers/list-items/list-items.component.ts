import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/Interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
    public collection: Item[];

  constructor(
  private collectionService: CollectionService
) { }
  ngOnInit() {
      this.collection = this.collectionService.collection;
      console.log(this.collection);
  }

}
