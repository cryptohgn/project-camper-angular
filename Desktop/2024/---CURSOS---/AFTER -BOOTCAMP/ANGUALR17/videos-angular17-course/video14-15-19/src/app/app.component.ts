import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Two way binding
staticInput: string ='Static two-way binding';
dynamicInput: string='';
 
  // Asigment Two way binding

inputval:string='';
dynamicVal:string='';

show(){
  this.dynamicVal = this.inputval
}


  title = 'video14-15-17-19';
  display(msg:string){
  alert(msg)
  }
  counter= 0;
  incr(){
    this.counter++;
  }
  onKeyPress(){
    console.log("keypress event is triggered")
  }
  onKeyDown(){
    console.log("keydown is triggered")
  }
  onKeyUP(){
    console.log("keyUp is triggered")
  }
  onFocus(){
    console.log("Focus is triggered")
  }
  onSelect(){
    console.log("Select is triggered")
  }
  onBlur(){
    console.log("Blur is triggered")
  }
  }

