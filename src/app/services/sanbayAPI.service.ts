import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
@Injectable()
export class SanBayAPIService{
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient: HttpClient
    ){}
    async findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'sanbay/findall'));
    }
    async find(maSbaydi: String, maSbayden: String) {
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'sanbay/find' + maSbaydi + '/' + maSbayden));
    }
}