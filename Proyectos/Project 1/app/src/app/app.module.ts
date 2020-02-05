import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { InputsService} from './inputs.service';
import { FormsModule } from '@angular/forms';

//Configuration variable of ID
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("579753727502-6rv27aj6qc73qtfjjkmhv0v07p1sj2oq.apps.googleusercontent.com")
  }
]);

//Export configuration of libraries
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [
    InputsService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})

/**
 * Main class wich import al dependecies of the application.
 */
export class AppModule { }
