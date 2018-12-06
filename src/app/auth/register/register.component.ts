import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(fb: FormBuilder, public _authService: AuthService,
    public snackBar: MatSnackBar, public router: Router) {
    this.registerForm = fb.group({
      email: this.email,
      name: this.name,
      password: this.password
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {}
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    const { name, email, password } = this.registerForm.value;
    this._authService.createUser(name, email, password)
      .then(res => {
        console.log(res);
        this.openSnackBar(res.user.email, 'User created');
        this.router.navigate(['/']);
      })
      .catch(err => this.openSnackBar(err.message, err.code));
  }

}
