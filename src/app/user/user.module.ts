import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { UserRoutingModule } from './user.routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule, UserRoutingModule
  ]
})
export class UserModule { }
