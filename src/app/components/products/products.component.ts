import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products/products.service';
import { TProducts } from '../../services/interfaces/products.interface';
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
    SliderComponent,
    LoadingComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ){}

  products: TProducts[] = [];
  _productsForFilter: TProducts[] = [];
  isLoadingProducts: boolean = true;


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts = () => {
    this.productsService.get().subscribe({
      next: (data: TProducts[]):void => {
        this.products = data;
        this._productsForFilter = data;
        this.isLoadingProducts = false;
      }
    });
  } 

  onCategorySelected = ($event: string) => {
    this.products = this._productsForFilter.filter(e => e.category === $event);
  }
}
