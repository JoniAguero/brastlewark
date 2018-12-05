import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './gnomes-components/dashboard/dashboard.component';
import { GnomesRoutes } from './gnomes-components/gnomes.routes';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {   path: '',
        component: DashboardComponent,
        children: GnomesRoutes
    },
    { path: '**', redirectTo: '' }

];


@NgModule({

    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}

