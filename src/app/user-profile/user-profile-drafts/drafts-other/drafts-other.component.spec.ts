import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsOtherComponent } from './drafts-other.component';

describe('DraftsOtherComponent', () => {
  let component: DraftsOtherComponent;
  let fixture: ComponentFixture<DraftsOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
