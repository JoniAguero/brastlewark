import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { Gnome } from '../../utils/models/Gnome.model';

@Component({
  selector: 'app-info-gnome',
  templateUrl: './info-gnome.component.html',
  styleUrls: ['./info-gnome.component.scss']
})
export class InfoGnomeComponent implements OnInit {

  gnomeSelected: Gnome;

  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.store.select(state => state.gnomes.gnomeSelected).subscribe(
      (data: any) => {
        this.gnomeSelected = data;
      },
      err => console.error(err)
    ).unsubscribe();
  }

}
