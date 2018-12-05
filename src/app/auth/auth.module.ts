import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [AngularMaterialModule, AppRoutingModule, ReactiveFormsModule, FormsModule, CommonModule],
    declarations: [LoginComponent, RegisterComponent],
    exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
