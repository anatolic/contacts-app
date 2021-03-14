import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ContactInterface} from '../../../../../../interface/contact.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  templateUrl: './edit-contact.component.html',
  styles: [`
    ::ng-deep .mat-form-field {
      width: 100%;
    }
  `]
})

export class EditContactComponent {
  public editContactForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactInterface,
    public fb: FormBuilder) {
    this.buildEditContactForm(data);
  }

  private buildEditContactForm(data: ContactInterface): void {
    this.editContactForm = this.fb.group(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
