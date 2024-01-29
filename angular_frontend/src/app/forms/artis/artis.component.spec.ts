import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisComponent } from './artis.component';

describe('ArtisComponent', () => {
  let component: ArtisComponent;
  let fixture: ComponentFixture<ArtisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
