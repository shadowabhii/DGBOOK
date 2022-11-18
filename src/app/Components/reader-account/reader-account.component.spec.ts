import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderAccountComponent } from './reader-account.component';

describe('ReaderAccountComponent', () => {
  let component: ReaderAccountComponent;
  let fixture: ComponentFixture<ReaderAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
