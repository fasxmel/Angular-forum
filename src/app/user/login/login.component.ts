
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

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  
constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

get email() {
  return this.loginForm.controls['email'];
}
get password() {
  return this.loginForm.controls['password'];
}

      login() {
          const {email, password} = this.loginForm.value;
          console.log(this.loginForm.value);
          
          this.userService.login(email as string).subscribe((res) => {
            if (res.length > 0 && res[0].password === password) {
              localStorage.setItem('user', JSON.stringify(res));
              alert('Login Successful');
              this.router.navigate(['/']);
            } else {
              alert('Wrong email or password');
              
            }
          }, (err) => {
            alert(err);
          })
     
      } 

      

}
