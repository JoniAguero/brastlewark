import { Component } from '@angular/core';
import { AppState } from 'src/app/redux/app.reducer';
import { Store } from '@ngrx/store';
import { SetGnomesView } from 'src/app/redux/actions/gnomes.actions';
import { SetCounter } from 'src/app/redux/actions/counter.action';

@Component({
  selector: 'app-button-more',
  template: `<div class="button-more">
              <button mat-icon-button (click)="clickMore()">
                <mat-icon>arrow_drop_down</mat-icon>
              </button>
             </div>`,
  styleUrls: ['./button-more.component.scss']
})
export class ButtonMoreComponent {

  constructor(private store: Store<AppState>) {}

  clickMore() {
    this.store.select(state => state.counter.counter).subscribe({
      next: (x) => this.store.dispatch(new SetGnomesView(x + 20))
    });
  }

}
