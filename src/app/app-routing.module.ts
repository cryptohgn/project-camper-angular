import { AdduserComponent } from './componentes/adduser/adduser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AddCampervanComponent } from './componentes/add-campervan/add-campervan.component';
import { LoginComponent } from './componentes/login/login.component';
import { CamperVanViewComponent } from './componentes/camper-van-view/camper-van-view.component';
import { CamperVanListComponent } from './componentes/camper-van-list/camper-van-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'campervans', component: CamperVanListComponent },
  {path: "product/:id", component: CamperVanViewComponent},
  { path: 'addcampervan', component: AddCampervanComponent },
  { path: 'error', component: AddCampervanComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
