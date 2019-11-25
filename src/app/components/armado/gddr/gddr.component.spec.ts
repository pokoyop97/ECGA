import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GddrComponent } from './gddr.component';

describe('GddrComponent', () => {
  let component: GddrComponent;
  let fixture: ComponentFixture<GddrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
