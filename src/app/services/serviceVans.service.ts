import { Camper } from 'src/app/interfaces/campers.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject  } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ServiceVans {

  private urlApi= 'https://66104f380640280f219cce8d.mockapi.io/api/campervans'

  private urlHttp = inject(HttpClient);

  getAllVans(): Promise<Camper[]> {
    return firstValueFrom (
      this.urlHttp.get<Camper[]>(this.urlApi)
    )
  }

  getById(id: number): Observable<Camper> {
    const ruta = `${this.urlApi}/${id}`
    return this.urlHttp.get<Camper>(ruta)
  } 

  insertVan(newVan: Camper) :Promise<Camper>{
    console.log(newVan)
    return firstValueFrom (
      this.urlHttp.post<Camper>(this.urlApi, newVan)
    )
    
  }

}
