import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionsGnomeComponent } from './professions-gnome.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

xdescribe('ProfessionsGnomeComponent', () => {
  let component: ProfessionsGnomeComponent;
  let fixture: ComponentFixture<ProfessionsGnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
      declarations: [ ProfessionsGnomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionsGnomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
