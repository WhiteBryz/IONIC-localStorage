import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  usuario: {
    id: number,
    fullName: string,
    userName: string,
    password: string,
    storeName: string,
    urlStore: string
  } = {
      id: 0,
      fullName: "",
      userName: "",
      password: "",
      storeName: "",
      urlStore: ""
    };

  constructor() {


  }
  ngOnInit(): void {
    let usuarioActual = localStorage.getItem("usuarioActual");
    if (usuarioActual) {
      this.usuario = JSON.parse(usuarioActual);
    }
  }
}
