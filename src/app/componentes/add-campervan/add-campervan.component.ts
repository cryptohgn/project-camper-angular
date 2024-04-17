import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Camper } from 'src/app/interfaces/campers.interface';
import { inject } from '@angular/core';
import { ServiceVans } from 'src/app/services/serviceVans.service';


@Component({
  selector: 'app-add-campervan',
  templateUrl: './add-campervan.component.html',
  styleUrls: ['./add-campervan.component.css']
})
export class AddCampervanComponent {

  allVans: Camper[] = [];
    
  vansService = inject(ServiceVans)

  newVan!: Camper;
  
  addVanForm: FormGroup;
  
  constructor() {
    this.addVanForm = new FormGroup({
     brand: new FormControl("", []),
     model: new FormControl("", []),
     price: new FormControl("", []),
     km: new FormControl("", []),
     year: new FormControl("01/01/1900",[]),
     kw: new FormControl(0, []),
     diesel: new FormControl(false),
     gasoline: new FormControl(false),
     gas: new FormControl(false),
     electric: new FormControl(false),
     doors: new FormControl(0, []),
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
    
    async ngOnInit(){
      const response = await this.vansService.getAllVans();
      this.allVans = response;
      }
  
    async addVan() {
       this.addVan = this.addVanForm.value;
       let response = await this.vansService.insertVan(this.newVan)
      }
    }