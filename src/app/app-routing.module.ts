import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocioComponent } from './socio/socio/socio.component';
import { BarcoComponent } from './barco/barco/barco.component';
import { FormSociosComponent } from './form-socios/form-socios.component';

const routes: Routes = [
  { path: 'socios', component: SocioComponent},
  { path: 'barcos', component: BarcoComponent},
  { path: 'formSocios', component: FormSociosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
