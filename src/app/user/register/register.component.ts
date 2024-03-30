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
    id: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],  
  });

  register(){
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe((res) => {
      alert('Register successful');
      this.router.navigate(['/login']);
      })
    } else {
      alert('Please enter valid data!');
    }
      
    
}


}