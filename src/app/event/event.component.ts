import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

eventHandler(event:MouseEvent){
  console.log(`Event is: ${(event.target as HTMLElement).tagName}`)  
}
name:string = "";
inputHandler(event:Event){   
  this.name = (event.target as HTMLInputElement).value;
}


}
