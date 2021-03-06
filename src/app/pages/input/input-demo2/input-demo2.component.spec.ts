import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemo2Component } from './input-demo2.component';

describe('InputDemo2Component', () => {
  let component: InputDemo2Component;
  let fixture: ComponentFixture<InputDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
