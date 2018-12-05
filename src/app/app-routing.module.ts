import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { GnomesComponent } from './gnomes-components/gnomes/gnomes.component';
import { InfoGnomeComponent } from './gnomes-components/info-gnome/info-gnome.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
    { path: 'gnomes', component: GnomesComponent },
    { path: 'gnome/:id', component: InfoGnomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'gnomes' }
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

