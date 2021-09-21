import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre: string,
  apellido: string,
  edad: number,
}

interface Productos{
  nombre: string,
  precio: number
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>()
  productos: Array<Productos> = new Array<Productos>()

  constructor() { }

  ngOnInit(): void {
    // this.clientes.push(
    // {
    //   nombre: "Alejandro",
    //   apellido: "Rodriguez",
    //   edad: 20
    // },
    // {
    //   nombre: "Eusebio",
    //   apellido: "Alexander",
    //   edad: 22
    // }
    // )
    // this.productos.push(
    // {
    //   nombre: "Chipa",
    //   precio: 200
    // },
    // {
    //   nombre: "Carne",
    //   precio: 300
    // }
    // )
  }

  guardarCliente()
  {
    localStorage.setItem('clientes',JSON.stringify(this.clientes))

  }

  guardarProductos()
  {
    localStorage.setItem('productos',JSON.stringify(this.productos))

  }

  leer()
  {
    this.clientes = JSON.parse(localStorage.getItem('clientes')!)
    this.productos = JSON.parse(localStorage.getItem('productos')!)
    console.log(this.clientes)
    console.log(this.productos)
  }

  eliminarCliente()
  {
    localStorage.removeItem('clientes')
  }

  eliminarProducto()
  {
    localStorage.removeItem('productos')
  }

  eliminarTodo()
  {
    localStorage.clear()
  }
  

}
