import { Injectable, OnDestroy } from '@angular/core';
import { UserData } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
 export class UserService implements OnDestroy {

private baseUrl = environment.apiUrlUser;
private user$$ = new BehaviorSubject<UserData | undefined>(undefined);
private user$ = this.user$$.asObservable();

user: UserData | undefined;
userKey = 'user';

userSubscription: Subscription;


get isLogged(): boolean {
  return !!this.user;
}


constructor(private http: HttpClient, private router: Router) {

  this.userSubscription = this.user$.subscribe(user => {
    this.user = user;
  
  });
}

loginUser(email: string, password: string) {
  return this.http.get<UserData[]>(`${this.baseUrl}?email=${email}&password=${password}`)
  .pipe(tap((user) => this.user$$.next(user[0])));
}
  
registerUser(data: UserData) {
return this.http.post<UserData>(this.baseUrl, data)
.pipe(tap((user) => this.user$$.next(user)));
}


logout() {
  this.user$$.next(undefined);
  }


getProfile() {
  return this.http
    .get<UserData>(this.baseUrl)
    .pipe(tap((user) => this.user$$.next(user)));
}

updateProfile(username: string, email: string) {
  return this.http
    .put<UserData>(this.baseUrl, {
      username,
      email,
    })
    .pipe(tap((user) => this.user$$.next(user)));
}

ngOnDestroy(): void {
  this.userSubscription.unsubscribe();
}

}
