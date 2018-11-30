import { Component, Input } from '@angular/core';
import { Gnome } from '../../utils/models/Gnome.model';

@Component({
  selector: 'app-gnome',
  template: `<a routerLink="/gnome/{{data.id}}" class="gnome">
              <figure class="gnome-image">
              <img src={{data.thumbnail}} alt="{{data.name}}">
              </figure>
              <span class="gnome-overlay">
                <p>
                  <span class="gnome-info">Ver Información</span>
                </p>
              </span>
            </a>`,
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent {

  @Input() data: Gnome;

  constructor() { }

}
