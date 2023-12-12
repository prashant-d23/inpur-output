import { Component, OnInit } from '@angular/core';
import { User } from '../form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

receivedForm:User[] = [];


getFormData(data:any){

    this.receivedForm.push(data)
  }
}
