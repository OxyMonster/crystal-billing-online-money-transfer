import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsFinanceComponent } from './drafts-finance.component';

describe('DraftsFinanceComponent', () => {
  let component: DraftsFinanceComponent;
  let fixture: ComponentFixture<DraftsFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
