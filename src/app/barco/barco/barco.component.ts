import { Component, OnInit } from '@angular/core';
import { Barcos } from './interfaces/barco.interfaces';
import { BarcoService } from '../service/barco.service';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html'
})
export class BarcoComponent implements OnInit {
  barcos!:Barcos[];
  constructor(private barcoService: BarcoService) {
    
  }
  ngOnInit(): void {
    this.barcoService.list()
    .subscribe({
      next:(resp)=>{
      this.barcos=resp;
      },error:(err)=>{
        console.log(err);
      }

    })
  }

  deleteBarco(id: string): void {
    this.barcoService.deleteBarco(id)
  }

  addBarco(barco: Barcos): void {


    this.barcoService.createBarco(barco)
  }
  
}
