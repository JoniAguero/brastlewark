import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionsGnomeComponent } from './professions-gnome.component';

describe('ProfessionsGnomeComponent', () => {
  let component: ProfessionsGnomeComponent;
  let fixture: ComponentFixture<ProfessionsGnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
