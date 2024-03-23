import { Injectable } from '@angular/core';
import { UserData } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserData | undefined;
  userKey = '[user]';


  get isLoged(): boolean {
    return !!this.user;
  }

  

  constructor() {
    try {
    const lsUser = localStorage.getItem(this.userKey) || '';
    const user = JSON.parse(lsUser);  
    } catch (error) {
      this.user = undefined;
      
    }
  }

login() {
  this.user = {
    id: "5fa64a072183ce1728ff3719",
    username: 'test1',
    email: 'test@test.com',
    password: 'test'
  }

  localStorage.setItem(this.userKey, JSON.stringify(this.user));
}

logout () {
  this.user = undefined;
  localStorage.removeItem(this.userKey);
}

}
