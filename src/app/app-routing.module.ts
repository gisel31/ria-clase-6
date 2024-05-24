import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { HospitalesNuevoComponent } from './hospitales-nuevo/hospitales-nuevo.component';
import { HospitalesBorrarComponent } from './hospitales-borrar/hospitales-borrar.component';
import { HospitalesModificarComponent } from './hospitales-modificar/hospitales-modificar.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: ''
    ,
    children: [
      {
        path: 'hospitales', component: HospitalesComponent
      },
    ],
  },
  {
    path: ''
    ,
    children: [
      {
        path: 'hospital-nuevo', component: HospitalesNuevoComponent
      },
    ],
  },
  {
    path: ''
    ,
    children: [
        { path: 'hospital-eliminar/:id', component: HospitalesBorrarComponent }
,
    ],
  },
  {
    path: ''
    ,
    children: [
      {
        path: 'hospital-modificar/:id', component: HospitalesModificarComponent
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
