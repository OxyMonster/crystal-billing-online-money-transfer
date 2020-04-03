import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDraftsComponent } from './transactions-drafts.component';

describe('TransactionsDraftsComponent', () => {
  let component: TransactionsDraftsComponent;
  let fixture: ComponentFixture<TransactionsDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
