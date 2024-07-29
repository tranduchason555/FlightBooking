import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './thongtinhanhchinh.component.html',
  styleUrls: ['./thongtinhanhchinh.component.css']
})
export class ThongTinHanhChinhComponent implements OnInit{
  taikhoan:String;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ){}
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.taikhoan=params.get('taikhoan');
      var taikhoan= this.taikhoan.toString();
      
  });
  }
}