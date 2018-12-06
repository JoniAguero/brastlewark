import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, public router: Router) { }

  initAuthListener() {
    this.afAuth.authState.subscribe( user => {
      console.log(user);
    });
  }

  createUser( nombre, email, password ) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      email, password
    );
  }

  loginUser(email, password) {
    return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(
      email, password
    );
  }

  logoutUser() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.afAuth.authState.pipe(map(
      fbUser => {
        if (fbUser === null) {
          this.router.navigate(['/login']);
        }
        return fbUser != null;
      }
    ));
  }

}
