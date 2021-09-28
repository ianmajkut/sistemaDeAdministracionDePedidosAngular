import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidoDetalle } from '../models/pedido-detalle';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();

  constructor() {
    this.pedido = this.ultimoPedido  
  }

  guardarLocalStorage(){
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido)!)
  }

  get ultimoPedido(): Pedido
  {
    let pedidoLocalStorage: Pedido = new Pedido(JSON.parse(localStorage.getItem("ultimoPedido")!))
    let pedido = JSON.parse(localStorage.getItem("ultimoPedido")!)
    
    if(pedidoLocalStorage == null)
    {
      return new Pedido();
    }
    return pedidoLocalStorage;
  }

  guardarPedido()
  {
    let listadoPedidos: Pedido[] = new Array<Pedido>()
    listadoPedidos = this.listadoPedidosLocalStorage
    listadoPedidos.push(this.pedido)
    localStorage.setItem("pedidos", JSON.stringify(listadoPedidos))
    localStorage.removeItem("ultimoPedido")
    this.pedido = new Pedido();
  }

  get listadoPedidosLocalStorage(): Pedido[]
  {
    let pedidos: Pedido[] = JSON.parse(localStorage.getItem("pedidos")!)
    if(pedidos== null)
    {
      return new Array<Pedido>();
    }
    return pedidos
  }
  
  
}
