import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioComponent } from './socio/socio.component';



@NgModule({
  declarations: [
    SocioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocioComponent
  ]
})
export class SocioModule { }
