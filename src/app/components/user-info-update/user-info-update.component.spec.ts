import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoUpdateComponent } from './user-info-update.component';

describe('UserInfoUpdateComponent', () => {
  let component: UserInfoUpdateComponent;
  let fixture: ComponentFixture<UserInfoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
