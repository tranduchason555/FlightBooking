import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';
import { DangNhapComponent } from './components/dangnhap/dangnhap.component';
import { DangKyComponent } from './components/dangky/dangky.component';
import { LienHeComponent } from './components/lienhe/lienhe.component';
import { DatVeMayBayComponent } from './components/datvemaybay/datvemaybay.component';
import { ChiTietDatVeComponent } from './components/chitietdatve/chitietdatve.component';
import { DashBoardComponent } from './components/admin/dashboard.component';
import { TrangChinhComponent } from './components/user/trangchinh.component';
import { VeComponent } from './components/ve/ve.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/paymentsuccess/paymentsuccess.component';
import { ThongTinCaNhanComponent } from './components/thongtincanhan/thongtincanhan.component';
import { EditThongTinCaNhanComponent } from './components/editthongtincanhan/editthongtincanhan.component';

const routes: Routes = [
    {
        path:'',
        component: TrangChinhComponent,
        children: [
              {
                path: '',
                component: TrangChuComponent,
               
              },
              {
                path: 'trangchu',
                component: TrangChuComponent,
               
              },
              {
                path:'thongtinhanhchinh',
                component: ThongTinHanhChinhComponent,
              },
              {
                path:'dangnhap',
                component: DangNhapComponent,
              },
              {
                path:'dangky',
                component: DangKyComponent,
              },
              {
                path:'lienhe',
                component: LienHeComponent,
              },
              {
                path:'datvemaybay',
                component: DatVeMayBayComponent,
              },
              {
                path:'chitietdatve',
                component: ChiTietDatVeComponent,
              },
              {
                path: 'datvemaybay/:maSbayDi/:maSbayDen/ngayCatCanh', component: ChiTietDatVeComponent 
              },
              {
                path:'ve',
                component: VeComponent,
              },
              {
                path:'payment',
                component: PaymentComponent,
              },
              {
                path:'paymentsuccess',
                component: PaymentSuccessComponent,
              },
              {
                path:'thongtincanhan',
                component: ThongTinCaNhanComponent,
              },
              {
                path:'editthongtincanhan',
                component: EditThongTinCaNhanComponent,
              }
            
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
