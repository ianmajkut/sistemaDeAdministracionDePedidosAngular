# Sistema de Administación de Pedidos

Aplicación Web utilizando Angular diseñada para implementar conceptos relacionados a [Services](https://angular.io/tutorial/toh-pt4), [FormBuilder](https://angular.io/api/forms/FormBuilder), [Reactive Forms](https://angular.io/guide/reactive-forms), LocalStorage, entre otras cosas.

## Vista General

![alt text](https://github.com/ianmajkut/sistemaDeAdministacionDePedidosAngular/blob/main/review%20general.gif)

## Clientes

La creación de clientes se gestiona completando un formulario y, si cumple con los requisitos, es subido al localStorage con su keyName “clientes” y su correspondiente Id. También tendremos la posibilidad de eliminar los clientes que deseemos.

![alt text](https://github.com/ianmajkut/sistemaDeAdministacionDePedidosAngular/blob/main/clientes.gif)

## Productos

Al igual que los clientes, los productos se gestionan utilizando un formulario y podremos eliminarlos también. Para que se realice el pedido de manera correcta, debe asegurarse de haber seleccionado un cliente cuyo nombre aparecerá en el encabezado.

![alt text](https://github.com/ianmajkut/sistemaDeAdministacionDePedidosAngular/blob/main/productos.gif)

## Pedidos y listado de pedidos

En la sección Pedidos nos figurará los productos que hemos seleccionado y podremos modificar la cantidad, lo cual se verá reflejado en el precio.
En caso de no guardar ningún pedido, la sección Listado de Pedidos estará vacía.

![alt text](https://github.com/ianmajkut/sistemaDeAdministacionDePedidosAngular/blob/main/pedidos%20vacio.png)

En caso de tener todos los campos necesarios, los listados de pedidos saldrán de la siguiente manera.

![alt text](https://github.com/ianmajkut/sistemaDeAdministacionDePedidosAngular/blob/main/pedidos%20y%20listado%20de%20pedidos.gif)
