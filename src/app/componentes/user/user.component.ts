import { ServiceVans } from 'src/app/services/serviceVans.service';
import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ServiceUsers } from 'src/app/services/serviceUsers.services';
import { Camper } from 'src/app/interfaces/campers.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {


private serviceUsers = inject(ServiceUsers)
servideVans = inject(ServiceVans)
allVans: Camper[]=[];

userVansAdds: Camper[]=[];

userFromLocalStorage!: any;

clave!: User;
router = inject(Router)

  loadCurrentUser(): void {
    this.userFromLocalStorage = this.serviceUsers.getCurrentUserFromLocalStorage();
    console.log(this.userFromLocalStorage);
    
    if (this.userFromLocalStorage) {
      this.clave = this.userFromLocalStorage;
  private serviceUsers = inject(ServiceUsers);
  clave!: User;
  router = inject(Router);

  loadCurrentUser(): void {
    const userFromLocalStorage =
      this.serviceUsers.getCurrentUserFromLocalStorage();
    console.log(userFromLocalStorage);

    if (userFromLocalStorage) {
      this.clave = userFromLocalStorage;
 cssFilter
    } else {
      this.router.navigate(['/login']);
    }
  }

  deleteUser(): void {
    if (this.clave && this.clave.id) {
      const userId = this.clave.id;
      this.serviceUsers.deleteUser(userId).subscribe({
        next: (response: User) => {
          console.log('Usuario eliminado:', response);
          this.router.navigate(['/login']);
        },
        error: (error: User) => {
          console.error('Error al eliminar usuario:', error);
        },
      });
    }


   
  };

  }


  editUser(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.loadCurrentUser();
    this.userVans();
  }

  async getVans() {
    const response = await this.servideVans.getAllVans();
    this.allVans = response;
    }
    
    userVans() {
      this.userVansAdds = this.allVans.filter((van)=>{
      van.user === this.clave.username;
      console.log(this.userVansAdds) 
      console.log(this.allVans)
    })
    }
  }
  }
}

