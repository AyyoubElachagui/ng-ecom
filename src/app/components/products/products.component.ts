import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products/products.service';
import { ProductsModel } from '../../services/models/products.model';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { SliderComponent } from './categories/slider/slider.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CardComponent,
    // SliderComponent,
    LoadingComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ){}

  products: ProductsModel[] = [];
  isLoadingProducts: boolean = true;


  ngOnInit(): void {
    this.productsService.get().subscribe({
      next: (data: ProductsModel[]):void => {
        this.products = data;
        this.isLoadingProducts = false;
      }
    });
  }
}
