import { Item } from './../../../models/item';
import { ViewEncapsulation, Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DataTableComponent implements OnInit {
  public data: any;
  public rows: any;
  public filteredData: any;

  @Input() public url!: string;
  @Input() public columns!: any;
  @Input() public name!: any;

  @ViewChild('search', { static: false }) search: any;

  constructor(private http: HttpClient) {
  }

  //obtem as linhas da lista de um caminho informado na url do componente
  getList() {
    this.http.get<Item[]>(this.url).subscribe((res) => {
        this.rows = res;
        this.data = this.rows;
    });
  }

  ngOnInit() {
  }

  //ngOnChanges captura as alterações feitas e não exibidas
  ngOnChanges({ name }: any) {
    this.rows = this.getList()
  }

  getColumn(){
    let cols = []

    for (const col of this.columns) {
      cols.push(col.meta_name)
    }

    return cols
  }

  filterDatatable(event){

    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();

    if(!val){
      this.getList()
    }else{
      // get the amount of columns in the table
      let colsAmt = this.getColumn().length;
      // get the key names of each column in the dataset
      // console.log(Object.keys(this.rows[0]));

      let keys = this.getColumn();

      this.filteredData = this.data.filter(function(item){
        // iterate through each row's column data
        for (let i=0; i<colsAmt; i++){
          // check for a match
          if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
            // found match, return true to add to result set
            return true;
          }
        }
      });

      // whenever the filter changes, always go back to the first page
      this.rows = this.filteredData;
    }

  }
}
