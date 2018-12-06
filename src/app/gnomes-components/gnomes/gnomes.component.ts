import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { Gnome } from '../../utils/models/Gnome.model';
import { SetGnomes } from '../../redux/actions/gnomes.actions';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GnomeState } from '../../redux/reducers/gnomes.reducer';

@Component({
  selector: 'app-gnomes',
  template: `<div class="container">
                <app-gnome [data]="item" *ngFor="let item of gnomesView$ | async"></app-gnome>
              </div>
              <app-button-more></app-button-more>`,
  styleUrls: ['./gnomes.component.scss']
})
export class GnomesComponent implements OnInit {

  gnomes: Gnome[];
  gnomesView$: Observable<Gnome[]>;
  contador$: any;

  constructor(private _apiService: ApiService, private store: Store<GnomeState>) {}

  ngOnInit(): void {
    this.store.select(state => state.search.search).subscribe(search => {
      this.gnomesView$ = this.store.select(state => state.gnomes.gnomes).pipe(
        map(gnome => gnome.filter(gnomeFilter => gnomeFilter.name.toLocaleLowerCase().match(search.toLocaleLowerCase()))));
    });
    this.setGnomes();
  }
  setGnomes() {
    const subscription: Subscription = this.store.select(state => state.counter.counter).subscribe({
      next: (x) => this.contador$ = x
    });
    this._apiService.getData(this.contador$).subscribe(
      (data: any) => this.store.dispatch(new SetGnomes(data)),
      err => console.error(err),
      () => {
        subscription.unsubscribe();
      }
    );
  }

}
