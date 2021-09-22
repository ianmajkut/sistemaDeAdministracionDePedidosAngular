import { Component, OnInit } from '@angular/core';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();

  constructor(public clientesServicio: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage
  }

  buscarClientes(event: any){
    let nombreBuscar: string = event.target.value; // creacion variable que almacena input 
    this.clientes = this.clientesServicio.clientesLocalStorage.filter((clienteFiltrar) =>{   
      //los clientes que tenemos declarados y mostramos en el *ngFor, los filtra y devuelve todos los clientes que tengan contengan lo lo que estamos ingresando
      return clienteFiltrar.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

}
