import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftbarComponent } from "../leftbar/leftbar.component";

@Component({
    selector: 'app-skeleton',
    standalone: true,
    templateUrl: './skeleton.component.html',
    styleUrl: './skeleton.component.css',
    imports: [HeaderComponent, LeftbarComponent]
})
export class SkeletonComponent {

}
