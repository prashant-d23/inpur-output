import { Component, Input } from '@angular/core';
// import { UserForm } from '../user-form/user-form.component';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

 receivedList:any = [];

 selectedUser:any = null;

 getUserForm(form:any){
  if(this.selectedUser){
    let index = this.receivedList.indexOf(this.selectedUser)
    if(index !== -1){
      this.receivedList[index] = form;
      this.selectedUser = null;
    }
  }else{
    this.receivedList.push(form);
  }
 }

 editDetails(index:any){
  this.selectedUser = this.receivedList[index];
  console.log(this.selectedUser);
 }

 deleteDetails(){
  if (this.selectedUser) {
    const index = this.receivedList.indexOf(this.selectedUser);
    if (index !== -1) {
      this.receivedList.splice(index, 1);
      this.selectedUser = null;
    }
  }

 }

}
