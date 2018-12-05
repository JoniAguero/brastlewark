import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMoreComponent } from './button-more.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

describe('ButtonMoreComponent', () => {
  let component: ButtonMoreComponent;
  let fixture: ComponentFixture<ButtonMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
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
