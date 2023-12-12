import { Component } from '@angular/core';

@Component({
  selector: 'app-send-counter',
  templateUrl: './send-counter.component.html',
  styleUrls: ['./send-counter.component.css']
})
export class SendCounterComponent {

initialValue = 0;

receivedCounter(data:any){
  this.initialValue = data;

}

}
