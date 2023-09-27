import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { RediccionarComponent } from './Componentes/rediccionar/rediccionar.component';
import { PresentacionComponent } from './Componentes/presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    BannerComponent,
    RediccionarComponent,
    PresentacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
