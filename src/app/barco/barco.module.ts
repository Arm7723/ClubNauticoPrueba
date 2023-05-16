import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcoComponent } from './barco/barco.component';



@NgModule({
  declarations: [
    BarcoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    BarcoComponent
  ]
})
export class BarcoModule { }
