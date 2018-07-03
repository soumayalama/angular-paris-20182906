import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ListItemsComponent } from './items/containers/list-items/list-items.component';
import { ItemsModule } from './items/items.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
PageNotFoundModule,
ItemsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
