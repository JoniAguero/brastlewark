import { Component, OnInit, Input } from '@angular/core';
import { Gnome } from '../../utils/models/Gnome.model';

@Component({
  selector: 'app-details-gnome',
  templateUrl: './details-gnome.component.html',
  styleUrls: ['./details-gnome.component.scss']
})
export class DetailsGnomeComponent implements OnInit {

  @Input() data: any;
  @Input() title: String;

  constructor() { }

  ngOnInit() {}

}
