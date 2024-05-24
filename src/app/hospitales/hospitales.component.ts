import { Component, ViewChild } from '@angular/core';
import { HospitalService } from '../services/hospitales.service';
import { Hospital } from '../models/hospital';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.scss']
})
export class HospitalesComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public lista: Hospital[] = [];
  public displayedColumns: string[] = ['id', 'nombre', 'direccion', 'acciones'];
  public dataSource!: MatTableDataSource<Hospital>;

  constructor(private service: HospitalService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.get().subscribe({
      next: (data) => {
        this.lista = data;
        this.dataSource = new MatTableDataSource<Hospital>(this.lista);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  modificarHospital(hospital: any): void {
    this.router.navigate([`/hospital-modificar/${hospital.id}`]);
  }

  eliminarHospital(hospital: any): void {
    this.router.navigate([`/hospital-eliminar/${hospital.id}`]);
  }

  agregarHospital() {
    this.router.navigate(['/hospital-nuevo']);
  }

  buscador(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
