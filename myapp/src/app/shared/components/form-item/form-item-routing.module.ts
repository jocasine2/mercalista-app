import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormItemPage } from './form-item.page';

const routes: Routes = [
  {
    path: '',
    component: FormItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormItemPageRoutingModule {}
