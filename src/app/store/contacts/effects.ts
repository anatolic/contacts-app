import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {ContactsService} from './contacts.service';
import {getAll, loadSuccess} from './actions';

@Injectable()
export class ContactsEffects {
  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {
  }

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(getAll),
    mergeMap(() => this.contactsService.getAll()
      .pipe(
        map(contacts => loadSuccess({contacts})),
        catchError(() => EMPTY)
      ))
    )
  );
}
