import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<app-navbar></app-navbar>
              <div class="dashboard-container">
                <router-outlet></router-outlet>
              </div>
             <app-footer></app-footer>`,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor() { }

}
