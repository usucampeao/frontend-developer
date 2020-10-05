import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamanderComponent } from './chamander.component';

describe('ChamanderComponent', () => {
  let component: ChamanderComponent;
  let fixture: ComponentFixture<ChamanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
