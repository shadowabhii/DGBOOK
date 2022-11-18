import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderHistoryComponent } from './reader-history.component';

describe('ReaderHistoryComponent', () => {
  let component: ReaderHistoryComponent;
  let fixture: ComponentFixture<ReaderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
