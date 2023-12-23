import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories: any[] = [
    {
      image: 'assets/images/electronics.jpg',
      label: 'Electronics'
    },
    {
      image: 'assets/images/jewelery.jpg',
      label: 'Jewelery'
    },
    {
      image: 'assets/images/men-clothing.jpg',
      label: 'Men\'s clothing'
    },
    {
      image: 'assets/images/women-clothing.jpg',
      label: 'Women\'s clothing'
    }
  ]

}
