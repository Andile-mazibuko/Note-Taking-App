import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: false,
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  welcome: string = 'Welcome To this Note Taking App';
  
}
