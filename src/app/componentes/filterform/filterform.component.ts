
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
  filteredVans:Camper[] = [];
  vansService = inject(ServiceVans)

  async ngOnInit(){
    const response = await this.vansService.getAllVans();

    // C.S. allVans se obtiene sólo una vez y no se modifica, para poder siempre filtrar de la lista completa
    this.allVans = response;

    // C.S. Lista filtrada que será modificado según parámetros de filtro
    this.filteredVans = this.allVans;

    }

    searchVan() {
      console.log(this.formSearch)
      this.filteredVans = this.allVans.filter((van) =>
       van.title.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase()) 
      //  van.description.includes(this.formSearch)
        // van.title.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase()) ||
        // van.description.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase())
      )
      // .filter((van)=>van.description.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase()))
      console.log(this.filteredVans)
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
   yearMin: new FormControl(1970),
   yearMax: new FormControl(new Date().getFullYear()),
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

   // C.S. Ajustado nombre del control de formulatio
   foamBoard: new FormControl(false),
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

    // C.S. Filtros individuales
    const brandFilter = !this.filterForm.get('brand')!.value || this.filterForm.get('brand')!.value === item.brand;
    const modelFilter = !this.filterForm.get('model')!.value || this.filterForm.get('model')!.value === item.model;
    const priceFilter = item.price >= this.filterForm.get('priceMin')!.value  && item.price <= this.filterForm.get('priceMax')!.value;
    const kmFilter = item.km >= this.filterForm.get('kmMin')!.value && item.km <= this.filterForm.get('kmMax')!.value;
    const yearFilter = item.year >= this.filterForm.get('yearMin')!.value && item.year <= this.filterForm.get('yearMax')!.value;
    const fuelFilter = (!this.filterForm.get('diesel')!.value && !this.filterForm.get('gasoline')!.value && !this.filterForm.get('gas')!.value && !this.filterForm.get('electric')!.value)
    || this.filterForm.get(item.fuel.toLowerCase())!.value;
    const doorsFilter = !this.filterForm.get('doors')!.value || this.filterForm.get('doors')!.value === item.doors;
    const kwFilter = item.kw >= this.filterForm.get('kwMin')!.value && item.kw <= this.filterForm.get('kwMax')!.value;

    const solarPanelFilter = !this.filterForm.get('solarpanel')!.value || item.solarpanel;
    const liftedRoofFilter = !this.filterForm.get('liftedRoof')!.value || item.liftedRoof;
    const backCamFilter = !this.filterForm.get('backCam')!.value || item.backCam;
    const androidIOAutoFilter = !this.filterForm.get('androidIOAuto')!.value || item.androidIOAuto;
    const specialFeaturesFilter = solarPanelFilter && liftedRoofFilter && backCamFilter && androidIOAutoFilter;

    const changeFilter = (!this.filterForm.get('manual')!.value && !this.filterForm.get('automatic')!.value)
      || (this.filterForm.get('manual')!.value && this.filterForm.get('automatic')!.value)
      || (this.filterForm.get('manual')!.value && item.change === 'Manual')
      || (this.filterForm.get('automatic')!.value && item.change === 'Automatic');

    const thinsulateFilter = !this.filterForm.get('thinsulate')!.value || item.isolation.isolationMaterial.thinsulate;
    const reflectixFilter = !this.filterForm.get('reflectix')!.value || item.isolation.isolationMaterial.reflectix;
    const foamBoardFilter = !this.filterForm.get('foamBoard')!.value || item.isolation.isolationMaterial.foamBoard;
    const kayflexFilter = !this.filterForm.get('kayflex')!.value || item.isolation.isolationMaterial.kayflex;
    const other_isolationFilter = !this.filterForm.get('other_isolation')!.value || item.isolation.isolationMaterial.other;
    const isolationFilter = !this.filterForm.get('isolation')!.value
      || (thinsulateFilter && reflectixFilter && foamBoardFilter && kayflexFilter && other_isolationFilter)

    // C.S. Combinación de todos los filtros
    return brandFilter && modelFilter && priceFilter && kmFilter && yearFilter
      && fuelFilter && fuelFilter && doorsFilter && kwFilter && specialFeaturesFilter
      && changeFilter && isolationFilter;

   });

  this.filteredVans = filterVans;

  }

  async reset(){
    const response = await this.vansService.getAllVans();
    // C.S. allVans se obtiene sólo una vez y no se modifica, para poder siempre filtrar de la lista completa
    this.filteredVans = response;
  }

  // sendFiltered(){
  //   const filtered = this.filteredVans
  //   this.vansService.getFiltered(filtered);
  // }
  }

