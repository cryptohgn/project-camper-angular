import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject  } from '@angular/core';
import { campers } from "../interfaces/campers.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  private urlApi= 'https://66104f380640280f219cce8d.mockapi.io/api/campervans'

  private urlHttp = inject(HttpClient);

  getById(id: number): Observable<campers> {
    const ruta = `${this.urlApi}/${id}`
    return this.urlHttp.get<campers>(ruta)

}
}
