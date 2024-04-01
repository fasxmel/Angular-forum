import { Component} from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { Theme } from 'src/app/types/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  
  constructor(private addThemeService: ThemeService, private router: Router) { }


  

  
  addTheme(themeForm: NgForm) {
    if (themeForm.invalid) {
      return;
    }

    const {themeName, themeText} = themeForm.value
    this.addThemeService.addTheme(themeName, themeText).subscribe((res) => {
    this.router.navigate(['/themes'])
    });
    
  }

}
