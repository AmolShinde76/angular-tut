import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  displayDiv:boolean = true;

  hide(){
    this.displayDiv = false;
  }
  show(){
    this.displayDiv = true;
  }
  toggleDiv(){
    this.displayDiv = !this.displayDiv;
  }

  // else if statement  
  divColorNumber:number = 0;
  showDivWithColor(num:number){
    this.divColorNumber = num;
  }
  handleInput(event:Event){
    this.divColorNumber = Number((event.target as HTMLInputElement).value);         
  }


  // switch statement
  color:string = 'black';
  showStDivWithColor(color:string){
    this.color = color;
  }
  handleStInput(event:Event){
    this.color = (event.target as HTMLInputElement).value;
  }
  


  // loops
  users = ['Amol', 'Sham', 'Ram', 'Satish'];
  students =[{
   id:0, 
   name:"Marry",
   class:10
  },
  {
   id:1, 
   name:"John",
   class:12
  },
  {
   id:2, 
   name:"Tom",
   class:7
  }
  
]

getName(name:string){
  alert(`student name is ${name}`);
}

}



