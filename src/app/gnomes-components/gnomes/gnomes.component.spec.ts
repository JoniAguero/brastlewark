import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomesComponent } from './gnomes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GnomeComponent } from '../gnome/gnome.component';
import { ButtonMoreComponent } from '../../shared/button-more/button-more.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { AppReducer } from 'src/app/redux/app.reducer';
describe('GnomesComponent', () => {
  let component: GnomesComponent;
  let fixture: ComponentFixture<GnomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AngularMaterialModule, HttpClientModule,
        StoreModule.forRoot({
          ...AppReducer,
          feature: combineReducers(AppReducer),
        })
      ],
      declarations: [ GnomesComponent, GnomeComponent, ButtonMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
