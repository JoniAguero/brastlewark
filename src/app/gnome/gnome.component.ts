import { Component, OnInit, Input } from '@angular/core';
import { Gnome } from '../models/Gnome.model';

@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent implements OnInit {

  @Input() data: Gnome;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
