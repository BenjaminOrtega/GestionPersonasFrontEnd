import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private API_SERVER = "http://localhost:8888/personas/";

  constructor(
    private httpCliente: HttpClient
  ) { }

  public getAllPersonas() : Observable<any>{
    return this.httpCliente.get(this.API_SERVER);
  }

  public savePersona(persona: any): Observable<any>{
    return this.httpCliente.post(this.API_SERVER, persona);
  }

  public deletePersona(idPersona: any): Observable<any>{
    return this.httpCliente.delete(this.API_SERVER + "delete/" + idPersona);
  }
}
