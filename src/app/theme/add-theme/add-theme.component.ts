import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  addThemes: Theme[] = []
  constructor(private fb: FormBuilder, private addThemeService: ThemeService) { }


  themeForm = this.fb.group({
    themeName: this.fb.control(''),
    themeText: this.fb.control('')
  });

  
  addTheme() {
    this.addThemeService.addTheme(this.themeForm.value).subscribe((res) => {
      this.addThemes = res;
      //TODO: add a success and redirect
    })
  }


}
