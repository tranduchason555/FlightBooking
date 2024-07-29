import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './paymentsuccess.component.html',
})
export class PaymentSuccessComponent implements OnInit {
  taikhoan:String
  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router:Router,
    
) { }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.taikhoan = params['taikhoan'];
      console.log(this.taikhoan);
});
}
}