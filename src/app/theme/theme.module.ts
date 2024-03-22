import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme.routing.module';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent
  ],
  imports: [
    CommonModule, ThemeRoutingModule
  ]
})
export class ThemeModule { }
