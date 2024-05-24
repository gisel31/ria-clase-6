import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { HospitalService } from './services/hospitales.service';

// Importaciones de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalesNuevoComponent } from './hospitales-nuevo/hospitales-nuevo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HospitalesModificarComponent } from './hospitales-modificar/hospitales-modificar.component';
import { HospitalesBorrarComponent } from './hospitales-borrar/hospitales-borrar.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HospitalesComponent,
    HospitalesNuevoComponent,
    HospitalesModificarComponent,
    HospitalesBorrarComponent
  ],
  imports: [
    MatPaginatorModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
