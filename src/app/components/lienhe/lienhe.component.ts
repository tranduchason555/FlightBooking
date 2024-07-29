import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormlienheAPI } from 'src/app/models/formlienhe.model';
import { FormLienHeAPIService } from 'src/app/services/formlienheAPI.service';

@Component({
  templateUrl: './lienhe.component.html'
})
export class LienHeComponent implements OnInit {
  FeedbackForm: FormGroup;
  taikhoan:String;
  constructor(
    private formBuilder : FormBuilder,
    private formlienheAPIService:FormLienHeAPIService,
    private messageService : MessageService,
    private router : Router,
    private activatedRoute:ActivatedRoute,
  
  ){}
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.taikhoan=params.get('taikhoan');
  
      
  });
    this.FeedbackForm = this.formBuilder.group({
      hoTen:'',
      tieuDe:'',
      vanDe:'',
      gmail:''
  });
  }
  save(){
    var feedback:FormlienheAPI =this.FeedbackForm.value as FormlienheAPI;
    this.formlienheAPIService.create(feedback).then(
      res=>{
        var result:any=res as any;
        console.log(result.status);
        if(result.status){
         this.messageService.add({severity:'success',summary:'Success',detail:'Thành công'}); 
             
        }
     },
    )
  }
}