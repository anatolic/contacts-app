import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsRoutingModule} from './contacts-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {EffectsModule} from "@ngrx/effects";
import {ContactsEffects} from "../../../store/contacts/effects";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {EditContactComponent} from "./components/contacts/edit-contact/edit-contact.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ContactsComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    EffectsModule.forFeature([ContactsEffects]),
    ReactiveFormsModule
  ],
  exports: [
    MatTableModule
  ]
})
export class ContactsModule {
}
