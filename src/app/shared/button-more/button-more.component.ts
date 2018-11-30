import { Component } from '@angular/core';
import { AppState } from 'src/app/redux/app.reducer';
import { Store } from '@ngrx/store';
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

  counter: number;

  constructor(private store: Store<AppState>) {}
  clickMore() {
    this.store.select(state => state.counter.counter).subscribe(data => {
      this.counter = data;
      console.log('Counter dentro: ', this.counter);
    });
    console.log('Counter fuera: ', this.counter);
    this.store.dispatch(new SetCounter(20));
    console.log('Counter fuera2: ', this.counter);
  }
}
