import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDexViewComponent } from './poke-dex-view.component';

describe('PokeDexViewComponent', () => {
  let component: PokeDexViewComponent;
  let fixture: ComponentFixture<PokeDexViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeDexViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
