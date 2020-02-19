import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAutoLocalizationComponent } from './user-auto-localization.component';

describe('UserAutoLocalizationComponent', () => {
  let component: UserAutoLocalizationComponent;
  let fixture: ComponentFixture<UserAutoLocalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAutoLocalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAutoLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
