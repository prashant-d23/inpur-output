import { Component } from '@angular/core';
import { Product } from '../create-product/create-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList:Product[] = [];



  getChildData(data:any){
    console.log("pc",data)
    this.productList.push(data)
  }

//---------------
productObj!:Product;

editData(index:number){
  this.productObj = this.productList[index ]

}
//---------------



  deleteData(){

  }

  editProduct(index:number){

  }



}
