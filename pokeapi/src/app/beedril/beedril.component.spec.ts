import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeedrilComponent } from './beedril.component';

describe('BeedrilComponent', () => {
  let component: BeedrilComponent;
  let fixture: ComponentFixture<BeedrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeedrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeedrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
