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
   otherbrand: new FormControl(),
   model: new FormControl(),
   othermodel: new FormControl(),
   priceMin:new FormControl(),
   priceMax: new FormControl(),
   kmMin: new FormControl(),
   kmMax: new FormControl(),
   yearsMin: new FormControl(),
   yearsMax: new FormControl(),
   diesel: new FormControl(),
   gasoline: new FormControl(),
   gas: new FormControl(),
   electric: new FormControl(),
   doors: new FormControl(),
   seats: new FormControl(),
   power: new FormControl(),
   isolation: new FormControl(),
   thinsulate: new FormControl(),
   reflectix: new FormControl(),
   foamoard: new FormControl(),
   kayflex: new FormControl(),
   other_isolation: new FormControl(),
   solarpanel: new FormControl(),
   liftedRoof: new FormControl(),
   backCam: new FormControl(),
   androidIOAuto: new FormControl()
  });
}

applyFilter(){
  console.log(this.filterForm.value);
}
  
}
