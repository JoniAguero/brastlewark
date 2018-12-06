import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { Gnome } from '../../utils/models/Gnome.model';
import { SetGnomes, SetGnomesView } from '../../redux/actions/gnomes.actions';
import { Observable } from 'rxjs';
import { SetCounter } from '../../redux/actions/counter.action';
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

  constructor(private _apiService: ApiService, private store: Store<GnomeState>) {}

  ngOnInit(): void {
    this.store.select(state => state.search.search).subscribe(search => {
      this.gnomesView$ = this.store.select(state => state.gnomes.gnomesView).pipe(
        map(gnome => gnome.filter(gnomeFilter => gnomeFilter.name.toLocaleLowerCase().match(search.toLocaleLowerCase()))));
    });
    this.setGnomes();
  }
  setGnomes() {
    this._apiService.getAllData().subscribe(
      (data: any) => this.gnomes = data.Brastlewark,
      err => console.error(err),
      () => {
        this.store.dispatch(new SetGnomes(this.gnomes));
        this.store.dispatch(new SetCounter(0));
        this.store.select(state => state.counter.counter).subscribe({
          next: (x) => {
            this.store.dispatch(new SetGnomesView(x));
          }
        });
      }
    );
  }

}
