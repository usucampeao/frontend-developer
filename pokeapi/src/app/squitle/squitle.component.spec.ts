import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquitleComponent } from './squitle.component';

describe('SquitleComponent', () => {
  let component: SquitleComponent;
  let fixture: ComponentFixture<SquitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
