import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ServiceUsers } from 'src/app/services/serviceUsers.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

private serviceUsers = inject(ServiceUsers)
clave!: User;
router = inject(Router)

  loadCurrentUser(): void {
    const userFromLocalStorage = this.serviceUsers.getCurrentUserFromLocalStorage();
    console.log(userFromLocalStorage);
    
    if (userFromLocalStorage) {
      this.clave = userFromLocalStorage;
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
        }
      });
    }
  };

  editUser(): void {
    this.router.navigate(['/']);
  };


  ngOnInit(): void {

    this.loadCurrentUser();


  }


}
