import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
    selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashBoardComponent {
  
  title = 'DatVeMayBay';
  constructor(
    private router:Router,

  ){}
  click1(){
    this.router.navigate([''])
  }
}
