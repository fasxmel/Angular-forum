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

private baseUrl = environment.apiUrlUser;

constructor(private http: HttpClient, private router: Router) {}

getAllUsers() {
  return this.http.get(this.baseUrl)
}

getUserbyId(id: any) {
  return this.http.get(this.baseUrl+'/'+id)
}

registerUser(data: any) {
  return this.http.post(this.baseUrl, data)
}


}
