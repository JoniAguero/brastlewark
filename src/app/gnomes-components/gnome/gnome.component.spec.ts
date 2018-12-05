import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeComponent } from './gnome.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GnomeComponent', () => {
  let component: GnomeComponent;
  let fixture: ComponentFixture<GnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
