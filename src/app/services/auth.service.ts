import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.reducer';
import { LoginUserAction, LogoutUserAction } from '../redux/actions/user.actions';
import { User } from '../utils/models/User.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { SetLoadingAction, UnsetLoadingAction } from '../redux/actions/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              public router: Router,
              public snackBar: MatSnackBar,
              private store: Store<AppState>,
              private afDB: AngularFirestore) { }

  initAuthListener() {
    this.afAuth.authState.subscribe( user => {
      if (user && user.uid !== null) {
        this.store.dispatch(new LoginUserAction(user.email));
      } else {
        this.store.dispatch(new LogoutUserAction());
      }
    });
  }
  createUser( nombre, email, password ) {
    this.store.dispatch(new SetLoadingAction());
    this.afAuth.auth.createUserWithEmailAndPassword(
      email, password
    ).then(res => {

      const user: User = {
        uid: res.user.uid,
        email: res.user.email,
        nombre: nombre
      };

      this.afDB.doc(`${ user.uid }/user`)
        .set( user )
        .then( () => this.router.navigate(['/']) )
        .catch( err => console.error(err)
      );
      this.store.dispatch(new LoginUserAction(res.user.email));
      this.store.dispatch(new UnsetLoadingAction());
      this.openSnackBar(res.user.email, 'User created');
      this.router.navigate(['/']);
    }).catch(err => {
      this.store.dispatch(new UnsetLoadingAction());
      this.openSnackBar(err.message, err.code);
    });
  }

  loginUser(email, password) {
    this.store.dispatch(new SetLoadingAction());
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(
      email, password
    ).then(res => {
      this.store.dispatch(new LoginUserAction(res.user.email));
      this.store.dispatch(new UnsetLoadingAction());
        this.openSnackBar(res.user.email, 'User logged');
        this.router.navigate(['/']);
      }).catch(err => {
        this.store.dispatch(new UnsetLoadingAction());
        this.openSnackBar(err.message, err.code);
      });
  }

  logoutUser() {
    this.store.dispatch(new LogoutUserAction());
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
