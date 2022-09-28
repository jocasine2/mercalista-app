import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDispensaPageRoutingModule } from './lista-dispensa-routing.module';

import { ListaDispensaPage } from './lista-dispensa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDispensaPageRoutingModule
  ],
  declarations: [ListaDispensaPage]
})
export class ListaDispensaPageModule {}
