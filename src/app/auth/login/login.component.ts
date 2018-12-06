import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { AuthService } from '../../services/auth.service';
import { LoginUserAction } from 'src/app/redux/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(fb: FormBuilder, public _authService: AuthService,
    public snackBar: MatSnackBar, public router: Router,
    private store: Store<AppState>) {
    this.loginForm = fb.group({
      email: this.email,
      password: this.password
    });
   }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this._authService.loginUser(email, password)
      .then(res => {
        this.store.dispatch(new LoginUserAction(res.user.email));
        this.openSnackBar(res.user.email, 'User logged');
        this.router.navigate(['/']);
      })
      .catch(err => this.openSnackBar(err.message, err.code));
  }

}
