import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  allThemes: Theme[] = [];
  constructor(private fb: FormBuilder, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getThemes() 
  }
  getThemes() {
    this.themeService.getAllThemes().subscribe((res) => {
      this.allThemes = res;
    })
  }

}
