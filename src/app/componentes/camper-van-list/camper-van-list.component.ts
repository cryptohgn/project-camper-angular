import { Component, inject, Input } from '@angular/core';
import { ServiceVans } from 'src/app/services/serviceVans.service';
import { Camper } from 'src/app/interfaces/campers.interface';

@Component({
  selector: 'app-camper-van-list',
  templateUrl: './camper-van-list.component.html',
  styleUrls: ['./camper-van-list.component.css']
})



export class CamperVanListComponent {

  @Input() filteredVans: Camper[] = [];

  allVans: Camper[] = []; 
  favVans: Camper[] = [];
  camperFav!: any;
  error!: string;
  
  vansService = inject(ServiceVans)
  
async ngOnInit(){
  try{
    const response = await this.vansService.getAllVans();
    this.allVans = response
    console.log(this.allVans)
  } catch (error){
    this.error = "Error 404"
  
  }
}

addFav(id: any){
  
  console.log(id)
  this.camperFav = this.allVans.find((van) =>
  van.id == id);
  this.favVans.push(this.camperFav)
  console.log(this.favVans)

}


  
}


