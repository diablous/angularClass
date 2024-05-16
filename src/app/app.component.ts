import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Fkg App';
  public counter: number = 15;

  // constructor() {
  //   setInterval(() => {
  //     this.counter += 1;
  //   }, 1000);
  // }

  increaseodecreaseBy( value: number):void {
    this.counter += value;
  }


  resetBy( value: number): void{
    this.counter = value;
  }
}
