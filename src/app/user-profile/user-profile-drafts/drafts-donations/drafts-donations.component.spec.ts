import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsDonationsComponent } from './drafts-donations.component';

describe('DraftsDonationsComponent', () => {
  let component: DraftsDonationsComponent;
  let fixture: ComponentFixture<DraftsDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
