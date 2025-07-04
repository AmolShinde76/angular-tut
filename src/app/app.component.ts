import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import {InputGetSetComponent} from './input-get-set/input-get-set.component'
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [DirectivesComponent, DynamicComponent, HomeComponent, LoginComponent, EventComponent,InputGetSetComponent, ProfileComponent, CartComponent, ProductComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'  
})
export class AppComponent {
  title = "Angular App";

   say_hello() 
   {
      alert("Hello from app Component");
      this.other();
   } 

   other(){
    alert("Other function also called");
   }
    greeting_by_name(name:string) 
   {
      alert( `Hello ${name}`);
   }  
   

   event_checker(event:Event){
      console.log("event",event );
   }


   // Data types
   name = "Amol";
   get_name(){
    //this.name = 1;  // error
    this.name = "Shinde";
   }
  
   mixType:number|string = "Hello";
  
   sum(num1:number,num2: number ){
    alert(`Sum of num1 + num2 = ${num1+num2}`);

    this.mixType = 1;
    this.mixType = "Hello";
   }
}
