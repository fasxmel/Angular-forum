import { Injectable } from '@angular/core';
import { UserData } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';



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
return this.http.post<UserData>(this.baseUrl, data)
}


}
