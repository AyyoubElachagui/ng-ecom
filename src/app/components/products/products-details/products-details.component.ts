import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../services/api/products/products.service';
import { TProducts } from '../../../services/interfaces/products.interface';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [
    LoadingComponent,
    NgIf
  ],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {
  private routeSub?: Subscription;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  product?: TProducts;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.productsService.getById(params['productId']).subscribe({
        next: (data) => {
          this.product = data;
          this.isLoading = false;
        }
      })
    });
  }

}
