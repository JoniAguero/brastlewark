import { Component, Input } from '@angular/core';
import { Gnome } from '../../utils/models/Gnome.model';
import { SetGnomeSelected } from '../../redux/actions/gnomes.actions';
import { AppState } from 'src/app/redux/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-gnome',
  template: `<a routerLink="/gnome/{{data.id}}" class="gnome" (click)="setGnomeSelected()">
              <figure class="gnome-image">
                <img src={{data.thumbnail}} alt="{{data.name}}">
              </figure>
              <span class="gnome-overlay">
                <p>
                  <span class="gnome-info">Ver Información</span>
                </p>
              </span>
              <span class="gnome-name">
                <p>
                  <span class="gnome-name-display">{{data.name}}</span>
                </p>
              </span>
            </a>`,
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent {

  @Input() data: Gnome;

  constructor(private store: Store<AppState>) { }

  setGnomeSelected() {
    this.store.dispatch(new SetGnomeSelected(this.data));
  }

}
