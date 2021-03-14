import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppStoreModule} from './store/store.module';
import {EffectsModule} from "@ngrx/effects";
import {ContactsEffects} from "./store/contacts/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // NGRX
    AppStoreModule,
    EffectsModule.forRoot([ContactsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
