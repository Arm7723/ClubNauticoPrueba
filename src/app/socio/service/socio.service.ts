import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socios } from '../socio/interfaces/socio.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http:HttpClient) { 

  }
  list():Observable<Socios[]> {
    return this.http.get<Socios[]>("http://localhost:8082/socios")
  }

  deleteSocio(id:number){
    this.http.delete('http://localhost:8082/socio/'+id).subscribe();
    alert("Socio eliminado correctamente!");
    window.location.reload();
  }
}
