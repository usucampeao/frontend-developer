import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastoiseComponent } from './blastoise.component';

describe('BlastoiseComponent', () => {
  let component: BlastoiseComponent;
  let fixture: ComponentFixture<BlastoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlastoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlastoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
