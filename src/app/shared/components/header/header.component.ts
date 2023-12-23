import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgSelectModule, NgFor,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private  _languages = [
      { id: 1, icon: 'assets/icons/english.png', iso: 'En' },
      { id: 2, icon: 'assets/icons/france.png', iso: 'Fr' },
  ];

  public selectedLanguage: any = this._languages[0];
  public languages = this._languages; 

  onLanguagedChanged = (id: number) => {
    this.languages = this._languages.filter(e => e.id !== id);
  }

}

