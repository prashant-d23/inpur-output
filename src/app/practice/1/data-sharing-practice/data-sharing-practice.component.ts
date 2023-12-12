import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-data-sharing-practice',
  templateUrl: './data-sharing-practice.component.html',
  styleUrls: ['./data-sharing-practice.component.css']
})
export class DataSharingPracticeComponent {
  userDetails:User = new User();

  @Output() customEvt:EventEmitter<User> = new EventEmitter

getData(){
  this.customEvt.emit(this.userDetails)
  // console.log(this.userDetails)
}

@Input() receivePrtData: any


}
export class User{
  firstName!:string;
  lastName!:string;
  email!:string;
}
