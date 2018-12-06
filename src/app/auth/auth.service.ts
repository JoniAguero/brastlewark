import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  createUser( nombre, email, password ) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      email, password
    );
  }
}