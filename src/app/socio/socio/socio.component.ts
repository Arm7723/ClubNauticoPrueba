import { Component, OnInit } from '@angular/core';
import { Socios } from './interfaces/socio.interfaces';
import { SocioService } from '../service/socio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {
  socios!:Socios[];
  constructor(private SocioService: SocioService, private router:Router) {

  }
  ngOnInit(): void {
    this.SocioService.list()
    .subscribe({
      next:(resp)=>{
        this.socios=resp;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteSocio(id: number):void {
    this.SocioService.deleteSocio(id)
  }

  redirigir() {
    this.router.navigate(['../../form-socios']);
  }
}
