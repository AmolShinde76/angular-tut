import { Component } from '@angular/core';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  flag:boolean = true;
  userFlag:boolean = true;
  students = ["Amol", "Sham", "Rohan"];
  users = [{
    id:0,
    name: 'Yuraj'
  },
  {
    id:1,
    name:'Sham'

  }
]


 btnFlag = 1;

 handleClick(){
  this.btnFlag += 1;
 }

 color:string = "black";
 handleColor(color:string){
  this.color = color;
 }
}
