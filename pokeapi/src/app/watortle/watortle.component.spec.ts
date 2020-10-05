import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatortleComponent } from './watortle.component';

describe('WatortleComponent', () => {
  let component: WatortleComponent;
  let fixture: ComponentFixture<WatortleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatortleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatortleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
