import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcoModule } from './barco/barco.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SocioModule } from './socio/socio.module';
import { FormSociosComponent } from './form-socios/form-socios.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSociosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarcoModule,
    HttpClientModule,
    RouterModule,
    SocioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
