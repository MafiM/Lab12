import { Component, OnInit,Input, Output, ContentChild,EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <input type="button" value="-" (click)="decrease()">
    <span>{{counterValue}}</span>
    <input type="button" value="+" (click)="increase()">
    <ng-content></ng-content>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Output() counterChange: EventEmitter<number>;
  @Input("counterVal") counter;
  @ContentChild('CompCountVal') ccvContent

  private counterValue;

  constructor() {
    this.counterChange = new EventEmitter()
  }

  ngOnInit() {
    this.counterValue = this.counter || 0
    this.change()
  }

  decrease() {
    this.counterValue--;
    this.change()
    return false;
  }
  increase() {
    this.counterValue++;
    this.change()
    return false;
  }
  change() {
    this.ccvContent.nativeElement.textContent =  this.counterValue
    this.counterChange.emit(this.counterValue);
  }
}
