import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'app-car',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
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
        console.log(this.Hotelform.value);
    }
  }

