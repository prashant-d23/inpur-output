import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(){
    this.renderEmpList();
  }

  employeeList:EmployeeList[] = [];

  renderEmpList(){
    let emp1 = new EmployeeList("Mark","Angular Developer",50000)
    let emp2 = new EmployeeList("Chris","Java Developer",65000)
    let emp3 = new EmployeeList("Tony","Angular Developer",60000)
    let emp4 = new EmployeeList("Jason","Java Developer",70000)
    let emp5 = new EmployeeList("Tom","Angular Developer",75000)
    let emp6 = new EmployeeList('Annie','Angular Developer',80000)
    let emp7 = new EmployeeList('Scarlette','java Developer',80000)

    this.employeeList.push(emp1,emp2,emp3,emp4,emp5,emp6,emp7)
  }

  finalFilteredList:EmployeeList[] = this.employeeList;

  ngcount:any = 0;
  jvcount:any = 0;
 filteredData(data:any){
  this.finalFilteredList = data;

  this.ngcount = this.finalFilteredList.filter((el:any) => el.designation === 'Angular Developer').length
  this.jvcount = this.finalFilteredList.filter((el:any) => el.designation === "Java Developer").length

 }




}


export class EmployeeList{
    empName!:string;
    designation!:string;
    salary!:number;
    constructor(name:string,desig:string,salary:number){
      this.empName = name;
      this.designation = desig;
      this.salary = salary;
    }

}
