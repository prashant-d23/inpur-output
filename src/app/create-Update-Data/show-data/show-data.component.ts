import { Component } from '@angular/core';
import { GetDetails } from '../create-data/create-data.component';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {

  storeDetails:GetDetails[] = []

  getFormDetails(data:any){
      this.storeDetails.push(data);
  }

}
