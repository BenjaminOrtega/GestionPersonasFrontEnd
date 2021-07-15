import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private API_SERVER = "http://localhost:8888/paises/";

  constructor(
    private httpCliente: HttpClient
    ) { }

    public getAllPais() : Observable<any>{

      return this.httpCliente.get(this.API_SERVER);

    }
}
