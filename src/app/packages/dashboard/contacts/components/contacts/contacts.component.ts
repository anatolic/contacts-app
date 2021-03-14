import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ContactInterface} from '../../../../../interface/contact.interface';
import {edit, getAll, remove} from '../../../../../store/contacts/actions';
import {IContactsState} from '../../../../../interface/initialState.interface';
import {MatDialog} from '@angular/material/dialog';
import {EditContactComponent} from './edit-contact/edit-contact.component';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Array<ContactInterface>> = this.store.select(state => state.contacts);
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'update', 'delete'];
  public dataSource = new MatTableDataSource<ContactInterface>();

  constructor(private store: Store<IContactsState>,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(getAll());
    this.contacts$.subscribe(contactsArray => {
      // @ts-ignore
      const {contacts} = contactsArray;
      this.dataSource.data = contacts;
    });
  }

  public editContact(contact: ContactInterface): void {
    const dialogRef = this.dialog.open(EditContactComponent, {
      width: '400px',
      data: contact
    });

    dialogRef.afterClosed().subscribe(updatedContact => this.store.dispatch(edit(updatedContact)));
  }

  deleteContact(contactId: string): void {
    this.store.dispatch(remove({id: contactId}));
  }

  public filter(target: any): void {
    this.dataSource.filter = target.value;
  }
}
