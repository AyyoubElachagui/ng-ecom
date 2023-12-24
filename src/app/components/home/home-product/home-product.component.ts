import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../../services/api/products/products.service';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule, NgFor } from '@angular/common';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";

@Component({
    selector: 'app-home-product',
    standalone: true,
    templateUrl: './home-product.component.html',
    styleUrl: './home-product.component.css',
    imports: [
        NgFor,
        CommonModule,
        ProductCardComponent
    ]
})
export class HomeProductComponent  implements OnInit {

  constructor(
    private productService: ProductsService,
  ){}

  @Output()
  countOfItems: EventEmitter<number> = new EventEmitter<number>();


  products: TProducts[];

  ngOnInit(): void {
    this.productService.get().subscribe({
        next: (data: TProducts[]):void =>{
          this.products = data.slice(3,13);
        }
      })
  }

  limitedDescription = (value: string): string => {
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }

}
