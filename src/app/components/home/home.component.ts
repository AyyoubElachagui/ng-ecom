import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products/products.service';
import { ProductsModel } from '../../services/models/products.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}