import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSelectCategoriesComponent } from './transactions-select-categories.component';

describe('TransactionsSelectCategoriesComponent', () => {
  let component: TransactionsSelectCategoriesComponent;
  let fixture: ComponentFixture<TransactionsSelectCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsSelectCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSelectCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
