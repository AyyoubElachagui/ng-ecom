import { Component, Input } from '@angular/core';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input()
  product: TProducts;

  limitedDescription = (): string => {
    return this.product.title.length > 20 ? this.product.title.substring(0, 20) + '...' : this.product.title;
  }
}