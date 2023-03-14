import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
/* Local Modules */
import {SingleSignOnRoutingModule} from './single-sign-on-routing.module';
/* Local Components */
import {LoginComponent} from './components/login/login.component';
import {ManageComponent} from './components/manage/manage.component';
import {RegisterComponent} from './components/register/register.component';
import {ResetComponent} from './components/reset/reset.component';
import {SingleSignOnComponent} from './single-sign-on.component';
import {UpdateComponent} from './components/update/update.component';

/**
 *
 */
@NgModule({
  declarations: [
    LoginComponent,
    ManageComponent,
    RegisterComponent,
    ResetComponent,
    SingleSignOnComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SingleSignOnRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SingleSignOnModule {
}
