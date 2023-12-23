import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products/products.service';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";

@Component({
    selector: 'app-users-manager',
    standalone: true,
    templateUrl: './users-manager.component.html',
    styleUrl: './users-manager.component.css',
    imports: [SkeletonComponent]
})
export class UsersManagerComponent implements OnInit {

  constructor( private service: ProductsService){}

  ngOnInit(): void {
      console.log("hello world");
  }

}
