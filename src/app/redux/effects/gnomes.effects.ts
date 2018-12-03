import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as gnomesActions from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class GnomesEffects {

    constructor(private actions$: Actions, public _apiService: ApiService) {}

    @Effect()
    cargarGnomes$ = this.actions$.ofType(gnomesActions.LOAD_GNOMES_ALL)
        .pipe(
            switchMap( () => {
                return this._apiService.getAllData()
                    .pipe(
                        map((gnomes: any) => new gnomesActions.SetGnomesAll(gnomes.Brastlewark))
                    );
            })
        );
}

