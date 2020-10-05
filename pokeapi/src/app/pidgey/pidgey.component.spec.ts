import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PidgeyComponent } from './pidgey.component';

describe('PidgeyComponent', () => {
  let component: PidgeyComponent;
  let fixture: ComponentFixture<PidgeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PidgeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PidgeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
