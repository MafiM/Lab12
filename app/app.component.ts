import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public counterVal: number
  //public ComponentCounterValue: number

  constructor(){
    this.setCounter(5)
  }
  setCounter(val) {
    this.counterVal = val 
    //this.ComponentCounterValue = val
  }
}
