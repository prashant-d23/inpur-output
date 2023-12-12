import { Component } from '@angular/core';
import { User } from '../jinputchild/jinputchild.component';

@Component({
  selector: 'app-joutputparent',
  templateUrl: './joutputparent.component.html',
  styleUrls: ['./joutputparent.component.css']
})
export class JoutputparentComponent {

  receivedForm:User[] = [];

  getData(form:any){
    this.receivedForm.push(form);
  }
}
