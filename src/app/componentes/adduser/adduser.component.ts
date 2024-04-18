import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ServiceUsers } from 'src/app/services/serviceUsers.services';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  servicio = inject(ServiceUsers);
  router = inject(Router);
  formulario!: FormGroup;


  
  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repito_password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const userData = this.formulario.value;
      this.servicio.addUser(userData).subscribe({
        next: (response: User) => {
          console.log('Respuesta de la API:', response);
          this.router.navigate(['/home']);
        },
        error: (error: User) => {
          console.error('Error al agregar usuario:', error);
 
        }
      });
    }
  }


}
