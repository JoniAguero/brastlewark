import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GnomesRoutes } from './gnomes.routes';
// import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: GnomesRoutes
        // canActivate: [AuthGuardService]
    }
];


@NgModule({

    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class GnomesRoutingModule { }

