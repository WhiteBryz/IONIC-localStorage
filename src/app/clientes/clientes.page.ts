import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})

export class ClientesPage implements OnInit {
  txtNombre: string = "";
  txtDireccion: string = "";
  txtTelefono: string = "";
  txtCorreo: string = "";
  txtUrlImagen: string = "";

  clientes: {
    nombre: string,
    direccion: string,
    telefono: string,
    correo: string,
    urlImagen: string
  }[] = [];

  constructor() {
    // Cargar clientes al iniciar
    let clientesLocal = localStorage.getItem("clientes");
    if (clientesLocal) {
      this.clientes = JSON.parse(clientesLocal);
    }
  }

  Agregar() {
    if (!!this.txtNombre && !!this.txtDireccion && !!this.txtCorreo && !!this.txtTelefono && !!this.txtUrlImagen) {
      this.clientes.push({
        nombre: this.txtNombre,
        direccion: this.txtDireccion,
        telefono: this.txtTelefono,
        correo: this.txtCorreo,
        urlImagen: this.txtUrlImagen
      });

      localStorage.setItem("clientes", JSON.stringify(this.clientes));

      // Restaurar inputs
      this.RestaurarInputs();
    }
  }

  Editar(i: number) {
    let cliente = this.clientes[i];

    // Asignar valores a los inputs
    this.txtNombre = cliente.nombre;
    this.txtDireccion = cliente.direccion;
    this.txtTelefono = cliente.telefono;
    this.txtCorreo = cliente.correo;
    this.txtUrlImagen = cliente.urlImagen;

    this._BorrarSinPreguntar(i);
  }

  _BorrarSinPreguntar(i: number) {
    this.clientes.splice(i, 1);
    localStorage.setItem("clientes", JSON.stringify(this.clientes));
  }

  Borrar(i: number) {
    if (confirm("¿Deseas eliminar el producto: " + this.clientes[i].nombre)) {
      this.clientes.splice(i, 1);
      localStorage.setItem("clientes", JSON.stringify(this.clientes));
    }
  }

  ngOnInit() {
    return;
  }

  RestaurarInputs() {
    // Restaurar inputs
    this.txtNombre = "";
    this.txtDireccion = "";
    this.txtTelefono = "";
    this.txtCorreo = "";
    this.txtUrlImagen = "";
  }

}
