import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get<Theme[]>(`${this.baseUrl}/themes`);
   
  }
  
  getOneTheme(id: string) {
    return this.http.get<Theme>(`${this.baseUrl}/themes/${id}`);
  }

  addTheme(themeName: string, postText: string) {
    return this.http.post<Theme>(`${this.baseUrl}/themes`, {themeName, postText});
  }
    
  getPosts() {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  addPost(themeId: string, postText: string) {
    return this.http.post<Post>(`${this.baseUrl}/posts`, {themeId, postText});
  }

  getOnePost(id: string) {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }

}
