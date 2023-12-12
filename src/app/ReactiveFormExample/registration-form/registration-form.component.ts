import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm!:FormGroup;

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.createForm();
  }
  createForm(){
      this.registrationForm = this.fb.group({
        "fullName" : ['',[Validators.required,Validators.pattern('[a-zA-Z]{2,20}')]],
        "email" : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}')]],
        "password" : ['',[Validators.required]],
        "confirmPassword" : ['',[Validators.required]]
      })
  }

  get fullName(){
    return this.registrationForm.get('fullName')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword')
  }

  getForm(){
    console.log("form",this.registrationForm.value);
  }




}
