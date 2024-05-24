import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from '../models/hospital';
import { HospitalService } from '../services/hospitales.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hospitales-borrar',
  templateUrl: './hospitales-borrar.component.html',
  styleUrls: ['./hospitales-borrar.component.scss']
})
export class HospitalesBorrarComponent implements OnInit {
  
  hospital: Hospital | undefined;
  id: number | undefined;
  nombre: string | undefined;
  direccion: string | undefined;
  datosCargados: boolean = false;
  
  constructor(private route: ActivatedRoute, private hospitalService: HospitalService, private router: Router, private snackBar: MatSnackBar) { }

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

  confirmarBorrado(hospitalId: any): void {
    this.hospitalService.delete(hospitalId).subscribe({
      next: () => {
        console.log('Hospital borrado correctamente');
        this.snackBar.open('Hospital borrado exitosamente', 'Cerrar', {
          duration: 3000
        });
        this.router.navigate(['/hospitales']);
      },
      error: (error) => {
        console.error('Error al borrar hospital:', error);
        this.snackBar.open('Error al crear el hospital', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

  cancelarBorrado(): void {
    this.router.navigate(['/hospitales']);
  }
}
