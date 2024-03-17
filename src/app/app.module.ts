import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent
  ], 
  imports: [
    BrowserModule,
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
