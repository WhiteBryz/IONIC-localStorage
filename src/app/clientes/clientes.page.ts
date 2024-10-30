import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})

export class ClientesPage implements OnInit {
  txtId: string = "";
  txtNombre: string = "";
  txtDireccion: string = "";
  txtTelefono: string = "";
  txtCorreo: string = "";
  txtUrlImagen: string = "";

  clientes: {
    id: number,
    nombre: string,
    direccion: string,
    telefono: string,
    correo: string,
    urlImagen: string
  }[] = [];

  isEditing: boolean = false;

  constructor() {
    // Cargar clientes al iniciar
    let clientesLocal = localStorage.getItem("clientes");
    if (clientesLocal) {
      this.clientes = JSON.parse(clientesLocal);
    }
  }

  btnAgregar() {
    if (!!this.txtNombre && !!this.txtDireccion && !!this.txtCorreo && !!this.txtTelefono && !!this.txtUrlImagen) {
      this.clientes.push({
        id: Date.now(),
        nombre: this.txtNombre,
        direccion: this.txtDireccion,
        telefono: this.txtTelefono,
        correo: this.txtCorreo,
        urlImagen: this.txtUrlImagen
      });

      localStorage.setItem("clientes", JSON.stringify(this.clientes));

      // Restaurar inputs
      this.RestaurarInputs();
    } else {
      alert("Faltan datos por llenar");
    }
  }

  btnEditar() {
    if (!!this.txtNombre && !!this.txtDireccion && !!this.txtCorreo && !!this.txtTelefono && !!this.txtUrlImagen) {
      let index = this.clientes.findIndex((e) => e.id.toString() == this.txtId)

      if (index >= 0) {
        this.clientes[index].nombre = this.txtNombre;
        this.clientes[index].direccion = this.txtDireccion;
        this.clientes[index].telefono = this.txtTelefono;
        this.clientes[index].correo = this.txtCorreo;
        this.clientes[index].urlImagen = this.txtUrlImagen;

        localStorage.setItem("clientes", JSON.stringify(this.clientes))

        this.RestaurarInputs();

        this.isEditing = false;
      }
    } else {
      alert("¡Faltan datos por llenar!")
    }
  }

  btnCancelar() {
    this.RestaurarInputs();
    this.isEditing = false;
  }

  Editar(i: number) {
    let cliente = this.clientes[i];

    // Asignar valores a los inputs
    this.txtId = cliente.id.toString();
    this.txtNombre = cliente.nombre;
    this.txtDireccion = cliente.direccion;
    this.txtTelefono = cliente.telefono;
    this.txtCorreo = cliente.correo;
    this.txtUrlImagen = cliente.urlImagen;

    this.isEditing = true;

  }

  Borrar(i: number) {
    if (confirm("¿Deseas eliminar el cliente: " + this.clientes[i].nombre + "?")) {
      this.clientes.splice(i, 1);
      localStorage.setItem("clientes", JSON.stringify(this.clientes));
    }
  }

  ngOnInit() {
    return;
  }

  RestaurarInputs() {
    // Restaurar inputs
    this.txtId = "";
    this.txtNombre = "";
    this.txtDireccion = "";
    this.txtTelefono = "";
    this.txtCorreo = "";
    this.txtUrlImagen = "";
  }

}
