import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  login() {

  }

  showingPassword() {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {
    return;
  }

}
