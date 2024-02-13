import { Component, EventEmitter, Output } from '@angular/core';
import { SortingEnum } from '../../../../services/enum/sorting.enum';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shop-filter',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './shop-filter.component.html',
  styleUrl: './shop-filter.component.css'
})
export class ShopFilterComponent {

  sorting: (SortingEnum | string)[] = Object.values(SortingEnum)

  @Output()
  onSortingChanged: EventEmitter<SortingEnum> = new EventEmitter()

  @Output()
  onReloadData: EventEmitter<void> = new EventEmitter()

  sortingType = (event) => {
    this.onSortingChanged.emit(event.target.value)
  }

  onReload = () => {
    this.onReloadData.emit()
  }

}
