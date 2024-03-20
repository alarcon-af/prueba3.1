import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { EdadComponent } from './grafico/edad/edad.component';
import { SangreComponent } from './grafico/sangre/sangre.component';
import { LocalidadComponent } from './grafico/localidad/localidad.component';
import { SexoComponent } from './grafico/sexo/sexo.component';
import { EstratoComponent } from './grafico/estrato/estrato.component';
import { GrupoComponent } from './grafico/grupo/grupo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    EdadComponent,
    SangreComponent,
    LocalidadComponent,
    SexoComponent,
    EstratoComponent,
    GrupoComponent,
    HomeComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-ovdb4cbhsnbw2lws.us.auth0.com',
      clientId: 'uqo3IC6kkRx7Zm6eci7LeHuokxAmu1l5',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
