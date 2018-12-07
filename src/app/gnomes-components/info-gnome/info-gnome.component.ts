import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Gnome } from '../../utils/models/Gnome.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetGnomeSelected } from 'src/app/redux/actions/gnomes.actions';
import { GnomeState } from '../../redux/reducers/gnomes.reducer';
import { ApiService } from 'src/app/services/api.service';
import { SetLoadingAction } from 'src/app/redux/actions/ui.actions';
import { UnsetLoadingAction } from '../../redux/actions/ui.actions';

@Component({
  selector: 'app-info-gnome',
  templateUrl: './info-gnome.component.html',
  styleUrls: ['./info-gnome.component.scss']
})
export class InfoGnomeComponent implements OnInit, OnDestroy {

  loading$;
  gnomeSelected: Gnome;
  idSelected: number;

  subscriptionLoading: Subscription;
  subscriptionGnomeSelected: Subscription;

  constructor(private store: Store<GnomeState>,
              private router: Router,
              private routeActive: ActivatedRoute,
              public _apiService: ApiService) { }

  ngOnInit() {
    this.subscriptionLoading = this.store.select(state => state.ui.loading).subscribe({
      next: (x) => {
        this.loading$ = x;
        console.log(this.loading$);
      }
    });
    this.setGnomeSeletected();
    this.routeActive.params.subscribe(
      (params: Params) => {
        const id = parseInt(params.id, 0);
        if (this.idSelected && id !== this.idSelected) {
          this.store.dispatch(new SetLoadingAction());
          this._apiService.getDataById(id).subscribe(data => {
            this.gnomeSelected = data;
            this.idSelected = data.id;
            this.store.dispatch(new SetGnomeSelected(data));
            this.store.dispatch(new UnsetLoadingAction());
            this.router.navigate([`gnome/${data.id}`]);
          });
        }
      }
    );
  }
  setGnomeSeletected() {
    this.subscriptionGnomeSelected = this.store.select(state => state.gnomes.gnomeSelected).subscribe(
      (data: any) => {
        if (data === undefined) {
          this.router.navigate(['/gnomes']);
        } else {
          this.gnomeSelected = data;
          this.idSelected = data.id;
        }
      },
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.subscriptionGnomeSelected.unsubscribe();
    this.subscriptionLoading.unsubscribe();
  }
}
