import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { Gnome } from '../../utils/models/Gnome.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-gnome',
  templateUrl: './info-gnome.component.html',
  styleUrls: ['./info-gnome.component.scss']
})
export class InfoGnomeComponent implements OnInit {

  gnomeSelected: Gnome;

  constructor(private store: Store<AppState>, private router: Router) { }
  ngOnInit() {
    this.store.select(state => state.gnomes.gnomeSelected).subscribe(
      (data: any) => {
        if (data === undefined) {
          this.router.navigate(['/gnomes']);
        }
        this.gnomeSelected = data;
      },
      err => console.error(err)
    ).unsubscribe();
  }

}
