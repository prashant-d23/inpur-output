import { Component } from '@angular/core';
import { UserForm } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-display-reactiveform',
  templateUrl: './display-reactiveform.component.html',
  styleUrls: ['./display-reactiveform.component.css']
})
export class DisplayReactiveformComponent {

  userForm:UserForm[] = []
  getFormData(form:any){
    this.userForm.push(form);
  }

}
