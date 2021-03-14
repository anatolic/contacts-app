import {NgModule} from '@angular/core';
import {contactsReducer} from './contacts/reducer';
import {StoreModule} from '@ngrx/store';
import {StateKeys} from './constants/store.models';

@NgModule({
  imports: [
    StoreModule.forRoot({[StateKeys.Contacts]: contactsReducer})
  ],
  exports: [
    StoreModule
  ]
})

export class AppStoreModule {
}
