import { Component } from '@angular/core';
import { UserDetails } from '../get-user-details/get-user-details.component';

@Component({
  selector: 'app-show-user-details',
  templateUrl: './show-user-details.component.html',
  styleUrls: ['./show-user-details.component.css']
})
export class ShowUserDetailsComponent {

  renderData:UserDetails[] = [];

  getChildDetails(data:any){
      this.renderData.push(data);
  }



}
