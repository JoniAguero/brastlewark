import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsGnomeComponent } from './friends-gnome.component';

describe('FriendsGnomeComponent', () => {
  let component: FriendsGnomeComponent;
  let fixture: ComponentFixture<FriendsGnomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsGnomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsGnomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
