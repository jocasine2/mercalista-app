import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheProdutoPageRoutingModule } from './detalhe-produto-routing.module';

import { DetalheProdutoPage } from './detalhe-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheProdutoPageRoutingModule
  ],
  declarations: [DetalheProdutoPage]
})
export class DetalheProdutoPageModule {}
