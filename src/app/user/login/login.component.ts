
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

loginForm: FormGroup = this.fb.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
});

login() {
const { email, password } = this.loginForm.value;

if (this.loginForm.valid) {
  this.userService.loginUser(email, password).subscribe((res) => {
    if (res.length > 0 && res[0].email === email && res[0].password === password) {
      this.router.navigate(['/']);
    } else {
      alert('Wrong email or password'); 
    }
  })
} else {
  alert('Please enter valid data!');
}

} 
    
}


      


