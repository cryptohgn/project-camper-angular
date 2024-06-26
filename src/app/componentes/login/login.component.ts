import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ServiceUsers } from 'src/app/services/serviceUsers.services';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  formulario: FormGroup
  mensajeError: string | null = null;
  allUsers: any;
  error!: string; 
  


  constructor(
    private fb: FormBuilder,
    private serviceUsers: ServiceUsers,
    private router: Router

  ) {
    this.formulario = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

   async onSubmit() {
    if (this.formulario.valid) {
      const { username, password } = this.formulario.value;
      await this.serviceUsers.getUsers(username,password).subscribe((data)=>{
        this.allUsers = data;
        let login = this.allUsers.find((item:any)=>item.username === username && item.password === password)
        console.log(login)
        if (login){
          localStorage.setItem('clave',JSON.stringify(login));
          this.router.navigate(['/user']);
        } else {
          Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "¡Usuario o contraseña incorrecta!",
            footer: '<a href="/login">Inténtalo de nuevo</a>'
          });
          
        
        }
        })
      
        
      } 
      

  }}
