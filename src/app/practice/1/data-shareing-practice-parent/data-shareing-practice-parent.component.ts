import { Component } from '@angular/core';
import { User } from '../data-sharing-practice/data-sharing-practice.component';

@Component({
  selector: 'app-data-shareing-practice-parent',
  templateUrl: './data-shareing-practice-parent.component.html',
  styleUrls: ['./data-shareing-practice-parent.component.css']
})
export class DataShareingPracticeParentComponent {

  displayChildData!:User
  getChildData(data:any){
    this.displayChildData = data;
  }

  myName:string = '';
}
