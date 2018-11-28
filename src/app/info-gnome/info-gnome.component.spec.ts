import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGnomeComponent } from './info-gnome.component';

describe('InfoGnomeComponent', () => {
  let component: InfoGnomeComponent;
  let fixture: ComponentFixture<InfoGnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGnomeComponent ]
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
