import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { RediccionarComponent } from './Componentes/rediccionar/rediccionar.component';
import { PresentacionComponent } from './Componentes/presentacion/presentacion.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    BannerComponent,
    RediccionarComponent,
    PresentacionComponent,
    EstudiosComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
