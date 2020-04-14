import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseStatComponent } from './state-wise-stat.component';

describe('StateWiseStatComponent', () => {
  let component: StateWiseStatComponent;
  let fixture: ComponentFixture<StateWiseStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWiseStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
