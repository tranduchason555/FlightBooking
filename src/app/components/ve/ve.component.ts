import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { VeAPI } from 'src/app/models/ve.model';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
import { VeAPIService } from 'src/app/services/ve.service';

@Component({
  templateUrl: './ve.component.html',
  styleUrls: ['./ve.component.css']
})
export class VeComponent implements OnInit {
  taikhoan:String;
  thongtinchuyenbays:ThongTinChuyenBay[];
  thongtinchuyenbay:ThongTinChuyenBay;
  hanhkhachs:HanhKhachAPI[]
  hanhkhach:HanhKhachAPI
  hanhkhach1:number
  ves:VeAPI[]
  ve:VeAPI
  ve1:any
  tinhthanhdi:any
  tinhthanhden:any
  constructor(
  
    private activatedRoute : ActivatedRoute,
    private hanhkhachAPIService:HanhKhachAPIService,
    private veAPIService:VeAPIService,
    private thongtinChuyenBayService:ThongTinChuyenBayAPIService

  ){}
    ngOnInit(
      
    ) {
      
      this.activatedRoute.paramMap.subscribe(params => {
        this.taikhoan=params.get('taikhoan');
        this.hanhkhachAPIService.find1( this.taikhoan).then(
          res => {
            this.hanhkhachs = res as HanhKhachAPI[]; 
            for(var i=0;i<this.hanhkhachs.length;i++){
              this.veAPIService.find1(this.hanhkhachs[i].maHk).then(
                res => {  
                  this.ves = res as VeAPI[]; 
                 for(var j=0;j<this.ves.length;j++){
                  this.ve1=this.ves[j].maCb
                  this.thongtinChuyenBayService.find(this.ve1).then(
                    res => {
                        this.thongtinchuyenbays = res as ThongTinChuyenBay[];
                        for(var i=0;i<this.thongtinchuyenbays.length;i++){
                          this.tinhthanhdi=this.thongtinchuyenbays[i].tenTinhThanhSanBayDi
                          this.tinhthanhden=this.thongtinchuyenbays[i].tenTinhThanhSanBayDen
                        } 
                
                       
                    },
                    err => {
                        console.log(err);
                    }
                   )
                 }
                },
                err => {
                    console.log(err);
                }
               )
               
            }
          },
          err => {
              console.log(err);
          }
         )
        
    });
       
      
    }
}