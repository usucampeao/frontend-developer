import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RattataComponent } from './rattata.component';

describe('RattataComponent', () => {
  let component: RattataComponent;
  let fixture: ComponentFixture<RattataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RattataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RattataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
