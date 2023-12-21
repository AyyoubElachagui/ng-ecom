import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../../../../services/api/categories/categories.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {


  constructor(
    private categoriesService: CategoriesService
  ){}
  
  categories: string[] = [];
  isLoadingCategories: boolean = true;

  @Output()
  onSelecetCategory: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (data: string[]): void => {
        this.categories = data;
        this.isLoadingCategories = false;
      }
    })
  }

  onSelectCategory = (category: string): void => {
    this.onSelecetCategory.emit(category);
  }

}
