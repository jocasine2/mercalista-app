import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheProdutoPage } from './detalhe-produto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheProdutoPageRoutingModule {}
