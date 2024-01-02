import { Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarComponent } from './car/car.component';
import { BodyComponent } from './body/body.component';


export const routes: Routes = [


{
  path:"table",
  component:TableComponent
},
  {
    path:"hotel",
    component:HotelComponent
  },
  {
    path:"car",
    component:CarComponent
  }

];
