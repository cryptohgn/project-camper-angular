import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Camper } from 'src/app/interfaces/campers.interface';
import { inject } from '@angular/core';
import { ServiceVans } from 'src/app/services/serviceVans.service';


@Component({
  selector: 'app-filterform',
  templateUrl: './filterform.component.html',
  styleUrls: ['./filterform.component.css']
})
export class FilterformComponent {

  formSearch: string = '';

  allVans: Camper[] = [];
  filterdedVans:Camper[] = [];
  vansService = inject(ServiceVans)
  
  async ngOnInit(){
    const response = await this.vansService.getAllVans();
    this.allVans = response;
    }

    searchVan() {
      console.log(this.formSearch)
      this.filterdedVans = this.allVans.filter((van) =>
        van.title.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase()) ||
        van.description.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase())
      )
      // .filter((van)=>van.description.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase()))
      console.log(this.filterdedVans)
    }

  
currentDate = new Date()
currentYear = this.currentDate.getFullYear();
 
filterForm: FormGroup;

constructor() {
  this.filterForm = new FormGroup({
   brand: new FormControl(''),
   otherbrand: new FormControl(''),
   model: new FormControl(''),
   othermodel: new FormControl(''),
   priceMin:new FormControl(0),
   priceMax: new FormControl(100000),
   kmMin: new FormControl(0),
   kmMax: new FormControl(1000000),
   yearsMin: new FormControl(1970),
   yearsMax: new FormControl(new Date().getFullYear()),
   kwMin: new FormControl(20),
   kwMax: new FormControl(600),
   diesel: new FormControl(false),
   gasoline: new FormControl(false),
   gas: new FormControl(false),
   electric: new FormControl(false),
   doors: new FormControl(0),
   kw: new FormControl(10),
   isolation: new FormControl(false),
   thinsulate: new FormControl(false),
   reflectix: new FormControl(false),
   foamoard: new FormControl(false),
   kayflex: new FormControl(false),
   other_isolation: new FormControl(false),
   solarpanel: new FormControl(false),
   liftedRoof: new FormControl(false),
   backCam: new FormControl(false),
   androidIOAuto: new FormControl(false),
   manual: new FormControl(false),
   automatic: new FormControl(false)
  });
}

applyFilter = () => {
  
  let filterVans = this.allVans.filter(item =>  {
    
    // Isolation filter
    const isolation = this.filterForm.get('isolation')?.value;
    if (isolation) {
    //  console.log(this.filterForm.get('thinsulate')?.value) === item.isolation.isolationMaterial
      this.filterForm.get('reflectix')?.value 
      this.filterForm.get('foamoard')?.value 
      this.filterForm.get('kayflex')?.value 
      this.filterForm.get('other_isolation')?.value
      
    }
    console.log(item.isolation)

    // Brand filter:
    return (this.filterForm.get('brand')?.value === item.brand 
    &&
     // Model filter
     this.filterForm.get('model')?.value === item.model )
     &&
     //Price filter
    (this.filterForm.get('priceMin')?.value) <= item.price &&
    (this.filterForm.get('priceMax')?.value) >= item.price
   
    //  // Km filter
    //  const minKm = this.filterForm.get('kmMin')?.value;
    //  const maxKm = this.filterForm.get('kmMax')?.value;
    //  if (minKm !== null && maxKm !== null && (item.km < minKm || item.km > maxKm)) {
    //    
    //  }
 
    //  // Years filter
    //  const minYear = this.filterForm.get('yearsMin')?.value;
    //  const maxYear = this.filterForm.get('yearsMax')?.value;
    //  if (minYear !== null && maxYear !== null && (item.year < minYear || item.year > maxYear)) {
    //    
    //  }
 
    //  // Fuel filter
    //  const diesel = this.filterForm.get('diesel')?.value;
    //  const gasoline = this.filterForm.get('gasoline')?.value;
    //  const gas = this.filterForm.get('gas')?.value;
    //  const electric = this.filterForm.get('electric')?.value;
    //  if (!(diesel || gasoline || gas || electric)) {
    //    
    //  }
 
    //  // Doors filter
    //  const selectedDoors = this.filterForm.get('doors')?.value;
    //  if (selectedDoors !== null && item.doors !== selectedDoors) {
    //    
    //  }
 
    //  // kw filter
    //  const selectedPower = this.filterForm.get('kw')?.value;
    //  if (selectedPower !== null && item.kw !== selectedPower) {
    //    
    //  }
 
     
 
    //  // Special features filter
    //  const solarpanel = this.filterForm.get('solarpanel')?.value;
    //  const liftedRoof = this.filterForm.get('liftedRoof')?.value;
    //  const backCam = this.filterForm.get('backCam')?.value;
    //  const androidIOAuto = this.filterForm.get('androidIOAuto')?.value;
    //  if (!(solarpanel || liftedRoof || backCam || androidIOAuto)) {
    //    
    //  }
 
    //  // Transmission filter
    //  const manual = this.filterForm.get('manual')?.value;
    //  const automatic = this.filterForm.get('automatic')?.value;
    //  if (!(manual || automatic)) {
    //    
    //  }
 

   });
   
  this.allVans = filterVans;
   console.log(this.allVans) 
  
  }

  }

 


