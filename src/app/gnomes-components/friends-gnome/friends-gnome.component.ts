import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friends-gnome',
  templateUrl: './friends-gnome.component.html',
  styleUrls: ['./friends-gnome.component.scss']
})
export class FriendsGnomeComponent {

  @Input() friends: string[];

  constructor() { }

}
