import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // if we update signal value. it will call effect, but not property.
  //count = signal(10);
  //count:WritableSignal<number | string> = signal(10);
  count:WritableSignal<number> = signal(10);  

constructor(){  
    effect(()=>{
    console.log("count signal values:", this.count());
  })
}

updateValue(flag:number){
  if(flag == 1){
    this.count.set(this.count()+1)

    // 
    //this.count.update((val)=> val+1);  // only single data type shoulde contain variable
        

  }else{
    this.count.set(this.count()-1)
  }

  //this.num.set(20); //computed signals are read only we can not update it.
}



// Computed signals
num1 = signal(10);
num2 = signal(20);

numberSum = computed(()=> this.num1()+this.num2())
showValue(){
  console.log("before numberSum=", this.numberSum());
  this.num2.set(this.num2()+1);
  console.log("After numberSum=", this.numberSum());
}
}
