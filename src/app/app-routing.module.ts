import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/**
 *
 */
const routes: Routes = [
  {
    path: 'sso',
    loadChildren: () => import( './modules/single-sign-on/single-sign-on.module' ).then((m) => m.SingleSignOnModule)
  },
  {
    path: 'home',
    loadChildren: () => import( './modules/home/home.module' ).then((m) => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

/**
 *
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
