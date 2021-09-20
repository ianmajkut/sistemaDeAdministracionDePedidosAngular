import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre: string,
  apellido: string,
  edad: number,
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>()

  constructor() { }

  ngOnInit(): void {
    this.clientes.push(
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
  }

  guardarCliente()
  {
    localStorage.setItem('clientes',JSON.stringify(this.clientes))

  }

  leerCliente()
  {
    localStorage.getItem('clientes')
    console.log(this.clientes)
  }

}
