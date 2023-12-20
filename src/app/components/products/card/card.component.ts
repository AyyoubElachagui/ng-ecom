import { Component, Input } from '@angular/core';
import { ProductsModel } from '../../../services/models/products.model';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, NgIf ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  product?: ProductsModel;

  limitedDescription = (value: string): string => {
    return value.length > 30 ? value.substring(0, 30) + '...' : value;
  }

}
