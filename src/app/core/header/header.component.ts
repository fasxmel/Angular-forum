import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
     
    get isLoggedIn(): boolean {
      return this.userService.isLoged;
    }

    get userName (): string | undefined {
      return this.userService.user?.username || '';
    }

    logout() {
      this.userService.logout();
      this.router.navigate(['/login']);
    }

    constructor(private userService: UserService, private router: Router ) {}
}
