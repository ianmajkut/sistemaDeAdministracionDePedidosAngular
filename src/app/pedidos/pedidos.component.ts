import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosServicio: PedidosService) { 
    
  }

  ngOnInit(): void {
    this.pedidosServicio.pedido.pedidoDetalle
  }

  calcularTotal(posicion: number)
  {
    this.pedidosServicio.pedido.actualizarCantidades(posicion)
    this.pedidosServicio.guardarLocalStorage()
  }

  guardar()
  {
    this.pedidosServicio.guardarPedido()
  }

  eliminar(posicion: number)
  {
    this.pedidosServicio.pedido.pedidoDetalle.splice(posicion, 1)
    this.pedidosServicio.guardarLocalStorage()
  }

}
