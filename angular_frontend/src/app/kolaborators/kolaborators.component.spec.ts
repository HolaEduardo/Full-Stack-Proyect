import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolaboratorsComponent } from './kolaborators.component';

describe('KolaboratorsComponent', () => {
  let component: KolaboratorsComponent;
  let fixture: ComponentFixture<KolaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolaboratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KolaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
