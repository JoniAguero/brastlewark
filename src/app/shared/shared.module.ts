import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonMoreComponent } from './button-more/button-more.component';

@NgModule({
    imports: [AngularMaterialModule, ReactiveFormsModule, AppRoutingModule],
    declarations: [NavbarComponent, FooterComponent, ButtonMoreComponent, MenuComponent],
    exports: [NavbarComponent, FooterComponent, ButtonMoreComponent]
})
export class SharedModule { }
