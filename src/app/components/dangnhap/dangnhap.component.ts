import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { DataService } from 'src/app/services/dataservice';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';

@Component({
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangNhapComponent implements OnInit {
  loginForm: FormGroup
  taikhoan: string;
  matKhau: string;
  msg:string;
  hanhkhachs:HanhKhachAPI[];
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private hanhkhachService:HanhKhachAPIService,
    private router:Router,
    private dataService: DataService
  ){}
  ngOnInit(){
    this.msg='';
  }
  login() {
    
    this.hanhkhachService.find(this.taikhoan,this.matKhau).then(
      res=>{
        this.hanhkhachs = res as HanhKhachAPI[];
       for(var i=0;i<this.hanhkhachs.length;i++){
        if(this.taikhoan==this.hanhkhachs[i].taikhoan && this.matKhau== this.hanhkhachs[i].matKhau){
          //ĐƯA VỀ TRONG WELCOME
          this.messageService.add({severity:'success',summary:'Thành công',detail:'Thành công'}); 
          this.dataService.setData(this.taikhoan);
          this.router.navigate(['/trangchu',{taikhoan:this.taikhoan}])
      }else{
        this.messageService.add({severity:'fail',summary:'Thất bại',detail:'Thất bại'}); 
      }
       }
      }
    )
 
  }

}