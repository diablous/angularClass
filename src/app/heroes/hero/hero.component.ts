import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

 //getter propiedad
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  //metodo morado
  getHeroDescription():string {
    return `${this.name} is ${this.age} years old.`;
  }

 changeHero():void {
   this.name = 'thor';
 }

 changeAge():void {
   this.age = 35;
 }

 resetForm():void {
  this.name = 'ironman';
  this.age = 45;

  //document.querySelectorAll('h1')!.forEach( element => { element.innerHTML = '<h1>desde Angular</h1>';

  //});
  }

}
