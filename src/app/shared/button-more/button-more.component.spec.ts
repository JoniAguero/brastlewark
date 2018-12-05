import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMoreComponent } from './button-more.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { AppReducer } from 'src/app/redux/app.reducer';
import { AppState } from '../../redux/app.reducer';
xdescribe('ButtonMoreComponent', () => {
  let component: ButtonMoreComponent;
  let fixture: ComponentFixture<ButtonMoreComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule,
        StoreModule.forRoot({
          feature: combineReducers(AppReducer),
        })
      ],
      declarations: [ ButtonMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ButtonMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
