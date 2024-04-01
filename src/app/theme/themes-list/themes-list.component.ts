import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ThemeService } from '../theme.service';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  allThemes: Theme[] = [];
  constructor(
    private themeService: ThemeService,
    private userService: UserService
    ) { }


  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }


  ngOnInit(): void {
    this.getThemes();
  }

  getThemes() {
    this.themeService.getAllThemes().subscribe((res) => {
      this.allThemes = res;
    })
  }

  deleteTheme(id: string) {
    this.themeService.deleteTheme(id).subscribe((res) => {
      this.getThemes();
    })
  }

}

