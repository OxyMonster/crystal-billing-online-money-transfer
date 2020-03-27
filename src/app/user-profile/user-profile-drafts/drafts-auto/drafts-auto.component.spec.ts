import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsAutoComponent } from './drafts-auto.component';

describe('DraftsAutoComponent', () => {
  let component: DraftsAutoComponent;
  let fixture: ComponentFixture<DraftsAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
