import { Time } from "@angular/common";

export class ThongTinChuyenBay{
    constructor(maCb:string,tenCb:string, ngayCatCanh:string,gioCatCanh:Time,ngayHaCanh:any, gioHaCanh:Time,maSbayDi:string,maSbayDen:string,gheLoai1:string,gheLoai2:string,soLuongVe:number, giaGheLoai1:number, giaGheLoai2:number) {
        this.maCb = maCb;
        this.tenCb = tenCb;
        this.ngayCatCanh = ngayCatCanh;
        this.gioCatCanh = gioCatCanh;
        this.ngayHaCanh = ngayHaCanh;
        this.gioHaCanh = gioHaCanh;
        this.maSbayDi = maSbayDi;
        this.maSbayDen = maSbayDen;
        this.gheLoai1 = gheLoai1;
        this.gheLoai2 = gheLoai2;
        this.soLuongVe = soLuongVe;
        this.giaGheLoai1 = giaGheLoai1;
        this.giaGheLoai2 = giaGheLoai2;
        
      }
    maCb:string;
    tenCb:string;
    ngayCatCanh:string;
    gioCatCanh:Time;
    ngayHaCanh:any;
    gioHaCanh:Time;
    maSbayDi:string;
    maSbayDen:string;
    tenTinhThanhSanBayDi:string;
    tenTinhThanhSanBayDen:string;
    gheLoai1:string;
    gheLoai2:string;
    soLuongVe:number;
    giaGheLoai1:number;
    giaGheLoai2:number;
}