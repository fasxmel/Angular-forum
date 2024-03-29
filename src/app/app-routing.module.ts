import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './theme/home/home.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
