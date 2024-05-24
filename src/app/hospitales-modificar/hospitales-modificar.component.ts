import { Component, OnInit } from '@angular/core';
import { Hospital } from '../models/hospital';
import { HospitalService } from '../services/hospitales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hospitales-modificar',
  templateUrl: './hospitales-modificar.component.html',
  styleUrls: ['./hospitales-modificar.component.scss']
})
export class HospitalesModificarComponent implements OnInit {
  hospital: Hospital | undefined;
  id: number | undefined;
  nombre: string | undefined;
  direccion: string | undefined;
  datosCargados: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private hospitalService: HospitalService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const hospitalId = params['id'];
      this.hospitalService.getHospitalById(hospitalId).subscribe({
        next: (hospital) => {
          this.hospital = hospital;
          console.log('hospital', this.hospital);
          if (this.hospital) {
            this.id = this.hospital.id;
            this.nombre = this.hospital.nombre;
            this.direccion = this.hospital.direccion;
            this.datosCargados = true;
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    });
  }

  modificarHospital(): void {
    if (this.hospital && this.nombre && this.direccion) {
      const updatedHospital: Hospital = {
        id: this.hospital.id,
        nombre: this.nombre,
        direccion: this.direccion
      };

      this.hospitalService.modify(this.hospital.id, updatedHospital).subscribe({
        next: () => {
          console.log('Hospital modificado correctamente');
          this.snackBar.open('Hospital modificado exitosamente', 'Cerrar', {
            duration: 3000
          });
          this.router.navigate(['/hospitales']);
        },
        error: (error) => {
          console.error('Error al modificar hospital:', error);
          this.snackBar.open('Error al modificar el hospital', 'Cerrar', {
            duration: 3000
          });
        }
      });
    } else {
      console.error('No se pueden modificar los datos del hospital, faltan algunos campos');
      this.snackBar.open('Faltan algunos campos para modificar el hospital', 'Cerrar', {
        duration: 3000
      });
    }
  }

  cancelarModificar(): void {
    this.router.navigate(['/hospitales']);
  }
}