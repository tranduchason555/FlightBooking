import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/admin/dashboard.component';
import { TrangChuAdminComponent } from './components/trangchuadmin/trangchuadmin.component';

const routes: Routes = [
  {
    path:'admin',
    component: DashBoardComponent,
    children:[
      {
        path: 'trangchuadmin',
        component: TrangChuAdminComponent,
       
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
