import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDispensaPage } from './lista-dispensa.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDispensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDispensaPageRoutingModule {}
