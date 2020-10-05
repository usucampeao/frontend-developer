import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterpieComponent } from './caterpie.component';

describe('CaterpieComponent', () => {
  let component: CaterpieComponent;
  let fixture: ComponentFixture<CaterpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
