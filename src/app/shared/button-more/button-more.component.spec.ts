import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMoreComponent } from './button-more.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { AppReducer } from 'src/app/redux/app.reducer';
describe('ButtonMoreComponent', () => {
  let component: ButtonMoreComponent;
  let fixture: ComponentFixture<ButtonMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule,
        StoreModule.forRoot({
          ...AppReducer,
          feature: combineReducers(AppReducer),
        })
      ],
      declarations: [ ButtonMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
