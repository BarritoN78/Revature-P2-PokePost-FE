import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMiniComponent } from './poke-mini.component';

describe('PokeMiniComponent', () => {
  let component: PokeMiniComponent;
  let fixture: ComponentFixture<PokeMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
