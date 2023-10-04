import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'inicio', component: InicioComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'  // Añade esta línea
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
