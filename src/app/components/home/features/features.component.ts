import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  featuredData: any[] = [
    {
      image: 'assets/images/delivery-van.svg',
      title: 'Free Shipping',
      offer: 'Order over $200'
    },
    {
      image: 'assets/images/money-back.svg',
      title: 'Money Rturns',
      offer: '30 days money returs'
    },
    {
      image: 'assets/images/service-hours.svg',
      title: '24/7 Support',
      offer: 'Customer support'
    },
  ]

}
