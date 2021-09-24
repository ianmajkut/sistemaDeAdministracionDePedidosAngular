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
    /* let pedido: Pedido = new Pedido()
    pedido.pedidoId = 1
    pedido.clienteId = 1
    pedido.nombreCliente = "Ian"
    pedido.total = 1500
    pedido.pedidoDetalle.push(
    {
      productoId: 1,
      nombreProducto: "Chipa",
      cantidad: 5,
      precio: 15,
      total: 75,
    },
    {
      productoId: 2,
      nombreProducto: "Sopa",
      cantidad: 1,
      precio: 20,
      total: 20,
    }
    )

    console.log(pedido) */
  }

  ngOnInit(): void {
  }

}
