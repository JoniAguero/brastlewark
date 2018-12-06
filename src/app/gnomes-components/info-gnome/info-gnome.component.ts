import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Gnome } from '../../utils/models/Gnome.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetGnomeSelected } from 'src/app/redux/actions/gnomes.actions';
import { GnomeState } from '../../redux/reducers/gnomes.reducer';

@Component({
  selector: 'app-info-gnome',
  templateUrl: './info-gnome.component.html',
  styleUrls: ['./info-gnome.component.scss']
})
export class InfoGnomeComponent implements OnInit, OnDestroy {

  gnomeSelected: Gnome;
  idSelected: number;
  subscription: Subscription;

  constructor(private store: Store<GnomeState>, private router: Router, private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.setGnomeSeletected();
    this.routeActive.params.subscribe(
      (params: Params) => {
        if (this.idSelected && parseInt(params.id, 0) !== this.idSelected) {
          this.store.select(state => state.gnomes.gnomes).pipe(
            map(gnome =>
              this.gnomeSelected = gnome.find(function (x) {
                return x.id === parseInt(params.id, 0);
              })
            )
          ).subscribe().unsubscribe();
          this.store.dispatch(new SetGnomeSelected(this.gnomeSelected));
          this.router.navigate([`gnome/${this.gnomeSelected.id}`]);
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
