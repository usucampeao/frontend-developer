import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaticateComponent } from './raticate.component';

describe('RaticateComponent', () => {
  let component: RaticateComponent;
  let fixture: ComponentFixture<RaticateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaticateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
