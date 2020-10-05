import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetapoidComponent } from './metapoid.component';

describe('MetapoidComponent', () => {
  let component: MetapoidComponent;
  let fixture: ComponentFixture<MetapoidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetapoidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetapoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
