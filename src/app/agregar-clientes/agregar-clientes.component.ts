import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarClientesComponent implements OnInit {
  alert:boolean = false
  formularioAgregar!: FormGroup;
  cliente: Clientes = new Clientes();
  constructor(private fb: FormBuilder, public clienteServicio: ClientesService) { }

  ngOnInit(){
    this.formularioAgregar = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      direccion: ["", Validators.required],
    })
  }

  agregar(){
    this.cliente = this.formularioAgregar.value as Clientes;
    this.clienteServicio.agregarLocalStorage(this.cliente);
    this.formularioAgregar.reset();
    this.alert = true
  }

  cerrarAlert()
  {
    this.alert = false
  }

}
