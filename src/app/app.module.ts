import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/* Local Modules */
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './modules/home/home.module';
import {SingleSignOnModule} from './modules/single-sign-on/single-sign-on.module';
/* Local Components */
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';

/**
 *
 */
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    NgbModule,
    SingleSignOnModule,
    AppRoutingModule // Keep Last
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  exports: []
})
export class AppModule {
}
