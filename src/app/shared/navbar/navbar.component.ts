import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<div class="navbar">
              <a routerLink="/gnomes">
                <figure class="navbar-image">
                  <img src="../../../assets/images/icon.png" alt="icon">
                </figure>
                </a>
                <div class="navbar-menu">
                  <app-menu></app-menu>
                <div>
             <div>`,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
