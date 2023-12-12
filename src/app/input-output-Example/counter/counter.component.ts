import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  receivedCounter!:number;

  @Output()
  sendCounter:EventEmitter<number> = new EventEmitter();

  increment(){
    this.receivedCounter++;
    this.sendCounter.emit(this.receivedCounter)
  }
  decrement(){
    this.receivedCounter--;
    this.sendCounter.emit(this.receivedCounter);
  }


}
