import { Component } from '@angular/core';

@Component({
  selector: 'app-input-get-set',
  imports: [],
  templateUrl: './input-get-set.component.html',
  styleUrl: './input-get-set.component.css'
})
export class InputGetSetComponent {
  name:string = "";
  displayName:string = "";
  displayEmail:string = "";
  getName(event:Event){
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
  }

  getValue(){
    this.displayName = this.name;
  }
  setValue(){
    this.displayName = "Default Name";
  }
  getEmail(email:string){
    this.displayEmail = email;
  }
}
