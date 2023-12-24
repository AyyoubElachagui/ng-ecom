import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartLocalstorageService } from '../../../services/localstorage/cart-localstorage/cart-localstorage.service';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css'
})
export class GlobalHeaderComponent {

  constructor(
    private cartService: CartLocalstorageService,
  ){}

  @Output()
  handleSearchOnChange: EventEmitter<string> = new EventEmitter<string>();
  
  @Input()
  count: number;

  onSearch(event: any) {
    this.handleSearchOnChange.emit(event.target.value)
  }
}
