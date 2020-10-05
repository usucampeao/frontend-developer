import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusaurComponent } from './venusaur.component';

describe('VenusaurComponent', () => {
  let component: VenusaurComponent;
  let fixture: ComponentFixture<VenusaurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenusaurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenusaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
