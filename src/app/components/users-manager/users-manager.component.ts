import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/api/products/products.service';

@Component({
  selector: 'app-users-manager',
  standalone: true,
  imports: [],
  templateUrl: './users-manager.component.html',
  styleUrl: './users-manager.component.css'
})
export class UsersManagerComponent implements OnInit {

  constructor( private service: ProductsService){}

  ngOnInit(): void {
      console.log("hello world");
  }

}
