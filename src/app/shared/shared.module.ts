import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonMoreComponent } from './button-more/button-more.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [AngularMaterialModule],
    declarations: [NavbarComponent, FooterComponent, ButtonMoreComponent, MenuComponent],
    exports: [NavbarComponent, FooterComponent, ButtonMoreComponent]
})
export class SharedModule { }
