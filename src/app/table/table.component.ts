import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  showsalary:boolean=true;
  Details:any;
  constructor(){
      this.Details=[
        {
         id:"101",
         uname:"Arjun",
         designation:"TL",
         location:"Salem",
         Address:"Ammapet",
         Salary:"34K"
        },
        {
          id:"102",
          uname:"Karthick",
          designation:"TL",
          location:"Salem",
          Address:"Fairlands",
          Salary:"39K"
        },
        {
          id:"103",
          uname:"Jennifer",
          designation:"HR",
          location:"Chennai",
          Address:"Paadi",
          Salary:"34K"
        },
        {
          id:"104",
          uname:"Mathew",
          designation:"TL",
          location:"Kochi",
          Address:"Trivandram",
          Salary:"55K"
        },
        {
          id:"108",
          uname:"KiranDharsha",
          designation:"TL",
          location:"Chennai",
          Address:"Cholinganallur",
          Salary:"55K"
        }
      ]
    }
      hide(){
        alert("works");
     this.showsalary=false;
      }
  }
