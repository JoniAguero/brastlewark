import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: string;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(state => state.user.user).subscribe(data => {
      this.user = data;
    }).unsubscribe();
  }

  goGnomes() {
    this.router.navigate(['/gnomes']);
  }

}
