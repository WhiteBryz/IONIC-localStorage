import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLateralPage } from './menu-lateral.page';

const routes: Routes = [
  {
    path: '',
    component: MenuLateralPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../productos/productos.module').then(m => m.ProductosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuLateralPageRoutingModule { }
