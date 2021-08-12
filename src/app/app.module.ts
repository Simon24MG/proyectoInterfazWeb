import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubirTemaComponent } from './subirTema/subir-tema/subir-tema.component';
import { GenerosComponent } from './generos/generos/generos.component';
import { ArtistasComponent } from './artistas/artistas/artistas.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SubirTemaComponent,
    GenerosComponent,
    ArtistasComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'subirTema', component: SubirTemaComponent},
      {path: 'generos', component: GenerosComponent},  
      {path: 'artistas', component: ArtistasComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
