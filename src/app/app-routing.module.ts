import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
