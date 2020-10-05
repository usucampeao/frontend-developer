import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedleComponent } from './weedle.component';

describe('WeedleComponent', () => {
  let component: WeedleComponent;
  let fixture: ComponentFixture<WeedleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeedleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeedleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
