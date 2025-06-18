import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  imports: [LoginComponent],
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
}
