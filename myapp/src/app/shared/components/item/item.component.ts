import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../Interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item: Item;
public state = State;
  constructor(
      private collectionservice: CollectionService
  ) { }

  ngOnInit() {
  }
  /**
   * name
   */
    public changeState(etat: State): void {
    this.item.state = etat;
    this.collectionservice.update(this.item);
 }
 public delete(): void {
     this.collectionservice.delete(this.item);
 }
}


