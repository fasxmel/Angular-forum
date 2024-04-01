import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from '../types/theme';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private baseUrlTheme = environment.apiUrlTheme;
  private baseUrlPost = environment.apiUrlPost;

  constructor(private http: HttpClient) { }

  //Themes
  getAllThemes() {
    return this.http.get<Theme[]>(this.baseUrlTheme)
  }

  getOneTheme(id: string) {
    return this.http.get<Theme>(`${this.baseUrlTheme}/${id}`)
  }

  addTheme(themeName: string, themeText: string) {
    return this.http.post<Theme>(this.baseUrlTheme, {themeName, themeText})   
  }

  updateTheme(id: string, data: any) {
    return this.http.put<Theme>(`${this.baseUrlTheme}/${id}`, data);
  }

  deleteTheme(id: string) {
    return this.http.delete<Theme>(`${this.baseUrlTheme}/${id}`);
  }
   //Posts
  getAllPosts() {
    return this.http.get<Post[]>(this.baseUrlPost);
  }

  addPost(postName: string, postText: string) {
    return this.http.post<Post>(this.baseUrlPost, {postName, postText})   
  }

  getOnePost(id: string) {
    return this.http.get<Post>(`${this.baseUrlPost}/${id}`)
  }

  updatePost(id: string, data: any) {
    return this.http.put<Post>(`${this.baseUrlPost}/${id}`, data);
  }

  deletePost(id: string) {
    return this.http.delete<Post>(`${this.baseUrlPost}/${id}`);
  }

}
