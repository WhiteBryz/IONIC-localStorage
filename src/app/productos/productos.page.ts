import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  txtId: string = "";
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

  isEditing: boolean = false;

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

      this.RestaurarInputs();

    } else {
      alert("Faltan datos por llenar");
    }
  }

  btnEditar() {
    let index = this.productos.findIndex((e) => e.id.toString() == this.txtId)
    console.log(index);
    if (index >= 0) {
      this.productos[index].nombre = this.txtNombre;
      this.productos[index].descripcion = this.txtDescripcion;
      this.productos[index].cantidad = this.txtCantidad;
      this.productos[index].precioCosto = this.txtPrecioCosto;
      this.productos[index].precioVenta = this.txtPrecioVenta;
      this.productos[index].urlImagen = this.txtUrlImagen;

      localStorage.setItem("productos", JSON.stringify(this.productos))

      this.RestaurarInputs();

      this.isEditing = false;
    }
  }

  btnCancelar() {
    this.RestaurarInputs();
    this.isEditing = false;
  }

  Editar(i: number) {
    let producto = this.productos[i];
    this.txtId = producto.id.toString();
    this.txtNombre = producto.nombre;
    this.txtDescripcion = producto.descripcion;
    this.txtCantidad = producto.cantidad;
    this.txtPrecioCosto = producto.precioCosto;
    this.txtPrecioVenta = producto.precioVenta;
    this.txtUrlImagen = producto.urlImagen;

    this.isEditing = true;

  }

  Borrar(i: number) {
    if (confirm("¿Deseas eliminar el producto: " + this.productos[i].nombre + "?")) {
      this.productos.splice(i, 1);
      localStorage.setItem("productos", JSON.stringify(this.productos));
    }
  }

  RestaurarInputs() {
    // Eliminar inputs
    this.txtId = "";
    this.txtNombre = "";
    this.txtDescripcion = "";
    this.txtCantidad = 0;
    this.txtPrecioCosto = "";
    this.txtPrecioVenta = "";
    this.txtUrlImagen = "";
  }
  ngOnInit() {
    return;
  }
}
