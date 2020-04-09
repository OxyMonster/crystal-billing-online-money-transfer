import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicMoneyComponent } from './electronic-money.component';

describe('ElectronicMoneyComponent', () => {
  let component: ElectronicMoneyComponent;
  let fixture: ComponentFixture<ElectronicMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
