import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './theme/home/home.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
