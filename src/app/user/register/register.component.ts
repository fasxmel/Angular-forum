import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  


constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  

  registerForm = this.fb.group({
    id: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
    rePassword: this.fb.control('', [Validators.required]),
    role: this.fb.control(''),
    isActive: this.fb.control(false)
  });

  register(){
    if (this.registerForm.valid) {
        this.userService.registerUser(this.registerForm.value).subscribe((res) => {
        alert('User created successfully!');
        this.router.navigate(['/login']);
      })  
    } else {
      alert('Please enter valid data!');
    }
  }

}
