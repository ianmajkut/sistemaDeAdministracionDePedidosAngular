import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { PedidosService } from '../services/pedidos.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>()
  alert:boolean = false
  alertEliminar:boolean = false
  alertCliente: boolean = true
  constructor(public productosServicio: ProductosService, public pedidosServicio: PedidosService) { }

  ngOnInit(): void {
    this.productos = this.productosServicio.productosLocalStorage
  }

  buscarProducto(event: any){
    let productoBuscar: string = event.target.value;
    this.productos = this.productosServicio.productosLocalStorage.filter((productoFiltrar)=>{
      return productoFiltrar.nombre.toLocaleLowerCase().includes(productoBuscar.toLocaleLowerCase())
    })
  }

  agregar(producto: Productos)
  {
    this.pedidosServicio.pedido.agregarProdutcoAlPedido(producto)
    this.pedidosServicio.guardarLocalStorage()
    this.alert = true
       
  } 

  cerrarAlert()
  {
    this.alert = false
  }

  cerrarAlertEliminar()
  {
    this.alertEliminar = false
  }

  cerrarWarning()
  {
    this.alertCliente = false
  }

  eliminar(posicion: number){
    this.productos.splice(posicion,1)
    localStorage.setItem('productos', JSON.stringify(this.productos))
    this.alertEliminar = true
  }
}
