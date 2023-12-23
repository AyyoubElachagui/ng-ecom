import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products/products.service';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";
import { UsersService } from '../../services/api/users/users.service';
import { TPaginationDataRes } from '../../services/interfaces/res/pagination-data-res.interface';
import { CommonModule } from '@angular/common';
import { TUser } from '../../services/interfaces/users.interface';

@Component({
    selector: 'app-users-manager',
    standalone: true,
    templateUrl: './users-manager.component.html',
    styleUrl: './users-manager.component.css',
    imports: [
      SkeletonComponent,
      CommonModule,
    ]
})
export class UsersManagerComponent implements OnInit {

  constructor( private userService: UsersService){}

  paginationData: TPaginationDataRes;

  ngOnInit(): void {
    this.userService.getSignal().subscribe({
      next: (data:TPaginationDataRes ):void => {
        this.paginationData = data;
      }
    })
  }

}
