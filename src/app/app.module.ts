import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';


import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';
// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './redux/app.reducer';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { GnomesComponent } from './gnomes/gnomes.component';
import { GnomeComponent } from './gnome/gnome.component';
import { InfoGnomeComponent } from './info-gnome/info-gnome.component';
import { AppRoutingModule } from './app-routing.module';
import { ArraySortPipe } from './utils/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GnomesComponent,
    GnomeComponent,
    InfoGnomeComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
