import { Component } from '@angular/core';
import { HotelComponent } from "../hotel/hotel.component";
@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [HotelComponent]
})
export class NavbarComponent {


}
