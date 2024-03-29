import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../guard/auth.guard';
import { AddPostComponent } from './add-post/add-post.component';



const routes: Routes = [
      { path: 'themes', children:[
           
           { path: '', pathMatch: 'full', component: HomeComponent },
           { path: ':themeId', component: CurrentThemeComponent},
      ]},

      { path: 'add-theme', component: AddThemeComponent},
      { path: 'add-post', component: AddPostComponent},
      { path: 'current-theme', component: CurrentThemeComponent },

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ThemeRoutingModule { }
  