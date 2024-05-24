import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesBorrarComponent } from './hospitales-borrar.component';

describe('HospitalesBorrarComponent', () => {
  let component: HospitalesBorrarComponent;
  let fixture: ComponentFixture<HospitalesBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalesBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalesBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
