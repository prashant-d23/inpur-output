import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myForm:User = new User();


  @Output()
  sendForm:EventEmitter<User> = new EventEmitter();

  sendInfo(){
    console.log(this.myForm)
    this.sendForm.emit(this.myForm)
  }



}

export class User{
  userName!:string;
  password!:string;
}
