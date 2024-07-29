import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { SanBay } from 'src/app/models/sanbay.model';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';

@Component({
  templateUrl: './thongtincanhan.component.html',
  styleUrls: ['./thongtincanhan.component.css']

})
export class ThongTinCaNhanComponent implements OnInit {
    taikhoan:String;
    hanhkhachs:HanhKhachAPI[];
 
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private hanhkhachAPIService:HanhKhachAPIService
  ){}
  ngOnInit(
  
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
        this.taikhoan=params.get('taikhoan');
        var taikhoan= this.taikhoan.toString();
        this.hanhkhachAPIService.find1(this.taikhoan).then(
            res => {
              this.hanhkhachs = res as HanhKhachAPI[]; 
            
            //   this.thongtinkhachhangForm = this.formBuilder.group({
            //     tenKhachHang:this.hanhkhach.tenKhachHang,
            //     ngaySinh:this.hanhkhach.ngaySinh,
            //     soDienThoai:this.hanhkhach.soDienThoai,
            // });
         
    
            },
            err => {
                console.log(err);
            }
           )
    });

  }
}
