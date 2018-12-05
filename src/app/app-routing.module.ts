import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { GnomesComponent } from './gnomes-components/gnomes/gnomes.component';
import { InfoGnomeComponent } from './gnomes-components/info-gnome/info-gnome.component';

const routes: Routes = [
    { path: 'gnomes', component: GnomesComponent },
    { path: 'gnome/:id', component: InfoGnomeComponent },
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

