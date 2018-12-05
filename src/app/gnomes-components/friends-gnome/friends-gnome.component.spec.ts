import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsGnomeComponent } from './friends-gnome.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { AppReducer } from 'src/app/redux/app.reducer';

describe('FriendsGnomeComponent', () => {
  let component: FriendsGnomeComponent;
  let fixture: ComponentFixture<FriendsGnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule, RouterTestingModule,
        StoreModule.forRoot({
          feature: combineReducers(AppReducer),
        })
      ],
      declarations: [ FriendsGnomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsGnomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
