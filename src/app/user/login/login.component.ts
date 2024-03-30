
import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

userData: any;
constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

loginForm = this.fb.group({
  email: this.fb.control('', Validators.required),
  password: this.fb.control('', Validators.required)
});

login() {
  if (this.loginForm.valid) {
       this.userService.getUserbyId(this.loginForm.value.email).subscribe((res) => {

        this.userData = res;
        console.log(this.userData);
    })
      
    } else {
    alert('Please enter valid data!');
  }
    
}
      
    
} 

      


