import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jinputchild',
  templateUrl: './jinputchild.component.html',
  styleUrls: ['./jinputchild.component.css']
})
export class JinputchildComponent implements OnInit {

  logInForm!: FormGroup;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.logInForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.logInForm.valid) {
      this.formSubmit.emit(this.logInForm.value);
    }
  }
}

export class User{
  userName!:string;
  password!:string;
}
