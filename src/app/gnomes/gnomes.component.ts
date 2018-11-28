import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.reducer';
import { Gnome } from '../models/Gnome.model';
import { SetGnomes, UnsetGnomes, SetGnomesView } from '../redux/actions/gnomes.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gnomes',
  template: `<div class="container">
                  <app-gnome [data]="item" *ngFor="let item of gnomesView | async"></app-gnome>
                </div>`,
  styleUrls: ['./gnomes.component.scss']
})
export class GnomesComponent implements OnInit, OnDestroy {

  gnomes: Gnome[];
  gnomesView: Observable<Gnome[]>;

  constructor(private _apiService: ApiService, private store: Store<AppState>) {
    this.gnomesView = this.store.select(state => state.gnomes.gnomesView);
   }

  ngOnInit(): void {
    this.setGnomes();
  }

  ngOnDestroy(): void {
    this.unsetGnomes();
  }

  unsetGnomes () {
    this.store.dispatch(new UnsetGnomes());
  }

  setGnomes() {
    this._apiService.getAllData().subscribe(
      (data: any) => this.gnomes = data.Brastlewark,
      err => console.error(err),
      () => {
        this.store.dispatch(new SetGnomes(this.gnomes));
        this.store.dispatch(new SetGnomesView(this.gnomes));
      }
    );
  }

}
