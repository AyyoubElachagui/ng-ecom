import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../../services/api/products/products.service';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";

@Component({
    selector: 'app-new-arrival',
    standalone: true,
    templateUrl: './new-arrival.component.html',
    styleUrl: './new-arrival.component.css',
    imports: [
        NgFor,
        CommonModule,
        ProductCardComponent
    ]
})
export class NewArrivalComponent implements OnInit {

  constructor(
    private productService: ProductsService,
  ){}
  
  @Output()
  countOfItems: EventEmitter<number> = new EventEmitter<number>();

  product?: Subscription;

  newArrival: TProducts[];

  ngOnInit(): void {
    this.product = this.productService.get().subscribe({
        next: (data: TProducts[]):void =>{
          this.newArrival = data.slice(0,5);
        }
      })
  }

  limitedDescription = (value: string): string => {
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }


}
