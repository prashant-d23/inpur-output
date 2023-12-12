import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //this is input property for child it holds parent data

  @Input() dataReceivedFromParent:string = '';
// ------------------------------------------------------
  //holding the value sending to parent
  replyData:string = ''  //1

  //this is custom event using ready made class eventemitter we can create a new Event
  //we are sending string type data
  @Output() emitChildData:EventEmitter<string> = new EventEmitter<string>(); //2

  //when we click on send button event will fire and data will emitted
  sendData(){ //when use send on click button data will send
    this.emitChildData.emit(this.replyData)   //emit is custom method of EE
  }



}
