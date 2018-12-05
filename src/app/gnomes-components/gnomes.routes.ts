import { Routes } from '@angular/router';
import { GnomesComponent } from './gnomes/gnomes.component';
import { InfoGnomeComponent } from './info-gnome/info-gnome.component';

export const GnomesRoutes: Routes = [

    { path: '', component: GnomesComponent },
    { path: 'gnomes', component: GnomesComponent },
    { path: 'gnome/:id', component: InfoGnomeComponent },
    { path: '**', redirectTo: '' }

];
