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
  Paises: any;
  Estados: any;
  Personas: any;

  constructor(
    public fb: FormBuilder,
    public estadosService: EstadosService,
    public paiseService: PaisesService,
    public personasService: PersonasService
  ){

  }

  ngOnInit(): void {

    this.personaForm = this.fb.group({
      idPersona:[''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado:['', Validators.required]
    });

    this.paiseService.getAllPais().subscribe(resp =>{
      this.Paises=resp;
    },
    error => {
      console.error(error);
    });

    this.personaForm.get('pais')?.valueChanges.subscribe(
      value => {
        this.estadosService.getAllEstadoByPais(value).subscribe(
          resp => {
            this.Estados = resp;
          }
        );
      }
     );


      this.obtenerPersonas();


  }//ngOnInit

  guardar() : void{
    this.personasService.savePersona(this.personaForm.value).subscribe(
      resp => {
        console.log(resp);

        this.personaForm.reset();
        this.Personas= null;
        this.obtenerPersonas();
      },
      err => {
        console.error(err);

      }
    );
  }

  obtenerPersonas(){
    this.personasService.getAllPersonas().subscribe(resp => {
      this.Personas = resp;
    });
  }

  eliminarPersona(idPersona: number){
    this.personasService.deletePersona(idPersona).subscribe(resp => {
      console.log(resp);
      this.Personas = null;
      this.Personas = this.obtenerPersonas();
    });
  }

  editar(persona: any){
    this.personaForm.setValue(
      {
      idPersona : persona.idPersona,
      nombre : persona.nombre,
      apellido : persona.apellido,
      edad : persona.edad,
      pais : persona.pais.nombre,
      estado : persona.estado.nombre
      }
    );
    let selectEstado=document.forms.length;

    let selectPais=document.getElementById("pais");
  }
}
