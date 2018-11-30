import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';

import { GnomeComponent } from './gnome/gnome.component';
import { GnomesComponent } from './gnomes/gnomes.component';
import { InfoGnomeComponent } from './info-gnome/info-gnome.component';
import { DetailsGnomeComponent } from './details-gnome/details-gnome.component';

import { ApiService } from '../services/api.service';

@NgModule({
    imports: [AngularMaterialModule, CommonModule, AppRoutingModule, SharedModule],
    declarations: [GnomeComponent, GnomesComponent, InfoGnomeComponent, DetailsGnomeComponent],
    providers: [ApiService]
})
export class GnomesModule { }