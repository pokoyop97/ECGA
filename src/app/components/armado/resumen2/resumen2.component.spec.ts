import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resumen2Component } from './resumen2.component';

describe('Resumen2Component', () => {
  let component: Resumen2Component;
  let fixture: ComponentFixture<Resumen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resumen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resumen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
