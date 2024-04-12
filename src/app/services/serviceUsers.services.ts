import { HttpClient } from '@angular/common/http';
import { Injectable, inject  } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })


export class ServiceUsers {

    
private urlUsers= 'https://66104f380640280f219cce8d.mockapi.io/api/users'

private urlHttp = inject(HttpClient);

    getUsers(user: any,pass: any) {
       
       let response = this.urlHttp.get(this.urlUsers)
    //    response.find((user)=>user.name)
    //  response.find((item:any)=>item.username === user && item.password === pass)
    
    return response
    

    }
}