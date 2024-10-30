import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.page.html',
  styleUrls: ['./menu-lateral.page.scss'],
})
export class MenuLateralPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: './home',
      icono: 'home'
    },
    {
      titulo: 'Clientes',
      url: './clientes',
      icono: 'people'
    },
    {
      titulo: 'Productos',
      url: './productos',
      icono: 'cart'
    },
    {
      titulo: 'Ventas',
      url: './home',
      icono: 'cash'
    },
    {
      titulo: 'Estadísticas',
      url: './home',
      icono: 'bar-chart'
    }
  ];
  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  cambiarIndiceSeleccionado(i: number) {
    this.indiceSeleccionado = i;
  }

  async salir() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deseas salir de la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Si deseo salir',
          handler: () => {
            localStorage.removeItem("usuarioActual");
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }



  ngOnInit() {
    return;
  }

}
