import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerosComponent } from './generos/generos.component';
import { SubirTemaComponent } from './subirTema/subir-tema.component';
import { MasBuscadosComponent } from './mas-buscados/mas-buscados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasBuscadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'masBuscados', component: MasBuscadosComponent},
      {path: 'subirTema', component: SubirTemaComponent},
      {path: 'generos', component: GenerosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
