import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import { LogoutUserAction } from '../../redux/actions/user.actions';
import { User } from '../../utils/models/User.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: User;

  constructor(public router: Router, private store: Store<AppState>, public _authService: AuthService) { }

  ngOnInit(): void {
    this.store.select(state => state.user.user).subscribe(data => {
      this.user = data;
    });
  }

  goGnomes() {
    this.router.navigate(['/gnomes']);
  }

  logout() {
    this.store.dispatch(new LogoutUserAction());
    this._authService.logoutUser();
  }

}
