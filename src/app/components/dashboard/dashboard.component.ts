import { Component } from '@angular/core';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [SkeletonComponent]
})
export class DashboardComponent {

}
