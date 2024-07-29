import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { ThongTinChuyenBay } from "../models/thongtinchuyenbay.model";
@Injectable()
export class ThongTinChuyenBayAPIService{
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient: HttpClient
    ){}
    async findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/findAll'));
    }
    async search(masbaydi: string, masbayden: string,ngaycatcanh:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl()
        + 'thongtinchuyenbay/search/' + masbaydi + '/' + masbayden+ '/' + ngaycatcanh));
    }
    async find(maCb:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/find'+'/'+ maCb));
    }
    async update(thongtinchuyenbay : ThongTinChuyenBay){
        return await lastValueFrom(this.httpClient.put(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/update', thongtinchuyenbay));
      }
}