import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsEntertaimentComponent } from './billing-entertaiment.component';

describe('DraftsEntertaimentComponent', () => {
  let component: DraftsEntertaimentComponent;
  let fixture: ComponentFixture<DraftsEntertaimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsEntertaimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsEntertaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
