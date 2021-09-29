import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
  formularioAgregarProducto!: FormGroup;
  producto: Productos = new Productos();
  alert:boolean = false
  
  constructor(private fb: FormBuilder, public productoServicio: ProductosService) { }

  ngOnInit(): void {
    this.formularioAgregarProducto = this.fb.group({
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      precio: ["", Validators.required]
    })
  }

  agregar(){
    this.producto = this.formularioAgregarProducto.value as Productos
    this.productoServicio.agregarLocalStorage(this.producto)
    this.formularioAgregarProducto.reset()
    this.alert = true
  }

  cerrarAlert()
  {
    this.alert = false
  }

  

}
