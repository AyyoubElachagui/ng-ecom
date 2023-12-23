import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftbarComponent } from "../leftbar/leftbar.component";
import { CommonModule } from '@angular/common';
import { GlobalHeaderComponent } from "../global-header/global-header.component";
import { GlobalNavbarComponent } from "../global-navbar/global-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CopyrightComponent } from "../copyright/copyright.component";

@Component({
    selector: 'app-skeleton',
    standalone: true,
    templateUrl: './skeleton.component.html',
    styleUrl: './skeleton.component.css',
    imports: [
        HeaderComponent,
        LeftbarComponent,
        CommonModule,
        GlobalHeaderComponent,
        GlobalNavbarComponent,
        FooterComponent,
        CopyrightComponent
    ]
})
export class SkeletonComponent {
  @Input()
  isDashboard: boolean = false;

}
