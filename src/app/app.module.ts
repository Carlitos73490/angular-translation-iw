import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {I18nModule} from "./i18n/i18n.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [I18nModule.setLocale(), I18nModule.setLocaleId()],
  bootstrap: [AppComponent]
})
export class AppModule { }
