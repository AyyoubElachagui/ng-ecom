import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/api/products/products.service';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-arrival',
  standalone: true,
  imports: [
    NgFor,
    CommonModule
  ],
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.css'
})
export class NewArrivalComponent implements OnInit {

  constructor(
    private productService: ProductsService,
  ){}

  product?: Subscription;

  newArrival: TProducts[];

  ngOnInit(): void {
    this.product = this.productService.get().subscribe({
        next: (data: TProducts[]):void =>{
          this.newArrival = data.slice(0,4);
        }
      })
  }

  limitedDescription = (value: string): string => {
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }


}
