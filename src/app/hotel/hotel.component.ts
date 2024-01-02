import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
type:any;
uname:any;
person:any;
children:any;
res:any;
  constructor(private fb:FormBuilder){}
  Hotelform=this.fb.group({
   type:['',Validators.required],
   uname:['',Validators.required],
   person:['',Validators.required],
   children:['',Validators.required],
   res:['',Validators.required]
  })

  submithotelform(){
    
  }
}
