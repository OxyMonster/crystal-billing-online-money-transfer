import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsCategoriesComponent } from './billing-categories.component';

describe('DraftsCategoriesComponent', () => {
  let component: DraftsCategoriesComponent;
  let fixture: ComponentFixture<DraftsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
