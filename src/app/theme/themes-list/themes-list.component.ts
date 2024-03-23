import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = [];
  isLoding: boolean = true;
  constructor(private api: ApiService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLoged;
  }

  get userId (): string | undefined {
    return this.userService.user?.id || '';
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      this.themes = themes;
      
      
      this.isLoding = false;
  });
  
  }

  isSubscribed(theme: Theme): boolean {
    const isSubUser =  theme.subscribers.find((sub) => {
      return sub === this.userService.user?.id
    })
   
    
    
  return !!isSubUser;
  }

  

}

