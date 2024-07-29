import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { DataService } from 'src/app/services/dataservice';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';

@Component({
  templateUrl: './trangchinh.component.html',
})
export class TrangChinhComponent implements OnInit {
  hanhkhachs:HanhKhachAPI[];
  taikhoan:any;
  receivedData: string = '';
  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private hanhkhachService:HanhKhachAPIService,
    private router:Router,
    private dataService: DataService
) { }
  ngOnInit(){
    
  
  }
}