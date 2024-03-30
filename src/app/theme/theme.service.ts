import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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

  //THEMES CRUD
  getAllThemes() {
    return this.http.get<Theme[]>(this.baseUrlTheme)
  }

  getOneTheme(id: string) {
    return this.http.get<Theme>(`${this.baseUrlTheme}/${id}`)
  }
 //TODO: fix the addTheme method
  addTheme(data: any){
    return this.http.post(this.baseUrlTheme, data).pipe(map((res: any) => {
      return res;
    }));
  }

  updateTheme(id: string, data: any) {
    return this.http.put<Theme>(`${this.baseUrlTheme}/${id}`, data);
  }

  deleteTheme(id: string) {
    return this.http.delete<Theme>(`${this.baseUrlTheme}/${id}`);
  }



  //POSTS CRUD
  getAllPosts() {
    return this.http.get<Post[]>(this.baseUrlPost);
  }
  getOnePost(id: string) {
    return this.http.get<Post>(`${this.baseUrlPost}/${id}`);
  }
  //TODO: fix the addPost method
  addPost(data: any) {
    return this.http.post(this.baseUrlPost, data).pipe(map((res: any) => {
      return res;
    }));
  }

  updatePost(id: string, data: any) {
    return this.http.put<Post>(`${this.baseUrlPost}/${id}`, data)
  }

  deletePost(id: string) {
    return this.http.delete<Post>(`${this.baseUrlPost}/${id}`);
  }

}
