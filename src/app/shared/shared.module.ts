import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonMoreComponent } from './button-more/button-more.component';
import { CommonModule } from '@angular/common';
import { GnomesRoutingModule } from '../gnomes-components/gnomes-routing.module';

@NgModule({
    imports: [AngularMaterialModule, ReactiveFormsModule, GnomesRoutingModule, CommonModule],
    declarations: [NavbarComponent, FooterComponent, ButtonMoreComponent, MenuComponent],
    exports: [NavbarComponent, FooterComponent, ButtonMoreComponent]
})
export class SharedModule { }
