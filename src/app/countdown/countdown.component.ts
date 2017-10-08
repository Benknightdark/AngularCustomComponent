import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges } from '@angular/core';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit,OnDestroy, OnChanges {
  @Input() Init: number = null;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();
  Counter: number = 0;
  CountDownTimeRef:any=null;
  constructor() { }

  ngOnInit() {
    //this.startCountdown()
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ClearTimeout();
  }
  ngOnChanges(changes) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
   // this.doCountdown()
  }
  startCountdown() {

    if (this.Init<100 ) {
      this.ClearTimeout();
      this.Counter = this.Init;
      this.doCountdown();
    }
  }
  doCountdown() {
   this.CountDownTimeRef= setTimeout(() => {
      this.Counter = this.Counter + 1;
      this.processCountdown();
    }, 1000);
  }
  ClearTimeout(){
    if(this.CountDownTimeRef){
      clearTimeout(this.CountDownTimeRef);
      this.CountDownTimeRef=null;
    }
  }
  processCountdown() {
    this.onDecrease.emit(this.Counter);
    console.log("count is ", this.Counter);

    if (this.Counter == 100) {
      this.onComplete.emit();
      console.log("--counter end--");
    }
    else {
      this.doCountdown();
    }
  }
}
