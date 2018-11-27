import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { GnomesComponent } from './gnomes/gnomes.component';


@NgModule({
  declarations: [
    AppComponent,
    GnomesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
