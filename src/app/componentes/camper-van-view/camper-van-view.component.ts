import { Component, OnInit } from '@angular/core';
import { inject, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camper } from 'src/app/interfaces/campers.interface';
import { ServiceVans } from 'src/app/services/serviceVans.service';

@Component({
  selector: 'app-camper-van-view',
  templateUrl: './camper-van-view.component.html',
  styleUrls: ['./camper-van-view.component.css']
})
export class CamperVanViewComponent {
  vans: Camper | undefined 
  vansId!: number;
  private servicio = inject(ServiceVans)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.vansId =+ params['id'];
  this.details(this.vansId)});
  }

  details(id: number): void {
    this.servicio.getById(id).subscribe((data:Camper) => {
      this.vans = data;
    })
  }
}
