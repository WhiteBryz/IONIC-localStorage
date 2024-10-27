import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  txtNombre: string = "";
  txtDescripcion: string = "";
  txtCantidad: number = 0;
  txtPrecioCosto: string = "";
  txtPrecioVenta: string = "";
  txtUrlImagen: string = "";

  productos: {
    id: number,
    nombre: string,
    descripcion: string,
    cantidad: number,
    precioCosto: string,
    precioVenta: string,
    urlImagen: string
  }[] = [];

  constructor() {

    // Cargar productos al iniciar
    let productosLocal = localStorage.getItem("productos")
    if (productosLocal) {
      this.productos = JSON.parse(productosLocal);
    }
  }

  Agregar() {

    if (!!this.txtNombre && !!this.txtDescripcion && !!this.txtCantidad && !!this.txtPrecioCosto && !!this.txtPrecioVenta && this.txtUrlImagen) {
      // Agregar los productos a la lista de productos
      this.productos.push({
        id: Date.now(),
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
      this.txtCantidad = 0;
      this.txtPrecioCosto = "";
      this.txtPrecioVenta = "";
      this.txtUrlImagen = "";
    }
  }

  Editar(i: number) {
    let producto = this.productos[i];

    this.txtNombre = producto.nombre;
    this.txtDescripcion = producto.descripcion;
    this.txtCantidad = producto.cantidad;
    this.txtPrecioCosto = producto.precioCosto;
    this.txtPrecioVenta = producto.precioVenta;
    this.txtUrlImagen = producto.urlImagen;

    this._BorrarSinPreguntar(i);

  }

  Borrar(i: number) {
    if (confirm("¿Deseas eliminar este producto?")) {
      this.productos.splice(i, 1);
      localStorage.setItem("productos", JSON.stringify(this.productos));
    }
  }

  _BorrarSinPreguntar(i: number) {
    this.productos.splice(i, 1);
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }
}
