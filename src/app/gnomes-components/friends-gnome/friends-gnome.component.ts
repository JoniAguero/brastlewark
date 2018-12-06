import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SetSearch, UnsetSearch } from 'src/app/redux/actions/search.action';
import { Gnome } from '../../utils/models/Gnome.model';
import { SetGnomeSelected } from 'src/app/redux/actions/gnomes.actions';
import { Router } from '@angular/router';
import { GnomeState } from '../../redux/reducers/gnomes.reducer';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-friends-gnome',
  template: `<div class="container-friends">
              <h4 class="friends-title">Friends</h4>
              <ng-container *ngIf="friends && friends.length > 0; else elseTemplate">
                <mat-chip-list class="friends-items">
                  <mat-chip class="friend-item" *ngFor="let friend of friends" (click)="goToFriend(friend)">{{friend}}</mat-chip>
                </mat-chip-list>
              </ng-container>
              <ng-template #elseTemplate>
                <p>No records found</p>
              </ng-template>
            </div>`,
  styleUrls: ['./friends-gnome.component.scss']
})
export class FriendsGnomeComponent implements OnDestroy {

  @Input() friends: string[];

  constructor(private router: Router, private store: Store<GnomeState>, public _apiService: ApiService) { }

  goToFriend(friend) {
    this.store.dispatch(new SetSearch(friend));
    this.store.select(state => state.search.search).subscribe(search => {
      this._apiService.getDataByName(search).subscribe(data => {
        this.store.dispatch(new SetGnomeSelected(data));
        this.router.navigate([`gnome/${data.id}`]);
      });
    }).unsubscribe();
  }

  ngOnDestroy(): void {
    this.store.dispatch(new UnsetSearch);
  }

}
