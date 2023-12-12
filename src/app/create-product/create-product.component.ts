import { Component, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  //we have multiple field so we can collect with object

  productObj:Product = new Product();

    //-----
    constructor(){
      this.productObj.productName = "prashant"
    }

    @Input() selectedProduct!:any;

//-----------

  @Output()
  emitProductData:EventEmitter<Product> = new EventEmitter();

  createProduct(){
    console.log(this.productObj)
    this.emitProductData.emit(this.productObj)
  }

  reset(){
this.productObj = new Product();
  }


  //edit parent data get data return to edit

  @Input() parentdata!:Product;


}
//create class to collect information
export class Product{
  productName!:string;
  quantity!:number;
  price!:number
}
