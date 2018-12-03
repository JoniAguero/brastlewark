import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { Gnome } from '../../utils/models/Gnome.model';
import { Router } from '@angular/router';
import { Observer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-gnome',
  templateUrl: './info-gnome.component.html',
  styleUrls: ['./info-gnome.component.scss']
})
export class InfoGnomeComponent implements OnInit, OnDestroy {

  gnomeSelected: Gnome;
  subscription: Subscription;

  constructor(private store: Store<AppState>, private router: Router) { }
  ngOnInit() {
    this.subscription = this.store.select(state => state.gnomes.gnomeSelected).subscribe(
      (data: any) => {
        if (data === undefined) {
          this.router.navigate(['/gnomes']);
        }
        this.gnomeSelected = data;
        console.log(this.gnomeSelected);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
