import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { map } from 'rxjs/operators';
import { SetSearch, UnsetSearch } from 'src/app/redux/actions/search.action';
import { Gnome } from '../../utils/models/Gnome.model';
import { SetGnomeSelected } from 'src/app/redux/actions/gnomes.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-friends-gnome',
  templateUrl: './friends-gnome.component.html',
  styleUrls: ['./friends-gnome.component.scss']
})
export class FriendsGnomeComponent implements OnDestroy {

  @Input() friends: string[];
  gnomeSearch: Gnome;

  constructor(private router: Router, private store: Store<AppState>) { }

  goToFriend(friend) {
    this.store.dispatch(new SetSearch(friend));
    this.store.select(state => state.search.search).subscribe(search => {
      this.store.select(state => state.gnomes.gnomes).pipe(
        map(gnome =>
          this.gnomeSearch = gnome.find(function (x) {
            return x.name === search;
          })
        )
      ).subscribe().unsubscribe();
    }).unsubscribe();
    this.store.dispatch(new SetGnomeSelected(this.gnomeSearch));
    this.router.navigate([`gnome/${this.gnomeSearch.id}`]);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new UnsetSearch);
  }

}
