import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsComponent } from './cms/cms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaActualizarComponent } from './tarjeta-actualizar/tarjeta-actualizar.component';
import {FormsModule} from "@angular/forms";
import { TarjetaCrearComponent } from './tarjeta-crear/tarjeta-crear.component';


@NgModule({
  declarations: [
    AppComponent,
    CmsComponent,
    TarjetaComponent,
    TarjetaActualizarComponent,
    TarjetaCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
