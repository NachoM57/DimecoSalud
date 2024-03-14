import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LightgalleryModule } from 'lightgallery/angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from '../../cache.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { RediccionarComponent } from './Componentes/rediccionar/rediccionar.component';
import { PresentacionComponent } from './Componentes/presentacion/presentacion.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';
import { GaleriaComponent } from './Componentes/galeria/galeria.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';
import { Barranavegacion2Component } from './Componentes/barranavegacion2/barranavegacion2.component';
import { BannerprofesionalesComponent } from './Componentes/bannerprofesionales/bannerprofesionales.component';
import { DoctoresCardComponent } from './Componentes/doctores-card/doctores-card.component';
import { NoticiasComponent } from './Componentes/noticias/noticias.component';



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
    GaleriaComponent,
    FooterComponent,
    ProfesionalesComponent,
    Barranavegacion2Component,
    BannerprofesionalesComponent,
    DoctoresCardComponent,
    NoticiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [LightgalleryModule],
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
