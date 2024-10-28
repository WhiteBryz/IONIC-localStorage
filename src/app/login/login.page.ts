import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  txtUserName: string = "";
  txtPassword: string = "";
  cbRememberMe: boolean = false;
  showPassword: boolean = false;

  usuarios: {
    id: number,
    fullName: string,
    userName: string,
    password: string,
    storeName: string,
    urlStore: string
  }[] = [];

  constructor(public navCtrl: NavController) { }

  login() {
    const user = this.usuarios.find((e) => e.userName == this.txtUserName.toLowerCase())

    if (!!user) {
      if (user.password === this.txtPassword) {
        this.navigateToHomePage();
      }
    }
  }

  showingPassword() {
    this.showPassword = !this.showPassword;
  }

  navigateToHomePage() {
    this.navCtrl.navigateBack("home");
  }

  ngOnInit() {
    let usuariosLocal = localStorage.getItem("usuarios");
    if (usuariosLocal) {
      this.usuarios = JSON.parse(usuariosLocal)
    }
  }

}
