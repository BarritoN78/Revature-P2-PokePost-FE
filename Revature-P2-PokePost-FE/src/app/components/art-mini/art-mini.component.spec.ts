import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtMiniComponent } from './art-mini.component';

describe('ArtMiniComponent', () => {
  let component: ArtMiniComponent;
  let fixture: ComponentFixture<ArtMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
