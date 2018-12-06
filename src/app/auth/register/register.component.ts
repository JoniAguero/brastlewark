import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading: boolean;
  registerForm: FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(fb: FormBuilder,
              public _authService: AuthService,
              public router: Router,
              private store: Store<AppState>) {
    this.registerForm = fb.group({
      email: this.email,
      name: this.name,
      password: this.password
    });
  }

  ngOnInit() {
    this.store.select(state => state.ui.loading).subscribe(loading => {
      this.loading = loading;
    });
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    const { name, email, password } = this.registerForm.value;
    this._authService.createUser(name, email, password);
  }

}
