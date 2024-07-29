import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { FormlienheAPI } from "../models/formlienhe.model";
@Injectable()
export class FormLienHeAPIService {
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient : HttpClient
    ){}
    async create(feedback : FormlienheAPI){
        return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 'feedback/create', feedback));
    }
}