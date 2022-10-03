import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

//jcsnet: levar para modelos
export interface Data {
  movies: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DataTableComponent implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;
  public filteredData: any;

  @ViewChild('search', { static: false }) search: any;


  constructor(private http: HttpClient) {
    this.columns = [
      { name: 'Name' },
      { name: 'Company' },
      { name: 'Genre' }
    ];

    this.rows = this.getList()

  }

  getList() {
    this.http.get<Data>('../../../assets/movies.json')
      .subscribe((res) => {
        this.rows = res.movies;
        this.data = this.rows;
        this.filteredData = this.rows;
      });
  }

  ngOnInit() {

  }

  getColumn(){
    for (const col of this.columns) {
      console.log(col.name)
    }
  }

  filterDatatable(event){

    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
this.getColumn()
    if(!val){
      this.getList()
    }else{
      // get the amount of columns in the table
      let colsAmt = this.columns.length;
      // get the key names of each column in the dataset
      console.log(Object.keys(this.rows[0]));


      console.log((this.columns));
      let keys = Object.keys(this.rows[0]);
      // assign filtered matches to the active datatable

      this.filteredData = this.rows.filter(function(item){
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
// console.log(this.data)
      this.rows = this.filteredData;
    }

  }
}
