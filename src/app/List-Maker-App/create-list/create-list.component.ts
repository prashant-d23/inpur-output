import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent {

  productListObj:ProductList = new ProductList();

  @Output()
  emitChildData = new EventEmitter<ProductList>();

  collectData(){
    // console.log(this.productListObj)
    this.emitChildData.emit(this.productListObj);
  }



}

export class ProductList{
  productName!:string;
  price!:number;
  quantity!:number;
}
