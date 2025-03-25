import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'noteApp';
  constructor(private transServ: TranslateService){
    const defLang = navigator.language.split('-')[0];
    this.transServ.use(defLang);
  }

}
