import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PidgeotComponent } from './pidgeot.component';

describe('PidgeotComponent', () => {
  let component: PidgeotComponent;
  let fixture: ComponentFixture<PidgeotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PidgeotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PidgeotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
