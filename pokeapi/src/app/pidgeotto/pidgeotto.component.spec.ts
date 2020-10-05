import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PidgeottoComponent } from './pidgeotto.component';

describe('PidgeottoComponent', () => {
  let component: PidgeottoComponent;
  let fixture: ComponentFixture<PidgeottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PidgeottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PidgeottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
