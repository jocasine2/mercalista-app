import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosPageRoutingModule } from './produtos-routing.module';
import { ProdutosPage } from './produtos.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'; /* datatables */
import { DataTableComponent } from '../../shared/components/data-table/data-table.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    NgxDatatableModule, /* datatables */
    FontAwesomeModule
  ],
  declarations: [ProdutosPage, DataTableComponent]
})
export class ProdutosPageModule {}
