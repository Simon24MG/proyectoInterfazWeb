import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubirTemaComponent } from './subirTema/subir-tema/subir-tema.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerosComponent } from './generos/generos.component';

@NgModule({
  declarations: [
    AppComponent,
    SubirTemaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'subirTema', component: SubirTemaComponent},
      {path: 'generos', component: GenerosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
