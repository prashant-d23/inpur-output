import { Component,EventEmitter,Input, Output } from '@angular/core';
import { EmployeeList } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-radio-list-count',
  templateUrl: './radio-list-count.component.html',
  styleUrls: ['./radio-list-count.component.css']
})
export class RadioListCountComponent {

  @Input() empListParent:any[] = []



  @Output() EmpEvent : EventEmitter<EmployeeList[]> = new EventEmitter();

  finalList:EmployeeList[] = []

  devCheck(desig:any){
    let checkDesignation:any = desig.target.value;
    this.finalList = this.empListParent.filter((el:any) =>   el.designation == checkDesignation)
    this.EmpEvent.emit(this.finalList)
  }


  @Input() javaCount:any;
  @Input() angCount:any;


}
