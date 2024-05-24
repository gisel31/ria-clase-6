import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesModificarComponent } from './hospitales-modificar.component';

describe('HospitalesModificarComponent', () => {
  let component: HospitalesModificarComponent;
  let fixture: ComponentFixture<HospitalesModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalesModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalesModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
