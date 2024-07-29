import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { VeAPI } from "../models/ve.model";
@Injectable()
export class VeAPIService{
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient: HttpClient
    ){}
    async create(ve : VeAPI){
        return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 've/create', ve));
    }
    async find1(maHk:number) {
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 've/find1/' +maHk));
    }
}