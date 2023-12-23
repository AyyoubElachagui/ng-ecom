import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css'
})
export class GlobalHeaderComponent {

  @Output()
  handleSearchOnChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: any) {
    this.handleSearchOnChange.emit(event.target.value)
  }
}
