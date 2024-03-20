import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { EdadComponent } from './grafico/edad/edad.component';
import { SangreComponent } from './grafico/sangre/sangre.component';
import { LocalidadComponent } from './grafico/localidad/localidad.component';
import { SexoComponent } from './grafico/sexo/sexo.component';
import { EstratoComponent } from './grafico/estrato/estrato.component';
import { GrupoComponent } from './grafico/grupo/grupo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'graficos/edad', component: EdadComponent, canActivate: [AuthGuard] },
    { path: 'graficos/sangre', component: SangreComponent, canActivate: [AuthGuard] },
    { path: 'graficos/localidad', component: LocalidadComponent, canActivate: [AuthGuard] },
    { path: 'graficos/sexo', component: SexoComponent, canActivate: [AuthGuard] },
    { path: 'graficos/estrato', component: EstratoComponent, canActivate: [AuthGuard] },
    { path: 'graficos/grupo', component: GrupoComponent, canActivate: [AuthGuard] }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }