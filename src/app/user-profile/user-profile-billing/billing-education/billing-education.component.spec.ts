import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsEducationComponent } from './drafts-education.component';

describe('DraftsEducationComponent', () => {
  let component: DraftsEducationComponent;
  let fixture: ComponentFixture<DraftsEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
