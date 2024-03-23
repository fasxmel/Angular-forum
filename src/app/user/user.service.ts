import { Injectable } from '@angular/core';
import { UserData } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserData | undefined;
  userKey = '[user]';


  get isLoged(): boolean {
    return !!this.user;
  }

  

  constructor(private http: HttpClient) {
    try {
    const lsUser = localStorage.getItem(this.userKey) || '';
    this.user = JSON.parse(lsUser);  
    } catch (error) {
      this.user = undefined;
      
    }
  }

login(email: string, password: string) {
  return this.http.post<UserData>('/api/login', {email, password});
}

register(email: string, password: string, repassword: string) {
  return this.http.post<UserData>('/api/register', {email, password, repassword});
}

logout () {
  this.user = undefined;
  localStorage.removeItem(this.userKey);
}

}
