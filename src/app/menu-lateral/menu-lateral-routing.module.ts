import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLateralPage } from './menu-lateral.page';

const routes: Routes = [
  {
    path: '',
    component: MenuLateralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuLateralPageRoutingModule {}
