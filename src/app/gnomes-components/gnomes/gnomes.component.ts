import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.reducer';
import { Gnome } from '../../utils/models/Gnome.model';
import { SetGnomes, UnsetGnomes, SetGnomesView } from '../../redux/actions/gnomes.actions';
import { Observable } from 'rxjs';
import { SetCounter } from '../../redux/actions/counter.action';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gnomes',
  template: `<div class="container">
                <app-gnome [data]="item" *ngFor="let item of gnomesView | async"></app-gnome>
              </div>
              <app-button-more></app-button-more>`,
  styleUrls: ['./gnomes.component.scss']
})
export class GnomesComponent implements OnInit, OnDestroy {

  gnomes: Gnome[];
  gnomesView: Observable<Gnome[]>;
  search: any;

  constructor(private _apiService: ApiService, private store: Store<AppState>) {
    this.search = this.store.select(state => state.search.search).subscribe(search => {
      console.log(search);
      this.gnomesView = this.store.select(state => state.gnomes.gnomesView).pipe(
        map(gnome => gnome.filter(gnomeFilter => gnomeFilter.name.toLocaleLowerCase().match(search.toLocaleLowerCase()))));
    });
   }

  ngOnInit(): void {
    this.setGnomes();
  }

  ngOnDestroy(): void {
    this.unsetGnomes();
  }

  unsetGnomes () {
    // this.store.dispatch(new UnsetGnomes());
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
