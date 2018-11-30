import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  template: `<div class="navbar" id="navbar">
              <a routerLink="/" class="navbar-link">
                <figure class="navbar-image" id="navbar-image">
                  <img src="../../../assets/images/icon.png" alt="icon">
                </figure>
              </a>
              <form class="navbar-form" [formGroup]="gnomeForm">
                <mat-form-field class="navbar-form-input">
                  <input matInput placeholder="Buscar Gnomo" value="" formControlName="name">
                </mat-form-field>
              </form>
              <div class="navbar-menu">
                <app-menu></app-menu>
              <div>
             <div>`,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  gnomeForm = this.fb.group({
    name: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formControlValueChanged();
  }

  formControlValueChanged() {
    this.gnomeForm.get('name').valueChanges.subscribe(
      (mode: string) => {
        console.log(mode);
      });
  }

}
