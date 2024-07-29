import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from "primeng/api";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';
import { DangNhapComponent } from './components/dangnhap/dangnhap.component';
import { DangKyComponent } from './components/dangky/dangky.component';
import { LienHeComponent } from './components/lienhe/lienhe.component';
import { DatVeMayBayComponent } from './components/datvemaybay/datvemaybay.component';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BaseUrlService } from './services/baseUrl.service';
import { ThongTinChuyenBayAPIService } from './services/thongtinchuyenbayAPI.service';
import { SanBayAPIService } from './services/sanbayAPI.service';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChiTietDatVeComponent } from './components/chitietdatve/chitietdatve.component';
import { FormLienHeAPIService } from './services/formlienheAPI.service';
import { DashBoardComponent } from './components/admin/dashboard.component';
import { ClientRoutingModule } from './client-routing.module';
import { AdminRoutingModule } from './admin-routing.module';
import { TrangChinhComponent } from './components/user/trangchinh.component';
import { TrangChuAdminComponent } from './components/trangchuadmin/trangchuadmin.component';
import { TableModule } from 'primeng/table';
import { HanhKhachAPIService } from './services/hanhkhachAPI.service';
import { DataService } from './services/dataservice';
import { VeAPIService } from './services/ve.service';
import { VeComponent } from './components/ve/ve.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/paymentsuccess/paymentsuccess.component';
import { ThongTinCaNhanComponent } from './components/thongtincanhan/thongtincanhan.component';
import { EditThongTinCaNhanComponent } from './components/editthongtincanhan/editthongtincanhan.component';
import { FormGroupDirective } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ThongTinHanhChinhComponent,
    DangNhapComponent,
    DangKyComponent,
    LienHeComponent,
    DatVeMayBayComponent,
    ChiTietDatVeComponent,
    DashBoardComponent,
    TrangChinhComponent,
    TrangChuAdminComponent,
    VeComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    ThongTinCaNhanComponent,
    EditThongTinCaNhanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    RadioButtonModule,
    SelectButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    AdminRoutingModule,
    TableModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    BaseUrlService,
    ThongTinChuyenBayAPIService,
    SanBayAPIService,
    FormLienHeAPIService,
    HanhKhachAPIService,
    DataService,
    VeAPIService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
