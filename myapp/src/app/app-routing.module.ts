import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    // { path: 'list', component: ListItemsComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
      )
  ],
  declarations: []
})
export class AppRoutingModule { }
