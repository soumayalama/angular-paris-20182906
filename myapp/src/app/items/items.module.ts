import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './containers/add/add.component';
import { ListItem2Component } from './containers/list-item2/list-item2.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, AddComponent, ListItem2Component],
//   exports: [ListItemsComponent]
})
export class ItemsModule { }
