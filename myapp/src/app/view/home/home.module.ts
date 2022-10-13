import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'; /* datatables */
import { DataTableComponent } from '../../shared/components/data-table/data-table.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxDatatableModule, /* datatables */
    FontAwesomeModule
  ],

  declarations: [HomePage, DataTableComponent]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
