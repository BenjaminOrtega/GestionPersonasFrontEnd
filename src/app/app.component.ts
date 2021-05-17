import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EstadosService } from "./services/estados/estados.service";
import { PaisesService } from "./services/paises/paises.service";
import { PersonasService } from "./services/personas/personas.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  personaForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public estadosService: EstadosService,
    public paisService: PaisesService,
    public personasService: PaisesService
  ){

  }

  ngOnInit(): void {

    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required]
    });

  }
}
