import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomsTelevisionComponent } from './telecoms-television.component';

describe('TelecomsTelevisionComponent', () => {
  let component: TelecomsTelevisionComponent;
  let fixture: ComponentFixture<TelecomsTelevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomsTelevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomsTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
