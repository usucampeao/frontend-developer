import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterfreeComponent } from './butterfree.component';

describe('ButterfreeComponent', () => {
  let component: ButterfreeComponent;
  let fixture: ComponentFixture<ButterfreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterfreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
