import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomesComponent } from './gnomes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GnomeComponent } from '../gnome/gnome.component';
import { ButtonMoreComponent } from '../../shared/button-more/button-more.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { AppReducer } from 'src/app/redux/app.reducer';
import { AppState } from '../../redux/app.reducer';
import { ApiService } from '../../services/api.service';
import { empty } from 'rxjs';
import { SetGnomes } from 'src/app/redux/actions/gnomes.actions';
import { Gnome } from 'src/app/utils/models/Gnome.model';
describe('GnomesComponent', () => {
  let component: GnomesComponent;
  let fixture: ComponentFixture<GnomesComponent>;
  const service = new ApiService(null);
  let store: Store<AppState>;

  const gnomeTest: Gnome = {
    id: 0,
    name: 'Tobus Quickwhistle',
    thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: 'Pink',
    professions: [
      'Metalworker',
      'Woodcarver',
      'Stonecarver',
      ' Tinker',
      'Tailor',
      'Potter'
    ],
    friends: [
      'Cogwitz Chillwidget',
      'Tinadette Chillbuster'
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularMaterialModule,
        HttpClientModule,
        StoreModule.forRoot({
          ...AppReducer
        })
      ],
      declarations: [GnomesComponent, GnomeComponent, ButtonMoreComponent],
      providers: [{ provide: service }]
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(GnomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data when created', () => {
    const action = new SetGnomes([gnomeTest]);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  xit('should call to ApiService methods', () => {

    const spy = spyOn( service, 'getAllData' ).and.callFake( gnomes => {
      return empty();
    });

    component.setGnomes();
    expect(spy).toHaveBeenCalled();

  });

});
