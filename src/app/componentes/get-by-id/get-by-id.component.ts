import { Component, OnInit, inject, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { campers } from 'src/app/interfaces/campers.interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {

  vans: campers | undefined 
  vansId!: number;
  private servicio = inject(ServiceService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.vansId =+ params['id'];
  this.details(this.vansId)});
  }

  details(id: number): void {
    this.servicio.getById(id).subscribe((data:campers) => {
      this.vans = data;
    })

  }



  


}
