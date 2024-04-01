import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  

  registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],  
  });

  register(){
    if (this.registerForm.value.username === '' && this.registerForm.value.email === '' && this.registerForm.value.password === '' && this.registerForm.value.rePassword === '') {
      alert('Please enter valid data!');
      return;
    } else if (new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$").test(this.registerForm.value.email) === false) {
      alert('Invalid email');
      return;
    } else if (this.registerForm.value.password !== this.registerForm.value.rePassword) {
      alert('Password does not match');
      return;
    }
    
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe((res) => {
      this.router.navigate(['/home']);
      })
    } else {
      alert('Please enter valid data!');
    }
      
    
}


}