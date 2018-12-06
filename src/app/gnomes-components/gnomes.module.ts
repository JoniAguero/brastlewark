import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { SharedModule } from '../shared/shared.module';

import { GnomeComponent } from './gnome/gnome.component';
import { GnomesComponent } from './gnomes/gnomes.component';
import { InfoGnomeComponent } from './info-gnome/info-gnome.component';
import { DetailsGnomeComponent } from './details-gnome/details-gnome.component';

import { ApiService } from '../services/api.service';
import { FriendsGnomeComponent } from './friends-gnome/friends-gnome.component';
import { ProfessionsGnomeComponent } from './professions-gnome/professions-gnome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GnomesRoutingModule } from './gnomes-routing.module';

@NgModule({
    imports: [AngularMaterialModule, CommonModule, SharedModule, GnomesRoutingModule],
    declarations: [GnomeComponent, GnomesComponent, InfoGnomeComponent, DetailsGnomeComponent,
        FriendsGnomeComponent, ProfessionsGnomeComponent, DashboardComponent],
    providers: [ApiService]
})
export class GnomesModule { }
