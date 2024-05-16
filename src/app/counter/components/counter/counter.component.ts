import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{counter}}</h2>

    <button (click)="increaseodecreaseBy(3)" class="mat-button">+1</button>
    <button (click)="resetBy(15)">reset</button>
    <button (click)="increaseodecreaseBy(-2)">-1</button>




  `
})



export class CounterComponent {
  public title: string = 'Fkg App';
  public counter: number = 15;

  increaseodecreaseBy( value: number):void {
    this.counter += value;
  }


  resetBy( value: number): void{
    this.counter = value;
  }

}
