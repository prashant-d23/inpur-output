import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit,DoCheck{

  userForm!:FormGroup;
  @Input() editData!:any;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.userForm = this.fb.group({
      userName : [''],
      password : [''],
      mobileNumber : [''],
    })
  }

  ngDoCheck() {
    if(this.editData){
      this.userForm.patchValue(this.editData);
    }
  }

  @Output() sendForm:EventEmitter<any> = new EventEmitter();

  submitForm(){
    console.log(this.userForm.value)
    this.sendForm.emit(this.userForm.value)
    this.userForm.reset();
  }


}

// export class UserForm {
//   userName!:string;
//   password!:string;
//   mobileNumber!:string;
// }
