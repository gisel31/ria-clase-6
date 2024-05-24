import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hospital } from '../models/hospital';
import { of, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private apiUrl = 'http://localhost:3000/hospitales';

  constructor(private http: HttpClient) { }

  // Obtener la lista de hospitales
  get(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.apiUrl);
  }

  // Agregar hospital
  add(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.apiUrl, hospital);
  }

  // Modificar hospital
  modify(hospitalId: any, updatedHospital: Hospital): Observable<Hospital> {
    const url = `${this.apiUrl}/${hospitalId}`;
    return this.http.put<Hospital>(url, updatedHospital);
  }

  // Borrar hospital
  delete(hospitalId: number): Observable<any> {
    const url = `${this.apiUrl}/${hospitalId}`;
    return this.http.delete(url);
  }

  //Obtener hospital por id
  getHospitalById(hospitalId: number): Observable<Hospital> {
    const url = `${this.apiUrl}/${hospitalId}`;
    return this.http.get<Hospital>(url);
  }

}
