import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ThemeService } from '../theme.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  allThemes: Theme[] = [];
  constructor(private fb: FormBuilder, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getThemes();
  }

  getThemes() {
    this.themeService.getAllThemes().subscribe((res) => {
      this.allThemes = res;
      console.log(this.allThemes);
    })
  }

}

