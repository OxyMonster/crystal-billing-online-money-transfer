import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofinanceOrganizaionsComponent } from './microfinance-organizaions.component';

describe('MicrofinanceOrganizaionsComponent', () => {
  let component: MicrofinanceOrganizaionsComponent;
  let fixture: ComponentFixture<MicrofinanceOrganizaionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrofinanceOrganizaionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofinanceOrganizaionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
