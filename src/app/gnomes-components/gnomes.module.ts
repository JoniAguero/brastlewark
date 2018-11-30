import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { GnomeComponent } from './gnome/gnome.component';
import { GnomesComponent } from './gnomes/gnomes.component';
import { InfoGnomeComponent } from './info-gnome/info-gnome.component';

import { AppRoutingModule } from '../app-routing.module';

import { ApiService } from '../services/api.service';

@NgModule({
    imports: [AngularMaterialModule, CommonModule, AppRoutingModule],
    declarations: [GnomeComponent, GnomesComponent, InfoGnomeComponent],
    exports: [GnomeComponent, GnomesComponent, InfoGnomeComponent],
    providers: [ApiService]
})
export class GnomesModule { }
