import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { ThemeService } from '../theme.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  allPosts: Post[] = [];
  constructor(
    private postService: ThemeService,
    private userService: UserService
    ) {}

    get isLoggedIn(): boolean {
      return this.userService.isLogged;
    }


  ngOnInit(): void {
    this.getAllPosts();
  }
  
  getAllPosts(){
    return this.postService.getAllPosts().subscribe((res) => {
      this.allPosts = res;
     
    });
  }


  deletePost(id: string) {
    this.postService.deletePost(id).subscribe((res) => {
      this.getAllPosts();
    })
  }

}
