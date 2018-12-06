import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Gnome } from '../../utils/models/Gnome.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetGnomeSelected } from 'src/app/redux/actions/gnomes.actions';
import { GnomeState } from '../../redux/reducers/gnomes.reducer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-info-gnome',
  templateUrl: './info-gnome.component.html',
  styleUrls: ['./info-gnome.component.scss']
})
export class InfoGnomeComponent implements OnInit, OnDestroy {

  gnomeSelected: Gnome;
  idSelected: number;
  subscription: Subscription;

  constructor(private store: Store<GnomeState>,
              private router: Router,
              private routeActive: ActivatedRoute,
              public _apiService: ApiService) { }

  ngOnInit() {
    this.setGnomeSeletected();
    this.routeActive.params.subscribe(
      (params: Params) => {
        const id = parseInt(params.id, 0);
        if (this.idSelected && id !== this.idSelected) {
          this._apiService.getDataById(id).subscribe(data => {
            this.gnomeSelected = data;
            this.idSelected = data.id;
            this.store.dispatch(new SetGnomeSelected(data));
            this.router.navigate([`gnome/${data.id}`]);
          });
        }
      }
    );
  }
  setGnomeSeletected() {
    this.subscription = this.store.select(state => state.gnomes.gnomeSelected).subscribe(
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
    this.subscription.unsubscribe();
  }
}
