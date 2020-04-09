import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicServicesWebsitesComponent } from './electronic-services-websites.component';

describe('ElectronicServicesWebsitesComponent', () => {
  let component: ElectronicServicesWebsitesComponent;
  let fixture: ComponentFixture<ElectronicServicesWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicServicesWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicServicesWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
