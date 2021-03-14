import {createAction, props} from '@ngrx/store';
import {ContactInterface} from '../../interface/contact.interface';

export const getAll = createAction('[Contacts] getAll');
export const loadSuccess = createAction('[Contacts] Contact Loaded Success', props<{ contacts: Array<ContactInterface> }>());
export const edit = createAction('[Contacts] Edit Contact', props<ContactInterface>());
export const add = createAction('[Contacts] Add Contact', props<ContactInterface>());
export const remove = createAction('[Contacts] Remove Contact', props<{ id: string }>());
