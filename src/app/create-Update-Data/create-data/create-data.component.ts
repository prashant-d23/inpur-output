import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent {

    userObj:GetDetails = new GetDetails();

    @Output() childEvt:EventEmitter<GetDetails> = new EventEmitter();


    collectData(){
      // console.log(this.userObj)
      this.childEvt.emit(this.userObj)
    }


}

export class GetDetails{
  userName!:string;
  password!:string;
}
