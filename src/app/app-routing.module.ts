import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './theme/home/home.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'themes', loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
