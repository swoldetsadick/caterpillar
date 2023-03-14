import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Local Modules */
import { HomeRoutingModule } from './home-routing.module';
/* Local Components */
import { HomeComponent } from './home.component';

/**
 *
 */
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
