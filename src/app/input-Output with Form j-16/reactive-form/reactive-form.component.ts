import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../passwordValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.createForm();

    this.userForm.get('password')?.valueChanges.subscribe((password)=>{
      this.userForm.get('confirmPassword')?.updateValueAndValidity();
    })
  };

  createForm(){
    this.userForm = this.fb.group({
      'fullName' : ['',Validators.required],
      'email' : ['',Validators.required],
      'password' : ['',Validators.required],
      'confirmPassword' : ['',Validators.required,passwordValidator],
      'mobileNumber' : ['',Validators.required],
      'state' : [''],
      'city' : ['']
    });
  };

  get fullName(){
    return this.userForm.get('fullName');
    // return this.userForm.controls['firstName']
  };
  get email(){
    return this.userForm.get('email')
  };
  get password(){
    return this.userForm.get('password')
  };
  get confirmPassword(){
    return this.userForm.get('confirmPassword')
  };
  get mobileNumber(){
    return this.userForm.get('mobileNumber')
  };
  get state(){
    return this.userForm.get('state')
  };
  get city(){
    return this.userForm.get('city')
  };


  @Output() sendForm:EventEmitter<UserForm> = new EventEmitter();


  submitForm(){
    console.log(this.userForm.value)
    this.sendForm.emit(this.userForm.value);
  }



}

export class UserForm{
  fullName!:string;
  email!:string;
  password!:string;
  confirmPassword!:string;
  mobileNumber!:string;
  state!:string;
  city!:string;
}
