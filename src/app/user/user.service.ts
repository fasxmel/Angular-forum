import { Injectable } from '@angular/core';
import { UserData } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
 export class UserService {

private baseUrl = environment.apiUrlUser;

constructor(private http: HttpClient, private router: Router) {}

loginUser(email: string, password: string) {
  return this.http.get<UserData[]>(`${this.baseUrl}?email=${email}&password=${password}`)
}
  
registerUser(data: UserData) {
  if (data.password !== data.rePassword) {
    alert('Passwords do not match');
} 
  return this.http.post<UserData>(this.baseUrl, data)
}


}
