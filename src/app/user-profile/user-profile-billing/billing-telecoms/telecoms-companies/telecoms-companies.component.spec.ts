import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomsCompaniesComponent } from './telecoms-companies.component';

describe('TelecomsCompaniesComponent', () => {
  let component: TelecomsCompaniesComponent;
  let fixture: ComponentFixture<TelecomsCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomsCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
