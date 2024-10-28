import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  usuarios: {
    id: number,
    fullName: string,
    userName: string,
    password: string,
    storeName: string,
    urlStore: string
  }[] = [];

  txtNombre = "";
  txtUsuario = "";
  txtContrasena = "";
  txtNombreTienda = "";
  txtUrlTienda = "";

  constructor() {


  }
  ngOnInit(): void {
    let usuariosLocal = localStorage.getItem("usuarios");
    if (usuariosLocal) {
      this.usuarios = JSON.parse(usuariosLocal)
    }
  }
}
