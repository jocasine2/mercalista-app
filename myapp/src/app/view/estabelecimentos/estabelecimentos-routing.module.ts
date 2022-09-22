import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstabelecimentosPage } from './estabelecimentos.page';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstabelecimentosPageRoutingModule {}
