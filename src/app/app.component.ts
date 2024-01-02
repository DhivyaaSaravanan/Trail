import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { BodyComponent } from "./body/body.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FontAwesomeModule,CommonModule, RouterOutlet, RouterLink, HotelComponent, NavbarComponent, BodyComponent]
})
export class AppComponent {
  title = 'trial';
}
