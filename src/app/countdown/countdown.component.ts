import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  @Input() Init: number = null;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();
  Counter: number = 0;
  constructor() { }

  ngOnInit() {
    this.startCountdown()
  }
  startCountdown() {
    console.log(this.Init)
    console.log(this.Init)

    if (this.Init<100 ) {
      this.Counter = this.Init;
      this.doCountdown();
    }
  }
  doCountdown() {
    setTimeout(() => {
      this.Counter = this.Counter + 1;
      this.processCountdown();
    }, 1000);
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
