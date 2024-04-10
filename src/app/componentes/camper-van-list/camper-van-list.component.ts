import { Component, inject } from '@angular/core';
import { ServiceVans } from 'src/app/services/serviceVans.service';
import { Camper } from 'src/app/interfaces/campers.interface';

@Component({
  selector: 'app-camper-van-list',
  templateUrl: './camper-van-list.component.html',
  styleUrls: ['./camper-van-list.component.css']
})
export class CamperVanListComponent {

allVans: Camper[] = []; 

vansService = inject(ServiceVans)

async ngOnInit(){
  const response = await this.vansService.getAllVans();
  this.allVans = response
  console.log(this.allVans)
  }

}
