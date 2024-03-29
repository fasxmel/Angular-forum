import { Injectable } from '@angular/core';
import { UserData } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
 export class UserService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
}

register(userData: UserData) {
  return this.http.post<UserData>(`${this.baseUrl}/users`, userData)
}

login(email: string): Observable<UserData[]> {
  return this.http.get<UserData[]>(`${this.baseUrl}/users?email=${email}`)
}



}
