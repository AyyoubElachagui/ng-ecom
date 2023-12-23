import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/api/products/products.service';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home-product',
  standalone: true,
  imports: [
    NgFor,
    CommonModule
  ],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent  implements OnInit {

  constructor(
    private productService: ProductsService,
  ){}


  products: TProducts[];

  ngOnInit(): void {
    this.productService.get().subscribe({
        next: (data: TProducts[]):void =>{
          this.products = data.slice(3, 11);
        }
      })
  }

  limitedDescription = (value: string): string => {
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }

}