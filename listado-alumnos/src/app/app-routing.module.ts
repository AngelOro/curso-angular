import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './personas/alumno/alumno.component';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: AlumnoComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'personas/agregar', component: FormularioComponent},
  {path: 'personas/:id', component: FormularioComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
