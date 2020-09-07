import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexInfoComponent } from './pokedex-info.component';

describe('PokedexInfoComponent', () => {
  let component: PokedexInfoComponent;
  let fixture: ComponentFixture<PokedexInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
