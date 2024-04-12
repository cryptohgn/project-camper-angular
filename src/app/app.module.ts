import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { UserComponent } from './componentes/user/user.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdduserComponent } from './componentes/adduser/adduser.component';
import { CamperVanListComponent } from './componentes/camper-van-list/camper-van-list.component';
import { CamperVanViewComponent } from './componentes/camper-van-view/camper-van-view.component';
import { AddCampervanComponent } from './componentes/add-campervan/add-campervan.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    AdduserComponent,
    CamperVanListComponent,
    CamperVanViewComponent,
    AddCampervanComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
