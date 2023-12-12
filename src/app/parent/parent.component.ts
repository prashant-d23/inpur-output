import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message!:string;

  //child data received
  dataReceivedFromChild:string=""

  getDataFromChild(data:any){
    this.dataReceivedFromChild = data;
  }

}
