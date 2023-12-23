import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { LeftbarComponent } from "../../shared/components/leftbar/leftbar.component";
import { RouterOutlet } from '@angular/router';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, LeftbarComponent, RouterOutlet, SkeletonComponent]
})
export class HomeComponent {}