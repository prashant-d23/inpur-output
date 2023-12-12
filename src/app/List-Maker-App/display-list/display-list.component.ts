import { Component } from '@angular/core';
import { ProductList } from '../create-list/create-list.component';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent {

  listOfProducts:ProductList[] = [];

  getChildData(data:any){
    this.listOfProducts.push(data)
  }



}
