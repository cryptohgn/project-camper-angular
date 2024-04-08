import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject  } from '@angular/core';
import { Observable } from 'rxjs';
import { Campers } from "../interfaces/campers.interface";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  private urlApi= 'https://66104f380640280f219cce8d.mockapi.io/api/campervans'

  private urlHttp = inject(HttpClient);

  getById(id: number): Observable<Campers> {
    const ruta = `${this.urlApi}/${id}`
    return this.urlHttp.get<Campers>(ruta)

}
}
