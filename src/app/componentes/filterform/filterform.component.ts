import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-filterform',
  templateUrl: './filterform.component.html',
  styleUrls: ['./filterform.component.css']
})
export class FilterformComponent {

currentDate = new Date()
currentYear = this.currentDate.getFullYear();
 
filterForm: FormGroup;

constructor() {
  this.filterForm = new FormGroup({
   brand: new FormControl(),

  });
}

applyFilter(){
  console.log(this.filterForm.value);
}
  
}
