import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    

   constructor(private userService: UserService) {

   }
   isloggedIn(){
     return this.userService.isLogged;
   }

  ngOnInit(): void {
    
  }

}
