import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group(
    {
      email: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    }
  );
     
  get passGroup() {
    return this.form.get('passGroup');
  }

   constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }
  
  register(): void {
   
    if (this.form.invalid) {
      return;
    }

    const {email, password, rePassword} = this.form.value;
     
    this.userService.register(email!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/themes']);
    });
   
  }

}
