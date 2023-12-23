import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output()
  handleSearchOnChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: any) {
    this.handleSearchOnChange.emit(event.target.value)
  }

}
