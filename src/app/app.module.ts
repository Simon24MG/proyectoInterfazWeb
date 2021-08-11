import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubirTemaComponent } from './subirTema/subir-tema/subir-tema.component';
import { GenerosComponent } from './generos/generos/generos.component';
import { ArtistasComponent } from './artistas/artistas/artistas.component';
import { MasBuscadosComponent } from './masBuscados/mas-buscados/mas-buscados.component';

@NgModule({
  declarations: [
    AppComponent,
    SubirTemaComponent,
    GenerosComponent,
    ArtistasComponent,
    MasBuscadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
