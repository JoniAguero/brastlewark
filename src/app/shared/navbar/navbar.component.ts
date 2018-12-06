import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { SetSearch } from 'src/app/redux/actions/search.action';

@Component({
  selector: 'app-navbar',
  template: `<div class="navbar" id="navbar">
              <a routerLink="/" class="navbar-link">
                <figure class="navbar-image" id="navbar-image">
                  <img src="../../../assets/images/icon.png" alt="icon">
                </figure>
              </a>
              <form class="navbar-form" [formGroup]="gnomeForm">
                <mat-form-field class="navbar-form-input" [color]="color">
                  <input matInput placeholder="Search Gnome" value="" formControlName="name">
                </mat-form-field>
              </form>
              <div class="navbar-menu">
                <app-menu></app-menu>
              <div>
             <div>`,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  color = 'accent';
  gnomeForm = this.fb.group({
    name: ['']
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.formControlValueChanged();
  }

  formControlValueChanged() {
    this.gnomeForm.get('name').valueChanges.subscribe(
      (search: string) => {
        this.store.dispatch(new SetSearch(search));
      });
  }

}
