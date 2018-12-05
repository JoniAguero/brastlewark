import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGnomeComponent } from './details-gnome.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

describe('DetailsGnomeComponent', () => {
  let component: DetailsGnomeComponent;
  let fixture: ComponentFixture<DetailsGnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
      declarations: [ DetailsGnomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGnomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
