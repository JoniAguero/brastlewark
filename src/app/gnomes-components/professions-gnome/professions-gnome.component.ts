import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professions-gnome',
  templateUrl: './professions-gnome.component.html',
  styleUrls: ['./professions-gnome.component.scss']
})
export class ProfessionsGnomeComponent {

  @Input() professions: string [];

  constructor() { }

}
