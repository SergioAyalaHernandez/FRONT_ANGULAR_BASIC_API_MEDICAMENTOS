import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import {CmsComponent} from "./cms/cms.component";
import {TarjetaActualizarComponent} from "./tarjeta-actualizar/tarjeta-actualizar.component";
import {TarjetaCrearComponent} from "./tarjeta-crear/tarjeta-crear.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige a 'home' por defecto
  { path: 'home', component: CmsComponent },
  { path: 'tarjeta/:id', component: TarjetaComponent },
  { path: 'tarjetaActualizar/:id', component: TarjetaActualizarComponent },
  { path: 'tarjetaCrear', component: TarjetaCrearComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
