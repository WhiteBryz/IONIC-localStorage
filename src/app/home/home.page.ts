import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  txtNombre: string = "";
  txtDescripcion: string = "";
  txtCantidad: string = "";
  txtPrecioCosto: string = "";
  txtPrecioVenta: string = "";
  txtUrlImagen: string = "";

  productos: {
    nombre: string,
    descripcion: string,
    cantidad: string,
    precioCosto: string,
    precioVenta: string,
    urlImagen: string
  }[] = [];

  constructor() {

    // Cargar productos
    let productosLocal = localStorage.getItem("productos")
    if (productosLocal) {
      this.productos = JSON.parse(productosLocal);
    }
  }

  Borrar(i: number) {
    if (confirm("¿Deseas eliminar este producto?")) {
      this.productos.splice(i, 1);
      localStorage.setItem("productos", JSON.stringify(this.productos));
    }
  }

  BorrarSinPreguntar(i: number) {
    this.productos.splice(i, 1);
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }

  Editar(i: number) {
    let producto = this.productos[i];

    this.txtNombre = producto.nombre;
    this.txtDescripcion = producto.descripcion;
    this.txtCantidad = producto.cantidad;
    this.txtPrecioCosto = producto.precioCosto;
    this.txtPrecioVenta = producto.precioVenta;
    this.txtUrlImagen = producto.urlImagen;

    this.BorrarSinPreguntar(i);

  }

  Agregar() {

    if (!!this.txtNombre && !!this.txtDescripcion && !!this.txtCantidad && !!this.txtPrecioCosto && !!this.txtPrecioVenta && this.txtUrlImagen) {
      // Agregar los productos a la lista de productos
      this.productos.push({
        nombre: this.txtNombre,
        descripcion: this.txtDescripcion,
        cantidad: this.txtCantidad,
        precioCosto: this.txtPrecioCosto,
        precioVenta: this.txtPrecioVenta,
        urlImagen: this.txtUrlImagen
      });

      // Cargar localStorage
      localStorage.setItem("productos", JSON.stringify(this.productos));

      // Eliminar inputs
      this.txtNombre = "";
      this.txtDescripcion = "";
      this.txtCantidad = "";
      this.txtPrecioCosto = "";
      this.txtPrecioVenta = "";
      this.txtUrlImagen = "";
    }
  }
}
