import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { VeAPI } from 'src/app/models/ve.model';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
import { VeAPIService } from 'src/app/services/ve.service';

@Component({
  templateUrl: './chitietdatve.component.html',
  styleUrls: ['./chitietdatve.component.css']
})
export class ChiTietDatVeComponent implements OnInit {
  thongtinchuyenbays:ThongTinChuyenBay[]
  thongtinchuyenbayForm: FormGroup;
  hanhkhachs:HanhKhachAPI[]
  hanhkhach:HanhKhachAPI
  thongtinkhachhangForm:FormGroup;
  thanhtoanForm:FormGroup;
  taikhoan:String;
  newValue:any;
  ve:VeAPI;
  value: number = 0;
  datves:any={};
  soluongve:number;
thongtinchuyenbay:ThongTinChuyenBay;
  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
    private hanhkhachAPIService:HanhKhachAPIService,
    private veAPIService:VeAPIService,
    private messageService : MessageService,
    private router:Router,
) { 
  
}
save(){
  // var ve:VeAPI =this.thanhtoanForm.value as VeAPI;
  //   this.veAPIService.create(ve).then(
  //     res=>{
  //       var result:any=res as any;
  //       console.log(result.status);
  //       if(result.status){
  //        this.messageService.add({severity:'success',summary:'Success',detail:'Thành công'}); 
             
  //       }
  //    },
  //   )
  // this.datves.thoiGianDat= 'Giá trị từ TypeScript'
  
 
          // if(this.newValue==1000000){
          // this.ve = new VeAPI('2023-11-29', '2023-11-29', 'Phổ Thông',  this.newValue, 'CB001',1);
          // }else{
          //   this.ve = new VeAPI('2023-11-29', '2023-11-29', 'Thương Gia',  this.newValue, 'CB001',1);
          // }
          
          for(var i=0;i<this.thongtinchuyenbays.length;i++){
            this.soluongve=this.thongtinchuyenbays[i].soLuongVe
    
              this.ve = new VeAPI('2023-11-29', this.thongtinchuyenbays[i].ngayCatCanh, 'Phổ Thông',  this.newValue,this.value,this.thongtinchuyenbays[i].maCb,this.hanhkhachs[i].maHk);
                // this.ve = new VeAPI('2023-11-29', this.thongtinchuyenbays[i].ngayCatCanh, 'Thương Gia',  this.newValue,this.value,this.thongtinchuyenbays[i].maCb,this.hanhkhachs[i].maHk);
               
                // this.thongtinchuyenbay=new ThongTinChuyenBay(this.thongtinchuyenbay[i].maCb,this.thongtinchuyenbay[i].tenCb,this.thongtinchuyenbay[i].ngayCatCanh,this.thongtinchuyenbay[i].gioCatCanh,this.thongtinchuyenbay[i].ngayHaCanh,this.thongtinchuyenbay[i].gioHaCanh,this.thongtinchuyenbay[i].maSbayDi,this.thongtinchuyenbay[i].maSbayDen,this.thongtinchuyenbay[i].gheLoai1,this.thongtinchuyenbay[i].gheLoai2,this.thongtinchuyenbays[i].soLuongVe-=this.value,this.thongtinchuyenbay[i].giaGheLoai1,this.thongtinchuyenbay[i].giaGheLoai2)
           
              
           
            this.thongtinchuyenbay=new ThongTinChuyenBay(this.thongtinchuyenbays[i].maCb,this.thongtinchuyenbays[i].tenCb,this.thongtinchuyenbays[i].ngayCatCanh,this.thongtinchuyenbays[i].gioCatCanh,this.thongtinchuyenbays[i].ngayHaCanh,this.thongtinchuyenbays[i].gioHaCanh,this.thongtinchuyenbays[i].maSbayDi,this.thongtinchuyenbays[i].maSbayDen,this.thongtinchuyenbays[i].gheLoai1,this.thongtinchuyenbays[i].gheLoai2, this.soluongve -= this.value,this.thongtinchuyenbays[i].giaGheLoai1,this.thongtinchuyenbays[i].giaGheLoai2)
          }
         
          this.thongtinchuyenbayAPIService.update(this.thongtinchuyenbay).then(
            res=>{
              var result:any=res as any;
              
              console.log(result.status);
              if(result.status){
              //   this.router.navigate(['/payment',{ve:this.ve.giaGhe}])
              //  this.messageService.add({severity:'success',summary:'Success',detail:'Thành công'}); 
              this.router.navigate(['/payment'], {
                queryParams: {
                  taikhoan:this.taikhoan,
                  ve:this.ve.giaGhe
      
                }
              });
              }
           }
          );
          this.veAPIService.create(this.ve).then(
            res=>{
              var result:any=res as any;
              console.log(result.status);
              if(result.status){
               this.messageService.add({severity:'success',summary:'Success',detail:'Thành công'}); 
        
              console.log(this.soluongve)
              // this.thongtinchuyenbay=new ThongTinChuyenBay(this.thongtinchuyenbays[i].soLuongVe-=this.value) 
              }
           }
          )
       
         
       
        
    
  
  
  
}
onSelectionChange(event: any) {
  //Gía Ghế
  
  if(this.value>0 ){
    this.newValue = event.target.value*this.value;
  }else{
    this.newValue = event.target.value
  }
  // else if(this.value!=0 && this.value>0){
  //   this.newValue = event.target.value*this.value;
  // }else if(this.value==0){
  //   this.newValue=0
  // }else{
  //   this.newValue='Lỗi'
  // }

}
    ngOnInit(){
    //   this.activatedRoute.queryParams.subscribe(params => {
    //     const taikhoan = params[this.taikhoan.toString()];
    //     if(taikhoan!=null){
    //       this.hanhkhachAPIService.find1(taikhoan).then(
    //         res => {
    //           this.hanhkhachs = res as HanhKhachAPI[]; 
    //           this.hanhkhach=res as HanhKhachAPI
    //         //   this.thongtinkhachhangForm = this.formBuilder.group({
    //         //     tenKhachHang:this.hanhkhach.tenKhachHang,
    //         //     ngaySinh:this.hanhkhach.ngaySinh,
    //         //     soDienThoai:this.hanhkhach.soDienThoai,
    //         // });
         
    
    //         },
    //         err => {
    //             console.log(err);
    //         }
    //        )
    //     }
    
    // });
      this.activatedRoute.paramMap.subscribe(params => {
        var maCb = params.get('maCb').toString();
        this.taikhoan=params.get('taikhoan');
       this.hanhkhachAPIService.find1( this.taikhoan).then(
        res => {
          this.hanhkhachs = res as HanhKhachAPI[]; 
          this.hanhkhach=res as HanhKhachAPI
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
        this.thongtinchuyenbayAPIService.find(maCb).then(
            res => {
              this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
              console.log(this.thongtinchuyenbays);
            },
            err => {
                console.log(err);
            }
        );
    });
 
    }
}