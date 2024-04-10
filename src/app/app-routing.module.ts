import { AdduserComponent } from './componentes/adduser/adduser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AddCampervanComponent } from './componentes/add-campervan/add-campervan.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'addcampervan', component: AddCampervanComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
