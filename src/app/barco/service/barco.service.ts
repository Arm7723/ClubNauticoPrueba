import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barcos } from '../barco/interfaces/barco.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  constructor(private http:HttpClient) { 


  }
  list():Observable<Barcos[]> {
    return this.http.get<Barcos[]>("http://localhost:8082/barcos")
  }

  deleteBarco(id: string){
    this.http.delete('http://localhost:8082/barco/'+id).subscribe();
    alert('Barco eliminado correctamente!');
    window.location.reload();
  }

  createBarco(barco: Barcos){
    this.http.post('http://localhost:8082/barco/barcoPost',barco).subscribe();
  }
}
