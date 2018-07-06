import { Component, OnInit } from '@angular/core';
import { Collection2Service } from '../../../core/services/collection2.service';
import { Item2 } from '../../../shared/Interfaces/item2';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list-item2',
  templateUrl: './list-item2.component.html',
  styleUrls: ['./list-item2.component.css']
})
export class ListItem2Component implements OnInit {
    public collection:  Observable<Item2[]>;
  constructor(
      private collection2services: Collection2Service
  ) { }

  ngOnInit() {
      this.collection = this.collection2services.collection;
  }

}
