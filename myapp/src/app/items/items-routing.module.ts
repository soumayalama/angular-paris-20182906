import { NgModule } from '@angular/core';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './containers/add/add.component';
import { ListItem2Component } from './containers/list-item2/list-item2.component';
const appRoutes: Routes = [
    { path: 'list', component: ListItemsComponent },
    { path: 'add', component: AddComponent },
    { path: 'list2', component: ListItem2Component},
  ];
@NgModule({
  imports: [
        RouterModule.forChild(
            appRoutes
          )
  ],
   declarations: []
})
export class ItemsRoutingModule { }
