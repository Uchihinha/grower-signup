import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefaultFormComponent } from './user-default-form.component';

describe('UserDefaultFormComponent', () => {
  let component: UserDefaultFormComponent;
  let fixture: ComponentFixture<UserDefaultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDefaultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefaultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
