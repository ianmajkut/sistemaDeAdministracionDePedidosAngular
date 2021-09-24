import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();

  constructor(public clientesServicio: ClientesService, public pedidosServicio: PedidosService, public route: Router) { }

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

  irAProductos(cliente: Clientes){
    this.pedidosServicio.pedido.clienteId = cliente.clienteId;
    this.pedidosServicio.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido}`;
    this.route.navigateByUrl("/productos")

  }

}
