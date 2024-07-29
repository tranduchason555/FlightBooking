import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';

@Component({
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangKyComponent implements OnInit {
dangkyForm: FormGroup;
constructor(
  private formBuilder : FormBuilder,
  private messageService : MessageService,
  private router : Router,
  private hanhkhachAPIService:HanhKhachAPIService
){}
  ngOnInit(){
    this.dangkyForm = new FormGroup({
      tenKhachHang: new FormControl(),
      ngaySinh: new FormControl(),
      soDienThoai:new FormControl(),
      gioiTinh:new FormControl(),
      matKhau:new FormControl()
  });
    this.dangkyForm = this.formBuilder.group({
      tenKhachHang:'',
      taikhoan:'',
      matKhau:'',
      soDienThoai:'',
      ngaySinh:'',
      gioiTinh:'',
      repassword:''
  });
  }
  save(){
    var hanhkhach:HanhKhachAPI =this.dangkyForm.value as HanhKhachAPI;
    var repassword=this.dangkyForm.value.repassword;
    if(hanhkhach.matKhau==repassword)
    {
      this.hanhkhachAPIService.create(hanhkhach).then(
   
        res=>{
          var result:any=res as any;
          console.log(result.status);
          if(result.status){
           this.messageService.add({severity:'success',summary:'Success',detail:'Thành công'}); 
               
          }
       },
      )
    }else{
      this.messageService.add({severity:'error',summary:'Ko trùng mật khẩu',detail:'Thất bại'}); 
    }
    
  }
}