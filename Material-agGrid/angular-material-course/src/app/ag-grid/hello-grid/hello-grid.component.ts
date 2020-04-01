import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-grid',
  templateUrl: './hello-grid.component.html',
  styleUrls: ['./hello-grid.component.scss']
})
export class HelloGridComponent implements OnInit {
  title = 'Ag Grid Basic';

  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
  ];
  constructor() { console.log('hello')}

  ngOnInit(): void {
  }

}
