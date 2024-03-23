import { Component,  OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {
  
  ngOnInit(): void {
    
  };

  constructor(private api: ApiService) { }
  addPost(e: Event, themeName: string, postText: string) {
    e.preventDefault();
    this.api.addTheme(themeName, postText)
  }
}
