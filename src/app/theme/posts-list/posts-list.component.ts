import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { ThemeService } from '../theme.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  allPosts: Post[] = [];
  constructor(private fb: FormBuilder, private postService: ThemeService) {}


  ngOnInit(): void {
    this.getAllPosts();
  }
  
  getAllPosts(){
    return this.postService.getAllPosts().subscribe((res) => {
      this.allPosts = res;
      console.log(this.allPosts);
    });
  }


}
