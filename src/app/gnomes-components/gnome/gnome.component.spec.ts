import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeComponent } from './gnome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { AppReducer } from 'src/app/redux/app.reducer';

describe('GnomeComponent', () => {
  let component: GnomeComponent;
  let fixture: ComponentFixture<GnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        StoreModule.forRoot({
          feature: combineReducers(AppReducer),
        })
      ],
      declarations: [ GnomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
