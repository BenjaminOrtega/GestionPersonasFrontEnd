import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private API_SERVER = "http://localhost:8888/estados/";

  constructor(
    private httpCliente: HttpClient
  ) { }

  public getAllEstadoByPais(idPais: any) : Observable<any>{
    return this.httpCliente.get(this.API_SERVER + idPais);
  }

}
