import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products.service';
import { ProductsModel } from '../../services/models/products.model';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardComponent,
    NgFor,
    NgIf,
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
  isLoading: boolean = true;


  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (data: ProductsModel[]):void => {
        this.products = data;
        this.isLoading = false;
      }
    })
  }
}
