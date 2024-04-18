import { HttpClient } from '@angular/common/http';
import { Injectable, inject  } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


export class ServiceUsers {

    
private urlUsers= 'https://66104f380640280f219cce8d.mockapi.io/api/users'

private urlHttp = inject(HttpClient);

    getUsers(user: User,pass: any) {
       
       let response = this.urlHttp.get(this.urlUsers)
    //    response.find((user)=>user.name)
    //  response.find((item:any)=>item.username === user && item.password === pass)
    
    return response
  };

  localStorage (user: User | null): void {

    if (user){
            localStorage.setItem('clave',JSON.stringify(user))
          } else {
          localStorage.removeItem('clave');
          }
  }
      
        
      

  addUser(userData: User): Observable<User> {
    return this.urlHttp.post<User>(this.urlUsers, userData).pipe(
      tap((newUser: User) => {
        this.localStorage(newUser);
      })
    );
  };

  getCurrentUserFromLocalStorage(): User | null {
    const userString = localStorage.getItem('clave');
    return userString ? JSON.parse(userString) : null;
  }
     deleteUser(userId: string): Observable<User> {
    const url = `${this.urlUsers}/${userId}`;
    return this.urlHttp.delete<User>(url).pipe(
      tap(() => {
        this.localStorage(null);
      })
    );
  };

  updateUser(user: User): Observable<User> {
    const userId = user.id;
    const url = `${this.urlUsers}/${userId}`;
    return this.urlHttp.put<User>(url, user).pipe(
      tap((updatedUser: User) => {
        this.localStorage(updatedUser);
      })
    );
  }
    



}