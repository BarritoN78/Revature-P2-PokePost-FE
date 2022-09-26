import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFiltersComponent } from './art-filters.component';

describe('ArtFiltersComponent', () => {
  let component: ArtFiltersComponent;
  let fixture: ComponentFixture<ArtFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
