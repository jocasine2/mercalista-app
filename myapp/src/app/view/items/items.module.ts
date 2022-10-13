import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';

/* datatables */
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    NgxDatatableModule, /* datatables */
    FontAwesomeModule
  ],
  declarations: [ItemsPage, DataTableComponent]
})
export class ItemsPageModule {}
