import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGnomeComponent } from './info-gnome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsGnomeComponent } from '../details-gnome/details-gnome.component';
import { ProfessionsGnomeComponent } from '../professions-gnome/professions-gnome.component';
import { FriendsGnomeComponent } from '../friends-gnome/friends-gnome.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

describe('InfoGnomeComponent', () => {
  let component: InfoGnomeComponent;
  let fixture: ComponentFixture<InfoGnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AngularMaterialModule],
      declarations: [ InfoGnomeComponent, DetailsGnomeComponent, ProfessionsGnomeComponent, FriendsGnomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGnomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
