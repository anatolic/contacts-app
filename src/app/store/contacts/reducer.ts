import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {add, edit, getAll, loadSuccess, remove} from './actions';
import {IContactsState} from '../../interface/initialState.interface';

export const initialState: IContactsState = {
  contacts: []
};

// tslint:disable-next-line:variable-name
const _contactsReducer = createReducer(
  initialState,
  on(getAll, (state) => state),

  on(loadSuccess, (state, payload) => {
    const {contacts} = payload;

    return {...state, contacts: [...contacts]};
  }),

  on(edit, (state, payload) => {
    const nonEditedContacts = state.contacts.filter(contact => contact.id !== payload.id);
    console.log({...state, contacts: [...nonEditedContacts, payload]});

    return {...state, contacts: [...nonEditedContacts, payload]};
  }),

  on(add, (state, payload) => {
    const {contacts} = state;

    return {...state, contacts: [...contacts, payload]};
  }),

  on(remove, (state, payload) => {
    const updatedContact = state.contacts.filter(contact => contact.id !== payload.id);

    return {...state, contacts: [...updatedContact]};
  })
);

export function contactsReducer(state: IContactsState | undefined, action: Action): IContactsState {
  return _contactsReducer(state, action);
}
