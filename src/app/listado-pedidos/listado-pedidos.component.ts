import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css']
})
export class ListadoPedidosComponent implements OnInit {
  listadoPedidos: Pedido[] = new Array<Pedido>()
  estaVacio!: boolean
  constructor(public pedidosServicio: PedidosService) { }

  ngOnInit(): void {
    this.listadoPedidos = this.pedidosServicio.listadoPedidosLocalStorage
    if(this.listadoPedidos.length == 0){
      this.estaVacio = true
      
    }else{
      this.estaVacio = false
    }
    
  }

  eliminar(posicion:number)
  {
    this.listadoPedidos.splice(posicion,1)
    
    localStorage.setItem('pedidos', JSON.stringify(this.listadoPedidos))

    if(this.listadoPedidos.length == 0){
      this.estaVacio = true
    }else{
      this.estaVacio = false
    }
  }

}
