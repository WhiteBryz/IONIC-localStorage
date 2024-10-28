import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  txtFullName: string = "";
  txtUserName: string = "";
  txtPassword: string = "";
  txtStoreName: string = "";
  txtUrlStore: string = "";

  usuarios: {
    id: number,
    fullName: string,
    userName: string,
    password: string,
    storeName: string,
    urlStore: string
  }[] = [];

  constructor(public navCtrl: NavController) {
    let usuariosLocal = localStorage.getItem("usuarios");

    if (usuariosLocal) {
      this.usuarios = JSON.parse(usuariosLocal);
    }
  }

  register() {
    if (!!this.txtFullName && !!this.txtUserName && !!this.txtPassword && !!this.txtStoreName && !!this.txtUrlStore) {
      // Validamos que no exista el usuario
      if (!this.usuarios.find((e) => e.userName == this.txtUserName)) {
        this.usuarios.push({
          id: Date.now(),
          fullName: this.txtFullName,
          userName: this.txtUserName,
          password: this.txtPassword,
          storeName: this.txtStoreName,
          urlStore: this.txtUrlStore
        })

        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));

        this.txtFullName = "";
        this.txtUserName = "";
        this.txtPassword = "";
        this.txtStoreName = "";
        this.txtUrlStore = "";

        this.navigateToLoginPage();
      }
    }
  }

  navigateToLoginPage() {
    this.navCtrl.navigateBack("login");
  }
  ngOnInit() {
    return;
  }

}
