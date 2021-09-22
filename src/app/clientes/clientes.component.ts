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

  
  

  constructor() { }

  ngOnInit(): void {

  }

  guardarCliente()
  {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>()
    clientesAgregar.push(
      {
        nombre: "Alejandro",
        apellido: "Rodriguez",
        edad: 20
      },
      {
        nombre: "Eusebio",
        apellido: "Alexander",
        edad: 22
      }
    )
    localStorage.setItem('clientes',JSON.stringify(clientesAgregar))
  }

  guardarProductos()
  {
    let productosAgregar: Array<Productos> = new Array<Productos>()
    productosAgregar.push(
      {
        nombre: "Chipa",
        precio: 200
      },
      {
        nombre: "Carne",
        precio: 300
      }
    )
    localStorage.setItem('productos',JSON.stringify(productosAgregar))

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
  
  get clientesLocales(): Clientes[]{
    let clientesLocalStorage : Clientes[] = JSON.parse(localStorage.getItem('clientes')!)
    if(clientesLocalStorage == null)
    {
      return new Array<Clientes>()
    }
    return clientesLocalStorage
  }

  get productosLocales(): Productos[]{
    let productosLocalStorage : Productos[] = JSON.parse(localStorage.getItem('productos')!)
    if(productosLocalStorage == null)
    {
      return new Array<Productos>()
    }
    return productosLocalStorage
  }

}
