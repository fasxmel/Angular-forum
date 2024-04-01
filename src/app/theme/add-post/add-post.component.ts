import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  
  constructor(private addPostService: ThemeService, private router: Router) { }
   
  addPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }

    const {postName, postText} = postForm.value
    this.addPostService.addPost(postName, postText).subscribe((res) => {
    this.router.navigate(['/themes'])
    });
   
  }
}
