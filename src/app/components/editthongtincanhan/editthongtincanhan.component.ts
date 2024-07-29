import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';

@Component({
  templateUrl: './editthongtincanhan.component.html',
  styleUrls: ['./editthongtincanhan.component.css']
})
export class EditThongTinCaNhanComponent implements OnInit {
    taikhoan:String;
hanhkhach:HanhKhachAPI;
    hanhkhachs:HanhKhachAPI[];
    maHk:any;
    taikhoan1:any;
    editThongTinCaNhan:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private hanhkhachAPIService:HanhKhachAPIService,
    private messageService : MessageService
  ){}
  save(){
    var hanhkhach:HanhKhachAPI =this.editThongTinCaNhan.value as HanhKhachAPI;
   hanhkhach.maHk=this.maHk,
hanhkhach.taikhoan=this.taikhoan1
   console.log(this.maHk),
   
    this.hanhkhachAPIService.update(hanhkhach).then(
        res=>{
           var result:any=res as any;
           console.log(result.status);
           if(result.status){
            this.router.navigate(['/trangchu',{taikhoan:this.taikhoan}])
           }else{
             this.messageService.add({severity:'error',summary:'Failed',detail:'Cập nhật sản phẩm thất bại'}); 
           }
        },
        err=>{
            this.messageService.add({severity:'error',summary:'Failed',detail:'Cập nhật sản phẩm thất bại'}); 
        }

    );



    // var hanhkhach : HanhKhachAPI = this.editThongTinCaNhan.value as HanhKhachAPI;
    //     this.hanhkhachAPIService.update(hanhkhach).then(
    //     res => {
    //         var result : any = res as any;
    //         console.log(result.status);
    //         if(result.status){
    //             this.router.navigate(['/thongtincanhan'])
    //         } else {
    //             this.messageService.add({ 
    //                 severity: 'error',
    //                 summary: 'failed',
    //                 detail: 'Edit Failed' 
    //             });
    //         }
    //     },
    //     err => {
    //         this.messageService.add({ 
    //             severity: 'error',
    //             summary: 'failed',
    //             detail: 'Edit Failed' 
    //         });
    //     }
    //     );  



    // var hanhkhach : HanhKhachAPI = this.editThongTinCaNhan.value as HanhKhachAPI;
    // hanhkhach.maHk = this.hanhkhach.maHk;
    // this.productAPIService.update(hanhkhach).then(
    // res => {
    //     var result : any = res as any;
    //     if(result.status){
    //         this.router.navigate(['/admin/product-listing'])
    //     } else {
    //         this.messageService.add({ 
    //             severity: 'error',
    //             summary: 'failed',
    //             detail: 'Edit Failed' 
    //         });
    //     }
    // },
    // err => {
    //     this.messageService.add({ 
    //         severity: 'error',
    //         summary: 'failed',
    //         detail: 'Edit Failed' 
    //     });
    // }
    // );  
}
  ngOnInit(
  
  ) {
    this.editThongTinCaNhan = new FormGroup({
      tenKhachHang: new FormControl(),
      ngaySinh: new FormControl(),
      soDienThoai:new FormControl(),
      gioiTinh:new FormControl(),
      matKhau:new FormControl()
   
  });
    this.activatedRoute.paramMap.subscribe(params => {
        this.taikhoan=params.get('taikhoan');
        this.hanhkhachAPIService.find1(this.taikhoan).then(
            res => {
              this.taikhoan1=this.taikhoan
                this.hanhkhachs = res as HanhKhachAPI[];
                for(var i=0;i<this.hanhkhachs.length;i++){
                  this.maHk=this.hanhkhachs[i].maHk,
                  
                    this.editThongTinCaNhan = this.formBuilder.group({
                    
                      tenKhachHang: this.hanhkhachs[i].tenKhachHang,
                      ngaySinh: this.hanhkhachs[i].ngaySinh,
                      soDienThoai: this.hanhkhachs[i].soDienThoai,
                      matKhau: this.hanhkhachs[i].matKhau,
                      gioiTinh: this.hanhkhachs[i].gioiTinh,
                    });
                  
                    // this.editThongTinCaNhan = this.formBuilder.group({
                    //     TenKhachHang:this.hanhkhachs[i].tenKhachHang,
                    //     gioiTinh: this.hanhkhachs[i].gioiTinh
                    // });
                }
              
            },
            err => {
                console.log(err);
            }
        );
    });
  }
}
