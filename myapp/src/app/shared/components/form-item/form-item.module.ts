import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormItemPageRoutingModule } from './form-item-routing.module';

import { FormItemPage } from './form-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormItemPageRoutingModule
  ],
  declarations: [FormItemPage]
})
export class FormItemPageModule {}
