import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  loginForm: FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(fb: FormBuilder,
              public _authService: AuthService,
              public router: Router,
              private store: Store<AppState>) {
    this.loginForm = fb.group({
      email: this.email,
      password: this.password
    });
   }

  ngOnInit() {
    this.store.select(state => state.ui.loading).subscribe(loading => {
      this.loading = loading;
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this._authService.loginUser(email, password);
  }

}
