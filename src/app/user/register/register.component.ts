import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/validators/password-match.directive';
import { UserData } from 'src/app/types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
    rePassword: ['', Validators.required] 
  }, {
    validators: passwordMatchValidator
  });
constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  
  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get rePassword() {
    return this.registerForm.get('rePassword');
  }

  register(){
    const registerUserData = {...this.registerForm.value};
    delete registerUserData.rePassword;
    this.userService.register(registerUserData as UserData).subscribe((res) => {
    alert('Registration successful');
    this.router.navigate(['/']);
      
    }, (err) => {
      alert(err);
    })
  }

}
