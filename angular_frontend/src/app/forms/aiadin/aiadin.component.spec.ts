import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiadinComponent } from './aiadin.component';

describe('AiadinComponent', () => {
  let component: AiadinComponent;
  let fixture: ComponentFixture<AiadinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiadinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
