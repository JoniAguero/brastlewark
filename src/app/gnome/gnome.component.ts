import { Component, Input } from '@angular/core';
import { Gnome } from '../models/Gnome.model';

@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent {

  @Input() data: Gnome;

  constructor() { }

}
