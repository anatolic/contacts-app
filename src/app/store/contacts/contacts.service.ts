import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {StateKeys} from '../constants/store.models';
import {IContactsState} from '../../interface/initialState.interface';
import {of} from 'rxjs';
import {ContactInterface} from '../../interface/contact.interface';

const MOCK_CONTACTS = [
  {
    id: '1111',
    name: 'Contact 1',
    phoneNumber: '001122233440',
    address: 'Contact 1 address'
  },
  {
    id: '1112',
    name: 'Contact 2',
    phoneNumber: '001122233440',
    address: 'Contact 2 address'
  },
  {
    id: '1113',
    name: 'Contact 3',
    phoneNumber: '001122233440',
    address: 'Contact 3 address'
  },
  {
    id: '1114',
    name: 'Contact 4',
    phoneNumber: '001122233440',
    address: 'Contact 4 address'
  }
];


@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  public contacts$: Observable<IContactsState>;
  private mockData = MOCK_CONTACTS;

  constructor(private store: Store<{ [StateKeys.Contacts]: IContactsState }>) {
    this.contacts$ = this.store.select(StateKeys.Contacts);
  }

  public getAll(): Observable<Array<ContactInterface>> {
    return of(this.mockData);
  }
}
