import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
const routes: Routes = [
  {
    path: '', component: SingleSignOnComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'manage', component: ManageComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'reset', component: ResetComponent},
      {path: 'update', component: UpdateComponent}
    ]
  }
];

/**
 *
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleSignOnRoutingModule {
}
