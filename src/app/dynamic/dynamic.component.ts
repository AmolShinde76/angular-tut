import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

  colorName:string  = "red";
  fontSize:number = 20;
}
