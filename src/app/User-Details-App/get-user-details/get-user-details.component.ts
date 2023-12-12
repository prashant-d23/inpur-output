import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.css']
})
export class GetUserDetailsComponent {

  userObj:UserDetails = new UserDetails();

  @Output() childEvent = new EventEmitter<UserDetails>();

  sendData(){
    this.childEvent.emit(this.userObj)
    console.log(this.userObj)
  }

  reset(){
    this.userObj = new UserDetails();
  }


}

export class UserDetails{
  userName!: string;
  password!:string;
}
