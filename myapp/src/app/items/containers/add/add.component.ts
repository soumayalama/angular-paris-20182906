import { Component, OnInit } from '@angular/core';
import { diPublic } from '@angular/core/src/render3/di';
import { Item } from '../../../shared/Interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
      private collectionService: CollectionService,
      private router: Router
  ) { }

  ngOnInit() {
  }
      public add(item: Item): void {
          this.collectionService.add(item);
          this.router.navigate(['list']);
  }

}
