import { AdduserComponent } from './componentes/adduser/adduser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AddCampervanComponent } from './componentes/add-campervan/add-campervan.component';
import { LoginComponent } from './componentes/login/login.component';
import { CamperVanViewComponent } from './componentes/camper-van-view/camper-van-view.component';
import { CamperVanListComponent } from './componentes/camper-van-list/camper-van-list.component';
import { loginGuard } from './guards/login.guard';
import { UserComponent } from './componentes/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [loginGuard] },
  { path: 'user', component: UserComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'allcampers', component: CamperVanListComponent },
  { path: 'addcampervan', component: AddCampervanComponent },
  { path: 'camperview/:id', component: CamperVanViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'allcampers', component: CamperVanListComponent, canActivate: [loginGuard] },
  { path: 'addcampervan', component: AddCampervanComponent },
  { path: 'error', component: AddCampervanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
