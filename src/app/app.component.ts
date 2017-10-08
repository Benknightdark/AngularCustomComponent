import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  InitNumber:number=0;
  onCompleteEvent(event){

  }
  onDecreaseEvent(event){
    this.InitNumber=event;

  }
}
