import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HospitalService } from '../services/hospitales.service';
import { Hospital } from '../models/hospital';

@Component({
  selector: 'app-hospitales-nuevo',
  templateUrl: './hospitales-nuevo.component.html',
  styleUrls: ['./hospitales-nuevo.component.scss']
})
export class HospitalesNuevoComponent implements OnInit {

  hospitalForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private hospitalesService: HospitalService,
    private snackBar: MatSnackBar
  ) {
    this.hospitalForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(): void {
    if (this.hospitalForm.valid) {
      const nuevoHospital: Hospital = this.hospitalForm.value;
      this.hospitalesService.add(nuevoHospital).subscribe({
        next: (data) => {
          this.snackBar.open('Hospital creado exitosamente', 'Cerrar', {
            duration: 3000
          });
          this.hospitalForm.reset();
        },
        error: (error) => {
          console.error('Error al crear el hospital', error);
          this.snackBar.open('Error al crear el hospital', 'Cerrar', {
            duration: 3000
          });
        }
      });
    }
  }
}

