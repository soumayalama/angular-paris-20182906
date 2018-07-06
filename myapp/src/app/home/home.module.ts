import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './comtainers/home/home.component';
import { HomeRoutingModule } from './comtainers/home/home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule

  ],
  declarations: [HomeComponent],
})
export class HomeModule { }

