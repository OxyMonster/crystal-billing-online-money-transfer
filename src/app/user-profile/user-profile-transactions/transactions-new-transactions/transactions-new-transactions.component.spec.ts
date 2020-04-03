import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsNewTransactionsComponent } from './transactions-new-transactions.component';

describe('TransactionsNewTransactionsComponent', () => {
  let component: TransactionsNewTransactionsComponent;
  let fixture: ComponentFixture<TransactionsNewTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsNewTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsNewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
