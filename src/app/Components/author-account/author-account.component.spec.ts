import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAccountComponent } from './author-account.component';

describe('AuthorAccountComponent', () => {
  let component: AuthorAccountComponent;
  let fixture: ComponentFixture<AuthorAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
