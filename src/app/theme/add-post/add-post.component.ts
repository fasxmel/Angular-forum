import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  addPosts: Post[] = []
   
  constructor(private fb: FormBuilder, private addPostService: ThemeService) { }
   
  postForm = this.fb.group({
    postName: this.fb.control(''),
    postText: this.fb.control('')
  });

  addPost() {
    this.addPostService.addPost(this.postForm.value).pipe().subscribe((res) => {
      this.addPosts = res;
       //TODO: add a success and redirect
    })
  }
}
