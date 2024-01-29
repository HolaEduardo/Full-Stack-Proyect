import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolaboratyModelComponent } from './kolaboraty-model.component';

describe('KolaboratyModelComponent', () => {
  let component: KolaboratyModelComponent;
  let fixture: ComponentFixture<KolaboratyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolaboratyModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KolaboratyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
